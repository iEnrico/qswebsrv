<template>
  <NewsTicker />
  <CoursesView />
</template>

<script>
import NewsTicker from "@/components/newsTicker.vue";
import CoursesView from "@/components/coursesOverview.vue";
//import { useNotificationStore } from "../stores/notificationStore.ts";

export default {
  name: "HomeView",
  /*setup() {
    const store = useNotificationStore();
    return {
      store,
    };
  },*/
  data: () => ({}),
  components: { NewsTicker, CoursesView },
  mounted: function () {
    //console.log(" >> Test output 'commonstore': " + this.store.totalNotifications);
  },
  methods: {},
};
</script>

<style></style>
