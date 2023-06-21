<template>
  <v-card variant="text" class="mx-auto rounded-lg">
    <v-col :cols="12" align="start" justify="start">
      <v-row dens align="start" justify="start">
        <v-card-title
          >Durchgeführte Kurse: {{ data.progress }}/{{ data.max_progress }}</v-card-title
        >
      </v-row>
      <v-list style="height: 10em; overflow-y: auto">
        <v-list-item
          v-for="(item, i) in data.completed"
          :key="i"
          class="pa-0 ma-0"
          style="min-height: 32px; padding: 0px 0px"
        >
          <v-row no-gutters align="start" justify="start" class="ml-4">
            <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
              <v-icon icon="mdi-circle-small"></v-icon>
            </v-list-item>
            <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item>
          </v-row>
        </v-list-item>
      </v-list>
      <v-row dens align="start" justify="start" class="mt-4">
        <v-card-title>Enthaltene Einheiten:</v-card-title>
      </v-row>
      <v-list style="height: 8em; overflow-y: auto">
        <v-list-item
          v-for="(item, i) in data.completed"
          :key="i"
          class="pa-0 ma-0"
          style="min-height: 32px; padding: 0px 0px"
        >
          <v-row no-gutters align="start" justify="start" class="ml-4">
            <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
              <v-icon icon="mdi-circle-small"></v-icon>
            </v-list-item>
            <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
              <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>
            </v-list-item>
          </v-row>
        </v-list-item>
      </v-list>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "CoursesHistory",
  data: () => ({}),
  props: ["data"],
  components: {},
  mounted: function () {},
  methods: {},
};
</script>

<style></style>
