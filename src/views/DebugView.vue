<template>
  <v-card variant="text" class="mx-auto rounded-lg">
    <v-container fluid align="center">
      <v-col :cols="4" align="start" justify="start">
        <v-row dens align="start" justify="start">
          <v-card-title>DEBUG</v-card-title>
          <v-btn variant="outlined" class="ma-0" @click="api"> api </v-btn>
          <v-btn variant="outlined" class="ma-0" @click="meditation"> meditation </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DebugView",
  data: () => ({}),
  props: {},
  components: {},
  mounted: function () {},
  methods: {
    api: function () {
      this.route("/debug1");
    },
    meditation: function () {
      this.route("/debug2");
    },
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
