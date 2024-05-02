<template>
  <v-list
    style="height: auto; overflow-y: auto; background-color: transparent"
    class="pa-0 mb-4"
  >
    <v-card
      class="ml-2 mr-2 mb-1 mt-3 pt-0"
      :color="getNotificationBGColor(status)"
    >
      <v-row class="pa-2 ma-0" justify="center" align="center">
        <v-icon
          :color="getStateColor(status)"
          :icon="this.getStateIcon(status)"
        ></v-icon>
        <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
          ><span :style="'color: ' + getNotificationTextColor(status)">{{ getNotificationMessage(status) }}</span></v-card-text
        >
      </v-row>

    </v-card>
  </v-list>
</template>

<script>
import common from "@/scripts/common/common.js";
//import api from "@/scripts/api/api";

import { 

  getStateMsg 
} from "@/scripts/procedureEngine";

import { useCurrentSessionStore } from "@/stores/currentSessionStore";

export default {
  name: "ProcedureMessageStatus",
  setup() {
    const sessionStore = useCurrentSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
  }),
  components: {},
  props: ["status"],
  mounted: async function () {
    console.log(this.status);
  },
  methods: {
    getNotificationBGColor: function (status) {
      if(status === "RESPONSE_START" || status === "STATUS_READY"){
          return "rgba(0, 0, 0, 0)";
      }else{
          return "rgba(250, 193, 148, 0.3)";
      }
    },
    getNotificationTextColor: function (status) {
      if(status === "RESPONSE_START" ||  status === "STATUS_READY"){
        return "#4FAF9C";
      }
      return "#FAC194" 
    },
    getNotificationMessage: function (status) {
      switch (status) {
        case "WAITING":
          return "Please wait that the  patient is connected";
        case "STATUS_READY": 
          return "Patient is Ready";
        case "STATUS_LOADING": 
          return "Please wait the vr patient is loading the resources";
        case "REQUEST_START": 
          return "Patient VR is Connected, waiting to start";
        case "RESPONSE_START": 
          return "Patient is Ready";
        case "RESPONSE_FINISH": 
          return "Session Finished";
        case "STATUS_UPLOADING_RESULTS": 
          return "Uploading results from VR";
        case "STATUS_EXIT": 
          return "SESSION FINISHED";
      }
      return;
    },
    getStateIcon: function (status) {
      switch (status) {
        case "RESPONSE_START": 
        return "mdi-check-circle";
        case "STATUS_READY": 
        return "mdi-check-circle";
        case "STATUS_UPLOADING_RESULTS": 
          return "mdi-cloud-download";
        default:
          return "mdi-alert-circle";
      }
    },
    getStateMsg: function (item) {
      return this.$i18n.t(getStateMsg(item))
    },
    getStateColor: function (status) {
      if(status === "RESPONSE_START" || status === "STATUS_READY"  ){
        return "#4FAF9C";
      }
      return "#FAC194"      
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
