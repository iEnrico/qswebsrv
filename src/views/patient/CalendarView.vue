<template>

  <center>
    <v-progress-circular
        class="mx-8 my-8"
        v-if="loading"
        indeterminate
        color="#28B9AF"
    />
  </center>

  <div v-if="!loading" class="pa-4 text-center section">
    <VCalendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
        view="weekly"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
                v-for="attr in attributes"
                :key="attr.key"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="getElementStyle(attr)"
                style="cursor: pointer"
                @click="onClick(attr)"
            >
              <v-icon v-if="!attr.bar && attr.key != -1" small>{{
                  //getIconForType(attr)
                  getCourseIcon(attr.customData.type)
                }}</v-icon>
              {{ attr.customData.title }}
              <v-tooltip
                  v-if="attr.customData.tooltip"
                  activator="parent"
                  location="bottom"
              >
                <v-card
                    color="#ffffff"
                    class="pa-0 ma-0 flex"
                    variant="plain"
                    width="20em"
                >
                  {{ attr.customData.tooltip }}</v-card
                >
              </v-tooltip>
            </p>
          </div>
        </div>
      </template>
    </VCalendar>
  </div>
</template>

<script>

//import data from "@/scripts/data/data.js";
import common from "@/scripts/common/common";
import {
  getTextByLanguage,
  //parseDate
} from "@/scripts/common/utils";

import api from "@/scripts/api/api";
import {
  //getStateColor,
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

export default {
  name: "CalendarView",
  data() {
    return {
      loading: false,
      masks: {
        weekdays: "WWW",
      },
      attributes: [], //data.getCalenderEntries(),
    };
  },
  components: {},
  mounted: async function () {
    this.loading = true;

    this.attributes = await this.createCalendarEntries()
    console.log("info: " + JSON.stringify(this.attributes));

    this.loading = false;
  },

  methods: {

    createCalendarEntries: async function () {

      //const month = new Date().getMonth();
      //const year = new Date().getFullYear();

      var data = await api.getCalenderEntries(getUser())

      // ADDING SORTED ITEMS BY WEEK

      var grouped_items = []

      data.forEach((element,index) => {
        grouped_items.push(
            {
              key: index,
              customData: {
                title: element.activity.id + ": " + getTextByLanguage(element.activity.translations, this.$i18n),
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                //class: common.calendar_entry_color_session,
                type: element.activity.primaryType, //common.calendar_entry_type_session,
                //state: common.calendar_item_state_done,
              },
              //highlight: this.getTypeColor(element.activity.primaryType), //'blue',
              dates: [
                // from 14th till 18th every day
                [
                  new Date(element.startDate), //year, month, 14),
                  new Date(element.stopDate) //year, month, 18)
                ]
              ]
              //dates: new Date(year, month, 2),

              // element.startDate
              // element.stopDate
            })
      })

      grouped_items.push(

          { // THIS IS ONLY USED FOR CURRENT DAY!

            // An optional key can be used for retrieving this attribute later,
            // and will most likely be derived from your data object
            key: -1,
            // Attribute type definitions
            highlight: {
              style: {
                background: '#f59e0b',
              },
            },  // Boolean, String, Object
            dot: false,        // Boolean, String, Object
            bar: false,        // Boolean, String, Object
            //content: 'red',   // Boolean, String, Object
            popover: { }, // Only objects allowed
            // Your custom data object for later access, if needed
            customData: { },
            // We also need some dates to know where to display the attribute
            // We use a single date here, but it could also be an array of dates,
            //  a date range or a complex date pattern.
            dates: new Date(),
            // You can optionally provide dates to exclude
            excludeDates: null,
            // Think of `order` like `z-index`
            order: 0
          }

      )

      return grouped_items
    },
    getTypeColor(type) {
      switch (type) {
        case "AUDIO_DIARY":
        case "QUESTIONNAIRE":
          return 'blue'
        case "WEBSITE":
          return 'green'
        case "VR_DEVICE":
          return 'red'

        default:
          break;
      }
    },
    getCourseIcon(type) {
      return getCourseIcon(type)
    },
    /*
    getTypeIcon(type) {
      switch (type) {
        case "AUDIO_DIARY":
          return 'mdi-headphones'
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
    getElementStyle(item) {
      const before = false; //this.isBeforeToday(item.dates);
      switch (item.customData.type) {
        case "AUDIO_DIARY":
        case "QUESTIONNAIRE":
          return before >= 0
              ? common.calendar_entry_color_audio
              : common.calendar_entry_color_audio2;
        case "WEBSITE":
          return before >= 0
              ? common.calendar_entry_color_session
              : common.calendar_entry_color_session2;
        case "VR_DEVICE":
          return before >= 0
              ? common.calendar_entry_color_therapist
              : common.calendar_entry_color_therapist2;
        default:
          return "";
      }
    },
    isBeforeToday(value) {
      // IMPORTANT !!!
      // currently dirty, please check the datamodel of 'value' parameter with json stringify
      // can has ranges, or repeats. And value array can has multiple elements not [0]
      // console.log(JSON.stringify(value[0]));

      // possible:
      // get actual month on first day of,
      // get ordinary steps,
      // create array with size of ordinary steps,
      // loop steps and store calculated day in array
      // compare all days

      const thisTime = value[0].startTime;

      const time = new Date();
      time.setHours(0);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      const anotherTime = time.getTime();

      /*console.log(
        thisTime +
          "/" +
          anotherTime +
          " is diff " +
          (thisTime - anotherTime) +
          " result: " +
          (thisTime < anotherTime ? -1 : thisTime == anotherTime ? 0 : 1)
      );*/
      return thisTime < anotherTime ? -1 : thisTime == anotherTime ? 0 : 1;
    },
    onClick(item) {
      switch (item.customData.type) {
        case "AUDIO_DIARY":
          alert("audio diary procedure selected")
          break;
        case "QUESTIONNAIRE":
          alert("questionnaire procedure selected")
          break;
        case "WEBSITE":
          alert("web procedure selected")
          break;
        case "VR_DEVICE":
          alert("vr procedure selected")
          break;

        default:
          console.log("not implemented yet!");
          break;
      }
    },
  },
};
</script>

<style>

</style>
