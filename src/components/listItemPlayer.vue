<template>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12">
        <v-card
          id="playercard"
          :variant="elevated ? 'elevated' : 'flat'"
          class="pa-0 ma-0 rounded-pill"
          style="height: 80px; display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-0">
            <div class="parent mr-4">
              <svg class="progress-ring" width="40" height="40">
                <circle
                  class="progress-ring__circle"
                  stroke="#63CCC1"
                  stroke-width="5"
                  fill="transparent"
                  r="17"
                  cx="20"
                  cy="20"
                />
              </svg>

              <div class="child child-1">
                <div :id="'icon' + index" class="icon-container"></div>
              </div>
            </div>

            <audio
              :id="'audio' + index"
              :src="getAudio(item)"
              controls
              hidden="true"
            ></audio>
            <div :id="'vis' + index" class="visualizer-container"></div>

            <v-icon v-if="action" class="ml-4" size="20pt" color="#666" @click="toggleRec">mdi-refresh</v-icon>
            <!-- 
              v-if="this.state == 1 && audiofiles[index]" 
              parent
              -->
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { Note } from "@/types/note";
//import { NoteEntry } from "@/types/noteentry";
export default {
  name: "ListItemPlayer",
  data: () => ({
    NBR_OF_BARS: 50,
    audio: null,
    analayzer: null,
  }),
  props: ["item", "index", "elevated", "action"],
  components: {},
  mounted: function () {
    this.initPlayerVisual();
    this.initPlayerAnalyser();
  },
  methods: {
    toggleRec() {
      //alert("do again!" + this.action)
      this.action();
    },
    getAudio(item) {
      console.log("getAudio -> " + item)
      //var note = new Note(item);
      //var entries = new NoteEntry(note.entries[this.index]);
      var myModule = "";
      if (item.audioPath) {
        myModule = item.audioPath;
      }
      else {
        myModule = item;
      }

      console.log(myModule.search("blob:"));
      if (myModule.search("blob:") == 0) {
        return myModule;
      } else {
        return require("@/assets/" + myModule);
      }
    },
    initPlayerVisual() {
      console.log("createPlayerVisual");

      // Get the visualizer container
      var visualizerContainer = document.getElementById("vis" + this.index);
      visualizerContainer.innerHTML = "";

      // Create a set of pre-defined bars
      for (let i = 0; i < this.NBR_OF_BARS; i++) {
        const bar = document.createElement("DIV");
        bar.setAttribute("id", "player" + this.index + "_bar" + i);
        bar.setAttribute("class", "visualizer-container__bar");
        bar.style.height = "2px";
        visualizerContainer.appendChild(bar);
      }
      this.updateIcon();
    },
    initPlayerAnalyser() {
      console.log("initPlayerAnalyser");
      this.audio = document.getElementById("audio" + this.index);
      const ctx = new AudioContext();

      const audioSource = ctx.createMediaElementSource(this.audio);
      this.analayzer = ctx.createAnalyser();

      audioSource.connect(this.analayzer);
      audioSource.connect(ctx.destination);
    },
    drawProgress(percent) {
      console.log(percent);
      var circle = document.querySelector("circle");
      var radius = circle.r.baseVal.value;
      var circumference = radius * 2 * Math.PI;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }

      //const input = document.querySelector("input");
      setProgress(percent);
    },
    updateIcon() {
      const iconcontainer = document.querySelector("#icon" + this.index);
      if (this.audio) {
        if (this.audio.paused) {
          iconcontainer.innerHTML = //"";
            '<i class="mdi-play-circle-outline mdi v-icon notranslate v-theme--light v-icon--clickable mr-2" style="color:#28B9AF!important; font-size: 40px; height: 40px; width: 40px;" role="button" aria-hidden="false"></i>';
        } else {
          iconcontainer.innerHTML =
            '<i class="mdi-pause-circle-outline mdi v-icon notranslate v-theme--light v-icon--clickable mr-2" style="color:#28B9AF!important; font-size: 40px; height: 40px; width: 40px;" role="button" aria-hidden="false"></i>';
        }
      } else {
        iconcontainer.innerHTML = //"";
          '<i class="mdi-play-circle-outline mdi v-icon notranslate v-theme--light v-icon--clickable mr-2" style="color:#28B9AF!important; font-size: 40px; height: 40px; width: 40px;" role="button" aria-hidden="false"></i>';
      }
      iconcontainer.addEventListener("click", this.toggleAudio);
    },
    toggleAudio() {
      console.log("toggleAudio");
      if (this.audio.paused) {
        this.playAudioWithVisual();
      } else {
        this.stopAudio();
      }
      this.updateIcon();
    },
    //starts visual on audio list item
    playAudioWithVisual() {
      console.log("playAudioWithVisual");

      var vm = this;

      const frequencyData = new Uint8Array(this.analayzer.frequencyBinCount);
      this.analayzer.getByteFrequencyData(frequencyData);

      function renderFrame() {
        vm.analayzer.getByteFrequencyData(frequencyData);
        for (let i = 0; i < vm.NBR_OF_BARS; i++) {
          // Since the frequency data array is 1024 in length, we don't want to fetch
          // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
          const index = (i + 10) * 2;

          // fd is a frequency value between 0 and 255
          const fd = frequencyData[index];

          const bar = document.querySelector("#player" + vm.index + "_bar" + i);
          if (!bar) {
            continue;
          }

          // If fd is undefined, default to 0, then make sure fd is at least 4
          // This will make make a quiet frequency at least 4px high for visual effects
          // additionally we normalize the barheight to maximum of player height
          const barHeight = Math.max(4, ((document.getElementById("playercard").offsetHeight/255) * fd) || 0);
          bar.style.height = barHeight + "px"; // / 1.5

          //console.log("player height: " + barHeight + " / " + document.getElementById("playercard").offsetHeight);
          //if (barHeight)
          //console.log((80/255) * fd);
        }
        vm.drawProgress(vm.audio.currentTime / (vm.audio.duration / 100));
        // At the next animation frame, call ourselves
        if (!vm.audio.paused) {
          window.requestAnimationFrame(renderFrame);
        } else {
          vm.initPlayerVisual();
        }
      }

      this.audio.play();
      this.audio.addEventListener("timeupdate", () => {
        console.log("onUpdateProgress tick!");

        /*
        this.volume =
          typeof this.audioplayer !== "undefined" ? this.audioplayer.volume : 0;
        console.log(this.volume);*/
      });

      renderFrame();
    },
    stopAudio() {
      this.audio.pause();
    },
  },
};
</script>

<style>
.visualizer-container {
  height: 100px;
  margin-top: 24px;
  display: contents;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.visualizer-container__bar {
  vertical-align: bottom;
  display: inline-flex;
  background: black;
  margin: 0 1pt;
  width: 1pt;
}

.child {
  position: absolute;
  top: 0;
}

.child-1 {
  left: 0;
}

.parent {
  position: relative;
}
</style>
