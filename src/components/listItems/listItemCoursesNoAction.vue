<template>
  <v-card
    outlined
    tile
    class="my-2 mx-1 pa-2 rounded-lg"
    max-width="auto"
    @click="routeDetails()"
  >
    <v-row no-gutters align="start" justify="start">
      <v-list-item-title
        class="ml-2 mr-auto"
        style="justify-self: start"
        v-text="item.title"
      ></v-list-item-title>
    </v-row>
    <v-row no-gutters align="start" justify="start">
      <v-list-item-subtitle
        class="ml-2 mr-auto"
        style="justify-self: start"
        v-text="parseDate(item.date)"
      ></v-list-item-subtitle>
    </v-row>
  </v-card>
</template>

<script>
import { parseDate } from "@/scripts/common/utils";

export default {
  name: "listItemCoursesNoAction",
  data: () => ({}),
  props: ["item", "index"],
  components: {},
  mounted: function () {},
  methods: {
    routeDetails: function () {
      /*
      this.$router.push({
        name: "DashboardTherapist4b",
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: this.item,
          }),
        },
      });*/
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
  },
};
</script>

<style></style>
