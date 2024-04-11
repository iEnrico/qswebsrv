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
  
  <v-btn variant="outlined" class="ma-0" @click="playDuoAudioSource()"> two audio files test </v-btn>
  <v-btn variant="outlined" class="ma-0" @click="getStream()"> GET stream </v-btn>
  <v-btn variant="outlined" class="ma-0" @click="postStream()"> POST stream </v-btn>
  <v-btn variant="outlined" class="ma-0" @click="deleteStream()"> DELETE stream </v-btn>
  
</template>

<script>

import { BarChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
//import { getLocalToken, } from '@/scripts/auth/auth.js';

import api from "@/scripts/api/api";

//import { /*NativeEventSource,*/ EventSourcePolyfill } from 'event-source-polyfill';
//import { fetchEventSource } from '@microsoft/fetch-event-source';

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
  mounted: function () {
    this.connectEventStream()
    //console.log(getLocalToken)
  },
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
    playDuoAudioSource() {

      var snd1  = new Audio();
      var src1  = document.createElement("source");
      src1.type = "audio/mpeg";
      src1.src  = require("@/assets/audio1.ogg");
      snd1.appendChild(src1);

      var snd2  = new Audio();
      var src2  = document.createElement("source");
      src2.type = "audio/mpeg";
      src2.src  = require("@/assets/audio2.ogg");
      snd2.appendChild(src2);

      snd1.play(); 
      snd2.play();
    },
    route: function (route) {
      this.$router.push(route);
    },
    connectEventStream: function () {
      
      /*let user = ""
      if (!this.access_token) {
        //api.getUserData();
        user = JSON.parse(sessionStorage.getItem("user"));
      }*/
      //alert(user)

      //var eventSourceInitDict = {https: {rejectUnauthorized: false}};
      //getLocalToken();
      
      /*
      var events = fetchEventSource('https://backend.relivr-integration.nuromedia.com/user/active-procedure/stream/', {
          onmessage(ev) {
              console.log(ev.data);
          }
      });
      */
      
      
      /*
      const events = new global.EventSource( 
        'https://backend.relivr-integration.nuromedia.com/user/active-procedure/stream/', 
        { 
          withCredentials: true,
          headers: {'Authorization': 'Bearer ' + getLocalToken()}
        } 
      ); 
      */

      // 'http://localhost:3000/events');
      
      // alert(events.withCredentials)
      
      /*
      events.onopen = (event) => {
        if (event.status != 200) {
          throw new Error(`error status ${event}`);
        }
      }
      */

    },
    postStream() {
      var result = api.postStrean()
      alert(JSON.stringify(result))
    },
    getStream() {
      var result = api.getStrean()
      alert(JSON.stringify(result))
    },
    deleteStream() {
      var result = api.deleteStream()
      alert(JSON.stringify(result))
    }
  },
};
</script>

<style></style>
