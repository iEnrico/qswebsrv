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
      <v-card-text class="pa-2 ma-0" style="max-width: 80%; font-size: 0.8em"><b>{{item.title}}</b></v-card-text>
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
      <v-tooltip location="bottom" :text="getCourseInfo(item.course_type)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="grey" :icon="getCourseIcon(item.course_type)"></v-icon>
        </template>
      </v-tooltip>
      <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
        ><span class="text-grey">{{
          getCourseInfo(item.course_type)
        }}</span></v-card-text
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
    "item", "mode"
  ],
  components: {},
  watch: {},
  mounted: async function () {
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
    getCourseIcon: function (index) {
      switch (index) {
        case common.course_type_init:
          return "mdi-book-settings-outline";
        case common.course_type_web:
          return "mdi-web";
        case common.course_type_vr:
          return "mdi-safety-goggles";
        case 8:
        case common.course_type_question:
        case common.course_type_demographic:
        case common.course_type_ffaf:
        case common.course_type_diary:
          return "mdi-file-sign";
        case common.course_type_video:
          return "mdi-file-video-outline";
      }
      return;
    },
    getCourseInfo: function (index) {
      switch (index) {
        case common.course_type_init:
          return "Inital";
        case common.course_type_web:
          return "Web";
        case common.course_type_vr:
          return "VR";
        case 8:
        case common.course_type_question:
        case common.course_type_demographic:
        case common.course_type_ffaf:
        case common.course_type_diary:
          return "Fragebogen";
        case common.course_type_video:
          return "Video";
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
