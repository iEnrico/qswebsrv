<template>
    <v-row class="pa-2 ma-2 ">
      <v-col :cols="4" class="pa-0 ma-0 mt-0" >
        <v-card variant="elevated" class="pa-2 mx-2 my-0 rounded-lg" >
          <v-card-title style="font-size: 1.8em" class="pa-0 ma-2">{{ this.data.item.name }}</v-card-title>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "Registriert seit:" }}</v-card-subtitle>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ parseDate(this.data.item.date) }}</v-card-subtitle>
          
          <!--
          <div class="mt-4" v-if="analysis_data">
            <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "SER-DATASETS: " + analysis_data.serAudioAnalyses.length }}</v-card-subtitle>
            <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "DDS-DATASETS: " + analysis_data.ddsAudioAnalyses.length }}</v-card-subtitle>
          </div>
          -->
          
          <!--
          <v-row class="pa-0 ma-0 mt-2">
            <BarChart class="pa-2 mx-0" style="width: 50%" :chartData="ser_bardata" :options="ser_options" />
            <BarChart class="pa-2 mx-0" style="width: 50%" :chartData="dds_bardata" :options="dds_options" />
          </v-row>
          -->
          
          <!--  
          
          -->

        </v-card>
        <NewsView :news="notes" :showAddButton="true" :addNote="addNote" :editNote="editNote" :deleteNote="deleteNote"/>
        <!-- v-if="notes.length>0" -->
      </v-col>
      <v-col :cols="8" class="pa-0 ma-0" style="height: 80%">
        
        <!--
          ?.item?.carePlans
          
          {{ "info: " + JSON.stringify(this.data.item.item?.carePlans) }}
        -->
        
        <v-card class="ml-2 mr-2 rounded-lg">
          <v-tabs
            v-model="tab"
            bg-color="#fff"
          >
            <v-tab value="one">Aktuelle Aufgaben</v-tab>
            <v-tab value="two">Programmübersicht</v-tab>
            <v-tab value="three">Auswertung</v-tab>
            <v-tab value="four">Ergebnisse</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">

              <v-window-item value="one">
                <CoursesView class="mb-2" :mode="1" :customData="this.data.item.item?.carePlanUnits"/>
              </v-window-item>

              <v-window-item value="two">
                <v-card-subtitle v-if="this.grouped_items.length <= 0" class="mt-8" style="text-align: start;"> Kein Wochenplan vorhanden... </v-card-subtitle>
                <v-list :items="grouped_items" density="compact" disabled>
                  <template v-slot:title="{ item }">
                    <v-row no-gutters style="min-height: 16px">
                      <!--
                        <v-icon v-if="item.icon" :color="getStateColor(item.state)"> {{ item.icon }} </v-icon> 
                        -->
                      <v-col cols="12" sm="8">
                        <div :style="'color:'+getStateColor(item.state)" :class="item.state?'text-sm':'font-bold underline'" v-html="item.title"></div>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <div :style="'color:'+getStateColor(item.state)" :class="item.state?'text-xs':'font-bold underline'" v-html="item.date"></div>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <div :style="'color:'+getStateColor(item.state)" :class="item.state?'text-xs':'font-bold underline'" v-html="item.status"></div>
                      </v-col>
                      <v-divider
                        v-if="!item.state"
                        class="mb-0 border-opacity-100"
                        :thickness="1"
                        color="#f22"
                      ></v-divider>
                    </v-row>
                  </template>
                  <!--
                  <template v-slot:subtitle="{ item }">
                    <div v-html="item.date"></div>
                  </template>
                  -->
                  <template v-slot:prepend="{ item }">        
                    <v-icon v-if="item.icon" :color="getStateColor(item.state)"> {{ item.icon }} </v-icon> 
                  </template>
                </v-list>
              </v-window-item>

              <v-window-item value="three">

                <!--
                <v-card-subtitle 
                  v-if="!ser_bardata?.length > 0 && !test2_data?.length > 0 && !dds_bardata?.length > 0 && !test_data?.length > 0" 
                  class="mt-8 mb-6" style="text-align: start;"> Sie haben noch keine Auswertungen hinterlegt. 
                </v-card-subtitle>

                <v-row v-if="ser_bardata?.length > 0" class="pa-0 ma-0 mt-2">
                  <BarChart class="pa-2 mx-0" style="width: 50%" :chartData="ser_bardata" :options="ser_options" />
                </v-row>
                
                <v-row v-if="test2_data?.length > 0" class="pa-0 ma-0 mt-2">
                  <LineChart class="mx-0" style="width: 100%" :chartData="test2_data" :options="test2_options" />
                </v-row>
                
                <v-row v-if="dds_bardata?.length > 0" class="pa-0 ma-0 mt-2">
                  <BarChart class="pa-2 mx-0" style="width: 50%" :chartData="dds_bardata" :options="dds_options" />
                </v-row>
                    
                <v-row v-if="test_data?.length > 0" class="pa-0 ma-0 mt-2">
                  <LineChart class="mx-0" style="width: 100%" :chartData="test_data" :options="test_options" />
                </v-row>
                -->

                <v-row>
                  <BarChart class="pa-8 mx-0" style="width: 50%" :chartData="ser_bardata" :options="ser_options" />
                  <BarChart class="pa-8 mx-0" style="width: 50%" :chartData="dds_bardata" :options="dds_options" />
                </v-row>

              </v-window-item>

              <v-window-item value="four">
                <v-card-subtitle 
                  v-if="procedures?.data.length == 0" 
                  class="mt-8 mb-6" style="text-align: start;"> Sie haben noch keine Ergebnisse hinterlegt. 
                </v-card-subtitle>
                <ListItemUserActivitys
                  :item="procedure"
                  :index="i"
                  v-for="(procedure, i) in procedures.data"
                  :key="i"
                />
              </v-window-item>
              
            </v-window>
            
          </v-card-text>
        </v-card>

        
        
      </v-col>
    </v-row>
</template>

<script>

import { useCurrentPatientStore } from "@/stores/currentPatientStore";

import CoursesView from "@/components/coursesOverview.vue";
import NewsView from "@/components/newsListPatient.vue";
import { getTextByLanguage, parseDate } from "@/scripts/common/utils";
import ListItemUserActivitys from "@/components/listItems/listItemUserActivitys.vue";

import { 
  BarChart, 
  //LineChart 
} from 'vue-chart-3';

import { Chart, registerables } from "chart.js";

import api from "@/scripts/api/api";

import { 
  /*getNextTaskActivity, 
  continueProcedure, 
  getNextActivity,*/ 
  //isAllUnitsComplete, 
  //isAllUnitsCompleteSync,
  getCourseIcon, 
  //getCourseInfo, 
  //getFHIRId,
  getUser
} from "@/scripts/procedureEngine";

Chart.register(...registerables);

export default {
  name: "PatientsViewAddTherapist",
  setup() {
    const patientStore = useCurrentPatientStore();
    return {
      patientStore
    };
  },
  computed: {
    /*
    zero () {
      return 0
    },
    */
  },
  data: () => ({
    // analysis charts
    analysis_data: null,

    ser_bardata: null,
    ser_options: null,
    dds_bardata: null,
    dds_options: null,
    
    test_data: null,
    test_options: null,
    
    test2_data: null,
    test2_options: null,
    
    // generel data
    tab: null,
    data: {
      edit: false,
      item: {},
    },
    // news or notes
    notes: [],
    // weekly based grouped items
    grouped_items: [],
    procedures: [],
  }),
  props: [
  ],
  components: { 
    CoursesView, 
    NewsView, 
    BarChart, 
    //LineChart,
    ListItemUserActivitys
  },
  mounted: async function () {
    this.data = this.patientStore.getItem 
    
    //console.log("LOG: " + JSON.stringify(this.data.item.item))

    await this.loadData()

    await this.getAudioAnalysis()
    
    await this.parseSERResults()
    await this.parseDDSResults()

    //await this.parseTESTResults()
    //await this.parseTESTResults2()
    
    await this.getProcedures()

    await this.createCalendarEntries()
  },
  methods: {
    loadData: async function () {
      this.notes = await api.getPatientNotes(getUser(), this.data.item.item.fhirPatient.id)
    },
    getAudioAnalysis: async function () {
      this.analysis_data = await api.getAudioAnalysis(getUser(), this.data.item.item.fhirPatient.id)
    },
    getProcedures: async function () {
      this.procedures = await api.getProceduresForId(this.user, this.data.item.item.fhirPatient.id)
    },
    createCalendarEntries: async function () {
      var data = this.data.item.item.calendarEntries 

      // ADDING SORTED ITEMS BY WEEK
      
      this.grouped_items = []

      for (let i=0; i<50; i++) {
        
        let filtered = data.filter(
          (item) => item.carePlanWeek == i
        )
      
        if (filtered.length > 0) {
          this.grouped_items.push({ type: 'header', title: 'Woche #'+i })
        
          filtered.forEach(element => {
            this.grouped_items.push(
              {
                title: getTextByLanguage(element.activity.translations, this.$i18n),
                date: element.startDate + " - " + element.stopDate + " (" + element.state + ")",
                state: element.state,
                icon: getCourseIcon(element.activity.primaryType),
                /*
                props: {
                  prependIcon: this.getTypeIcon(element.activity.primaryType),
                },*/
              }
            )
          });

          this.grouped_items.push( { type: 'divider' } )
        }
      }

      // ADDING UNGROUPED ITEMS AT BOTTOM

      let filtered = data.filter(
        (item) => item.carePlanWeek == null
      )

      if (filtered.length > 0) {

        this.grouped_items.push({ type: 'header', title: 'un-grouped' })
        
        filtered.forEach(element => {
          this.grouped_items.push(
            {
              title: getTextByLanguage(element.activity.translations, this.$i18n),
              date: element.startDate + " - " + element.stopDate + " (" + element.state + ")",
              state: element.state,
              icon: getCourseIcon(element.activity.primaryType),
              /*props: {
                prependIcon: this.getTypeIcon(element.activity.primaryType),
              },*/
            }
          )
        });
        this.grouped_items.push( { type: 'divider' } )
      }
      
    },
    /**
     * depression
     */
    parseDDSResults: async function () {

      // prediction
      //
      // keine      NORMAL
      // milde      MILD_DEPRESSION
      // mittlere   MODERATE_DEPRESSION
      // schwere    HEAVY_DEPRESSION

      const normal = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "NORMAL").length;
      const mild = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "MILD_DEPRESSION").length;
      const moderate = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "MODERATE_DEPRESSION").length;
      const heavy = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "HEAVY_DEPRESSION").length;
      
      const arr = [ normal, mild, moderate, heavy ]
      const dds_max = Math.max(...arr)

      this.dds_bardata = {
        labels: ['keine', 'milde', 'mittlere', 'schwere'],
        datasets: [
          {
            label: "Depression (dds)",
            data: [ normal, mild, moderate, heavy ],
            borderColor: ['#888', '#888', '#888', '#888'],
            borderWidth: 1,
            backgroundColor: ['#2D9BF0', '#2D9BF0', '#2D9BF0', '#2D9BF0'],
            fill: true
          },
        ]
      }

      this.dds_options = {
        /*
        hover: {
          intersect: false,
        },
        */
        plugins: {
          title: {
            display: true,
            text: 'Depression',
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: function (context) {
                //console.log("T:\n" + context)
                const title = context[0].dataset.label || "";
                return title;
              },
              label: function (context) {
                console.log(context)
                const label = context.label || "";
                const value = context.formattedValue;
                return `${value}x ${label}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: dds_max * 1.2
            /*
            ticks: {
              callback: () => {
                return `£-0`;
              },
            },
            */
          },
        },
      }

    },
    /**
     * emotions
     */
    parseSERResults: async function () {
      
      // predictedEmotion
      //	
      //    ?         NEUTRAL
      // angeekelt    DISGUST
      // glücklich    HAPPINESS
      // ängstlich    FEARFUL
      // traurig      SADNESS
      // wütend       ANGER
      // überrascht   SURPRISED

      const neutral = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "NEUTRAL").length;
      const happy = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "HAPPINESS").length;
      const sad = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SADNESS").length;
      const fear = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "FEARFUL").length;
      const anger = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "ANGER").length;
      const surprised = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SURPRISED").length;
      const disgust = this.analysis_data?.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "DISGUST").length;

      const arr = [neutral, happy, sad, fear, anger, surprised, disgust]
      const ser_max = Math.max(...arr)

      this.ser_bardata = {
        labels: ['neutral', 'glücklich', 'traurig', 'ängstlich', 'wütend', 'überrascht', 'angeekelt'],
        datasets: [
          {
            label: "Emotionen",
            data: [neutral, happy, sad, fear, anger, surprised, disgust],
            borderColor: ['#888', '#888', '#888', '#888', '#888', '#888', '#888'],
            borderWidth: 1,
            backgroundColor: ['#CEE741', '#CEE741', '#CEE741', '#CEE741', '#CEE741', '#CEE741', '#CEE741'],
            fill: true
          },
        ]
      }

      this.ser_options = {
        /*
        hover: {
          intersect: false,
        },
        */
        plugins: {
          title: {
            display: true,
            text: 'Emotionen',
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: function (context) {
                //console.log("T:\n" + context)
                const title = context[0].dataset.label || "";
                return title;
              },
              label: function (context) {
                console.log(context)
                const label = context.label || "";
                const value = context.formattedValue;
                return `${value}x ${label}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: ser_max * 1.2
            /*
            ticks: {
              callback: () => {
                return `£-0`;
              },
            },
            */
          },
        },
      }

    },
    /*
    getTypeIcon(type) {
      switch (type) {
        case "QUESTIONNAIRE":
          return 'mdi-file-sign'
        case "WEBSITE":
          return 'mdi-web'
        case "VR_DEVICE":
          return 'mdi-safety-goggles'
      
        default:
          break;
      }
    },*/
    getStateColor(state) {
      switch (state) {
        case "ACTIVE":
          return '#400'
        case "COMPLETED":
          return '#040'
        case "SCHEDULED":
          return '#004'
      
        default:
          break;
      }
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
    addNote: async function (text) {
      await api.postPatientNotes(getUser(), this.data.item.item.fhirPatient.id, text)
      await this.loadData()
    },
    editNote: async function (item, updatedText) {
      await api.patchPatientNoteById(getUser(), this.data.item.item.fhirPatient.id, item.id, updatedText)
      await this.loadData()
    },
    deleteNote: async function (item) {
      await api.deletePatientNoteById(getUser(), this.data.item.item.fhirPatient.id, item.id)
      await this.loadData()
    },
    getValueForPrediction(prediction) {
      switch (prediction) {
        case "NORMAL":
          return 0
        case "MILD_DEPRESSION":
          return 1
        case "MODERATE_DEPRESSION":
          return 2
        case "HEAVY_DEPRESSION":
          return 3          
        default:
          return 0
      }
    },
    getValueForPredictionEmo(prediction) {
      return prediction

      /*
      switch (prediction) {
        case "NORMAL":
          return 0
        case "MILD_DEPRESSION":
          return 1
        case "MODERATE_DEPRESSION":
          return 2
        case "HEAVY_DEPRESSION":
          return 3          
        default:
          return 0
      }
      */

      /*
      const happy = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "HAPPINESS").length;
      const sad = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SADNESS").length;
      const fear = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "FEARFUL").length;
      const anger = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "ANGER").length;
      const surprised = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SURPRISED").length;
      const disgust = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "DISGUST").length;
      */

    },
    /**
     * depression line
     */
    parseTESTResults: async function () {

      // prediction
      //
      // keine      NORMAL
      // milde      MILD_DEPRESSION
      // mittlere   MODERATE_DEPRESSION
      // schwere    HEAVY_DEPRESSION

      const yaxis = ["Keine", "Milde", "Mittlere", "Schwere"]
      const labels = []
      const values = []
      this.analysis_data?.ddsAudioAnalyses.forEach(element => {
        labels.push(element.createMoment.substring(0,10))
        values.push(this.getValueForPrediction(element.prediction))
      });


      const normal = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "NORMAL").length;
      const mild = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "MILD_DEPRESSION").length;
      const moderate = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "MODERATE_DEPRESSION").length;
      const heavy = this.analysis_data?.ddsAudioAnalyses.filter((obj) => obj.prediction === "HEAVY_DEPRESSION").length;
      
      const arr = [ normal, mild, moderate, heavy ]
      const max = Math.max(...arr)

      this.test_data = {
        labels: labels,
        datasets: [
          {
            label: "Depression (dds)",
            data: values,
            borderColor: ['#888', '#888', '#888', '#888', '#888'],
            borderWidth: 1,
            backgroundColor: ['#2D9BF0', '#2D9BF0', '#2D9BF0', '#2D9BF0', '#2D9BF0'],
            fill: true
          },
        ]
      }

      this.test_options = {
        /*
        hover: {
          intersect: false,
        },
        */
        plugins: {
          title: {
            display: true,
            text: 'Depression',
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: function (context) {
                //console.log("T:\n" + context)
                const title = context[0].dataset.label || "";
                return title;
              },
              label: function (context) {
                console.log(context)
                const label = context.label || "";
                const value = context.formattedValue;
                return `${value}x ${label}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: max, //* 1.2
            min: 0,
            max: 3,
            ticks: {
              callback: (context) => {
                return yaxis[context];
              },
            },
            
          },
        },
      }

    },
    /**
     * depression line
     */
    parseTESTResults2: async function () {

      // predictedEmotion
      //	
      //    ?         NEUTRAL
      // angeekelt    DISGUST
      // glücklich    HAPPINESS
      // ängstlich    FEARFUL
      // traurig      SADNESS
      // wütend       ANGER
      // überrascht   SURPRISED

      /*
      const yaxis = ['glücklich', 'traurig', 'ängstlich', 'wütend', 'überrascht', 'angeekelt']
      const labels = []
      const values = []
      this.analysis_data.ddsAudioAnalyses.forEach(element => {
        labels.push(element.createMoment.substring(0,10))
        values.push(this.getValueForPrediction(element.predictedEmotion))
      });
      */

      //const yaxis = ["Keine", "Milde", "Moderat", "Schwere"]

      const labels = []
      const valuesHappy = []
      const valuesSad = []
      const valuesFear = []
      const valuesAnger = []
      const valuesSurprised = []
      const valuesDisgust = []
      
      //const valuesNormal = []
      
      this.analysis_data?.serAudioAnalyses.forEach(element => {
        labels.push(element.createMoment.substring(0,10))
        
        valuesHappy.push(element.probabilityHappiness)
        valuesSad.push(element.probabilitySadness)
        valuesFear.push(element.probabilityFearful)
        valuesAnger.push(element.probabilityAnger)
        valuesSurprised.push(element.probabilitySurprised)
        valuesDisgust.push(element.probabilityDisgust)

        //valuesNormal.push(element.probabilityNeutral)
      });
      
      /*
      const happy = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "HAPPINESS").length;
      const sad = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SADNESS").length;
      const fear = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "FEARFUL").length;
      const anger = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "ANGER").length;
      const surprised = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "SURPRISED").length;
      const disgust = this.analysis_data.serAudioAnalyses.filter((obj) => obj.predictedEmotion === "DISGUST").length;
*/
      const arr = [...valuesHappy, ...valuesSad, ...valuesFear, ...valuesAnger, ...valuesSurprised, ...valuesDisgust /*,valuesNormal*/ ]
      const max = Math.max(...arr)
      
      this.test2_data = {
        labels: labels, 
        datasets: [
          {
            label: "Happy",
            data: valuesHappy, 
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#2DEA45',
            fill: false
          },
          {
            label: "Sad",
            data: valuesSad, 
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#4800FF',
            fill: false
          },
          {
            label: "Fear",
            data: valuesFear,
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#E20000',
            fill: false
          },
          {
            label: "Anger",
            data: valuesAnger, 
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#FFAA00',
            fill: false
          },
          {
            label: "Surprised",
            data: valuesSurprised, 
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#FF009D',
            fill: false
          },
          {
            label: "Disgust",
            data: valuesDisgust, 
            borderColor: '#888',
            borderWidth: 1,
            backgroundColor: '#E20000',
            fill: false
          },
          
          
        ]
      }

      this.test2_options = {
        //bezierCurve: true,
        hover: {
          intersect: true,
        },
        plugins: {
          title: {
            display: true,
            text: 'Emotionen',
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: function (context) {
                //console.log("T:\n" + context)
                const title = context[0].dataset.label || "";
                return title;
              },
              label: function (context) {
                console.log(context)
                const label = context.label || "";
                const value = context.formattedValue;
                return `${value}x ${label}`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false
            },
          },
          y: {
            grid: {
              display: true
            },
            beginAtZero: true,
            suggestedMax: max * 1.2
            /*
            ticks: {
              callback: () => {
                return `£-0`;
              },
            },
            */
          },
        },
      }

    },
  },
};
</script>

<style>

.v-tab__slider {
  color: rgba(40, 185, 175, 1);
}

.v-tab--selected {
  color: rgba(40, 185, 175, 1);
  background-color: rgba(40, 185, 175, 1);
}

.v-slide-group-item--active .v-btn__content {
  color: white;
}

</style>
