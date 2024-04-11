<template>
  <v-list
    style="height: auto; overflow-y: auto; background-color: transparent"
    class="pa-0 mb-4"
  >
    <v-card
      class="ml-2 mr-2 mb-1 mt-3 pt-0"
      v-for="item in news"
      :key="item.id"
      @click="routeCourse(item.src)"
      :color="getNotificationBGColor(item.state)"
    >
      <v-row class="pa-2 ma-0" justify="center" align="center">
        <v-icon
          :color="getStateColor(item)"
          :icon="this.getStateIcon(item.state)"
        ></v-icon>
        <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
          ><span :style="'color: ' + getNotificationTextColor(item.state)">{{ getNotificationMessage(item.state) }}</span></v-card-text
        >
      </v-row>
      <v-btn
        color="orange-lighten-2"
        v-if="item.hasAction"
        variant="text"
        @click="routeCourse(item.src)"
      >
        fortsetzen
      </v-btn>
    </v-card>
  </v-list>
</template>

<script>
import common from "@/scripts/common/common.js";
//import api from "@/scripts/api/api";

import { getDescriptionText, getTextByLanguage } from "@/scripts/common/utils";
import { 
  getNextAvailableProcedures, 
  isAllUnitsCompleteSync, 
  getCourseType, 
  getStateColor, 
  getStateIcon, 
  //getStateId, 
  getStateMsg 
} from "@/scripts/procedureEngine";

import { useCurrentSessionStore } from "@/stores/currentSessionStore";

export default {
  name: "NewsTicker",
  setup() {
    const sessionStore = useCurrentSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
    availableOrRunning: [],
    news: [],
  }),
  components: {},
  mounted: async function () {

    let result = await getNextAvailableProcedures()
    
    let item = result.data[0]
    //console.log("item: " + JSON.stringify(item))

    var contentPackage = ( isAllUnitsCompleteSync(item) && item.nextActivityUnit)
        ? item.nextActivityUnit.contentPackage
        : item.activity 
          ? item.activity.units[0].contentPackage
          : item.units[0].activityUnit.contentPackage

    this.availableOrRunning.push(
      this.createItem(item, contentPackage)
    );

    this.news = this.availableOrRunning.filter(function (el) {
      //console.log("el-state " + JSON.stringify(el) )
      return el.state == "OVERDUE" /*common.session_state_overdue*/ || el.state ==  "RUNNING" //common.session_state_running
      //return el.state == common.session_state_overdue || el.state == common.session_state_running
    });

    //console.log("news: " + JSON.stringify(this.news))

  },
  methods: {
    createItem: function (item, contentPackage) {
      return {
          id: item.id,
          name: contentPackage.name,
          date: 1673482872000,
          title: getTextByLanguage(item.translation ? item.translation : contentPackage.translations, this.$i18n),
          subtitle: "Lorem Ipsum 1",
          state: item.state, // getStateId(item.state) == common.session_state_running ? common.session_state_running : common.session_state_notstarted, // see "session states" in common.js
          description: getDescriptionText(contentPackage.name),
          image: require('@/assets/sunshine.jpg'),
          progress: 0,
          max_progress: 1,
          duration: "10 Min.",
          course_type: getCourseType(contentPackage.type), // item.activity.primaryType 
          elements: [],
          requirements: [],
          completed: [],
          src: item
      }
    },
    getNotificationBGColor: function (index) {
      switch (index) {
        case "RUNNING": //common.session_state_running:
          return "rgba(250, 193, 148, 0.3)";
        case "OVERDUE": //common.session_state_overdue:
          return "rgba(244, 127, 118, 0.3)";
      }
      return;
    },
    getNotificationTextColor: function (index) {
      switch (index) {
        case "RUNNING": //common.session_state_running:
          return "#ff9200" //"rgba(250, 193, 148, 1)";
        case "OVERDUE": //common.session_state_overdue:
          return "rgba(244, 127, 118, 1)";
      }
      return;
    },
    getNotificationMessage: function (index) {
      switch (index) {
        case "RUNNING": //common.session_state_running:
          return "Es existiert eine laufende Kursdurchführung.";
        case "OVERDUE": //common.session_state_overdue:
          return "Sie haben einen ihrer Kurse verpasst. Bitte kontaktieren sie ihren Therapeuten.";
      }
      return;
    },
    getStateIcon: function (item) {
      return getStateIcon(item)
    },
    getStateMsg: function (item) {
      return this.$i18n.t(getStateMsg(item))
    },
    getStateColor: function (item) {
      //console.log("NewsTicker.getStateColor: " + item)
      return getStateColor(item)
    },
    routeCourse: function (item) {
      if (item.course_type == common.course_type_diary){

        //TODO: set current audio to audio store

        this.$router.push({
          name: "Dashboard3a",
          //params: {
          //  data: JSON.stringify(item),
          //},
        });

      } else {
        
        this.sessionStore.setItem(item)

        this.$router.push({
          name: "Dashboard2a",
          //params: {
          //  data: JSON.stringify(item),
          //},
        });
        
      }
    },
  },
};
</script>

<style></style>
