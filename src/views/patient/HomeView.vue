<template>
  <v-container style="min-width: 100%; min-height: 100%" class="mx-0 my-0">
    <NewsTicker />
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <CoursesView :mode="0" :showCard="true"/>
      </v-col>
      <!--                            sm=12
      <v-col cols="12" sm="4">
        <NewsView :showAddButton="false"/>
      </v-col>
      -->
    </v-row>
    <v-card
      class="mt-4 ml-2 mr-2 rounded-lg"
      variant="elevated"
    >
      <!-- class="mx-2 mt-2"   style="min-width: 100%;" -->
      <v-card-title class="mt-0 mb-2 pb-0">
        {{ $t("title_dashboard_week_overview_courses") }}
      </v-card-title>
      <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
      <v-list :items="grouped_items" density="compact" disabled>
        <template v-slot:title="{ item }">
          <v-row no-gutters style="min-height: 16px">
            <!--
              <v-icon v-if="item.icon" :color="getStateColor(item.state)"> {{ item.icon }} </v-icon>
              -->
            <v-col cols="12" sm="8">
              <div :style="'color:'+getStateColor(item.state)" :class="item.state?'':'font-bold underline'" v-html="item.title"></div>
            </v-col>
            <v-col cols="12" sm="2">
              <div :style="'color:'+getStateColor(item.state)" :class="item.state?'':'font-bold underline'" v-html="item.date"></div>
            </v-col>
            <v-col cols="12" sm="2">
              <div :style="'color:'+getStateColor(item.state)" :class="item.state?'':'font-bold underline'" v-html="item.status"></div>
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
    </v-card>
  </v-container>
</template>

<script>
import NewsTicker from "@/components/newsTicker.vue";
import CoursesView from "@/components/coursesOverview.vue";
//import NewsView from "@/components/newsListPatient.vue";
//import { useNotificationStore } from "../stores/notificationStore.ts";
import { getTextByLanguage, parseDate } from "@/scripts/common/utils";

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

export default {
  name: "HomeView",
  /*setup() {
    const store = useNotificationStore();
    return {
      store,
    };
  },*/
  data: () => ({
    grouped_items: [ ],
  }),
  components: { NewsTicker, CoursesView, /*NewsView*/ },
  mounted: async function () {
    await this.createCalendarEntries()
  },
  methods: {
    createCalendarEntries: async function () {
      var data = await api.getCalenderEntries(getUser())

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
                date: element.startDate + " - " + element.stopDate,
                status: this.getStateInfo(element.state),
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

      this.grouped_items.push({ type: 'header', title: 'un-grouped' })
      let filtered = data.filter(
        (item) => item.carePlanWeek == null
      )
      filtered.forEach(element => {
        this.grouped_items.push(
          {
            title: getTextByLanguage(element.activity.translations, this.$i18n),
            date: element.startDate + " - " + element.stopDate,
            status: this.getStateInfo(element.state),
            state: element.state,
            icon: getCourseIcon(element.activity.primaryType),
            /*props: {
              prependIcon: this.getTypeIcon(element.activity.primaryType),
            },*/
          }
        )
      });
      this.grouped_items.push( { type: 'divider' } )

    },
    getStateColor(state) {
      switch (state) {
        case "MISSED":
          return '#910c00'
        case "ACTIVE":
          return '#004b85'
        case "COMPLETED":
          return '#1a8500'
        case "SCHEDULED":
          return '#333'

        default:
          break;
      }
    },
    getStateInfo(state) {
      switch (state) {
        case "MISSED":
          return 'Nicht abgeschlossen'
        case "ACTIVE":
          return 'Aktiv'
        case "COMPLETED":
          return 'Abgeschlossen'
        case "SCHEDULED":
          return 'Geplant'

        default:
          break;
      }
    },
    parseDate(timecode) {
        return parseDate(timecode)
    },
  },
};
</script>

<style></style>
