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
    parseDate(timecode) {
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
  },
};
</script>

<style></style>
