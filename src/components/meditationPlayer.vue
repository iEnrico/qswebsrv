<template>
  <audio :id="playerUniqId" :src="audioSource"></audio>
  <v-card
    class="mx-auto mt-0 rounded-lg"
    height="600"
    width="100%"
    color="#FFF"
    variant="flat"
  >
    <v-container style="min-height: 100%; min-width: 100%">
      <v-row align="center" justify="center">
        <v-card-title v-if="!meditationFinished" class="mt-0 mb-4 pb-0">
          {{ this.options_SessionTypeAlternate[this.type] }}
        </v-card-title>
      </v-row>

      <!--  
      {{ this.playerdata[this.index].text }}
      -->

      <!--
      <v-row align="center" justify="center">
        <v-card-subtitle v-if="!meditationFinished" class="mt-2 mb-2 pb-0">
          {{ this.playerdata[this.index].text }}
        </v-card-subtitle>
      </v-row>
      -->
      <!--
        :filePath="'/3d/Rock1b.obj'"
        :mtlPath="'/3d/Rock1b.mtl'"

        :filePath="'/3d/astMitBlatt.glb'"
        :mtlPath="null"
          
        :filePath="'/3d/Stone2023.glb'"
        :mtlPath="null"
          
        {
          type: 'AmbientLight',
          color: '#FFFFFF',
          intensity: 5,
        },

        { 
          type: 'DirectionalLight', 
          position: { x: 100, y: 10, z: 100 }, 
          color: 'green', 
          intensity: 0.8, 
        },

        { 
          type: 'PointLight', 
          color: '#FFFFFF', 
          position: { x: 200, y: -200, z: 100 }, 
          intensity: 1 
        },

            { 
              type: 'HemisphereLight',
              skyColor: '#FFFFFF',
              groundColor: '#FFFFFF',
              intensity: 2,
              position: { x: 200, y: -200, z: 100 }
            },

            {
              type: 'AmbientLight',
              color: '#FFFFFF',
              intensity: 3,
            },
            
        { 
          type: 'HemisphereLight',
          skyColor: '#FFFFFF',
          groundColor: '#FFFFFF',
          position: { x: 200, y: -200, z: 100 }
        },

        -->
      <v-row align="center" justify="center">
        <vue3dLoader
          v-if="showInteraction"
          :height="500"
          :width="960"
          :showFps="false"
          :filePath="this.playerdata[this.index].model"
          :mtlPath="null"
          :lights="[
            {
              type: 'AmbientLight',
              color: '#FFFFFF',
              intensity: 3,
            },
            
          ]"
          :backgroundColor="0xeeeeee"
          :controlsOptions="{
            enablePan: true,
            enableZoom: true,
            enableRotate: true,
          }"
          :cameraPosition="{ x: 4, y: 2, z: 2 }"
          :scale="{ x: 12, y: 12, z: 12 }"
        ></vue3dLoader>
        <!-- 
          :scale="{ x: 1.5, y: 1.5, z: 1.5 }" 
        --> 
      </v-row>
      <v-row align="start" justify="start">
        <v-card-title v-if="meditationFinished" class="mt-8 mb-0 pb-0">{{
          "Einleitung"
        }}</v-card-title>
      </v-row>
      <v-row align="start" justify="start">
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
        <v-icon size="160" color="#DDDDDD">{{ "mdi-headphones" }}</v-icon>
        <!--"mdi-earbuds-outline"-->
      </v-row>
      <v-row
        v-if="!showInteraction"
        align="center"
        justify="center"
        class="pt-0 mb-0 pb-0"
      >
        {{ options_SessionTypeAlternate[this.type] }}
      </v-row>
      <v-row style="min-height: 120px" align="center" justify="center">
        <v-btn variant="elevated" style="background-color: #28B9AF;" v-if="meditationFinished" @click="start">
          <span class="text-white">Jetzt Starten</span>
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
  <v-row align="end" justify="end" class="mt-0" v-if="!meditationFinished">
    <v-progress-linear
      v-if="!meditationFinished"
      :model-value="this.progress"
      :max="100"
      height="3"
      color="#28B9AF"
      class="ml-0 mr-0"
    ></v-progress-linear>
    <v-card-subtitle>{{ this.index + 1 }} / {{ this.playerdata.length }}</v-card-subtitle>
  </v-row>
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
    options_SessionTypeAlternate: [
      "Lupenübung Stein (ca. 9 Minuten)",
      "Lupenübung Stock (ca. 9 Minuten)",
      "Lupenübung Statue (ca. 9 Minuten)",
      "Telefonübung Stein (ca. 6 Minuten)",
      "Telefonübung Stock (ca. 6 Minuten)",
      "Telefonübung Statue (ca. 7 Minuten)",
      "Imaginationsübung Stein (ca. 7 Minuten)",
      "Imaginationsübung Stock (ca. 7 Minuten)",
      "Imaginationsübung Statue (ca. 7 Minuten)",
    ],
  }),
  props: ["setProgress", "playerdata", "type"],
  components: {},
  mounted: function () {

    //alert("prop: " + this.setProgress)
    //this.setProgress(50);

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

      this.setProgress((100/this.playerdata.length)*this.index);
      //this.setProgress(50);

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
