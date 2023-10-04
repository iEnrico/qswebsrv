<template>
  <v-card
    class="rounded-lg"
    variant="outlined"
    :style="'border: 1px solid '+getStateColor(item.state)"
    max-width="200"
    min-width="200"
    @click="routeCourse(item)"
  >
    <v-row class="pa-2 ma-0" justify="top" align="top">
      <v-card-text class="pa-2 ma-0" style="max-width: 80%; font-size: 0.8em"><b>{{item.name}}</b></v-card-text>
      <v-tooltip location="bottom" :text="getStateMsg(item.state)">
        <template v-slot:activator="{ props }">
          <v-icon
            class="pa-0 ma-2"
            v-bind="props"
            :color="getStateColor(item.state)"
            size="20px"
            :icon="getStateIcon(item.state)"
          ></v-icon>
        </template>
      </v-tooltip>
    </v-row>
    <v-row class="pa-2 ma-0" justify="center" align="center">
      <v-tooltip location="bottom" >
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="grey" >{{ "mdi-file-sign" }}</v-icon>
        </template>
      </v-tooltip>
      <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
        ><span class="text-grey" >{{ getTextByLanguage(item.translations) }}</span></v-card-text
      >
    </v-row>
  </v-card>
</template>

<script>
import { useSessionStore } from "@/stores/sessionStore";
import common from "@/scripts/common/common";

export default {
  name: "CourseOverviewItem",
  setup() {
    const sessionStore = useSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
  }),
  props: [
    "item"
  ],
  components: {},
  watch: {},
  mounted: async function () {
  },
  methods: {

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
    getTextByLanguage:function(translations){
        let lan="en";
        if(this.$i18n.locale === "Deutsch"){
           lan= "de" 
        }
      const translation=  translations.find((trans)=>trans.locale ===lan);

      if(translation){
        return translation.text;
      }
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
      if (this.mode == 0) {
        this.$router.push({
          name: item.course_type == 3 ? "Dashboard3a" : "Dashboard2a",
          params: { data: JSON.stringify(item) },
        });
      } else {
        this.$router.push({
          name: "DashboardTherapist3c",
          params: { data: JSON.stringify(item) },
        });
      }
    },
  },
};
</script>

<style>

</style>
