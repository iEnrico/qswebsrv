<template>
  <v-card class="mx-auto mt-4 rounded-lg" variant="elevated">
    <v-card-title class="mt-0 mb-0 pb-0">{{
      $t("title_dashboard_courses")
    }}</v-card-title>
    <v-container fluid>
      <v-row dens>
        <!-- <v-col v-for="item in sessions.data" :key="item.title" :cols="item.flex"> -->
        <v-col v-for="item in sessions" :key="item.title" :cols="item.flex">
          <v-card
            class="rounded-lg"
            variant="outlined"
            :style="'border: 1px solid #D9D9D9;'"
            max-width="344"
            @click="routeCourse(item)"
          >
            <v-img
              :src="item.image ? item.image : require('@/assets/placeholder.png')"
              height="160px"
              cover
            ></v-img>
            <v-row class="pa-2 ma-0" justify="center" align="center">
              <v-icon color="grey" :icon="getCourseIcon(item.course_type)"></v-icon>
              <v-card-text class="pa-0 mt-0 mb-0 ml-2 mr-0"
                ><span class="text-grey">{{
                  getCourseInfo(item.course_type)
                }}</span></v-card-text
              >
              <v-spacer></v-spacer>
              <v-card-text class="pa-0 mt-0 mb-0 ml-0 mr-0 text-right"
                ><span class="text-grey">{{ "- Min." }}</span></v-card-text
              >
            </v-row>

            <!-- <v-card-title>{{ item.name }}</v-card-title> -->
            <!--<v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-subtitle>
                {{ item.progress }}/{{ item.max_progress }}
              </v-card-subtitle>
            </v-card-actions>-->
            <v-card-title>{{ item.title }}</v-card-title>
          </v-card>
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

export default {
  name: "CoursesView",
  setup() {
    const sessionStore = useSessionStore();
    return {
      sessionStore,
    };
  },
  data: () => ({
    sessions: [],
  }),
  components: {},
  mounted: async function () {
    // mocked data
    this.sessions = this.sessionStore.getOpenSessions;

    //TODO: Fetch Content Packages from Backend

    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));

      /*
      this.sessions = await api.getContentPackage(this.user.id);
      console.log("DATA FOR COURSES JSON: " + JSON.stringify(this.sessions));
      console.log("DATA FOR COURSES JSON: " + this.sessions.data.length);
      */
    }
  },
  methods: {
    getCourseIcon: function (index) {
      switch (index) {
        case common.course_type_init:
          return "mdi-book-settings-outline";
        case common.course_type_web:
          return "mdi-web";
        case common.course_type_vr:
          return "mdi-safety-goggles";
        case common.course_type_question:
          return "mdi-file-sign";
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
        case common.course_type_question:
          return "Fragebogen";
      }
      return;
    },
    routeCourse: function (item) {
      this.$router.push({
        name: "Dashboard2a",
        params: { data: JSON.stringify(item) },
      });
    },
  },
};
</script>

<style></style>
