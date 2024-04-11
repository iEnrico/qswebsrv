<template>

<v-card class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="ma-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">{{
        $t("description_dashboard_activities")
      }}</v-card-title>
      <v-btn
        style="height: 24px"
        variant="text"
        size="medium"
        icon="mdi-information-outline"
        color="#28B9AF"
        @click="showIntro()"
      ></v-btn>
      <v-spacer></v-spacer>
      <v-card class="rounded-lg" variant="text" min-width="400">
        <v-card-text>
          <v-text-field
            v-model="searchText"
            density="compact"
            variant="solo"
            label="Eintrag suchen..."
            append-inner-icon="mdi-magnify"
            clearable
            single-line
            hide-details
          ></v-text-field>
        </v-card-text>
      </v-card>
      <!--
      <v-btn  variant="elevated" style="background-color: #28B9AF;" @click="route('/dashboard3a')" class="mt-0 mr-0">
        <span class="text-white">+ Neuer Eintrag</span>
      </v-btn>
      -->
    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>

    <center>
      <v-progress-circular
        class="mx-8 my-8"
        v-if="loading"
        indeterminate
        color="#28B9AF"
      />
    </center>
    <QuestionairesList v-if="!loading" :searchText="searchText" :items="activities"/>
  </v-card>

<!--
  <v-card class="mx-auto mt-4 ml-6 mr-6 rounded-lg" variant="elevated">
    <v-card-title class="mt-0 mb-2 pb-0">{{
        $t("title_dashboard_activities")
      }}</v-card-title>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
    <v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em"> {{ $t("description_dashboard_activities") }}</v-card-text>

    <center>
      <v-progress-circular
        class="mx-8 my-8"
        v-if="loading"
        indeterminate
        color="#28B9AF"
      />
    </center>

    <v-container v-if="!loading" fluid>
      <v-row dens>
        <v-col v-for="item in activities" :key="item.title" :cols="item.flex">
          <QuestionnaireOverviewItem :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
-->

</template>

<script>
import QuestionairesList from "@/components/questionairesList.vue";
import api from "@/scripts/api/api";
//import QuestionnaireOverviewItem from "@/components/questionnaireOverviewItem.vue";

export default {
  name: "QuestionnairesView",
  data: () => ({
    loading: false,
    searchText: "",
    activities: [],
  }),
  props: [
    "mode"
  ],
  components: {
    QuestionairesList
  },
  watch: {},
  mounted: async function () {
    await this.getActivities();
  },
  methods: {
    getActivities: async function () {
      this.loading = true;
      
      const activitiesResult=  await api.getQuestionnaireAvailableActivities();
      if(activitiesResult){
        this.activities=activitiesResult.data;
      }

      this.loading = false;
    },
  },
};
</script>

<style>

</style>
