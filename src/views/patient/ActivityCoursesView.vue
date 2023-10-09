<template>
  <v-card class="mx-auto mt-4 ml-2 mr-2 rounded-lg" variant="elevated">
    <v-card-title class="mt-0 mb-2 pb-0">{{
        $t("title_dashboard_activity_courses")
      }}</v-card-title>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
    <v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em"> {{ $t("description_dashboard_activity_courses") }}</v-card-text>
    <v-container fluid>
      <v-row dens>
        <v-col v-for="item in activities" :key="item.title" :cols="item.flex">
          <QuestionnaireOverviewItem :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import api from "@/scripts/api/api";
import QuestionnaireOverviewItem from "@/components/questionnaireOverviewItem.vue";

export default {
  name: "ActivityCoursesView",
  data: () => ({
    activities: [],
  }),
  props: [
    "mode"
  ],
  components: {
    QuestionnaireOverviewItem
  },
  watch: {},
  mounted: async function () {
    await this.getActivities();

  },
  methods: {
    getActivities: async function () {
      const activitiesResult = await api.getOtherAvailableActivities();
      for (let id in activitiesResult.data) {
        if ((activitiesResult.data[id].primaryType === 'WEBSITE') || (activitiesResult.data[id].primaryType === 'VR_DEVICE')) {
          console.log(activitiesResult.data[id].primaryType);
          this.activities.push(activitiesResult.data[id]);
        }
      }
    },
  },
};
</script>

<style>
</style>
