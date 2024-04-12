<template>
  <v-card flat tile class="ma-2 pa-2 rounded-lg" max-width="100%" @click="routeDetails()">
    <v-row no-gutters align="center" justify="start">
      <v-list-item-subtitle
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="data[0]"
      ></v-list-item-subtitle>
      <v-list-item-subtitle
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="data[1]"
      ></v-list-item-subtitle>
      <v-list-item-subtitle
        class="ml-4 mr-auto"
        style="justify-self: end"
        v-text="data[2]"
      ></v-list-item-subtitle>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NotesHistory",
  data: () => ({}),
  props: ["data"],
  components: {},
  mounted: function () {},
  methods: {
    routeDetails: function () {
      this.$router.push({
        name: "Dashboard3b",
        params: { data: JSON.stringify(this.item) },
      });
    },
  },
};
</script>

<style></style>
