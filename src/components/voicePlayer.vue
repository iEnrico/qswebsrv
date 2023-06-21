<template>
  <div id="innerdiv"></div>
  <v-container class="pa-2 ma-2">
    <v-row no-gutters>
      <v-card max-width="344" color="#FFFFFF" class="rounded-lg" outlined tile>
        <av-line :line-width="2" line-color="#28B9AF" :src="this.test"></av-line>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VoicePlayer",
  data: () => ({
    test: null,
  }),
  props: ["audioPath"],
  components: {},
  created: function () {
    console.log("audio path: " + this.audioPath);
    var myModule = this.audioPath;
    this.test = require("@/assets/" + myModule);
    console.log("audio path: " + this.test);
  },
  methods: {},
};
</script>

<style></style>
