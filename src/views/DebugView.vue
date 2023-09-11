<template>

  <v-card variant="text" class="mx-auto rounded-lg">
    <v-container fluid align="center">
      <v-col :cols="4" align="start" justify="start">
        <v-row dens align="start" justify="start">
          <v-card-title>DEBUG</v-card-title>
          <v-btn variant="outlined" class="ma-0" @click="api"> api </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </v-card>

  <v-card variant="text" class="mx-auto rounded-lg">
    <v-container fluid align="center">
      <v-col :cols="8" align="start" justify="start">
        <v-row dens align="start" justify="start">
          <LineChart class="mx-64" style="width: 500px" :chartData="data" :options="options" />
          <BarChart class="mx-64" style="width: 300px" :chartData="data" :options="options" />
        </v-row>
      </v-col>
    </v-container>
  </v-card>
  
</template>

<script>

import { BarChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "DebugView",
  setup() {

    const data = {
      labels: ['14.07.2023', '17.07.2023', '20.07.2023', '22.07.2023', '25.07.2023', '29.07.2023', '04.08.2023', '09.08.2023'],
      datasets: [
        
        {
          label: "PHQ9 Index",
          data: [20, 32, 28, 38, 42, 33, 28, 31],
          borderColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
          backgroundColor: ['#28B9AF', '#28B9AF', '#28B9AF', '#28B9AF', '#28B9AF', '#28B9AF', '#28B9AF', '#28B9AF'],
          fill: true
        },
        /*{
          label: "Jan",
          data: [20],
          borderColor: '#FFF',
          backgroundColor: '#28B9AF',
          fill: true
        },
        {
          label: "Feb",
          data: [32],
          borderColor: '#888',
          backgroundColor: '#AF28B9',
          fill: true
        },
        {
          label: "Feb",
          data: [32],
          borderColor: '#888',
          backgroundColor: '#AF28B9',
          fill: true
        },
        {
          label: "Feb",
          data: [32],
          borderColor: '#888',
          backgroundColor: '#AF28B9',
          fill: true
        },
        {
          label: "Feb",
          data: [32],
          borderColor: '#888',
          backgroundColor: '#AF28B9',
          fill: true
        },
        {
          label: "Feb",
          data: [32],
          borderColor: '#888',
          backgroundColor: '#AF28B9',
          fill: true
        },*/
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: 'PHQ9 Visualisierung',
        },
      },
    };

    return { data, options };
  },
  data: () => ({}),
  props: {},
  components: { BarChart, LineChart },
  mounted: function () {},
  methods: {
    api: function () {
      this.route("/debug1");
    },
    meditation: function () {
      this.route("/debug2");
    },
    test1: function () {
      this.route("/debug3");
    },
    route: function (route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
