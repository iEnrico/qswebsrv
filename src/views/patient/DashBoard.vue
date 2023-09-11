<template>
  <v-app>
  <!-- 
    v-if="window.sessionStorage.getItem('reloaded') != null"
    v-if="showOverlay == false"
    -->
    <SideBar v-if="hideNavigation == false" :login_role="0" />
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
import { useCommonStore } from "@/stores/commonStore";
import { useSessionStore } from "@/stores/sessionStore";
import { useNotificationStore } from "@/stores/notificationStore";
import { useNotesStore } from "@/stores/notesStore";
import auth from "@/scripts/auth/auth";
import api from "@/scripts/api/api";

import { useCareplanRecordsStore } from "@/stores/careplanRecordStore";
import { CareplanRecord /*CareplanRecords*/ } from "@/types/careplan-record";

import { useContentPackagesStore } from "@/stores/contentPackageStore";
import { ContentPackage /*ContentPackages*/ } from "@/types/content-package";

export default {
  name: "DashBoard",
  setup() {
    const commonStore = useCommonStore();
    const sessionStore = useSessionStore();
    const notificationStore = useNotificationStore();
    const notesStore = useNotesStore();
    const careplanRecordsStore = useCareplanRecordsStore();
    const contentPackagesStore = useContentPackagesStore();
    return {
      sessionStore,
      commonStore,
      notificationStore,
      notesStore,
      careplanRecordsStore,
      contentPackagesStore,
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
    SideBar,
    NavBar,
  },
  /*
  updated: async function () {
    
    this.showOverlay = sessionStorage.getItem('reloaded') == null;
    console.log("overlay disabled: " + this.showOverlay);

  },*/
  mounted: async function () {

    /*
    this.commonStore.addUser({ id: this.commonStore.totalUser, name: "Raphael" });

    console.log(
      ">> Test output 'commonstore': " +
        this.commonStore.totalUser +
        ", " +
        JSON.stringify(this.commonStore.users)
    );
    */

    this.hideNavigation = sessionStorage.getItem('hideNavigation') != null;
    console.log("hideNavigation: " + this.showOverlay);

    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));

      /*
      this.sessions = await api.getContentPackage(this.user.id);
      console.log("DATA FOR COURSES JSON: " + JSON.stringify(this.sessions));
      console.log("DATA FOR COURSES JSON: " + this.sessions.data.length);
      */
    }

    /*
    var csv = await utils.jsonToCSV(JSON.stringify(require("@/locales/de.json")));
    var json = await utils.csvToJSON(csv);
    console.log("["+json+"]");
    */

    this.careplanRecords = await api.getCareplanRecords(this.user.id);
    this.careplanRecordsStore.addCareplanRecord(new CareplanRecord(this.careplanRecords));

    this.contentPackages = await api.getContentPackage(this.user.id);
    this.contentPackagesStore.addContentPackage(new ContentPackage(this.contentPackages));
  },
  data: () => ({
    careplanRecords: [],
    contentPackages: [],
    hideNavigation: false,
  }),
  watch: {
    $route(to /*, from*/) {
      sessionStorage.removeItem("hideNavigation");
      this.hideNavigation = false;
      console.log("route target: " + to.name);
      switch (to.name) {
        case "Dashboard2a":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          break;
        case "Dashboard3a":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          break;
        case "Dashboard3b":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.hideNavigation = true;
          break;
          /*
        default:
          this.showOverlay = true;
          break;
          */
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
