<template>
  <FullscreenNavBarActions :visible='dialog' :abort='onAbort'/>
  <v-row
      class="pa-0 ma-0"
      style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title> {{ getTitle() }} </v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" @click="this.dialog = true">
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>
      {{$t("overlay_btn_close")}}
    </v-btn>
  </v-row>
  <v-progress-linear
      :model-value="progress_value"
      :max="100"
      height="3"
      color="#28B9AF"
      class="mr-16"
  ></v-progress-linear>

  <!-- AUDIO DIARY -->
  <v-container
      v-if="getCourseType() == 'AUDIO_DIARY'"
      style="min-width: 100%; "
      class="mx-0 my-0"
  >
    <SessionsStepInfo v-if="index == 0 && showInfo" :data="parsedData" :onBack="onBack" :onNext="onNext" />
    <SessionsStepQuestions v-if="index == 1" :eventAbort="EVENT_QUESTION_ABORT" :data="parsedData" :updateView="updateView" :questions="getQuestions()" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>

  <!-- WEB -->
  <v-container
      v-if="getCourseType() == 'WEBSITE'"
      style="min-width: 100%; "
      class="mx-0 my-0"
  >
    <SessionsStepInfo v-if="index == 0 && showInfo" :data="parsedData" :onBack="onBack" :onNext="onNext" />
    <SessionsStepConfig
        v-if="index == 1 || (index == 0 && !showInfo)"
        :data="parsedData"
        :onBack="onBack"
        :onNext="onNext"
    />
    <SessionsStepMeditation v-if="index == 2" :data="parsedData" :updateView="updateView" :setProgress="setProgress" :onNext="onNext"/>
  </v-container>

  <!-- VR / QUESTIONNAIRE -->
  <v-container
      v-if="getCourseType() == 'VR_DEVICE' || getCourseType() == 'QUESTIONNAIRE'"
      style="min-width: 100%; "
      class="mx-0 my-0"
  >
    <SessionsStepInfo v-if="index == 0 && showInfo" :data="parsedData" :onBack="onBack" :onNext="onNext" />
    <div v-if="getCourseType() == 'QUESTIONNAIRE'">
      <SessionsStepQuestions v-if="index == 1" :eventAbort="EVENT_QUESTION_ABORT" :data="parsedData" :updateView="updateView" :questions="getQuestionaire()" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
    </div>
    <div v-if="getCourseType() == 'VR_DEVICE'">
      <SessionsStepConfig
          v-if="index == 1 || (index == 0 && !showInfo)"
          :data="parsedData"
          :onBack="onBack"
          :onNext="onNext"
      />
      <SessionsStepVRLogin v-if="index == 2" :data="parsedData" :updateView="updateView" :onBack="onBack" :onNext="onNext" />
    </div>
  </v-container>

  <!-- VIDEO -->
  <v-container
      v-if="getCourseType() == 'VIDEO'"
      style="min-width: 100%;  align-items: center;"
      class="mx-0 my-0"
  >
    <!-- fill-width fill-height -->
    <v-row
        class="pa-0 ma-0"
        style="background-color: transparent; justify-content: center; align-items: center"
    >
      <video width="1120" controls >
        <source src="/video/psychodukation.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </v-row>
  </v-container>

  <!-- TAGEBUCH EINTRAG // NOT USED ANYMORE, replaced by notes add view -->
  <!--
  <v-container
    v-if="this.data.course_type == 3"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <NotesViewAdd v-if="index == 1" />
    <SessionsStep4 v-if="index == 2" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
  -->
</template>

<script>
import SessionsStepInfo from "@/components/SessionsStepInfo.vue";
import SessionsStepConfig from "@/components/SessionsStepConfig.vue";
import SessionsStepVRLogin from "@/components/SessionsStepVRLogin.vue";
import SessionsStepQuestions from "@/components/SessionsStepQuestions.vue";
import SessionsStepMeditation from "@/components/SessionsStepMeditation.vue";
//import NotesViewAdd from "@/views/NotesViewAdd1.vue";
//import QuestionVisual from "@/components/questionVisual.vue";
import api from "@/scripts/api/api";

import {
  //getContainingUnitsFromProcedure,
  getNextAvailableProcedures,
  //isAllUnitsComplete,
  isAllUnitsCompleteSync,
  //getCourseIcon,
  //getCourseInfo,
  //getStateIcon,
  //getStateMsg,
  //getStateColor,
  getUser
} from "@/scripts/procedureEngine";

//import common from "@/scripts/common/common";
import data from "@/scripts/data/data.js";
import FullscreenNavBarActions from "@/components/FullscreenNavBarActions.vue";
import { getDescriptionByLanguage, getTextByLanguage } from '@/scripts/common/utils'

import { useCurrentSessionStore } from "@/stores/currentSessionStore";

export default {
  name: "SessionsView",
  setup() {
    const sessionStore = useCurrentSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
    EVENT_QUESTION_ABORT: false,
    index: 0,
    progress_value: 0,
    max: 3,
    dialog: false,
    parsedData: null,
    showInfo: true,
    //doSave: true,
  }),
  components: {
    //SessionsStepIntro,
    //QuestionVisual,
    SessionsStepInfo,
    SessionsStepConfig,
    SessionsStepVRLogin,
    SessionsStepQuestions,
    SessionsStepMeditation,
    FullscreenNavBarActions
  },
  mounted: async function () {
    this.parsedData = this.sessionStore.getItem;
    console.log('parsedData:', this.parsedData);
    // Verify that is the first time and show SessionsStepInfo
    const hasSeenInfo = sessionStorage.getItem('hasSeenInfo');
    console.log('hasSeenInfo:', hasSeenInfo);
    if (hasSeenInfo) {
      this.showInfo = false;
      this.index = 1;
    } else {
      sessionStorage.setItem('hasSeenInfo', true);
      this.showInfo = true;
    }
  },
  methods: {
    getQuestions() {

      var contentPackage = ( isAllUnitsCompleteSync(this.parsedData) && this.parsedData.nextActivityUnit)
          ? this.parsedData.nextActivityUnit.contentPackage
          : this.parsedData.activity
              ? this.parsedData.activity.units[0].contentPackage
              : this.parsedData.units[this.parsedData.units.length-1].activityUnit.contentPackage

      return [{
        id: 0,
        name: contentPackage.name,
        question: getDescriptionByLanguage( contentPackage.translations, this.$i18n ),
        hasList: true,
        list_items: [
          { text: "", icon: "mdi-circle-small", value: 0 },
          { text: "", icon: "mdi-circle-small", value: 0 },
          { text: "", icon: "mdi-circle-small", value: 0 },
        ],
        hasSubtext: false,
        subtext: "",
        answerType: 2, // 0=rating, 1=select, 2=voice
        userRating: -1,
      }]
    },
    getTitle() {

      if (this.parsedData == null) return ""
      var contentPackage = ( isAllUnitsCompleteSync(this.parsedData) && this.parsedData.nextActivityUnit)
          ? this.parsedData.nextActivityUnit.contentPackage
          : this.parsedData.activity
              ? this.parsedData.activity.units[0].contentPackage
              : this.parsedData.units[this.parsedData.units.length-1].activityUnit.contentPackage

      return getTextByLanguage( contentPackage.translations, this.$i18n );
    },
    getCourseType() {

      if (this.parsedData == null) return ""
      var contentPackage = ( isAllUnitsCompleteSync(this.parsedData) && this.parsedData.nextActivityUnit)
          ? this.parsedData.nextActivityUnit.contentPackage
          : this.parsedData.activity
              ? this.parsedData.activity.units[0].contentPackage
              : this.parsedData.units[this.parsedData.units.length-1].activityUnit.contentPackage

      return contentPackage.type
    },
    getTextByLanguage(translations, locale) {
      return getTextByLanguage(translations, locale)
    },
    async updateView() {
      let newData = await getNextAvailableProcedures()
      this.parsedData = newData.data[0]
      this.sessionStore.setItem(this.parsedData)
      this.index = 0
    },
    onBack() {
      if (this.index > 0) {
        this.index--
      } else {
        this.routeBack()
      }
    },
    onNext() {
      if (this.index < this.max) {
        this.index++
      } else {
        //send data
        this.routeBack()
      }
    },
    onAbort(routeBack, doSave) {
      if (doSave && routeBack) {
        this.EVENT_QUESTION_ABORT = true; // fires an event that recognized by SessionsStepQuestions
        if (routeBack) { this.routeBack() }
      } else if (routeBack && !doSave) {
        const sampledata = {"state": "ABORTED"};
        api.patchActiveProcedure(getUser(), sampledata)
        var vm = this
        setTimeout(async function(){
          vm.routeBack();
        }, 500)
      }
      this.dialog = false
    },
    routeBack() {
      const returnTo= this.parsedData.returnTo ?this.parsedData.returnTo : "/dashboard1"
      this.$router.push(returnTo);
    },
    getQuestionaire() {

      if (this.parsedData == null) return ""

      var contentPackage = ( isAllUnitsCompleteSync(this.parsedData) && this.parsedData.nextActivityUnit)
          ? this.parsedData.nextActivityUnit.contentPackage
          : this.parsedData.activity
              ? this.parsedData.activity.units[0].contentPackage
              : this.parsedData.units[this.parsedData.units.length-1].activityUnit.contentPackage

      //console.log("gettin questionaire for: " + contentPackage.name)

      switch (contentPackage.name) {
        case "system_usability_scale" :
        case "system-usability-scale" :
          return data.getSUSQuestions()
        case "BDI-II":
          return data.getSessionsQuestionsBDI2()
        case "GAD-7":
          return data.getSessionsQuestionsGAD7()
        case "TMS":
          return data.getSessionsQuestionsTMS()
        case "SAM":
          return data.getSessionsQuestionsSAM()
        case "vr-meditation":
          return data.getSessionsQuestionsSAM()
        case "web-meditation":
          return data.getSUSQuestions()

          //testing only
        case "Five Facet Mindfulness":
          return data.getSessionsQuestionsSAM()

        default:
          return data.getSUSQuestions()

          //return data.getNotesRecordingQuestions()
      }
    },
    setProgress(value) {
      this.progress_value = value;
    }
  },
};
</script>

<style></style>
