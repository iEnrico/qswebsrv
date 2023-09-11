<template>
  <v-card
    variant="outlined"
    tile
    class="my-2 mx-4 pa-2 rounded-lg"
    max-width="auto"
    :style="'border: 1px solid #D9D9D9'"
    @click="routeDetails()"
  >
    <v-row no-gutters align="center" justify="start">
      <v-col :cols="3" style="height: 14%">
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
      </v-col>
      <v-col :cols="6" style="height: 14%">
        <v-btn
          :style="'border: 1px solid #D9D9D9;'"
          variant="outlined"
          class="mr-2"
          width="80"
        >
          i1
        </v-btn>
        <v-btn
          :style="'border: 1px solid #D9D9D9;'"
          variant="outlined"
          class="mr-2"
          width="80"
        >
          i2
        </v-btn>
        <v-btn
          :style="'border: 1px solid #D9D9D9;'"
          variant="outlined"
          class="mr-2"
          width="80"
        >
          i3
        </v-btn>
      </v-col>
      <v-col :cols="3" style="height: 14%">
        <v-row no-gutters align="center" justify="end"
          ><v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
            a1
          </v-btn>
          <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
            a2
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
/*

CURSE STATE:
------------

*/

//import { parseDate } from "@/scripts/media/utils";

export default {
  name: "listItemCourses",
  data: () => ({}),
  props: ["item", "index"],
  components: {},
  mounted: function () {},
  methods: {
    routeDetails: function () {
      this.$router.push({
        name: "DashboardTherapist4b",
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: this.item,
          }),
        },
      });
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
