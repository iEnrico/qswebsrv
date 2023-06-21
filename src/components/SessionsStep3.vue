<template>
  <v-container fluid class="pa-0 ma-0 fill-height" v-if="1 == 1">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 70%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-2">
            <v-container fill-height fluid align="center" justify="center">
              <v-card-title
                >Setzen Sie für die Übung jetzt Ihre VR-Brille auf.</v-card-title
              >
              <v-card-subtitle class="ph-2 mt-8">
                Wenn Sie noch nicht angemeldet sind, führen Sie hier den Anmeldevorgang
                aus:
              </v-card-subtitle>
              <v-btn
                variant="outlined"
                class="ma-2 pa-2 mt-4"
                v-bind="props"
                v-on:click="deviceLogin"
                >VR-Login</v-btn
              >

              <v-card-text class="ma-2 pa-2 ml-4 mr-4 mt-16"
                >Nach dem Abschluss der VR-Übung können Sie mit dem nächsten Schritt
                fortfahren.</v-card-text
              >
            </v-container>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="9" style="height: 30%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end">
            <v-card-text class="ma-2 pa-2 ml-4 mr-4 mt-4"
              >Wenn Sie nach Abschluss der VR-Einheit nicht automatisch weitergeleitet
              werden, klicken sie bitte auf "fortfahren" um die Session
              abzuschliessen.</v-card-text
            >
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="3" style="height: 30%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end" class="pb-2">
            <v-btn color="orange-lighten-2" variant="text" @click="onBack()" class="ml-2">
              Zurück
            </v-btn>
            <v-btn color="orange-lighten-2" variant="text" @click="onNext()" class="ml-2">
              Weiter
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import auth from "@/scripts/auth/auth.js";

export default {
  name: "SessionsView3",
  data: () => ({}),
  props: ["data", "onBack", "onNext"],
  components: {},
  mounted: function () {},
  methods: {
    deviceLogin: function () {
      auth.deviceLogin();
    },
  },
};
</script>

<style></style>
