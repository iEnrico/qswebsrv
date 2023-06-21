<template>
  <v-app>
    <div class="splash">
      <v-img
        class="ma-16 bg-white"
        width="30em"
        aspect-ratio="16:9"
        :src="require('@/assets/reliVRLogo.svg')"
      ></v-img>

      <div class="row pt-0" style="vertical-align: center">
        <v-btn
          variant="outlined"
          class="ma-0"
          @click="!access_token ? login() : routeDashboard(therapist_role ? 1 : 0)"
        >
          {{ !access_token ? $t("login_button_signin") : "Anmelden" /*getUsername()*/ }}
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

      <v-checkbox
        v-if="access_token"
        v-model="therapist_role"
        :label="`Therapist`"
      ></v-checkbox>
    </div>
    <v-spacer></v-spacer>
    <v-footer style="background-color: #e0f2f1; flex: 0 0 0" height="48px">
      <v-row justify="center" no-gutters>
        {{ "made with " }}<v-icon color="red" small>{{ "mdi-heart-outline" }}</v-icon>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import auth from "@/scripts/auth/auth";

export default {
  name: "LoginView",
  data: function () {
    return {
      therapist_role: false,
      access_token: sessionStorage.getItem("access_token"),
      id_token: sessionStorage.getItem("id_token"),
    };
  },
  components: {},
  mounted: function () {
    if (!this.access_token) {
      auth.generateToken();

      // debug
      var args = new URLSearchParams(window.location.search);
      var code = args.get("code");
      window.sessionStorage.setItem("keycloak_code", code);
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
    routeDashboard: function (login_role) {
      this.$router.push(login_role == 0 ? "/dashboard1" : "/dashboardTherapist3");
    },
  },
};
</script>

<style></style>
