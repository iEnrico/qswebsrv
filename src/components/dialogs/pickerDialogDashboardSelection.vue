<template>
    <v-dialog v-model="dialog" persistent max-width="40%">
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-4 ml-2 mr-0" center>
            <span style="color: #000" class="text-2xl">{{ "Willkommen " + user.fullName }}</span>
          </v-card-title>
          <v-card-title class="pa-0 mt-0 mb-4 ml-2 mr-0" center>
            <span style="color: #000">{{ "Bitte wählen Sie ihre Rolle" }}</span>
          </v-card-title>
          <center>
            <v-btn v-if="user.roles.includes('PATIENT')" class="mr-8 rounded-lg" width="120px" height="120px" variant="outlined" @click="route(0)"><span color="#000">Patient</span></v-btn>
            <v-btn v-if="user.roles.includes('THERAPIST')" class="mr-8 rounded-lg" width="120px" height="120px" variant="outlined" @click="route(1)"><span color="#000">Therapist</span></v-btn>
            <v-btn v-if="user.roles.includes('ADMIN')" class="rounded-lg" width="120px" height="120px" variant="outlined" @click="route(2)"><span color="#000">Admin</span></v-btn>
          </center>
        </v-container>
        <v-tooltip location="bottom" text="click to copy your token!">
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
  props: [ "show", ],
  components: {},
  mounted: function () {
    if (this.user.roles.length == 0) {
      alert("Sie haben keine Nutzerrolle in ihrem Profil hinterlegt.")
    }

    //AUTOLOGIN IF ONLY ONE ROLE
    /**/
    else if (this.user.roles.length == 1) {
      switch (this.user.roles[0]) {
        case "PATIENT":
          this.route(0)
          break;
        case "THERAPIST":
          this.route(1)
          break;
        case "ADMIN":
          this.route(2)
          break;
        
        default:
          break;
      }
    }
    
   
    this.dialog = this.show;
  },
  methods: {
    copyTextToClipboard(value) {
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
