<template>
  <v-row style="align-items: center; justify-items: center">
    <v-card-title>Tagebuch</v-card-title>
    <v-btn
      style="height: 24px"
      variant="text"
      size="medium"
      icon="mdi-information-outline"
      color="#28B9AF"
      to="/dashboard3pre"
    ></v-btn>
  </v-row>
  <v-btn variant="outlined" to="/dashboard3a" class="mt-6 ml-2"> + Neuer Eintrag </v-btn>
  <NotesHistory />
</template>

<script>
import NotesHistory from "@/components/notesHistory.vue";
export default {
  name: "NotesView",
  data: () => ({}),
  props: {},
  components: {
    NotesHistory,
  },
  mounted: function () {},
  methods: {},
};
</script>

<style></style>
