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
//import { parseDate } from "@/scripts/media/utils";

export default {
  name: "listItemCourseOption",
  data: () => ({}),
  props: ["item", "index", "closeClick"],
  components: {},
  mounted: function () {},
  methods: {
    onClick: function (item) {
      this.closeClick(item);
      /*
      this.$router.push({
        name: "DashboardTherapist4b",
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: this.item,
          }),
        },
      });*/
    },
  },
};
</script>

<style></style>
