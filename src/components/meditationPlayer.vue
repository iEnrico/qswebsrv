<template>
  <audio :id="playerUniqId" :src="audioSource"></audio>
  <v-card
    class="mx-auto mt-0 rounded-lg"
    height="500"
    width="100%"
    color="#EEEEEE"
    variant="flat"
  >
    <v-container style="min-height: 100%; min-width: 100%">
      <v-row align="center" justify="center">
        <v-card-title v-if="!meditationFinished" class="mt-8 mb-0 pb-0">
          {{ this.playerdata[this.index].text }}
        </v-card-title>
      </v-row>
      <v-row align="center" justify="center">
        <v-card-subtitle v-if="!meditationFinished" class="mt-2 mb-2 pb-0">
          {{ this.playerdata[this.index].text }}
        </v-card-subtitle>
      </v-row>
      <v-row align="center" justify="center">
        <vue3dLoader
          v-if="showInteraction"
          :height="400"
          :width="800"
          :showFps="false"
          :filePath="'/3d/Rock1b.obj'"
          :mtlPath="'/3d/Rock1.mtl'"
          :lights="[
            {
              type: 'AmbientLight',
              color: '#FFFFFF',
              intensity: 5,
            },
          ]"
          :backgroundColor="0xeeeeee"
          :controlsOptions="{
            enablePan: true,
            enableZoom: true,
            enableRotate: true,
          }"
          :cameraPosition="{ x: 4, y: 10, z: 2 }"
          :scale="{ x: 1.5, y: 1.5, z: 1.5 }"
        ></vue3dLoader>
      </v-row>
      <v-row align="center" justify="center">
        <v-card-title v-if="meditationFinished" class="mt-8 mb-0 pb-0">{{
          "Bitte setzten sie ihre Kopfhörer auf. Sobald sie bequem sitzen können sie mit der Übung beginnen."
        }}</v-card-title>
        <v-card-subtitle v-if="meditationFinished" class="mt-8 mb-0 pb-0">{{
          "Bitte setzten sie ihre Kopfhörer auf. Sobald sie bequem sitzen können sie mit der Übung beginnen."
        }}</v-card-subtitle>
      </v-row>
      <v-row
        v-if="!showInteraction"
        align="center"
        justify="center"
        class="pt-16 mb-0 pb-0"
      >
        <v-icon size="160" color="#DDDDDD">{{ "mdi-earbuds-outline" }}</v-icon>
      </v-row>
      <v-row style="min-height: 120px" align="center" justify="center">
        <v-btn variant="outlined" v-if="meditationFinished" @click="start">
          Beginnen
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
  <v-row align="end" justify="end" class="mt-0" v-if="!meditationFinished">
    <v-card-subtitle>{{ this.index + 1 }} / {{ this.playerdata.length }}</v-card-subtitle>
  </v-row>
  <v-progress-linear
    v-if="!meditationFinished"
    :model-value="this.progress"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
</template>

<script>
export default {
  name: "MeditationPlayer",
  /*setup() {
  },*/
  data: () => ({
    index: 0,
    progress: 0,
    showInteraction: false,
    meditationFinished: true,
  }),
  props: ["playerdata"],
  components: {},
  mounted: function () {
    this.player = document.getElementById(this.playerUniqId);

    this.player.addEventListener("ended", () => {
      this.isPlaying = false;
      setTimeout(() => {
        this.showInteraction = false;
        this.index++;
        this.nextStep();
      }, this.playerdata[this.index].pause * 1000);
    });

    this.player.addEventListener("loadeddata", (ev) => {
      console.log(ev);
      this._resetProgress();
      this.duration = this.player.duration;
    });

    this.player.addEventListener("timeupdate", this._onTimeUpdate);
  },
  methods: {
    start: function () {
      this.index = 0; //17;
      this.meditationFinished = false;
      this.nextStep();
    },
    nextStep() {
      if (this.index >= this.playerdata.length) {
        this.meditationFinished = true;
        return;
      }

      // detect next step is audio or interation?
      console.log("next step: (type) " + this.playerdata[this.index].type);

      // interactive step
      if (this.playerdata[this.index].type == 2) {
        this.showInteraction = true;
      }

      // audio step
      if (!this.audioSource) {
        return;
      }

      if (this.isPlaying) {
        this.player.pause();
      } else {
        setTimeout(() => {
          this.player.play();
        }, 1000);
      }

      this.isPlaying = !this.isPlaying;
    },
    _resetProgress() {
      if (this.isPlaying) {
        this.player.pause();
      }
      this.duration = 0; //convertTimeMMSS(0);
      this.playedTime = 0; //convertTimeMMSS(0);
      this.progress = 0;
      this.isPlaying = false;
    },
    _onTimeUpdate() {
      this.playedTime = this.player.currentTime; //convertTimeMMSS(this.player.currentTime);
      this.progress = (this.player.currentTime / this.player.duration) * 100;
    },
    _onUpdateProgress(pos) {
      if (pos) {
        this.player.currentTime = pos * this.player.duration;
      }
    },
    _onChangeVolume(val) {
      if (val) {
        this.player.volume = val;
      }
    },
  },
  computed: {
    audioSource() {
      if (this.index >= this.playerdata.length) {
        this._resetProgress();
        return "";
      }

      const url = this.playerdata[this.index].audio;
      if (url) {
        return url;
      } else {
        this._resetProgress();
        return "";
      }
    },
    playBtnIcon() {
      return this.isPlaying ? "pause" : "play";
    },
    playerUniqId() {
      return `audio-player${this._uid}`;
    },
  },
};
</script>

<style></style>
