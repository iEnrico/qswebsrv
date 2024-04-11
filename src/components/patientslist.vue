<template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="itemsFiltered"
    :items-per-page="itemsPerPage"
    hide-default-footer
    hover
    class="elevation-1"
    @click:row="routeDetails"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <center>
          <v-progress-circular
            class="mx-8 my-8"
            v-if="loading && itemsFiltered.length == 0"
            indeterminate
            color="#28B9AF"
          />
        </center>
        <center style="height: 100%" v-if="!loading && itemsFiltered.length == 0">
          <v-card-title> Keine Patienten für "{{ searchText }}" gefunden. </v-card-title>
        </center>
        <v-pagination
          v-if="itemsFiltered.length > 0"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
    <template #[`item.name`]="{ item }">
      <div class="my-1">
        {{ (item.raw.item.fhirPatient.firstName || item.raw.item.fhirPatient.lastName) ? item.raw.name : item.raw.item.keycloakUsers[0].username }}
      </div>
      <div>
         <span class="text-xs"> {{ parseDate(item.raw.date) }} </span> 
      </div>  
    </template>
    
    <!--
    <template #[`item.date`]="{ item }">
      {{parseDate(item.raw.date)}}
    </template>
    -->
    
    <template #[`item.first`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[0]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[0].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>
    <template #[`item.second`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[1]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[1].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>
    <template #[`item.third`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[2]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[2].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>
    <template #[`item.fourth`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[3]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[3].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>
    <template #[`item.fifth`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[4]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[4].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>
    <template #[`item.other`]="{ item }">
      <div class="my-1">
        <v-tooltip v-for="(element, index) in item.raw.calendarEntries[5]" :key="index" location="bottom" :text="getTextByLanguage(element.activity.translations, this.$i18n) + ' (' + getStateInfo(element.state) + ')'">
          <template v-slot:activator="{ props }">
            <v-icon size="20" class="mx-1 my-1" v-bind="props" :color="getStateColor(element.state)">{{ getCourseIcon(element.activity.primaryType) }}</v-icon> 
          </template>
          <p class="text-xl">{{getTextByLanguage(element.activity.translations, this.$i18n)}}</p>
          <p class="text-xs">{{element.startDate + ' - ' + element.stopDate}}</p>
          <p>{{getStateInfo(element.state)}}</p>
        </v-tooltip>
        <span v-if="item.raw.calendarEntries[5].length == 0" class="text-xs">Keine Aktivitäten</span>
      </div>
    </template>

    <!--
    <template #[`item.actions`]="{ item }">
      <v-menu location="bottom" :close-on-content-click="false">
        <template v-slot:activator="{ props: menu }">
          <v-btn v-bind="mergeProps(menu/*, tooltip*/)" variant="text" class="mx-2">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-card min-width="auto" class="rounded-lg">
          <v-list-item>
            <v-btn variant="flat" @click="archiveUser(item)"> Archivieren </v-btn>
          </v-list-item>
        </v-card>
      </v-menu>
    </template>
    -->
  </v-data-table>
</template>

<script>
import { mergeProps } from "vue"; 
import { VDataTable } from 'vuetify/labs/VDataTable'
import api from "@/scripts/api/api";
//import common from "@/scripts/common/common";
//import { getTextByLanguage } from "@/scripts/common/utils";

import { 
  //getDescriptionText,
  getTextByLanguage, 
  parseDate } from "@/scripts/common/utils";
import { 
  //getCourseType, 
  getCourseIcon,
  getIconForType } from "@/scripts/procedureEngine";

import { useCurrentPatientStore } from "@/stores/currentPatientStore";

export default {
  name: "PatientList",
  setup() {
    const patientStore = useCurrentPatientStore();
    return {
      patientStore,
    };
  },
  watch: {
    searchText: function () {
      if (this.searchText == null) {
        this.itemsFiltered = this.items
      } else {
        this.itemsFiltered = this.items.filter(
          (item) => (item.name.toUpperCase().search(this.searchText.toUpperCase()) === 0 || item.name.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
        );
      }
    },
  },
  data: () => ({
    page: 1,
    itemsPerPage: 8,
    headers: [
      {
        title: 'ID',
        key: 'name',
        align: 'start',
        sortable: true,
        //width: '20%'
      },
      //{ title: 'REGISTRIERT SEIT', key: 'date' },
      { title: 'ERSTE WOCHE', sortable: false, key: 'first', width: '12.5%' },
      { title: 'ZWEITE WOCHE', sortable: false, key: 'second', width: '12.5%' },
      { title: 'DRITTE WOCHE', sortable: false, key: 'third', width: '12.5%' },
      { title: 'VIERTE WOCHE', sortable: false, key: 'fourth', width: '12.5%' },
      { title: 'FÜNFTE WOCHE', sortable: false, key: 'fifth', width: '12.5%' },
      { title: 'SONSTIGE', sortable: false, key: 'other', width: '12.5%' },
      //{ align: 'end', title: '', sortable: false, key: 'actions' },
    ],
    //availableOrRunning: [],
    items: [],
    itemsFiltered: [],
    
    loading: false,
  }),
  props: ["searchText", "sortmode"],
  components: { VDataTable },
  mounted: async function () {
    this.loading = true;

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    await this.parsePatientsForDatatable(await this.getPatients())
    
    this.loading = false;

  },
  methods: {
    createCalendarEntries: async function (element) {

      var grouped_items = []

      grouped_items[0] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == 1
      )
      grouped_items[1] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == 2
      )
      grouped_items[2] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == 3
      )
      grouped_items[3] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == 4
      )
      grouped_items[4] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == 5
      )
      grouped_items[5] = element.calendarEntries.filter(
        (item) => item.carePlanWeek == null
      )

      return grouped_items;
    },
    getPatients: async function () {
      return await api.getPatients(this.user.id);
    },
    parsePatientsForDatatable: async function (patients) {
      patients.forEach(async element => {
        var calendarEntries = await this.createCalendarEntries(element)

        console.log(element.fhirPatient.id + " - " + calendarEntries)

        this.items.push(
          { 
            "id": element.keycloakUsers[0].id,
            "name": element.fhirPatient.firstName + " " + element.fhirPatient.lastName, 
            "date": element.keycloakUsers[0].createdAt,
            "item": element,
            "calendarEntries": calendarEntries
          })

          console.log(calendarEntries)

      });
      this.itemsFiltered = this.items
    },
    getCourseIcon(type) {
      return getCourseIcon(type)
    },
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    getIconForType(type) {
      return getIconForType(type)
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
    routeDetails(ev, value) {
      
      var data = {
          id: this.index,
          edit: false,
          item: value.item.raw,
      }

      this.patientStore.setItem(data)

      this.$router.push({
        name: "DashboardTherapist3b",
      });
    },
    archiveUser() {
      alert("not yet implemented!")
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
    mergeProps,
  },
  computed: {
    pageCount () {
      return Math.ceil(this.itemsFiltered.length / this.itemsPerPage)
    },
  },
};
</script>

<style>
tr:hover {
  background-color: #4FAF9C40 !important;
}
</style>
