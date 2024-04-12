<template>
  <v-card
    variant="outlined"
    tile
    class="my-2 mx-4 pa-2 rounded-lg"
    max-width="auto"
    :style="'border: 1px solid #D9D9D9;'"
    @click="routeDetails()"
  >
    <v-row no-gutters align="center" justify="start">
      <v-col :cols="3" style="height: 14%">
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
            class="ml-2 mr-auto"
            style="justify-self: start"
            v-text="item.text"
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
      <v-col :cols="7" style="height: 14%">
        <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
          <v-icon color="#1827AD">{{ "mdi-clock" }}</v-icon>
        </v-btn>
        <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
          <v-icon color="#31A500">{{ "mdi-checkbox-multiple-marked-circle" }}</v-icon>
        </v-btn>
        <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
          <v-icon color="#C9AB00">{{ "mdi-file-document-edit" }}</v-icon>
        </v-btn>
        <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
          <v-icon color="#1827AD">{{ "mdi-clock-outline" }}</v-icon>
        </v-btn>
      </v-col>
      <v-col :cols="2" style="height: 14%">
        <v-row no-gutters align="center" justify="end">
          <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
            <v-icon>{{ "mdi-email-outline" }}</v-icon>
          </v-btn>
          <v-btn :style="'border: 1px solid #D9D9D9;'" variant="outlined" class="mr-2">
            <v-icon>{{ "mdi-key-chain-variant" }}</v-icon>
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

clock-outline       = planned/scheduled
clock               = ?

text-box-edit       = in edit mode
file-document-edit  = in edit mode

checkbox-multiple-marked-circle   = done, complete

*/
import { parseDate } from "@/scripts/common/utils";

export default {
  name: "listItemPatient",
  data: () => ({}),
  props: ["item", "index"],
  components: {},
  mounted: function () {},
  methods: {
    routeDetails: function () {
      this.$router.push({
        name: "DashboardTherapist3b",
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
      return parseDate(timecode)
    },
  },
};
</script>

<style></style>
