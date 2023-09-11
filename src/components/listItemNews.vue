<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="40em"
    >
      <v-card class="pa-4 ma-4">
        <v-card-title class="ml-0 pl-2">
          {{note.title }} {{ parseDate(note.date) }}
        </v-card-title>
        <v-divider :thickness="1" class="mt-0 border-opacity-100" color="#f22"></v-divider>
        <v-card-text class="ml-0 pl-2 mb-4">
          {{note.text}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="dialog = false"><span class="text-white">Ok</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-hover v-for="(note, i) in item.notes" :key="i">
    <template v-slot:default="{ isHovering, props }">
      <v-row
        v-bind="props"
        no-gutters
        class="pt-2"
        align="center"
        justify="start"
        :style="isHovering ? 'cursor: pointer; background-color: #CBE2DD' : 'cursor: pointer; background-color: white'"
        @click="showNews(note)"
      >
      
        <v-col cols="12" sm="8">
          <v-list-item-title
            max-width="40px"
            class="ml-4 mr-auto"
            style="justify-self: start"
            v-text="note.title"
          ></v-list-item-title>
        </v-col>

        <v-col cols="12" sm="4">
          <v-list-item-subtitle
            class="ml-4 mr-auto"
            style="justify-self: end"
            v-text="parseDate(note.date)"
          ></v-list-item-subtitle>
        </v-col>

        <v-col cols="12" sm="8">
          <v-list-item-subtitle
            class="ml-4 mb-2 mr-auto"
            style="justify-self: start">
            <div class="headerClass">{{note.text}}</div>
          </v-list-item-subtitle>
        </v-col>
        <v-divider
          v-if="i != (item.notes.length-1)"
          class="border-opacity-100"
          :thickness="1"
          color="#f22"
        ></v-divider>
      </v-row>
    </template>
  </v-hover>
  
</template>

<script>
//import { parseDate } from "@/scripts/media/utils";

export default {
  name: "ListItemNews",
  data: () => ({
    dialog: false,
    note: null
  }),
  props: ["item", "index"],
  components: {},
  mounted: function () {},
  methods: {
    showNews(note) {
      this.note = note;
      this.dialog = true;
    },
    routeDetails: function () {
      this.$router.push({
        name: "Dashboard3b",
        params: { data: JSON.stringify(this.item) },
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

<style>
.headerClass{
    display: block !important;
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*
v-row:hover {
  background-color: #4FAF9C40;
}*/
</style>
