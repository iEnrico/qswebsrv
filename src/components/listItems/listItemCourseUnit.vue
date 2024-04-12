<template>
  <v-card outlined tile class="ma-2 pa-2 rounded-lg" max-width="auto">
    <v-row no-gutters align="center" justify="start">
      <v-list-item-title
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="item.text"
      ></v-list-item-title>
    </v-row>
  </v-card>
</template>

<script>
import { parseDate } from "@/scripts/common/utils";

export default {
  name: "listItemCourseUnit",
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
