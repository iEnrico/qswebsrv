<template>
  <v-list
    style="height: auto; overflow-y: auto; background-color: transparent"
    class="pa-0"
  >
    <v-card
      class="ml-2 mr-2 mb-1 mt-3 pt-0"
      v-for="item in news"
      :key="item.id"
      @click="routeCourse(item)"
      :color="getNotificationBGColor(item.state)"
    >
      <v-row class="pa-2 ma-0" justify="center" align="center">
        <v-icon
          :color="getStateColor(item.state)"
          :icon="getStateIcon(item.state)"
        ></v-icon>
        <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
          ><span :style="'color: ' + getNotificationTextColor(item.state)">{{ getNotificationMessage(item.state) }}</span></v-card-text
        >
      </v-row>
      <v-btn
        color="orange-lighten-2"
        v-if="item.hasAction"
        variant="text"
        @click="routeCourse(item)"
      >
        fortsetzen
      </v-btn>
    </v-card>

<!-- v-if="item.state == common.session_state_overdue" -->

    <!--
    <v-card
      class="ml-2 mr-2 mb-1 mt-3 pt-1"
      v-for="item in news"
      :key="item.title"
      :color="getNotificationBGColor(item.type)"
    >
      <v-row class="pa-2 ma-0" justify="center" align="center">
        <v-icon
          :color="getStateColor(item.type)"
          :icon="getStateIcon(item.type)"
        ></v-icon>
        <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
          ><span style="color: #000">{{ item.message }}</span></v-card-text
        >
      </v-row>
      <v-btn
        color="orange-lighten-2"
        v-if="item.hasAction"
        variant="text"
        @click="routeCourse(item)"
      >
        fortsetzen
      </v-btn>
    </v-card>
    -->
  </v-list>
</template>

<script>
import { useSessionStore } from "@/stores/sessionStore";
import { useNotificationStore } from "@/stores/notificationStore";
//import data from "../scripts/data/data";
import common from "@/scripts/common/common.js";

export default {
  name: "NewsTicker",
  setup() {
    const sessionStore = useSessionStore();
    const notificationStore = useNotificationStore();
    return {
      notificationStore,
      sessionStore
    };
  },
  data: () => ({
    sessions: [],
    news: [],
  }),
  components: {},
  mounted: function () {
    this.sessions = this.sessionStore.getSessions;

    var newArray = this.sessions.filter(function (el) {
      return el.state == common.session_state_overdue || el.state ==  common.session_state_running
    });
    
    console.log("Filtered Data: " + newArray);

    this.news = newArray;//this.notificationStore.getNotifications;
  },
  methods: {
    getNotificationBGColor: function (index) {
      switch (index) {
        case common.session_state_running:
          return "rgba(250, 193, 148, 0.2)";
        case common.session_state_overdue:
          return "rgba(244, 127, 118, 0.2)";
      }
      return;
    },
    getNotificationTextColor: function (index) {
      switch (index) {
        case common.session_state_running:
          return "rgba(250, 193, 148, 1)";
        case common.session_state_overdue:
          return "rgba(244, 127, 118, 1)";
      }
      return;
    },
    getNotificationMessage: function (index) {
      switch (index) {
        case common.session_state_running:
          return "Es existiert eine laufende Kursdurchführung.";
        case common.session_state_overdue:
          return "Sie haben einen ihrer Kurse verpasst. Bitte kontaktieren sie ihren Therapeuten.";
      }
      return;
    },
    getStateIcon: function (index) {
      switch (index) {
        case common.session_state_notstarted:
          return "mdi-play-circle";
        case common.session_state_running:
          return "mdi-pause-circle";
        case common.session_state_done:
          return "mdi-check-circle";
        case common.session_state_overdue:
          return "mdi-alert-circle";
      }
      return;
    },
    getStateMsg: function (index) {
      switch (index) {
        case common.session_state_notstarted:
          return "not started";
        case common.session_state_running:
          return "running and paused";
        case common.session_state_done:
          return "done";
        case common.session_state_overdue:
          return "overdue";
      }
      return;
    },
    getStateColor: function (index) {
      switch (index) {
        case common.session_state_notstarted:
          return "#DDD";
        case common.session_state_running:
          return "#FAC194";
        case common.session_state_done:
          return "#4FAF9C";
        case common.session_state_overdue:
          return "#F47F76";
      }
      return;
    },
    routeCourse: function (item) {
      if (item.course_type == common.course_type_diary){
        this.$router.push({
          name: "Dashboard3a",
          //params: {
          //  data: JSON.stringify(item),
          //},
        });
      } else {
        this.$router.push({
          name: "Dashboard2a",
          params: {
            data: JSON.stringify(item),
          },
        });
      }
      
    },
  },
};
</script>

<style></style>
