<template>
  <v-card class="mx-auto mt-0 rounded-lg" variant="elevated">
    <v-card-title class="mb-0">{{ $t("title_dashboard_news") }}</v-card-title>
    <v-list style="height: 11em; overflow-y: auto" class="pa-0">
      <v-card
        class="ml-4 mr-4 mb-1 mt-3 pt-1"
        v-for="item in news"
        :key="item.title"
        :subtitle="item.message"
        color="#fafafa"
      >
        <v-btn
          color="orange-lighten-2"
          v-if="item.hasAction"
          variant="text"
          @click="routeCourse(item)"
        >
          fortsetzen
        </v-btn>
      </v-card>
    </v-list>
  </v-card>
</template>

<script>
import { useNotificationStore } from "@/stores/notificationStore";
//import data from "../scripts/data/data";

export default {
  name: "NewsTicker",
  setup() {
    const notificationStore = useNotificationStore();
    return {
      notificationStore,
    };
  },
  data: () => ({
    news: [],
  }),
  components: {},
  mounted: function () {
    this.news = this.notificationStore.getNotifications;
  },
  methods: {
    routeCourse: function (item) {
      this.$router.push({
        name: "Dashboard2a",
        params: {
          data: JSON.stringify(item.link),
        },
      });
    },
  },
};
</script>

<style></style>
