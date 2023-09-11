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
//import { parseDate } from "@/scripts/media/utils";

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
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
  },
};
</script>

<style></style>
