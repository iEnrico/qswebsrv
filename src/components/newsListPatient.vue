<template>
  
  <v-card class="mx-auto mt-4 pb-2 ml-2 mr-2 rounded-lg" variant="elevated">
    <v-row class="pa-0 ma-0 fill-height" style="align-items: center">
      <v-card-title class="mt-0 mb-2 pb-0">{{ $t("title_dashboard_news") }}</v-card-title>
      <v-spacer></v-spacer>
      <PickerDialogWriteNote v-if="showAddButton"/>
    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>
    <ListItemNews :item="item" :index="i" v-for="(item, i) in items" :key="i" />
  </v-card>
</template>

<script>
import api from "@/scripts/api/api";
import { useSessionStore } from "@/stores/sessionStore";
//import data from "../scripts/data/data.js";
//import common from "@/scripts/common/common";
//import { useNotesStore } from "@/stores/notesStore";
import { usePatientsStore } from "@/stores/patientStore";
//import { Notes } from "@/types/note";
import { Patients } from "@/types/patient";
import ListItemNews from "@/components/listItemNews.vue";
import PickerDialogWriteNote from "@/components/pickerDialogWriteNote.vue";

export default {
  name: "NewsList",
  setup() {
    const sessionStore = useSessionStore();
    //const notesStore = useNotesStore();
    const patientStore = usePatientsStore();
    return {
      sessionStore,
      //notesStore,
      patientStore,
    };
  },
  data: () => ({
    items: [], //sessions: [],
  }),
  components: { ListItemNews, PickerDialogWriteNote },
  props: ["showAddButton", /*"questions", "onBack", "onNext"*/],
  mounted: async function () {
    // mocked data
    //this.sessions = this.sessionStore.getOpenSessions;

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

    /*
    console.log(new Notes(this.notesStore.getNotes).models);
    this.items = new Notes(this.notesStore.getNotes).models;
    */

    console.log(new Patients(this.patientStore.getPatients).models);
    this.items = new Patients(this.patientStore.getPatients).models;
  },
  methods: {
    onAddNote() {

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
