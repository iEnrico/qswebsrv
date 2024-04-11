<template>
  <v-app>
    <SideBar v-if="hideNavigation == false" :login_role="0" :index="currentIndex"/>
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
import SideBar from "@/components/sideBar.vue";
//import { useCommonStore } from "@/stores/commonStore";
//import { useSessionStore } from "@/stores/sessionStore";
//import { useNotesStore } from "@/stores/notesStore";
import auth from "@/scripts/auth/auth";

export default {
  name: "DashBoard",
  /*setup() {
    const commonStore = useCommonStore();
    const sessionStore = useSessionStore();
    const notesStore = useNotesStore();
    return {
      sessionStore,
      commonStore,
      notesStore,
    };
  },*/
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
    SideBar,
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
    currentIndex: 0,
    hideNavigation: false,
  }),
  watch: {
    $route(to, from) {
      console.log("routeing from " + from.name + " to: " + to.name);
      sessionStorage.removeItem("hideNavigation");
      this.hideNavigation = false;
      switch (to.name) {
        case "Dashboard2a":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          this.currentIndex = 0;
          break;
        case "Dashboard3":
          this.currentIndex = 1;
          break;
        case "Dashboard3a":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          this.currentIndex = 1;
          break;
        case "Dashboard3b":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          this.currentIndex = 2;
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
