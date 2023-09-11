<template>
  <v-app-bar :elevation="0" color="#F6F6F6" class="flex-grow-0" app dark>
    <navHeader />

    <navButton v-for="(item, i) in buttons" :key="i" :item="item" />

    <v-menu location="bottom" open-on-hover="true" :close-on-content-click="false">
      <template v-slot:activator="{ props: menu }">
        <!--<v-tooltip location="bottom" text="Benutzer">
        <template v-slot:activator="{ props: tooltip }">-->
        <v-btn v-bind="mergeProps(menu, tooltip)" icon class="mx-2">
          <v-icon>mdi-account-cog</v-icon>
        </v-btn>
        <!--</template>
        </v-tooltip>-->
      </template>
      <v-card min-width="300" class="rounded-lg">
        
        <!--

        <v-list>
          <v-list-item
            :prepend-avatar="require('@/assets/avatar.png')"
          >
          </v-list-item>
        </v-list>

        <v-divider :thickness="1" class="mt-2 border-opacity-100" color="#f22"></v-divider>

        -->

        <v-list>
          <v-list-item>
            <v-btn variant="flat" @click="redirectProfile()"> Kontoverwaltung </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="flat" @click="logout()"> logout </v-btn>
          </v-list-item>
          
          <!--
          <v-list-item>
            <v-btn variant="flat" @click="refreshToken()"> refresh token </v-btn>
          </v-list-item>
          -->

          <v-list-item>
            <v-combobox
              label="Sprache"
              :items="$i18n.availableLocales"
              v-model="$i18n.locale"
            ></v-combobox>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import auth from "@/scripts/auth/auth";
import api from "@/scripts/api/api";
import navHeader from "./navbaritems/navHeader.vue";
import navButton from "./navbaritems/navButton.vue";
import { mergeProps } from "vue";

export default {
  name: "NavBar",
  data: () => ({
    languages: [
      { title: "Deutsch", value: "de" },
      { title: "English", value: "en" },
    ],
    user: "",
  }),
  props: ["buttons"],
  components: { navHeader, navButton },
  mounted: function () {
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
  methods: {
    deviceLogin: function () {
      auth.deviceLogin();
    },
    logout: function () {
      auth.logout(this.id_token);
    },
    refreshToken: function () {
      auth.refreshToken();
    },
    redirectProfile: function () {
      window.location.href = "https://keycloak.relivr-integration.nuromedia.com/realms/relivr/account/#/personal-info"
      //https://keycloak.relivr-integration.nuromedia.com/realms/relivr/account
      
      //<a href="https://www.google.com" target="_blank">
      //auth.refreshToken();
    },
    /*
    help: function () {
      console.log("request backend data with following user: " + this.user.id);
      //api.getAvailableActivitys(this.user.id);
      //api.getCareplanRecords(this.user.id);
      api.getCareplanRecordById(this.user.id, 1);
    },
    route: function (route) {
      this.$router.push(route);
    },*/
    mergeProps,
  },
};
</script>

<style></style>
