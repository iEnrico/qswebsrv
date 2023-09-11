<template>
  <div v-if="!hasSeenVideo()">
      <v-row
      class="pa-0 ma-0"
      style="background-color: transparent; justify-content: center; align-items: center"
      >
      <video width="1080" controls >
          <source src="/video/psychodukation.m4v" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      </v-row>
      <v-row class="pa-4 ma-0 mb-4" align-content="center" justify="center">
          <v-btn variant="elevated" color="#28B9AF" @click="action()">
              <span class="text-white">{{ "Jetzt Starten" }}</span>
          </v-btn>
      </v-row>
  </div>
  <v-row v-if="hasSeenVideo()" class="pa-0 ma-0 fill-height" align-content="center" justify="center">
    <!-- LEFT BIG -->
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-img
          :src="data.image ? data.image : require('@/assets/placeholder.png')"
          height="320px"
          cover
        ></v-img>
        <v-row class="pa-4 ma-0 mb-4" align-content="start" justify="start">
          <v-icon class="pa-2" color="grey" :icon="getCourseIcon(data.course_type)"></v-icon>
          <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0">
            <span class="text-grey">
              {{getCourseInfo(data.course_type)}}
            </span>
          </v-card-text>
          <!--<v-icon class="pa-8" color="grey" :icon="getCourseIcon(data.course_type)"></v-icon>-->
        </v-row>
        <v-card-title> Beschreibung </v-card-title>
        <v-card-text class="pa-0 mt-0 mb-4 ml-4 mr-4">{{ data.description }}</v-card-text>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pl-4 pa-0 ma-0 fill-height">
            Voraussetzung
            <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.completed"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="center" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
          </v-col>
          <v-col :cols="6" class="pl-4 pa-0 ma-0 fill-height">
            Enthaltene Einheiten
            <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.requirements"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="center" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
          </v-col>
        </v-row>
        <v-row class="pa-0 mx-4 mt-4 mb-4" align-content="center">
          <v-btn  variant="elevated" color="#28B9AF" @click="onNext()"
            ><span class="text-white">
              {{ "Zur Konfiguration" }}
            </span></v-btn
          >
        </v-row>
      </v-card>
    </v-col>
    <!-- RIGHT SMALL 
    <v-col :cols="4" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Typ </v-col>
          <v-col :cols="6" class="pb-0"> Dauer </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> {{getCourseTypeTitle(data.course_type)}} </font>
          </v-col>
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> ca. {{data.duration}} </font>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Voraussetzungen </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.requirements"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="center" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Enthaltene Einheiten </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.completed"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="start" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="pa-0 mx-4 mt-4 mb-4" align-content="center">
          <v-btn block variant="elevated" color="#28B9AF" @click="onNext()"
            ><span class="text-white">
              {{ "Jetzt Durchführen" }}
            </span></v-btn
          >
        </v-row>
      </v-card>

      <v-card class="mx-4 mt-4 rounded-lg" variant="elevated">
        <v-row class="pa-0 ma-0">
          <v-col :cols="6"> Durchgeführte Kurse </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-progress-linear
            :model-value="50"
            :max="100"
            height="5"
            color="#28B9AF"
            class="ml-3 mr-3"
          ></v-progress-linear>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-card-text class="pa-0 mt-0 mb-4 ml-4 mr-4 text-right" style="color: gray">
            2 von 4 Kursen
          </v-card-text>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.completed"
              :key="i"
              class="pa-0 ma-0 pb-4"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row class="pa-0 ma-0 ml-4">
                <font color="#888888" size="2"> 01.01.1960 </font>
              </v-row>
              <v-row class="pa-0 ma-0 ml-4"> Objektmeditation Stein </v-row>
              <v-row class="pa-0 ma-0">
                <v-btn density="compact" variant="text" color="#28B9AF" @click="onNext()">
                  {{ "details" }}
                </v-btn>
                <v-btn density="compact" variant="text" color="#28B9AF" @click="onNext()">
                  {{ "wiederholen" }}
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-row>
      </v-card>
    </v-col>
    -->
  </v-row>
</template>

<script>
import common from "@/scripts/common/common";

export default {
  name: "SessionsStep1",
  inheritAttrs: false,
  data: () => ({}),
  props: ["data", "onBack", "onNext"],
  components: { },
  mounted: function () {
    //alert("infothis: " + this.data.course_type + " / " + this.hasSeenVideo());
  },
  methods: {
    getCourseInfo: function (index) {
      switch (index) {
        case common.course_type_init:
          return "Inital";
        case common.course_type_web:
          return "Web";
        case common.course_type_vr:
          return "VR";
        case common.course_type_question:
        case common.course_type_diary:
          return "Fragebogen";
        case common.course_type_video:
          return "Video";
      }
      return;
    },
    getCourseIcon: function (index) {
      switch (index) {
        case common.course_type_init:
          return "mdi-book-settings-outline";
        case common.course_type_web:
          return "mdi-web";
        case common.course_type_vr:
          return "mdi-safety-goggles";
        case common.course_type_question:
        case common.course_type_diary:
          return "mdi-file-sign";
        case common.course_type_video:
          return "mdi-file-video-outline";
      }
      return;
    },
    hasSeenVideo() {
        return window.sessionStorage.getItem('edu_video_seen') != null;
    },
    action() {
        window.sessionStorage.setItem("edu_video_seen", true);
        this.onNext();
    }
  },
};
</script>

<style></style>
