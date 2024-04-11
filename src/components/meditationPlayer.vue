<template>
  <audio :id="playerUniqId" :src="audioSource"></audio>
  <!-- :class="[sceneClass, 'mx-auto', 'mt-0', 'rounded-lg']" -->
  <v-card
      :class='sceneClass'
      :style="backgroundStyle"
      height="600"
      width="100%"
      color="#FFF"
      variant="flat"
      v-if="this.index < this.playerdata.length"
  >
    <v-container
        @mousedown="handleDragStart"
        @mousemove="handleDragMove"
        @mouseup="handleDragEnd"
        @touchstart="handleDragStart"
        @touchmove="handleDragMove"
        @touchend="handleDragEnd"
        style="min-height: 100%; min-width: 100%">
      <v-row align="center" justify="center">
        <v-card-title v-if="!meditationFinished" class="mt-0 mb-4 pb-0">
          {{ this.options_SessionTypeAlternate[this.type] }}
        </v-card-title>
      </v-row>

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
            :backgroundColor="white"
            :backgroundAlpha="0.1"
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
        <v-card-title v-if="meditationFinished" class="mt-8 mb-0 pb-0" style="background: rgba(255,255,255,0.5); color:black;opacity: 1; ; padding: 10px 15px !important;">{{
            "Einleitung"
          }}</v-card-title>
      </v-row>
      <v-row align="start" justify="start">
        <v-card-subtitle v-if="meditationFinished" class="mt-8 mb-0 pb-0" style="background: rgba(0,0,0,0.5); color:white;opacity: 1; border-radius: 45px; padding: 10px 15px !important;" >{{
            "Bitte setzten sie ihre Kopfhörer auf. Sobald sie bequem sitzen können sie mit der Übung beginnen."
          }}</v-card-subtitle>
      </v-row>
      <v-row
          v-if="!showInteraction"
          align="center"
          justify="center"
          class="pt-16 mb-0 pb-0"

      >
        <!--<v-icon size="160" color="#DDDDDD">{{ "mdi-headphones" }}</v-icon>-->
        <!--"mdi-earbuds-outline"-->
      </v-row>
      <v-row
          v-if="!showInteraction"
          align="center"
          justify="center"
          class="pt-0 mb-0 pb-0"
          style="color:white"
      >
        {{ options_SessionTypeAlternate[this.type] }}
      </v-row>
      <v-row style="min-height: 120px" align="center" justify="center">
        <v-btn variant="elevated" style="background-color: #28B9AF;" v-if="meditationFinished" @click="start">
          <span class="text-white">Jetzt Starten</span>
        </v-btn>
      </v-row>
      <v-row align="center" justify="center" style="margin-top: 110px;">
        <div class="fixed-controls">
          <v-btn size="small" variant="elevated" v-if="!meditationFinished" @click="previousImage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn size="small" variant="elevated" v-if="!meditationFinished" @click="togglePlay" style="margin: 0 5px;">
            <v-icon>{{ playBtnIcon }}</v-icon>
          </v-btn>
          <v-btn size="small" variant="elevated" v-if="!meditationFinished" @click="nextImage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
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
        class="ml-0 mr-0 mb-1 mt-2"
    ></v-progress-linear>
    <v-card-subtitle @click="finish()">{{ this.index + 1 }} / {{ this.playerdata.length }}</v-card-subtitle>
  </v-row>


  <!-- END SCREEN -->
  <v-container class="pa-4 ma-4 mt-12 mb-12" style="min-height: 100%; min-width: 100%" v-if="meditationFinished && this.index >= this.playerdata.length">
    <v-card class="pa-4 ma-4" style="width: 50%;" >
      <v-row align="center" justify="center">
        <v-icon class="pa-8 mt-16 mb-0" size="64pt" color="#28B9AF">mdi-checkbox-marked-circle-outline</v-icon>
        <!--
         mdi-check-circle-outline
         mdi-checkbox-marked-circle-outline
        -->
      </v-row>
      <v-row align="center" justify="center">
        <v-card-title style="font-size: 2em">Vielen Dank!</v-card-title>
      </v-row>
      <v-row align="center" justify="center">
        <v-card-text style="font-size: 0.8em">
          {{ $t("session_completed_info") }}
        </v-card-text>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
            variant="elevated" style="background-color: #28B9AF;"
            @click="finish()"
            class="ml-0 mr-0 mt-8 mb-4"
        >
          <!-- TODO: add storing of questionaries too! -->
          <span class="text-white">{{ $t("overlay_save_exit") }}</span>
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/scripts/api/api";
export default {
  name: "MeditationPlayer",
  autoPlayNext: false,
  /*setup() {
  },*/
  data: () => ({
    index: 0,
    progress: 0,
    showInteraction: false,
    meditationFinished: true,
    loading: false,
    error: null,
    isPlaying: false,
    localPlayerData: [],
    sceneType: '',
    dragStartX: 0,
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
    currentBackgroundIndex: 0,
    backgroundChangeInterval: null,
  }),
  props: ["setProgress", "playerdata", "type", "onNext", "sendResults"],
  components: {},

  mounted: async function () {
    await this.loadActiveProcedure();
    this.player = document.getElementById(this.playerUniqId);
    this.player.addEventListener("play", () => {
      this.isPlaying = true;
    });

    this.player.addEventListener("pause", () => {
      this.isPlaying = false;
    });
    this.player.addEventListener("ended", () => {
      this.isPlaying = false;
      setTimeout(() => {
      this.index++;

      if (this.index < this.playerdata.length) {
        this.nextStep();
        this.player.play().then(() => {
          this.isPlaying = true;
        }).catch(error => {
          console.error("Auto reproduction failed:", error);
        });

      } else {
        this.meditationFinished = true;
      }
      }, 3000);
    });

    this.player.addEventListener("loadeddata", (ev) => {
      console.log(ev);
      this._resetProgress();
      this.duration = this.player.duration;
          if (this.autoPlayNext) {
            this.player.play().then(() => {
              this.isPlaying = true;
            }).catch(error => {
              console.error("Error trying to reproduce the audio:", error);
            });
            this.autoPlayNext = false;
          }
    });

    this.player.addEventListener("timeupdate", this._onTimeUpdate);
  },
  beforeUnmount() {
    if (this.backgroundChangeInterval) {
      clearInterval(this.backgroundChangeInterval);
    }
  },
  methods: {
    async loadActiveProcedure() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getRunningProcedures();
        this.localPlayerData = [response.data];
        this.determineSceneType();
      } catch (error) {
        console.error("Error loading data:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    handleDragStart(event) {
      this.dragStartX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
    },

    handleDragMove() {
    },

    handleDragEnd(event) {
      const dragEndX = event.type.includes('mouse') ? event.clientX : event.changedTouches[0].clientX;
      const threshold = 50;

      if (Math.abs(dragEndX - this.dragStartX) > threshold) {
        if (dragEndX < this.dragStartX) {
          this.nextImage();
        } else {
          this.previousImage();
        }
      }
    },
    changeBackground() {
      const images = this.sceneType === 'night_scene' ? this.nightImages : this.dayImages;
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % images.length;
    },
    determineSceneType() {
      if (this.localPlayerData.length > 0 && this.localPlayerData[0].units) {
        const currentUnit = this.localPlayerData[0].units.find(unit => unit.state === 'RUNNING');
        if (currentUnit && currentUnit.contentPackageResourceBundle) {
          this.sceneType = currentUnit.contentPackageResourceBundle.name === 'night_scene' ? 'night_scene' : 'day_scene';
        }
      }
    },
    togglePlay() {
      if (this.isPlaying) {
        this.player.pause();
      } else {
        this.player.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    start: function () {
      this.index = 0;
      this.meditationFinished = false;
      this.isPlaying = true;
      this.nextStep();
    },
    nextImage() {
      if (this.currentBackgroundIndex < this.dayImages.length - 1) {
        this.currentBackgroundIndex++;
      } else {
        this.currentBackgroundIndex = 0;
      }
    },
    previousImage() {
      if (this.currentBackgroundIndex > 0) {
        this.currentBackgroundIndex--;
      } else {
        this.currentBackgroundIndex = this.dayImages.length - 1;
      }
    },
    async finish() {
      this.meditationFinished = true;
      //alert("DONE!, send results and goto overview!")
      this.sendResults()
    },
    nextStep() {
      if (this.index < this.playerdata.length) {
        this.setProgress((100 / this.playerdata.length) * this.index);
        console.log("next step: (type) " + this.playerdata[this.index].type);

        if (this.playerdata[this.index].type == 2) {
          this.showInteraction = true;
        } else {
          this.showInteraction = false;
        }

        if (this.audioSource) {
          this.player.play().then(() => {
            this.isPlaying = true;
          }).catch(error => {
            console.error("Error trying to reproduce the audio:", error);
          });
        }
      } else {
        this.meditationFinished = true;
        this.isPlaying = false;
      }
      this.autoPlayNext = true;
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
    backgroundStyle() {
      const images = this.sceneType === 'night_scene' ? this.nightImages : this.dayImages;
      return {
        backgroundImage: `url(${images[this.currentBackgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      };
    },
    dayImages() {
      return [
        require('../assets/webMeditation/meditation_day_E.jpg'),
        require('../assets/webMeditation/meditation_day_N.jpg'),
        require('../assets/webMeditation/meditation_day_S.jpg'),
        require('../assets/webMeditation/meditation_day_W.jpg'),
      ];
    },
    nightImages() {
      return [
        require('../assets/webMeditation/meditation_night_E.jpg'),
        require('../assets/webMeditation/meditation_night_N.jpg'),
        require('../assets/webMeditation/meditation_night_S.jpg'),
        require('../assets/webMeditation/meditation_night_W.jpg'),
      ];
    },
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
      return this.isPlaying ? "mdi-pause" : "mdi-play";
    },
    playerUniqId() {
      return `audio-player${this._uid}`;
    },
    sceneClass() {
      return (this.sceneType === 'night_scene' ? 'night-scene' : 'day-scene') +  ' mx-auto mt-0 rounded-lg';
    },
  },
};
</script>

<style>
.viewer-container {background: transparent !important;}
.viewer-canvas{ background: transparent !important;}
.fixed-controls{
  position: fixed;
  bottom: 32.5%;
  right: 3.5%;
}
</style>
