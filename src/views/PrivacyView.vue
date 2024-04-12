<template>
  <v-app>
    <div class="privacy" >
      <span class="mb-4 text-4xl text-black">Datenschutz</span>
      <iframe style="width: 80%; height: 34em;" :src="getURL()"></iframe>
      <v-btn variant="outlined" class="mt-8" @click="onClose()">
        {{ "« Zurück" }}
      </v-btn>
    </div>
  </v-app>
</template>

<script>

export default {
  name: "PrivacyView",
  data: function () {
    return {
    };
  },
  components: {  },
  mounted: async function () {
  },
  methods: {
    getURL() {
      var baseURL = window.location.origin
      return baseURL + "/privacy.html"
    },
    onClose() {
      this.$router.go(-1)
    }
  },
};
</script>

<style></style>
