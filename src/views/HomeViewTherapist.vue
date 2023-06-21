<template>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 20%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="
            height: 100%;
            background-color: yellowgreen;
            display: flex;
            flex-direction: column;
          "
        >
          <v-card-title>Therapist Nachrichten</v-card-title>
        </v-card>
      </v-col>
      <v-col :cols="12" style="height: 80% overflow: hidden;">
        <CalendarView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CalendarView from "./CalendarView.vue";
export default {
  name: "HomeViewTherapist",
  data: () => ({}),
  components: { CalendarView },
  mounted: function () {},
  methods: {},
};
</script>

<style></style>
