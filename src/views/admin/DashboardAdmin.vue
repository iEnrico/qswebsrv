<template>
  <v-app>
    <NavBar v-if="hideNavigation == false" :buttons="getItems" />
    <v-main>
      <div class="content">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "@/components/navBar.vue";
import { useSessionStore } from "@/stores/sessionStore";
import auth from "@/scripts/auth/auth";

export default {
  name: "DashBoardAdmin",
  setup() {
    const sessionStore = useSessionStore();
    return {
      sessionStore,
    };
  },
  computed: {
    getItems() {
      return [
        {
          title: "Hilfe",
          variant: 0,
          route: "/help",
          icon: "mdi-help-circle-outline",
        },
        {
          title: "VR-Login",
          variant: 1,
          route: this.deviceLogin,
          icon: "mdi-panorama-variant",
        },
      ];
    },
  },
  components: {
    //SideBar,
    NavBar,
  },
  mounted: async function () {

    this.hideNavigation = sessionStorage.getItem('hideNavigation') != null;

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    /*
    var csv = await utils.jsonToCSV(JSON.stringify(require("@/locales/de.json")));
    var json = await utils.csvToJSON(csv);
    console.log("["+json+"]");
    */

  },
  data: () => ({
    hideNavigation: false,
  }),
  watch: {
    $route(to /*, from*/) {
      sessionStorage.removeItem("hideNavigation");
      this.hideNavigation = false;
      switch (to.name) {
        case "DashboardAdmin3":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          break;
        case "DashboardAdmin3a":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          break;
      }
    },
  },
  methods: {
    deviceLogin: function () {
      auth.deviceLogin();
    },
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
