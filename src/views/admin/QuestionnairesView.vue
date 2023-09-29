<template>
  <v-card class="mx-auto mt-4 ml-2 mr-2 rounded-lg" variant="elevated">
    <v-card-title class="mt-0 mb-2 pb-0">{{
        $t("title_dashboard_activities")
      }}</v-card-title>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
    <v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em"> {{ $t("description_dashboard_activities") }}</v-card-text>
    <v-container fluid>
      <v-row dens>
        <v-col v-for="item in sessions" :key="item.title" :cols="item.flex">
          <listItemPatient :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import api from "@/scripts/api/api";
import { useSessionStore } from "@/stores/sessionStore";
//import data from "../scripts/data/data.js";
//import common from "@/scripts/common/common";
import listItemPatient from "@/components/listItemUserActivitys.vue";

export default {
  name: "QuestionnairesView",
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
  components: {listItemPatient},
  watch: {},
  mounted: async function () {
    // mocked data
    this.sessions = this.sessionStore.getOpenSessions;

    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
    this.activities = [];

    await this.getActivities();


  },
  methods: {
    getActivities: async function () {
      const activities=  await api.getAvailableActivitys(this.user.id);
      console.log("enric" + JSON.stringify(this.activities, null, 2));

      for (const activity of activities) {
        //if(activity.length > 0){
        activities.push(activity);
        //}

      }


      this.activities=activities;




    },

    getCourseType: function (item) {
      switch(item) {
        case "QUESTIONNAIRE":
          return 4
        case "WEBSITE":
          return 1
        case "VR_DEVICE":
          return 2
      }
      return
    },
    getDescriptionText: function (item) {
      switch(item) {
        case "system-usability-scale":
          return "Scoring SUS Questionare<br><br>SUS yields a single number representing a composite measure of the overall usability of the system being studied. Note that scores for individual items are not meaningful on their own. To calculate the SUS score, first sum the score contributions from each item. Each item's score contribution will range from 0 to 4. For items 1,3,5,7,and 9 the score contribution is the scale position minus 1. For items 2,4,6,8 and 10, the contribution is 5 minus the scale position. Multiply the sum of the scores by 2.5 to obtain the overall value of SU. SUS scores have a range of 0 to 100."
        case "BDI-II":
          return "Dieser Fragebogen enthält 21 Gruppen von Aussagen.<br/><br/>Bitte lesen Sie jede dieser Gruppen von Aussagen sorgfältig durch und suchen Sie sich dann in jeder Gruppe eine Aussage heraus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben. Klicken Sie die Zahl zu der Aussage an, die Sie sich herausgesucht haben. Falls in einer Gruppe mehrere Aussagen gleichermaßen auf Sie zutreffen, wählen Sie die Aussage mit der höheren Zahl."
        case "GAD-7":
          return "Infotext GAD-7"
        case "TMS":
          return "Infotext TMS"
        case "demographic":
          return "Lesen Sie bitte zunächst aufmerksam die folgenden Hinweise:<br/><br/>Dieser Fragebogen dient der Erfassung einiger Merkmale zu Ihrer Person, Ihres Sprechverhaltens sowie gesundheitsbezogener Daten, die für die Untersuchung von Relevanz sind. Schreiben Sie Ihren Namen bitte nicht auf diesen Fragebogen.<br/><br/>Alle Daten werden vertraulich behandelt. Auch die Auswertung und Darstellung der erfassten Daten wird anonym erfolgen und zu keiner Zeit die Identifizierung Ihrer Person ermöglichen. Die in diesem Fragebogen abgefragten Informationen helfen uns bei der Interpretation der erhobenen Daten. Es ist daher wichtig, dass Sie die Fragen wahrheitsgemäß beantworten.<br/><br/>Bitte füllen Sie die nachstehenden freien Felder aus bzw. kreuzen Sie die jeweils auf Sie zutreffenden<br/><br/>Antwortalternativen an. Wenn Sie bereits an einer Sitzung teilgenommen und diesen Fragebogen ausgefüllt haben, überspringen Sie bitte die Abschnitte „Angaben zur Person“ und „Sprache und Region“ und füllen Sie den Fragebogen erst ab Seite 2 „Rauch- und Trinkverhalten“ aus.<br/><br/>Bei Fragen können Sie sich jederzeit an die Versuchsleitung wenden."
        case "SAM":
          return "Aktuelle Empfindung und Stimmung<br><br>Bitte kreuzen Sie für jede Reihe die Nummer unter der Figur an, die zu Ihrem aktuellen Empfinden und Ihrer aktuellen Stimmung passt."
      }
      return
    }
  },
};
</script>

<style>

</style>
