<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    :color="login_role == 1 ? '#28B9AF' : '#FFFFFF'"
  >
    <v-list>
      <v-list-item
        v-if="!isOpen"
        prepend-icon="mdi-menu"
        :style="login_role == 1 ? 'color: #FFFFFF' : 'color: #404040'"
      ></v-list-item>
      <v-list-item v-if="isOpen"
        ><img
          v-if="isOpen"
          :src="
            login_role == 0
              ? require('@/assets/reliVRLogo.svg')
              : require('@/assets/reliVRLogoInvert.svg')
          "
          width="120"
          alt="no logo :("
          class="mx-2"
          @click="route(0, '/')"
      /></v-list-item>

      <!--
v-on:click="route('/')"

      <v-list-item
        v-if="isOpen"
        :prepend-avatar="require('@/assets/avatar.png')"
        title="Ambrosius Zwackelmann"
        subtitle="thesparxinc@gmail.com"
      ></v-list-item>
      -->
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in getItems"
        class="rounded-pill"
        :key="i"
        :variant="selectedIndex == i ? 'elevated' : 'flat'"
        @click="route(i, item.route)"
        :prepend-icon="item.icon"
        :style="
          login_role == 0
            ? 'color: ' +
              (selectedIndex == i ? '#ffffff' : '#404040') +
              '; background-color: ' +
              (selectedIndex == i ? '#28B9AF' : '#ffffff')
            : 'color: ' +
              (selectedIndex == i ? '#404040' : '#ffffff') +
              '; background-color: ' +
              (selectedIndex == i ? '#ffffff' : '#28B9AF')
        "
        :title="$t(item.title)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<!--
:style="
          'color: ' +
          (selectedIndex == i ? '#404040' : '#ffffff') +
          '; background-color: ' +
          (selectedIndex == i ? '#ffffff' : '#28B9AF')
        "
-->

<script>
export default {
  name: "SideBar",
  data: () => ({
    isOpen: false,
    selectedIndex: sessionStorage.getItem("navdrawer_last_index"),
  }),
  watch: {
    $route(to /*, from*/) {
      console.log("sidebar route target: " + to.name);
      switch (to.name) {
        case "Dashboard1":
          this.selectedIndex = 0;
          break;
        case "Dashboard2a":
          this.selectedIndex = 0;
          break;
        case "Dashboard3":
          this.selectedIndex = 1;
          break;
        case "Dashboard3b":
          this.selectedIndex = 1;
          break;
        case "Dashboard4":
          this.selectedIndex = 2;
          break;  
        case "Dashboard5":
          this.selectedIndex = 3;
          break;  
        case "Dashboard6":
          this.selectedIndex = 4;
          break;  
        case "Debug":
          this.selectedIndex = 5;
          break;  
          
        case "DashboardTherapist3":
          this.selectedIndex = 0;
          break;
        case "DashboardTherapist4":
          this.selectedIndex = 1;
          break;
        case "DashboardTherapist5":
          this.selectedIndex = 2;
          break;
        case "DashboardTherapist6":
          this.selectedIndex = 3;
          break;
      }
      window.sessionStorage.setItem("navdrawer_last_index", this.selectedIndex);
    },
  },
  props: ["login_role", "index"],
  computed: {
    // a computed getter
    getItems() {
      return this.login_role == 0
        ? [
            {
              route: "/Dashboard1",
              icon: "mdi-home-outline", //view-dashboard-outline
              title: "sidebar_start",
            },
            {
              route: this.getDestination(0),
              icon: "mdi-notebook-outline",
              title: "sidebar_session",
            },
            {
              route: "/Dashboard4",
              icon: "mdi-calendar-month-outline",
              title: "sidebar_notes",
            },
            {
              route: "/Dashboard5",
              icon: "mdi-file-question outline",
              title: "sidebar_questionnaires",
            },
            {
              route: "/Dashboard6",
              icon: "mdi-file-sign outline",
              title: "sidebar_act_courses",
            },/*
            {
              route: "/Debug",
              icon: "mdi-hammer-wrench",
              title: "Debug",
            },*/
          ]
        : [
            /*
            {
              route: "/DashboardTherapist1",
              icon: "mdi-view-dashboard-outline",
              title: "sidebar_therapist_start",
            },*/
            {
              route: this.getDestination(1),
              icon: "mdi-notebook-outline",
              title: "sidebar_therapist_session",
            },
            {
              route: "/DashboardTherapist4",
              icon: "mdi-calendar-month-outline",
              title: "sidebar_therapist_notes",
            },
            {
              route: "/DashboardTherapist5",
              icon: "mdi-account-switch-outline",
              title: "sidebar_therapist_control",
            },
            {
              route: "/DashboardTherapist6",
              icon: "mdi-video",
              title: "sidebar_therapist_replay",
            },
          ];
    },
  },
  components: {},
  mounted: function () {
    this.selectedIndex = sessionStorage.getItem("navdrawer_last_index") //this.index;
  },
  methods: {
    mouseenter() {
      this.isOpen = true;
    },
    mouseleave() {
      this.isOpen = false;
    },
    getDestination(id) {
      return id == 0
        ? "/Dashboard3"
        : "/DashboardTherapist3";
    },
    route: function (index, route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
