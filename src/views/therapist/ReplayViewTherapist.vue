<template>
  <v-row
    v-if="0 == 1"
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <!--
    <v-card-title> {{ session_data.title }} vom {{ parseDate(session_data.date) }}</v-card-title>
    -->
    <v-card-title> Patient Replays</v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
      <!--  append-icon="mdi-account-circle"  -->
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      {{$t("overlay_btn_close")}}
      <!--
      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
      -->
    </v-btn>
  </v-row>
  <v-progress-linear
    v-if="0 == 1"
    :model-value="0"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 90%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="
            height: 100%;
            background-color: rgb(212, 212, 212);
            display: flex;
            flex-direction: column;
            justify-content: center;
          "
        >
        <center>
          <v-card-title>Timestamp: {{ Math.floor(slider1) }}</v-card-title>
        </center>
        </v-card>
      </v-col>
      <v-col :cols="12" style="height: 10%">
        <v-slider
          v-model="slider1"
          min="0"
          max="2143"
          color="#28B9AF"
          class="px-8"
        ></v-slider>
        
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "ReplayViewTherapist",
  data: () => ({
    slider1: 0,
    commands: [ 
      { title: 'Command1' , value: 'com1' }, 
      { title: 'Command2' , value: 'com2' }, 
      { title: 'Command3' , value: 'com3' }, 
    ]

  }),
  components: {  },
  mounted: function () {},
  methods: {
    sendCommand: function (item) {
      console.log("send synchonous therapist command: " + item.title + ", " + item.value)
    }
  },
};
</script>

<style></style>
