<template>
  <v-card outlined tile class="ma-2 pa-2 rounded-lg" max-width="auto">
    <v-row no-gutters align="center" justify="start">
      <v-list-item-title
        class="ml-4 mr-auto"
        style="justify-self: start"
        v-text="index + ': ' + item.text"
      ></v-list-item-title>
      <v-btn
        style="height: 24px; width: 16px; justify-self: end"
        variant="text"
        size="medium"
        icon="mdi-close"
        color="red"
        @click="onClick(item)"
      ></v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "listItemCourseOption",
  data: () => ({}),
  props: ["item", "index", "closeClick"],
  components: {},
  mounted: function () {},
  methods: {
    onClick: function (item) {
      this.closeClick(item);
    },
  },
};
</script>

<style></style>
