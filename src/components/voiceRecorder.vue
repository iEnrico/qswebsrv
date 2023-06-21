<template>
  <v-card max-width="350" color="#FFFFFF" class="rounded-lg" outlined tile>
    <v-row no-gutters align="center" justify="center">
      <v-progress-linear
        :model-value="getProgress()"
        :max="60"
        height="2"
        color="#28B9AF"
      ></v-progress-linear>
      <v-progress-linear
        :model-value="volume"
        :max="100"
        height="2"
        color="red"
      ></v-progress-linear>

      <v-btn
        variant="text"
        :height="this.state == 1 && audiofiles[index] ? 32 : 64"
        @click="toggleRec()"
      >
        <v-icon size="48pt" v-if="this.state == 0">mdi-microphone-off</v-icon>
        <v-icon size="24pt" color="#28B9AF" v-if="this.state == 1 && audiofiles[index]"
          >mdi-refresh</v-icon
        >
        <v-icon size="48pt" v-if="this.state == 1 && !audiofiles[index]"
          >mdi-microphone</v-icon
        >
        <v-icon size="48pt" v-if="this.state == 2">mdi-stop</v-icon>
      </v-btn>
    </v-row>

    <v-row no-gutters>
      <div class="container" v-if="this.state == 2">
        <div class="recording-circle"></div>
        <div class="recording-text">Recording</div>
      </div>
    </v-row>

    <v-container class="pa-0 ma-0" fluid v-if="audiofiles[index]">
      <v-row no-gutters align="center" justify="center">
        <v-col :cols="12">
          <v-card-subtitle align="center" class="ph-0 ma-1" v-if="0 == 1"
            >Ihre Aufnahme</v-card-subtitle
          >
          <v-progress-linear
            class="mt-1"
            color="#28B9AF"
            :model-value="currentTime / (audioduration[index] / 100)"
            :height="15"
            label="{{ currentTime }} of {{ audioduration[index] }}"
            striped
          >
            <template v-slot:default="{ value }">
              <small
                >{{ formatTimeMMSS(currentTime) }} /
                {{ formatTimeMMSS(audioduration[index]) }} ({{
                  Math.ceil(value)
                }}%)</small
              >
            </template>
          </v-progress-linear>
          <v-btn width="100" variant="text" class="mt-0" @click="playRec">
            {{ this.audiofiles[this.index].paused ? "Play" : "Stop" }}
          </v-btn>
          <v-btn width="100" variant="text" class="mt-0" @click="downloadAudio">
            DL
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Encoder from "../scripts/media/encoder";
export default {
  name: "VoiceRecorder",
  data: () => ({
    analyser: null,
    vis_data_arr: null,
    volume: 0,
    recorder: null,
    state: 0, // uninit
    rawaudiodata: [],
    myStream: null,
    audiofiles: [],
    audioduration: [],
    currentTime: 0,
    countDown: 60,
    countDownRunning: false,
    startTime: null,
    endTime: null,
    mp3encoder: null,
    input: null,
    processor: null,
    audioContext: null,
    use_encoder: "opus", // currently: "opus" or "mp3"
  }),
  props: ["index", /*"max",*/ "onHasAudio"],
  watch: {
    index: function () {
      this.countDown = 60.0;
      this.currentTime = 0;

      this.onHasAudio(this.audiofiles[this.index] == null ? true : false);
      /*
      this.audiofiles.forEach((element) => {
        if (typeof element !== "undefined") {
          element.stop();
        }
      });*/
      //this.audiofiles[oldVal].stop();
    },
    //audiofiles: function () {},
  },
  components: {},
  mounted: function () {
    // Emits on mount
    //this.emitInterface();

    this.initMediaRec();
  },
  methods: {
    /**
     * Emitting an interface with callable methods from outside
     */

    updateItem(update) {
      // Avoid directly modifying this.item by creating a cloned object
      this.$emit("item-updated", update);
    },
    /*
    emitInterface() {
      this.$emit("interface", {
        test: () => this.test(),
      });
    },
    test() {
      alert("klicked!");
    },
    */
    getProgress() {
      return 60.0 - this.countDown;
    },
    toggleTimer() {
      this.countDownRunning = !this.countDownRunning;
      if (this.countDownRunning) {
        this.showTimer();
      }
    },
    resetTimer() {
      this.countDown = 60.0;
    },
    showTimer: async function () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          if (this.countDownRunning) {
            this.showTimer();
          }
        }, 1000);
      }
    },
    initMediaRec: function () {
      console.log("init recording");
      this.getMemeTypes();

      if (navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported.");
        navigator.mediaDevices
          .getUserMedia(
            // constraints - only audio needed for this app
            {
              audio: {
                sampleRate: 48000,
                channelCount: 2,
                volume: 1.0,
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false,
              },
              video: false,
            }
          )
          .then((stream) => {
            this.initRecorder(stream, this.use_encoder);
          })
          .catch((err) => {
            console.log("error in media player: " + err);
          });
      }
    },
    initRecorder(stream) {
      if (this.use_encoder == "opus") {
        const options = {
          audioBitsPerSecond: 128000, //256000,
          mimeType: "video/webm",
          //videoBitsPerSecond: 2500000,
          //mimeType: "video/mp4",
        };
        this.recorder = new MediaRecorder(stream, options);
        this.myStream = this.recorder.stream;
        this.analyseStream(this.myStream);
      } else if (this.use_encoder == "mp3") {
        this.mp3encoder = new Encoder(2, 44100, 128);
        this.myStream = stream;
      }

      console.log("initalized recorder with stream: " + this.myStream);

      if (this.myStream) {
        this.state = 1; // initialited
      }
    },
    toggleRec() {
      if (this.state == 1) {
        this.startTime = Date.now();
        this.countDown = 60.0;
        this.startRec();
        this.state = 2;
      } else {
        this.endTime = Date.now() - this.startTime;
        this.audioduration[this.index] = this.endTime / 1000;
        this.stopRec();
        this.state = 1;
      }

      console.log("endtime: " + this.endTime);

      this.toggleTimer();
    },
    startRec() {
      if (this.use_encoder == "opus") {
        var vm = this;

        console.log("start recording with " + vm.recorder);

        this.rawaudiodata = [];
        this.audiofiles[this.index] = null;

        vm.recorder.ondataavailable = function (event) {
          // use the created blob
          vm.rawaudiodata.push(event.data);
          console.log("ondataavailable:" + event);
          console.log("audio size: " + vm.rawaudiodata.length);
          vm.visualizeStream();
        };

        this.recorder.onstop = function () {
          var audioBlob = new window.Blob(vm.rawaudiodata, {
            type: "audio/opus",
          });

          console.log("audio blob: " + audioBlob);
          console.log("audio blob size: " + audioBlob.size);

          console.log(URL.createObjectURL(audioBlob));
          vm.audiofiles[vm.index] = new Audio(URL.createObjectURL(audioBlob));
          vm.updateItem(vm.audiofiles);
          vm.audiofiles[vm.index].addEventListener("durationchange", () => {
            if (
              typeof vm.audiofiles[vm.index] !== "undefined" &&
              vm.audiofiles[vm.index].duration != Infinity
            ) {
              vm.audioduration[vm.index] = vm.audiofiles[vm.index].duration;
            }
          });
          vm.audiofiles[vm.index].addEventListener("timeupdate", () => {
            vm.currentTime =
              typeof vm.audiofiles[vm.index] !== "undefined"
                ? vm.audiofiles[vm.index].currentTime
                : 0;
          });
          //vm.audioduration[vm.index] = vm.getProgress();
          //vm.audiofiles[vm.index].play();

          // de/re init recorder
          vm.recorder.stream.getTracks().forEach((t) => t.stop());
          vm.recorder = null;
          vm.initMediaRec();

          vm.onHasAudio();
        };

        vm.recorder.start(length);
      } else {
        this.analyseMp3Stream(this.myStream);
      }
    },
    stopRec: function () {
      if (this.use_encoder == "opus") {
        this.recorder.stop();
      } else {
        this.myStream.getTracks().forEach((track) => track.stop());
        this.input.disconnect();
        this.processor.disconnect();
        this.audioContext.close();

        const record = this.mp3encoder.finish();
        record.duration = this.formatTimeMMSS(record.duration);
        //this.records.push(record);
        console.log(record.url);
        this.audiofiles[this.index] = new Audio(record.url);
        this.updateItem(this.audiofiles);
        this.audiofiles[this.index].addEventListener("timeupdate", () => {
          this.currentTime =
            typeof this.audiofiles[this.index] !== "undefined"
              ? this.audiofiles[this.index].currentTime
              : 0;
        });

        this.duration = 0;

        this.isPause = false;
        this.isRecording = false;

        this.afterRecording && this.afterRecording(record);
      }
    },
    playRec: function () {
      console.log("audio paused?: " + this.audiofiles[this.index].paused);
      if (this.audiofiles[this.index].paused) {
        this.audiofiles[this.index].play();
      } else {
        this.audiofiles[this.index].pause();
      }
    },
    downloadAudio() {
      const link = document.createElement("a");
      console.log("clicked download on: " + this.audiofiles[this.index]);
      link.href = this.audiofiles[this.index].src;
      link.download = "recording" + (this.use_encoder == "mp3" ? ".mp3" : ".webm");
      link.click();
      URL.revokeObjectURL(link.href);
    },
    getMemeTypes() {
      function getSupportedMimeTypes(media, types, codecs) {
        const isSupported = MediaRecorder.isTypeSupported;
        const supported = [];
        types.forEach((type) => {
          const mimeType = `${media}/${type}`;
          codecs.forEach((codec) =>
            [
              `${mimeType};codecs=${codec}`,
              `${mimeType};codecs=${codec.toUpperCase()}`,
              // /!\ false positive /!\
              // `${mimeType};codecs:${codec}`,
              // `${mimeType};codecs:${codec.toUpperCase()}`
            ].forEach((variation) => {
              if (isSupported(variation)) supported.push(variation);
            })
          );
          if (isSupported(mimeType)) supported.push(mimeType);
        });
        return supported;
      }

      // Usage ------------------

      const videoTypes = ["webm", "ogg", "mp4", "x-matroska"];
      const audioTypes = ["webm", "ogg", "mp3", "x-matroska"];
      const codecs = [
        "should-not-be-supported",
        "vp9",
        "vp9.0",
        "vp8",
        "vp8.0",
        "avc1",
        "av1",
        "h265",
        "h.265",
        "h264",
        "h.264",
        "opus",
        "pcm",
        "aac",
        "mpeg",
        "mp4a",
      ];

      const supportedVideos = getSupportedMimeTypes("video", videoTypes, codecs);
      const supportedAudios = getSupportedMimeTypes("audio", audioTypes, codecs);

      console.log("-- Top supported Video : ", supportedVideos[0]);
      console.log("-- Top supported Audio : ", supportedAudios[0]);
      console.log("-- All supported Videos : ", supportedVideos);
      console.log("-- All supported Audios : ", supportedAudios);
    },
    formatTimeHHMMSS(seconds) {
      return new Date(seconds * 1000).toISOString().match(/(\d\d:\d\d:\d\d)/)[0];
    },
    formatTimeMMSS(seconds = 0) {
      return new Date(seconds != Infinity ? seconds * 1000 : 0)
        .toISOString()
        .substring(14, 19); //.match(/(\d\d:\d\d)/)[0];
    },
    analyseStream(stream) {
      console.log("setup stream analyser");

      this.volume = 0;

      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Create the Analyser
      this.analyser = this.audioContext.createAnalyser();

      // Connect a media stream source to connect to the analyser
      const source = this.audioContext.createMediaStreamSource(stream);

      // Create a Uint8Array based on the frequencyBinCount(fftSize / 2)
      this.vis_data_arr = new Uint8Array(this.analyser.frequencyBinCount);

      // Connect the analyser
      source.connect(this.analyser);

      /*
      // REPORT is a function run on each animation frame until recording === false
      const report = () => {
        // If we are still recording, run REPORT again in the next available frame
        if (this.state == 2) {
          requestAnimationFrame(report());
        } else {
          // Else, close the context and tear it down.
          context.close();
        }
      };
      // Initiate reporting
      report();*/
    },
    analyseMp3Stream(stream) {
      //this.micInit("microphone attached")
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      //var duration = this._duration;
      this.input = this.audioContext.createMediaStreamSource(stream);
      this.processor = this.audioContext.createScriptProcessor(this.bufferSize, 1, 1);

      //this.stream.onaudioprocess

      this.processor.onaudioprocess = (ev) => {
        const sample = ev.inputBuffer.getChannelData(0);
        var sum = 0.0;

        this.mp3encoder.encode(sample);

        for (let i = 0; i < sample.length; ++i) {
          sum += sample[i] * sample[i];
        }
        console.log("processing mp3 stream data...");

        //this.duration = parseFloat(this._duration) + parseFloat(this.currentTime.toFixed(2));
        this.volume = sum; //Math.sqrt(sum / sample.length).toFixed(2)

        console.log("vol: " + this.volume);
      };

      this.input.connect(this.processor);
      this.processor.connect(this.audioContext.destination);
    },
    visualizeStream() {
      // Copy the frequency data into DATA_ARR
      this.analyser.getByteFrequencyData(this.vis_data_arr);

      this.volume = Math.floor((Math.max(...this.vis_data_arr) / 255) * 100);
      console.log("Stream Volume: " + this.volume);
    },
    /*
      uploadAudio: function () {
        const reader = new FileReader();
        reader.readAsDataURL(this.audiofiles.audioBlob);
        reader.onload = () => {
          const base64AudioMessage = reader.result.split(",")[1];

          fetch("/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: base64AudioMessage }),
          }).then((res) => {
            if (res.status === 201) {
              //return populateAudioMessages();
            }
            console.log("Invalid status saving audio message: " + res.status);
          });
        };
      },
      */
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  background-color: rgb(99, 99, 99);
  border-radius: 0.25em;
  width: 85px;
}

.recording-circle {
  background-color: red;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  animation: ease pulse 2s infinite;
  margin-right: 0.25em;
}

.recording-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.75em;
  color: white;
}

@keyframes pulse {
  0% {
    background-color: red;
  }
  50% {
    background-color: #f06c6c;
  }
  100% {
    background-color: red;
  }
}
</style>
