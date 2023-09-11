<template>
  <v-app>
    <div class="splash">
      <v-img
        class="ma-16 bg-white"
        width="30em"
        aspect-ratio="16:9"
        :src="require('@/assets/reliVRLogo.svg')"
      ></v-img>
      <!-- @click="!access_token ? login() : routeDashboard()" -->
      <div class="row pt-0" style="vertical-align: center">
        <v-btn
          variant="outlined"
          class="ma-0"
          @click="login()"
        >
          {{ !access_token ? $t("login_button_signin") : "Anmelden" }}
        </v-btn>
        <v-tooltip location="bottom" :text="access_token">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="flat"
              v-if="access_token"
              v-bind="props"
              icon
              class="mx-2"
              v-on:click="copyTextToClipboard(access_token)"
            >
              <v-icon>{{ "mdi-key-chain-variant" }}</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </div>
    </div>
    <v-spacer></v-spacer>
    <v-footer style="background-color: #e0f2f1; flex: 0 0 0" height="48px">
      <v-row justify="center" no-gutters>
        {{ "made with " }}<v-icon color="red" small>{{ "mdi-heart-outline" }}</v-icon>
      </v-row>
    </v-footer>
  </v-app>
  
  <PickerDialogDashboardSelection v-if="this.user" :show="access_token!=null" />
 
</template>

<script>
import api from "@/scripts/api/api.js";
import auth from "@/scripts/auth/auth";
import PickerDialogDashboardSelection from "@/components/pickerDialogDashboardSelection.vue";

export default {
  name: "LoginView",
  data: function () {
    return {
      user: null,
      access_token: sessionStorage.getItem("access_token"),
      id_token: sessionStorage.getItem("id_token"),
    };
  },
  components: { PickerDialogDashboardSelection },
  mounted: async function () {
    if (!this.access_token) {
      auth.generateToken();

      // debug
      var args = new URLSearchParams(window.location.search);
      var code = args.get("code");
      window.sessionStorage.setItem("keycloak_code", code);
    } else {

      await api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));

    }
  },
  methods: {
    login: function () {
      auth.login();
    },
    getUsername() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      return user.fullName;
    },
    copyTextToClipboard(value) {
      console.log(value);
      navigator.clipboard.writeText(value);
    },
    /*
    routeDashboard: function () {
      if (this.admin_role) {
        this.$router.push("/dashboardadmin1");
      }
      else if (this.therapist_role) {
        this.$router.push("/dashboardTherapist3");
      }
      else {
        this.$router.push("/dashboard1" );
      }
    },
    */
  },
};
</script>

<style></style>
