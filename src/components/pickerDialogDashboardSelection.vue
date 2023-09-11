<template>
    <v-dialog v-model="dialog" persistent max-width="40%">
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-4 ml-2 mr-0" center>
            <span style="color: #000">{{ "Wählen Sie ihre Rolle" }}</span>
          </v-card-title>
          <center>
            <v-btn v-if="user.roles.includes('PATIENT')" class="mr-2" width="180px" height="180px" variant="elevated" @click="route(0)"><span color="#000">Patient</span></v-btn>
            <v-btn v-if="user.roles.includes('THERAPIST')" class="mr-2" width="180px" height="180px" variant="elevated" @click="route(1)"><span color="#000">Therapist</span></v-btn>
            <v-btn v-if="user.roles.includes('ADMIN')" width="180px" height="180px" variant="elevated" @click="route(2)"><span color="#000">Admin</span></v-btn>
          </center>
        </v-container>
        <v-tooltip location="bottom" :text="access_token">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="flat"
              v-if="access_token"
              v-bind="props"
              icon
              class="mx-2 mb-2"
              v-on:click="copyTextToClipboard(access_token)"
            >
              <v-icon>{{ "mdi-key-chain-variant" }}</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </v-card>
    </v-dialog>
</template>
<script>
import {appRouter} from "@/router/router.js";
export default {
  data() {
    return {
      dialog: false,
      access_token: sessionStorage.getItem("access_token"),
      user: JSON.parse(sessionStorage.getItem("user"))
    };
  },
  props: [/*"user",*/ "show"],
  components: {},
  mounted: function () {
    //console.log("User: " + this.user.roles)
    this.dialog = this.show;

  },
  methods: {
    copyTextToClipboard(value) {
      console.log(value);
      navigator.clipboard.writeText(value);
    },
    save: function () {
      this.dialog = false;
    },
    cancel: function() {
      this.dialog = false;
    },
    route: async function(value) {
      sessionStorage.removeItem("hideNavigation");
      console.log(value)
      switch (value) {
        case 0:
          await appRouter.push({ path: '/dashboard1'});
          break;
        case 1:
          await appRouter.push({ path: '/dashboardTherapist3'});
          break;
        case 2:
          await appRouter.push({ path: '/dashboardadmin1'});
          break;
        default:
          await appRouter.push({ path: '/dashboard1'});
          break;
      }
      this.dialog = false;
    }
  },
};
</script>

<style>
</style>
