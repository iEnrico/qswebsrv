<template>
  <!-- <v-overlay v-model="overlay"></v-overlay> -->
  <v-container style="min-width: 100%; min-height: 100%" class="mx-0 my-0">
    <NewsTicker />
    <v-row no-gutters>
      <v-col cols="12" sm="8">
        <CoursesView :mode="0"/>
      </v-col>
      <v-col cols="12" sm="4">
        <NewsView :showAddButton="false"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsTicker from "@/components/newsTicker.vue";
import CoursesView from "@/components/coursesOverview.vue";
import NewsView from "@/components/newsListPatient.vue";
//import { useNotificationStore } from "../stores/notificationStore.ts";

export default {
  name: "HomeView",
  /*setup() {
    const store = useNotificationStore();
    return {
      store,
    };
  },*/
  data: () => ({
    //overlay: false,
  }),
  components: { NewsTicker, CoursesView, NewsView },
  mounted: function () {
    //console.log(" >> Test output 'commonstore': " + this.store.totalNotifications);
  },
  /*
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },*/
  methods: {},
};
</script>

<style></style>
