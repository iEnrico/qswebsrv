<template>
  <SelectDlg ref="finish" />

  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: auto">
        <v-card
          variant="elevated"
          class="pa-0 ma-0 rounded-lg"
          style="
            height: 100%;
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
          "
        >
  
          <!--
          <v-card-title>Scenario Timeline</v-card-title>
        -->
          <!--

          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item, index) in labels"
              :key="index"
            >

              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col cols="4" class="d-flex justify-start">
                      {{ item }}
                    </v-col>
                    <v-col
                      cols="8"
                      class="text-grey"
                    >
                      <v-fade-transition leave-absolute>
                        <span
                          v-if="expanded"
                          key="0"
                        >
                          {{ "some different text here?" }}
                        </span>
                        <span
                          v-else
                          key="1"
                        >
                          {{ "some information text maybe..." }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <v-list
                  class="mt-0 pt-0"
                  style="overflow-y: auto; background-color: #fff"
                >
                  <v-row class="pa-0 ma-0" v-for="(item, i) in (index == 0 ? intro_items : index == 1 ? story_items : outro_items)" :key="i">
                    <v-alert
                        v-for="(subitem, n) in item"
                        :key="n"
                        class="ma-2 fill-height"
                        :style="'border: 0.2em; border-color: ' + subitem?.bordercolor+ '; border-style: solid;'"
                        :value="true"
                        :color="itemPlayedOnce(subitem.id) ? '#cce8cc' : '#ffd2d2'"
                        width="25%"
                    > 

                      <v-row class="pa-0 ma-0">
                          <v-btn
                            variant="flat"
                            v-if="subitem?.entry_point"
                            icon
                            class="mx-2"
                            v-on:click="startSession()"
                          >
                            <v-icon>{{ "mdi-play" }}</v-icon>
                          </v-btn>
                          <span style="z-index: 20;"> {{ subitem?.id }} - {{ subitem?.text }} </span>
                      </v-row>

                      <v-spacer></v-spacer>

                      <v-progress-linear
                          v-if="this.active_item == subitem.id"
                          :model-value="progress"
                          :max="max_progress"
                          color="rgba(0, 0, 0, 0.2)"
                          style="position:absolute; z-index: 0;"
                          class="ml-0 mr-0 mt-0 mb-0 fill-height" 
                      />
                      
                      <v-row style="z-index: 1;" class="pa-0 ma-0 mt-4" > 
                          <v-tooltip v-for="(option, x) in subitem?.successors" :key="x" location="bottom" :text="getNameOfOption(option, (index == 0 ? intro_items : index == 1 ? story_items : outro_items))">
                              <template v-slot:activator="{ props }">
                                  <v-btn
                                      v-bind="props"
                                      color="black"
                                      variant="outlined"
                                      :disabled=" (!this.nextEnabled || this.active_item != subitem.id) && !itemPlayedOnce(subitem.id) "
                                      class="pa-2 ma-0 ml-0 mr-2"
                                      @click="chooseNextElement(option)"
                                  >
                                      {{ option }}
                                  </v-btn>
                              </template>
                          </v-tooltip>
                      </v-row>

                    </v-alert>
                  </v-row>
                </v-list>
              </v-expansion-panel-text>

            </v-expansion-panel>
          </v-expansion-panels>

-->
          <v-btn @click="simulateVRConnection()" class="pa-2 ma-2 ml-0 mr-2">
            <span class="text-xs" style="z-index: 20"> SIMULAR RUNNING VR (PRUEBAS)</span>
          </v-btn>

          <v-btn @click="finishSession" class="pa-2 ma-2 ml-0 ms-auto mr-2" width="200" color="info">
            <span class="text-xs" style="z-index: 20"> Finish</span>
          </v-btn>
          <ProcedureMessageStatus :status="status" />
          <v-list
            v-for="(item, index) in labels"
            :key="index"
            class="mt-4 pt-0"
            style="overflow-y: auto; background-color: #fff"
          >
            <span class="ml-4 mb-2 mt-2 text-xl text-grey">{{ item }}</span>
            <v-divider
              :thickness="1"
              class="mt-0 mb-2 border-opacity-100"
              color="#f22"
            ></v-divider>
            <v-row
              class="pa-0 ma-0 mx-4"
              v-for="(item, i) in index == 0
                ? intro_items
                : index == 1
                ? story_items
                : outro_items"
              :key="i"
            >
              <v-alert
                v-for="(subitem, n) in item"
                :key="n"
                class="ma-2 fill-height rounded-lg"
                :style="
                  'border: 0.1em; border-color: ' +
                  subitem?.bordercolor +
                  '; border-style: solid;'
                "
                :value="true"
                :color="itemPlayedOnce(subitem.id) ? '#cce8cc' : '#fff'"
                width="25%"
              >
                <v-row class="pa-0 ma-0">
                  <v-chip
                    :color="subitem?.bordercolor"
                    size="small"
                    variant="flat"
                  >
                    <span class="text-xs font-weight-bold" style="z-index: 20">
                      {{ subitem?.id }}
                    </span>
                  </v-chip>

                  <v-spacer></v-spacer>

                  <v-icon
                    v-on:click="replayItem(subitem)"
                    v-if="itemPlayedOnce(subitem.id)"
                    style="z-index: 1000;"
                    class="mr-0"
                    size="20px"
                    color="#666 "
                    >{{ "mdi-repeat-variant" }}</v-icon
                  >

                  <v-icon
                    v-on:click="startSession()"
                    v-if="subitem?.entry_point && !this.active_item"
                    :size="this.status === 'RESPONSE_START' ?  '25px' : '20px' "
                    :color="this.status === 'RESPONSE_START' ?  '#006400' : '#666' "
                    >{{ "mdi-play-circle-outline" }}</v-icon
                  >
                </v-row>

                <v-row class="pa-0 ma-0 mt-2">
                  <v-tooltip
                    width="25%"
                    location="bottom"
                    :text="getNameOfOption(subitem.id, dataset)"
                  >
                    <template v-slot:activator="{ props }">
                      <span
                        v-bind="props"
                        class="text-sm font-weight-bold"
                        style="z-index: 20"
                      >
                        {{ subitem?.description }}
                      </span>
                    </template>
                  </v-tooltip>
                </v-row>

                <v-row
                  v-if="
                    this.active_item.id == subitem.id ||
                    (!itemPlayedOnce(subitem.id) && subitem?.entry_point)
                  "
                  class="pa-0 ma-0 mt-2"
                >
                  <span class="text-sm" style="z-index: 20">
                    {{ subitem?.text }}
                  </span>
                </v-row>

                <v-spacer></v-spacer>

                <v-progress-linear
                  v-if="this.active_item.id == subitem.id"
                  :model-value="progress"
                  :max="max_progress"
                  color="rgba(0, 0, 0, 0.2)"
                  style="position: absolute; z-index: 0"
                  class="ml-0 mr-0 mt-0 mb-0 fill-height"
                />
                <!--
v-if="this.active_item.id == subitem.id"
                -->
                <v-row
                  v-if="
                    itemPlayedOnce(subitem.id) ||
                    this.active_item.id == subitem.id
                  "
                  style="z-index: 1"
                  class="pa-0 ma-0 mt-4"
                >
                  <v-icon class="mr-2" size="20px" color="#666">{{
                    "mdi-arrow-right-bottom"
                  }}</v-icon>
                  <v-tooltip
                    width="25%"
                    location="bottom"
                    v-for="(option, x) in subitem?.successors"
                    :key="x"
                    :text="getNameOfOption(option, dataset)"
                  >
                    <template v-slot:activator="{ props }">
                      <v-chip
                        v-bind="props"
                        class="mr-2 mt-1"
                        :color="getColorOfOption(option, dataset)"
                        size="x-small"
                        variant="flat"
                        :disabled="!this.nextEnabled || this.status ==='RESPONSE_FINISH'"
                        @click="chooseNextElement(option)"
                      >
                        <span class="text-xs" style="z-index: 20">
                          {{ option }}
                        </span>
                      </v-chip>
                    </template>
                  </v-tooltip>
                </v-row>
              </v-alert>
            </v-row>
          </v-list>
        </v-card>

      </v-col>

      <v-col :cols="12" style="height: auto">
        <v-card
          variant="elevated"
          class="pa-0 ma-0 rounded-lg"
          style="
            height: 100%;
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
          "
        >
          <v-row no-gutters>
            <v-col :cols="4" style="height: auto">
              <div style="min-height: 100%" id="outerDiv">
                <div
                  id="inner1"
                  style="min-height: 100%; min-width: 100%; z-index: 1"
                >
                  <img
                    id="tracking_canvas"
                    class="pa-0 ma-0"
                    style="min-height: 100%; min-width: 100%"
                    :src="require('@/assets/placeholder.png')"
                  />
                </div>
                <!--min-height: 100%; min-width: 100%; -->
                <div id="inner2" :style="trackingPosition + ' z-index: 2;'">
                  <!--<v-icon id="tracking_spot" color="blue" style="">{{ "mdi-checkbox-blank-circle-outline" }}</v-icon>-->
                  <v-icon id="tracking_spot" color="blue" style="">{{
                    "mdi-record-circle-outline"
                  }}</v-icon>
                </div>
              </div>
            </v-col>
            <v-col :cols="8" class="pa-4" style="height: auto">
              <v-btn
                v-for="(option, x) in snippet_items"
                :key="x"
                @click="sendCommand(option)"
                class="pa-2 ma-2 ml-0 mr-2"
              >
                <span class="text-xs" style="z-index: 20">
                  {{ option.text }}
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import ScenarioCommands from '@/components/scenarioCommands.vue';
//import ScenarioTimeline from '@/components/scenarioTimeline.vue';

import SelectDlg from "@/components/dialogs/dialogSelection.vue";

//import ConfirmDlg from "@/components/dialogs/dialogConfirmation.vue";
import ProcedureMessageStatus from "@/components/procedureMessageStatus.vue";

import data from "@/scripts/data/data";
import api from "@/scripts/api/api";
import {  connectActiveProcedure, connectEventSource } from '@/scripts/procedureEngine';

/*

appreciation
bravery
citizenship
creativity
curiosity
fairness
forgiveness
gratitude
hope
humility
humor
integrity
kindness
leadership
love_of_learning
love
open-mindedness
persistence
perspective
prudens
self-regulation
social_intelligence
spirituality
vitality
intro
transition_1 (woman35 Übergang 1)
transition_2
transition_3
transition_4
outro

*/

export default {
  name: "ControlViewTherapist",
  data: () => ({
    labels: ["Intro", "Story", "Outro"],
    dataset: [],
    status:"STATUS_READY",
    intro_items: [],
    story_items: [],
    outro_items: [],

    action_items: [],
    snippet_items: [],

    progress: 0, // timely progress of current active element
    max_progress: 2,

    nextEnabled: false,

    active_items: [],
    active_item: "",
    patientId: "",
    procedureId: "",
    unitId: "",

    trackingPosition: "",
  }),
  components: { SelectDlg,ProcedureMessageStatus },
  watch: {},
  created() {
    // Acceder al parámetro de consulta desde la ruta y almacenarlo en el estado local
    this.patientId = this.$route.query.patientId;
    this.unitId = this.$route.query.unitId;
    this.procedureId = this.$route.query.procedureId;
  },
  //components: { ScenarioTimeline, ScenarioCommands },
  mounted: function () {
    this.startStream();
    this.loadData();
    this.doTrackingAnimation();
  },
  methods: {
    async startStream() {
      connectActiveProcedure(this.onMessageProcedure)
      connectEventSource(this.procedureId, this.unitId, this.onMessageEvent)
    },
    async onMessageProcedure(data){
      console.log(data)
      if(data.state==="COMPLETED" || data.state==="ABORTED"){
        this.$router.push({
          name: "DashboardTherapist3",
        });
      }
    },
    async onMessageEvent(data){
      switch (data.type) {
        case "STATUS_READY":
          this.emiteSessionControlEvent("REQUEST_START")
          this.status=data.type;
          break;
        case "STATUS_LOADING":
          this.status=data.type;
        break;
        case "REQUEST_START":
          this.status=data.type;
        break;
        case "RESPONSE_START":
          this.status=data.type;
          break;
        case "STATUS_COMPLETED":
          this.status=data.type;
          this.emiteSessionControlEvent("REQUEST_FINISH")
        break;
        case "RESPONSE_FINISH":
          this.status=data.type;
          break;
        case "STATUS_UPLOADING_RESULTS":
          this.status=data.type;
          break;
        case "STATUS_EXIT":
          this.status=data.type;
          this.emiteSessionControlEvent("STATUS_EXIT")
          break;
        case "VR":
          this.setCoordinates(data)
          break;
        default:
          break;
      }
    },
    loadData() {
      this.dataset = data.getRolePlayDataSet();

      this.action_items = this.dataset.filter(
        (item) => !item.oneshot && item.action
      );

      this.intro_items[this.intro_items.length] = this.dataset.filter(
        (item) => !item.oneshot && !item.action && item.id.startsWith("intro")
      );

      //TODO: not fix it to 20
      for (let i = 0; i < 20; i++) {
        this.story_items[this.story_items.length] = this.dataset.filter(
          (item) =>
            !item.oneshot &&
            !item.action &&
            item.id.startsWith("" + i) &&
            !item.successors?.includes("finish")
        );
      }

      this.outro_items[this.outro_items.length] = this.dataset.filter(
        (item) =>
          !item.oneshot && !item.action && item.successors?.includes("finish")
      );

      this.snippet_items = this.dataset.filter(
        (item) => item.oneshot && item.oneshot == true
      );
    },
    startSession() {
      if(this.status === "RESPONSE_START"){
          var nextItem = this.dataset.find(
            (item) => item.id == this.intro_items[0][0].id
          );
          //this.active_items.push( nextItem )
          this.progress = 0;
          this.nextEnabled = false;
          this.active_item = nextItem;
          this.emiteInputEvent("REQUEST_PLAY",nextItem.id)
          this.doTimerAnimation();
      }

    },
    replayItem(item) {
      console.log(item);
      this.progress = 0;
      this.nextEnabled = false;
      this.active_item = item;
      this.sendCommand(item)
      this.doTimerAnimation();
    },
    async simulateVRConnection() {
      await api.patchActivityUnitAlternate(
        this.patientId,
        this.procedureId,
        this.unitId,
        { state: "RUNNING" }
      );
    },
    doTimerAnimation: function (duration=1000) {
      setTimeout(() => {
        console.log(this.progress + " of " + this.max_progress);
        console.log(this.nextEnabled);

        this.progress < this.max_progress
          ? this.progress++
          : (this.nextEnabled = true);

        if (this.nextEnabled) {
          this.active_items.push(this.active_item);
        } else {
          this.doTimerAnimation();
        }
      }, duration);
    },
    getNameOfOption(find, where) {
      return where.find((item) => item.id == find)?.text;
    },
    getColorOfOption(find, where) {
      return where.find((item) => item.id == find)?.bordercolor;
    },
    async emiteSessionControlEvent(type) {
      this.emitEventProcedure({
        sessionControlEvent: {
          type,
          clientCreateMoment: new Date(),
          client: "string",
          data: "string",
        },
      });
    },
    async emiteInputEvent(type, command) {
      this.emitEventProcedure({
        inputEvent: {
          type,
          duration: 0,
          inputCommandId: command,
          clientCreateMoment: new Date(),
          client: "string",
          data: "string",
        },
      });
    },
    async emitEventProcedure(payload) {
       api.postEventProcedure(
        this.patientId,
        this.procedureId,
        this.unitId,
        payload
      );
    },
    chooseNextElement: async function (find) {
      // session finished
      if (find == "finish") {
        this.finishSession()
      }
      // find next selected element
      else {
        this.progress = 0;
        this.nextEnabled = false;
        var nextItem = this.dataset.find((item) => item.id == find);
        this.sendCommand(nextItem)
        //this.active_items.push( nextItem )
        this.active_item = nextItem;
        this.doTimerAnimation();
      }
    },
    itemPlayedOnce(find) {
      var found = this.active_items.find((item) => item.id == find);
      return found ? true : false;
    },
    sendCommand: function (item) {
      this.emiteInputEvent("REQUEST_PLAY",item.id)
   
    },
    doTrackingAnimation: function () {
      setTimeout(() => {
        this.trackingPosition = this.getRandomCoords();
        this.doTrackingAnimation();
      }, 20000);
    },
    getRandomCoords() {
      var spot = document.getElementById("tracking_spot");
      var offset = spot.clientHeight / 2;

      var img = document.getElementById("tracking_canvas");
      var width = img.clientWidth;
      var height = img.clientHeight;

      return (
        "top: " +
        (Math.random() * height - offset) +
        "px; left: " +
        (Math.random() * width - offset) +
        "px;"
      );
    },
    setCoordinates(headSetPosition) {
      console.log(headSetPosition);
    },
    async finishSession(){
        var options = {
          color: "#28B9AF",
          width: 400,
          zIndex: 200,
          noconfirm: false,
        };

        var result = await this.$refs.finish.open(
          "Session beendet",
          "Bitte wählen sie eine Option",
          this.action_items,
          options
        );
        if (result == true) {
          this.emiteSessionControlEvent("REQUEST_FINISH")
        }
    }
  },
};
</script>

<style>
/*position relative as a base for non-static elements*/
#outerDiv {
  position: relative;
}

/*every direct child positioned absolute*/
#outerDiv > div {
  position: absolute;
}
</style>
