<template>
  <img
    src="@/assets/reliVRLogo.svg"
    width="120"
    alt="logo"
    class="mx-4"
    v-on:click="route('/')"
  />
  <v-spacer></v-spacer>
</template>

<script>
//import auth from "@/scripts/auth/auth";
//import api from "@/scripts/api/api";
//import { mergeProps } from "vue";

export default {
  name: "NavBarHeader",
  data: () => ({}),
  components: {},
  mounted: function () {},
  methods: {
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
