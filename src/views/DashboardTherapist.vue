<template>
  <v-app>
    <SideBar :login_role="1" />
    <NavBar :buttons="buttons" />
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

export default {
  name: "DashboardTherapist",
  setup() {
    const commonStore = useCommonStore();
    const sessionStore = useSessionStore();
    const notificationStore = useNotificationStore();
    const notesStore = useNotesStore();
    return {
      sessionStore,
      commonStore,
      notificationStore,
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
  }),
  components: {
    SideBar,
    NavBar,
  },
  mounted: async function () {
    this.commonStore.addUser({ id: this.commonStore.totalUser, name: "Raphael" });

    console.log(
      ">> Test output 'commonstore': " +
        this.commonStore.totalUser +
        ", " +
        JSON.stringify(this.commonStore.users)
    );

    /*
    var csv = await utils.jsonToCSV(JSON.stringify(require("@/locales/de.json")));
    var json = await utils.csvToJSON(csv);
    console.log("["+json+"]");*/
  },
  methods: {
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
