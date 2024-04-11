<template>
  <v-app>
    <SideBar v-if="hideNavigation == false" :login_role="1" :index="currentIndex"/>
    <NavBar v-if="hideNavigation == false" :buttons="buttons" />
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
import { useNotesStore } from "@/stores/notesStore";

export default {
  name: "DashboardTherapist",
  setup() {
    const commonStore = useCommonStore();
    const sessionStore = useSessionStore();
    const notesStore = useNotesStore();
    return {
      sessionStore,
      commonStore,
      notesStore,
    };
  },
  data: () => ({
    buttons: [
      {
        title: "Hilfe",
        route: "/helptherapist",
        variant: 0,
        icon: "mdi-help-circle-outline",
      },
    ],
    menu: [],
    currentIndex: 0,
    hideNavigation: false,
  }),
  components: {
    SideBar,
    NavBar,
  },
  mounted: async function () {
    
    this.hideNavigation = sessionStorage.getItem('hideNavigation') != null;
    //console.log("hideNavigation: " + this.showOverlay);

    /*
    var csv = await utils.jsonToCSV(JSON.stringify(require("@/locales/de.json")));
    var json = await utils.csvToJSON(csv);
    console.log("["+json+"]");
    */
  },
  watch: {
    $route(to /*, from*/) {
      sessionStorage.removeItem("hideNavigation");
      this.hideNavigation = false;
      //console.log("route target: " + to.name);
      switch (to.name) {
        case "DashboardTherapist3c":
          sessionStorage.setItem('hideNavigation', 'yes');
          this.currentIndex = 1;
          this.hideNavigation = true;
          break;
      }
    },
  },
  methods: {
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
