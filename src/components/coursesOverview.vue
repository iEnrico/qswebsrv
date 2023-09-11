<template>
  <v-card class="mx-auto mt-4 ml-2 mr-2 rounded-lg" variant="elevated">
    <v-card-title class="mt-0 mb-2 pb-0">{{
      $t("title_dashboard_courses")
    }}</v-card-title>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
    <v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em"> Registrierung </v-card-text>
    <v-container fluid>
      <v-row dens>
        <v-col v-for="item in sessions" :key="item.title" :cols="item.flex">
          <CoursesOverviewItem :item="item" :mode="mode"/>
        </v-col>
      </v-row>
    </v-container>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
    <v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em"> Follow-Up </v-card-text>
    <v-container fluid>
      <v-row dens>
        <v-col v-for="item in availableOrRunning" :key="item.title" :cols="item.flex">
          <CoursesOverviewItem :item="item" :mode="mode"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import api from "@/scripts/api/api";
import { useSessionStore } from "@/stores/sessionStore";
//import data from "../scripts/data/data.js";
import common from "@/scripts/common/common";
import CoursesOverviewItem from "@/components/coursesOverviewItem.vue";

export default {
  name: "CoursesView",
  setup() {
    const sessionStore = useSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
    //mode: 0,
    sessions: [],
    availableOrRunning: []
  }),
  props: [
    "mode"
  ],
  components: {CoursesOverviewItem},
  watch: {},
  mounted: async function () {
    // mocked data
    this.sessions = this.sessionStore.getOpenSessions;

    //TODO: Fetch Content Packages from Backend
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    let availableActivities = await api.getAvailableActivitys(this.user)
    if (availableActivities.data) {
      console.log("availableActivities " + JSON.stringify(availableActivities))
      availableActivities.data.forEach((item) => {
        this.availableOrRunning.push(
          {
              id: item.id,
              date: 1673482872000,
              title: item.name,//translations[1],
              subtitle: "Lorem Ipsum 1",
              state: common.session_state_notstarted, // see "session states" in common.js
              description:
                "In response to these requirements, a simple usability scale was developed. The System Usability Scale (SUS) is a simple, ten-item scale giving a global view of subjective assessments of usability.",
                //"Dieser Fragebogen enthält 21 Gruppen von Aussagen.<br/><br/>Bitte lesen Sie jede dieser Gruppen von Aussagen sorgfältig durch und suchen Sie sich dann in jeder Gruppe eine Aussage heraus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben. Klicken Sie die Zahl zu der Aussage an, die Sie sich herausgesucht haben. Falls in einer Gruppe mehrere Aussagen gleichermaßen auf Sie zutreffen, wählen Sie die Aussage mit der höheren Zahl.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: this.getCourseType(item.units[0].contentPackage.type),//common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
          }
        );
        
      });
      console.log("availableOrRunning " + JSON.stringify(this.availableOrRunning))
      console.log("availableOrRunning " + this.availableOrRunning.length)
    }

    let runningProcedures = await api.getRunningProcedures(this.user)
    if (runningProcedures.data) {
      console.log("runningProcedures " + JSON.stringify(runningProcedures))
      //runningProcedures.data.forEach((item) => {
        this.availableOrRunning.push(
          {
              id: runningProcedures.data.id,
              date: 1673482872000,
              title: runningProcedures.data.units[0].activityUnit.contentPackage.name,//translations[1],
              subtitle: "Lorem Ipsum 1",
              state: common.session_state_running, // see "session states" in common.js
              description:
                "Dieser Fragebogen enthält 21 Gruppen von Aussagen.<br/><br/>Bitte lesen Sie jede dieser Gruppen von Aussagen sorgfältig durch und suchen Sie sich dann in jeder Gruppe eine Aussage heraus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben. Klicken Sie die Zahl zu der Aussage an, die Sie sich herausgesucht haben. Falls in einer Gruppe mehrere Aussagen gleichermaßen auf Sie zutreffen, wählen Sie die Aussage mit der höheren Zahl.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: this.getCourseType(runningProcedures.data.units[0].activityUnit.contentPackage.type),//common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
          }
        );
      //});
      console.log("availableOrRunning " + JSON.stringify(this.availableOrRunning))
      console.log("availableOrRunning " + this.availableOrRunning.length)
    }
  },
  methods: {
    getCourseType: function (item) {
      switch(item) {
        case "QUESTIONNAIRE":
          return 8
        case "VR_DEVICE":
          return 2
      }
      return
    },
  },
};
</script>

<style>

</style>
