<template>
  <div v-if="!edu_video_seen">
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
  <v-row v-if="edu_video_seen" class="pa-0 ma-0 fill-height" align-content="center" justify="center">
    <!-- LEFT BIG -->
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-img
          :src="getSessionImage()"
          height="25em"
          cover
        ></v-img>
        <v-row class="pa-4 ma-0 mb-0" align-content="start" justify="start">
          <v-icon class="pa-2" color="grey" :icon="getCourseIcon()"></v-icon>
          <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0">
            <span class="text-grey">
              {{ getCourseInfo() }}
            </span>
          </v-card-text>
          <!--<v-icon class="pa-8" color="grey" :icon="getCourseIcon(data.course_type)"></v-icon>-->
        </v-row>
        <v-card-title> Beschreibung </v-card-title>
        <v-card-text class="pa-0 mt-0 mb-8 ml-4 mr-4">
          <span v-html="getDescriptionByLanguage()"></span>
        </v-card-text>
        <!--

          //{{ data.description }}


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
                  <v-list-item-subtitle v-text="item"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
          </v-col>
          <v-col :cols="6" class="pl-4 pa-0 ma-0 fill-height">
            Enthaltene Einheiten
            <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in subTasks"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="center" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle >{{ item.type }}, {{ item.available }}, {{ item.name }}, {{ item.unitOrder }}</v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
          </v-col>
        </v-row>
        <v-row v-if="nextTask" class="pa-0 mx-4 mt-4 mb-4" align-content="center">
          Next Task: {{nextTask.type}} , {{ nextTask.name }}
        </v-row>
        -->

        <!-- -->
        <div v-if="getUnitConfigInfo().length > 1">
          <v-row v-for="(item, i) in getUnitConfigInfo()" :key="i" class="pa-0 mx-4 mt-1 mb-1" align-content="center">
            <span :class="i>0?'text-xs':''">{{ item }}</span>
          </v-row>
        </div>


        <v-row class="pa-0 mx-4 mt-4 mb-4" align-content="center">
          <v-spacer></v-spacer>
          <center>
            <v-progress-circular
              class="mx-8 my-8"
              v-if="loading"
              indeterminate
              color="#28B9AF"
            />
          </center>
          <v-btn v-if="!loading && nextTask" variant="elevated" color="#28B9AF" @click="onNextStep()">
            <span class="text-white">
              {{
                nextTask.type == 'QUESTIONNAIRE' || nextTask.type == 'AUDIO_DIARY'
                  ? "Aufgabe starten"
                  : getUnitState() == "RUNNING" ? "Aufgabe starten" : "Zur Konfiguration"
              }}
            </span>
          </v-btn>
        </v-row>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import api from "@/scripts/api/api";
import {
  /*getNextTaskActivity,
  continueProcedure,
  getNextActivity,*/
  //isAllUnitsComplete,
  isAllUnitsCompleteSync,
  getCourseIcon,
  getCourseInfo,
  getFHIRId,
  getUser
} from "@/scripts/procedureEngine";

import { /*getDescriptionText,*/ getDescriptionByLanguage, getTextByLanguage } from '@/scripts/common/utils'

export default {
  name: "SessionsStepInfo",
  inheritAttrs: false,
  /*
  computed: {

  },
  watch: {
    data: async function () {
      console.log(" - - - - - content changed!!!!")
      this.nextTask = await this.getContentPackage()
    },
  },
  */
  data: () => ({
    loading: false,
    edu_video_seen: false,
    //subTasks: [],
    nextTask: null,
  }),
  props: ["data", "updateView", "onBack", "onNext"],
  /**/
  watch: {
    $route(to, from) {
      console.log("update ---- >  from " + from.name + " to: " + to.name);
      //console.log("Data changed: " + JSON.stringify(this.data));
      this.init()
    },
  },
  components: { },
  mounted: async function () {

    //console.log("COURSE INFO VIEW CREATED WITH: " + JSON.parse(this.data).id)

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    this.edu_video_seen = this.hasSeenVideo()

    await this.init()

  },
  methods: {
    getSessionImage() {
      switch (this.nextTask?.type) {
        case "WEBSITE":
        case "VR_DEVICE":
          switch (this.getContentPackageName()) {
            case "vr_roleplay_praise":
              return require('@/assets/thumb_cafe.jpg');
            case "vr_roleplay_work_colleague":
              return require('@/assets/thumb_container.jpg');
            case "vr_roleplay_work_boss":
              return require('@/assets/thumb_boss.jpg');

            default:
              return require('@/assets/thumb_meditation.jpg');
          }
        case "QUESTIONNAIRE":
          return require('@/assets/thumb_questionnaire.jpg');
        case "AUDIO_DIARY":
          return require('@/assets/thumb_questionnaire.jpg');

        default:
          return require('@/assets/placeholder.png');
      }
    },
    getTextByLanguage() {
      return getTextByLanguage(this.nextTask?.translations, this.$i18n)
    },
    getDescriptionByLanguage() {
      return getDescriptionByLanguage(this.nextTask?.translations, this.$i18n)
    },
    getUnitState: function () {

      var unit = (isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit)
        ? this.data.nextActivityUnit
        : this.data.activity
          ? this.data.activity.units[0]
          : this.data.units[this.data.units.length-1]

      return unit.state

    },
    getUnitConfigInfo: function () {

      var result = ["Ihre Konfiguration:"]

      var unit = (isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit)
        ? this.data.nextActivityUnit
        : this.data.activity
          ? this.data.activity.units[0]
          : this.data.units[this.data.units.length-1]

      if (unit) {

        var res1 = unit.contentPackageResourceBundle
        if (res1) {
          result.push(getTextByLanguage(res1.translations, this.$i18n))
        }

        var res2 = unit.packageParameters
        if(res2) {
          res2.forEach(element => {
            result.push(getTextByLanguage(element.key.translations, this.$i18n))
          });
        }
      }

      return result

    },
    init: async function () {
      this.loading = true;

      this.nextTask = await this.getContentPackage()

      //console.log( "CONTENT PACKAGE: " + JSON.stringify(this.nextTask) )

      this.loading = false;
    },
    getContentPackageName:  function () {
      var contentPackage = ( isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit)
        ? this.data.nextActivityUnit.contentPackage
        : this.data.activity
          ? this.data.activity.units[0].contentPackage
          : this.data.units[this.data.units.length-1].activityUnit.contentPackage

      console.log("get content package for: " + contentPackage.name)

      return contentPackage.name
    },
    getContentPackage: async function () {
      return await api.getContentPackageByName(this.user.id, this.getContentPackageName())
    },
    async onNextStep() {

      console.log("start procedure and/or unit")

      if (this.nextTask.type == 'WEBSITE' || this.nextTask.type == 'VR_DEVICE') {

        console.log("ITS WEB/VR, create config laters...")

      }
      else {

        if (isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit) {
          console.log("-- next activity")

          let payload = {
            "activityUnitId": this.data.nextActivityUnit.id, //2,
            "contentPackageResourceBundleId": this.nextTask.resourceBundles[0].id, //10,
            "packageParametersIds": [

            ],
            "resourceParametersIds": [

            ],
            "state": "RUNNING"
          }

          // https://backend.relivr-integration.nuromedia.com/user/active-procedure/active-unit/

          const result = await api.postUnit(
                getUser(),
                payload
            )

          console.log("RESULT:\n" + result)

          //this.updateView(result)

        } else {
          if (this.data.activity) {

            console.log("-- first activity")

            let payload =
            {
              "patient": getFHIRId(), //"18828c88956-c8c7255d-e807-43d0-8d6a-f3a5d8e9cd95",
              "carePlanUuid": this.data.carePlan.uuid, //"f633c28e-4588-4c20-bd65-ae6d3642be8f",
              "carePlanUnitId": this.data.id, //5,
              "fhirProcedure": "0",
              "units": [
                {
                  "activityUnitId": this.data.activity.units[0].id, //4,
                  "contentPackageResourceBundleId": this.nextTask.resourceBundles[0].id, //8,
                  "packageParametersIds": [

                  ],
                  "resourceParametersIds": [

                  ],
                  "state": "RUNNING"
                }
              ]
            }

            console.log("PAYLOAD:\n" + payload)

            const result = await api.postProcedures(
                getUser(),
                payload
            )

            console.log("RESULT:\n" + result)

            //this.updateView(result)

          } else {
            console.log("-- runnning activity")

          }
        }

      }

      this.onNext()
    },
    getCourseInfo() {
      //console.log("info: " + getCourseInfo(this.nextTask?.type))
      return this.$i18n.t( ''+getCourseInfo(this.nextTask?.type) );
    },
    getCourseIcon() {
      return getCourseIcon(this.nextTask?.type)
    },
    hasSeenVideo() {
      return window.sessionStorage.getItem('edu_video_seen') != null;
    },
    action() {
      window.sessionStorage.setItem("edu_video_seen", true);
      this.edu_video_seen = true;
    }
  },
};

</script>

<style></style>
