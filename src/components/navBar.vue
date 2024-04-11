<template>
  <v-app-bar :elevation="0" color="#F6F6F6" class="flex-grow-0" app dark>
    <navHeader />
    <navButton v-for="(item, i) in buttons" :key="i" :item="item" />
    <v-menu location="bottom" open-on-hover :close-on-content-click="false">
      <template v-slot:activator="{ props: menu }">
        <!--<v-tooltip location="bottom" text="Benutzer">
        <template v-slot:activator="{ props: tooltip }">-->
        <v-btn v-bind="mergeProps(menu/*, tooltip*/)" icon class="mx-2">
          <v-icon>mdi-account-cog</v-icon>
        </v-btn>
        <!--</template>
        </v-tooltip>
      
      :prepend-avatar="require('@/assets/avatar.png')"
      
      -->
      </template>
      <v-card min-width="300" class="rounded-lg">
        <v-list class=" ml-8 mt-4 mb-4">
          <span class="text-h6 ">
           {{ user.fullName }} </span>
        </v-list>
        <v-divider :thickness="1" class="mt-0 border-opacity-100" color="#f22"></v-divider>
        <v-list>
          
          <v-list-item>
            <v-btn variant="flat" @click="redirectPrivacy()">  {{$t("login_button_privacy")}}  </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="flat" @click="redirectProfile()">  {{$t("login_button_account")}}  </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="flat" @click="logout()"> {{$t("login_button_signout")}} </v-btn>
          </v-list-item>
          
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
//import api from "@/scripts/api/api";
import { clearData, isValidToken } from "@/scripts/auth/auth";
import auth from "@/scripts/auth/auth";
//import api from "@/scripts/api/api";
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
      //api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
  methods: {
    logout: async function () {
      if (isValidToken()) {
        auth.logout(this.id_token);
      } else {
        clearData();
        this.$router.push({
          name: "/",
        });
        /*
        await auth.refreshToken();
        token = getLocalToken();
        console.log("token refreshed!")
        auth.logout(this.id_token);
        */
      }
    },
    redirectProfile: function () {
      window.location.href = "https://keycloak.relivr-integration.nuromedia.com/realms/relivr/account/#/personal-info"
      //https://keycloak.relivr-integration.nuromedia.com/realms/relivr/account
      
    },
    redirectPrivacy() {
      this.$router.push({
        name: "Privacy",
        //params: { data: JSON.stringify(item) },
      });
    },
    mergeProps,
  },
};
</script>

<style></style>
