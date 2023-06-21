<template>
  <v-tooltip location="bottom" :text="this.item.title">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        class="mx-2"
        v-on:click="
          this.item.variant == 0 ? this.route(this.item.route) : this.item.route()
        "
      >
        <v-icon>{{ this.item.icon }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: "NavBarButton",
  data: () => ({}),
  props: ["item"],
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
