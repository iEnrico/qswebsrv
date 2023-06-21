<template>
  <v-card
    outlined
    tile
    class="ma-2 pa-2 rounded-lg"
    max-width="24em"
    @click="routeDetails()"
  >
    <v-row no-gutters align="center" justify="start">
      <v-icon size="24" :icon="item.icon" color="black"></v-icon>
      <v-list-item-title
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="item.text"
      ></v-list-item-title>
      <v-list-item-subtitle
        style="justify-self: end"
        v-text="parseDate(item.date)"
      ></v-list-item-subtitle>
    </v-row>
  </v-card>
</template>

<script>
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
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });

      //.toLocaleString();
    },
  },
};
</script>

<style></style>
