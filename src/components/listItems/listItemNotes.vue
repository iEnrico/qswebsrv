<template>
  <v-card flat tile class="ma-2 pa-2 rounded-lg" max-width="100%" @click="routeDetails()">
    <v-row no-gutters align="center" justify="start">
      <v-list-item-title
        max-width="40px"
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="item.text"
      ></v-list-item-title>
      <v-list-item-subtitle
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="parseDate(item.date)"
      ></v-list-item-subtitle>
      <v-list-item-subtitle
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="parseDate(item.date)"
      ></v-list-item-subtitle>
    </v-row>
  </v-card>
</template>

<script>
import { parseDate } from "@/scripts/common/utils";

export default {
  name: "NotesHistory",
  data: () => ({}),
  props: ["item", "index"],
  components: {},
  mounted: function () {},
  methods: {
    routeDetails: function () {
      this.$router.push({
        name: "Dashboard3b",
        params: { data: JSON.stringify(this.item) },
      });
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
  },
};
</script>

<style></style>
