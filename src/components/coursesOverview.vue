<template>
  <!-- min-height="35em" max-height="35em" -->
  <v-card class="mx-auto mt-0 ml-2 mr-2 rounded-lg" :variant="showCard ? 'elevated' : 'text'">
    <v-card-title class="mt-0 mb-2 pb-0" v-if="showCard">
      {{ $t("title_dashboard_active_courses") }}
    </v-card-title>
    <v-divider :thickness="1" class="border-opacity-100" color="#f22" v-if="showCard"></v-divider>
    
    <center>
      <v-progress-circular
        class="mx-8 my-8"
        v-if="loading"
        indeterminate
        color="#28B9AF"
      />
    </center>

    <div v-if="!loading">
      <!--<v-card-text class="mt-0 mb-0 pb-0" style="font-size: 1.1em">Aktuelle Aufgaben</v-card-text>-->
      <v-container fluid>
        <v-row >
          <!--  class="ma-2 pa-2" :cols="3" :cols="4" :cols="item.flex" -->
          <div v-for="item in availableProcedures.data" :key="item.id"> 
            <CoursesOverviewItem :item="item"  :mode="mode" :clickable="showCard" :onUnitChange="onUnitChange"/>
          </div>
        </v-row>
      </v-container>
      
      <center style="height: 100%" v-if="availableProcedures.data?.length <= 0">
        <v-card-subtitle class="mb-4" style="text-align: start;"> Sie haben noch keine Kurse hinterlegt. </v-card-subtitle>
      </center>

      <v-divider :thickness="1" class="border-opacity-100" color="#f22" v-if="showCard"></v-divider>
    </div>

  </v-card>
</template>

<script>
import CoursesOverviewItem from "@/components/coursesOverviewItem.vue";
import { useSessionStore } from "@/stores/sessionStore";
import { getNextAvailableProcedures } from "@/scripts/procedureEngine";

export default {
  name: "CoursesOverview",
  setup() {
    const sessionStore = useSessionStore();
    return {
      sessionStore,
    };
  },

  watch: {
    /*customData:  function () {
      console.log("update-data:\n" + JSON.stringify(this.customData));
       //this.refresh()
    },*/
  },

  data: () => ({
    loading: false,
    availableProcedures: [],
  }),
  props: [
    "mode", "customData", "showCard", "onUnitChange"
  ],
  components: {CoursesOverviewItem},
  mounted: async function () {
    await this.refresh()
},
  
  updated: async function () {
    await this.refresh()
  },
  
  methods: {
    refresh: async function () {
      this.loading = true;

      if (!this.access_token) {
        this.user = JSON.parse(sessionStorage.getItem("user"));
      }

      // get available units, if none avail maybe one started
      // if none available AND none started then the user has no plan. show "EMPTY CAREPLAN"
      this.availableProcedures = this.mode == 1 ? { data: this.customData } : await getNextAvailableProcedures() 
      
      this.loading = false;
    },
  },
};
</script>

<style>

</style>
