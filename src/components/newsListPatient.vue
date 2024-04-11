<template>
  <!--min-height="35em" max-height="35em"-->
  <v-card class="mx-auto mt-4 pb-2 ml-2 mr-2 rounded-lg"  variant="elevated">
    <v-row class="pa-0 ma-0 fill-height" style="align-items: center">
      <v-card-title class="mt-0 mb-2 pb-0">{{ $t("title_dashboard_notes") }}</v-card-title>
      <v-spacer></v-spacer>
      <PickerDialogWriteNote v-if="showAddButton" :addNote="addNote"/>
      <!--
        <v-card-subtitle v-if="news.length > 0" class="mt-0 mb-2 pb-0">{{ news.length }}</v-card-subtitle>
      -->
    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>

    <v-list
      class="mt-0 pt-0 overflow-y-auto"
      style="height: 20em; background-color: #fff;"
    >
      
      <ListItemNews :item="item" :index="i" v-for="(item, i) in news" :key="i" :editNote="editNote" :deleteNote="deleteNote"/>

      <v-row
        no-gutters
        class="pt-2"
        align="center"
        justify="start"
        :style="isHovering ? 'cursor: pointer; background-color: #CBE2DD' : 'cursor: pointer; background-color: white'"
        v-if="news.length == 0" 
      >

        <v-col cols="12" sm="12">
          <v-list-item-title
            class="ml-4 mr-auto"
            style="justify-self: start; color: lightslategrey;"
            v-text='$t("notes_empty_space")'
          ></v-list-item-title>
        </v-col>
<!--{{ $t("title_dashboard_notes") }}-->
      </v-row>
      
    </v-list>
    
    

    <!--
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>
    <v-row class="pa-0 ma-0 fill-height" style="align-items: center">
      <v-spacer></v-spacer>
      <v-btn @click="routeNewsList()" variant="text" style="position: absolute; bottom: 0; right: 0;" class="mt-4 mb-2 pb-0"> 
        {{$t('dashboard_news_showall')}} 
      </v-btn>
      <v-spacer></v-spacer>
    </v-row>
    -->
  </v-card>
</template>

<script>
import { useSessionStore } from "@/stores/sessionStore";
//import { usePatientsStore } from "@/stores/patientStore";
//import { Patients } from "@/types/patient";

import ListItemNews from "@/components/listItems/listItemNews.vue";
import PickerDialogWriteNote from "@/components/dialogs/pickerDialogWriteNote.vue";

export default {
  name: "NewsList",
  setup() {
    const sessionStore = useSessionStore();
    //const patientStore = usePatientsStore();
    return {
      sessionStore,
      //patientStore,
    };
  },
  computed: {
    /*
    news () {
      return this.news
    },
    */
  },
  data: () => ({
    //items: [],
  }),
  components: { ListItemNews, PickerDialogWriteNote },
  props: ["news", "showAddButton", "addNote", "editNote", "deleteNote"],
  mounted: async function () {
    
    //TODO: Fetch Content Packages from Backend

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    //this.items = this.news//new Patients(this.patientStore.getPatients).models;
    //console.log("loaded news: " + JSON.stringify(this.news))
  },
  methods: {
    routeNewsList: function () {
      alert("implement load more data");
      /*
      this.$router.push({
        name: "Dashboard2a",
        params: { data: JSON.stringify(item) },
      });
      */
    },
    routeCourse: function (/*item*/) {
      this.$router.push({
        name: "Dashboard2a",
        //params: { data: JSON.stringify(item) },
      });
    },
  },
};
</script>

<style></style>
