<template>

  <!--
  <v-list
    class="mt-0 pt-0"
    style="height: 24em; overflow-y: auto; background-color: #fff"
  >
    <center style="height: 100%" v-if="!items">
      <v-card-subtitle> Sie haben noch keine Kurse hinterlegt. </v-card-subtitle>
    </center>

    <ListItemCourses
      :item="item"
      :index="i"
      v-for="(item, i) in doSort(items, sortmode)"
      :key="i"
    />
  </v-list>
  -->


  <!-- @click:row="routeDetails" 

  <center style="height: 100%" v-if="!itemsFiltered">
    <v-card-subtitle> Sie haben noch keine Kurse hinterlegt. </v-card-subtitle>
  </center>
-->

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
          <v-card-title> Keine Kurs für "{{ searchText }}" gefunden. </v-card-title>
        </center>
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
    <template #[`item.date`]="{ item }">
      {{parseDate(item.raw.date)}}
    </template>
    <template #[`item.course_type`]="{ item }">
      {{getCourseInfo(item.raw.course_type)}}
    </template>
    <template #[`item.actions`]="{ /*item*/ }">
      <!--
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
      -->
    </template>
  </v-data-table>

</template>

<script>

//import ListItemCourses from "@/components/listItemCourses.vue";
import { useSessionStore } from "@/stores/sessionStore";
import { Sessions } from "@/types/session";
//import { mergeProps } from "vue"; 
import { VDataTable } from 'vuetify/labs/VDataTable'
import { parseDate } from "@/scripts/common/utils";
import { getCourseInfo } from "@/scripts/procedureEngine";

export default {
  name: "CoursesList",
  setup() {
    const courseStore = useSessionStore();
    const items = new Sessions(courseStore.getSessions).models;
    return {
      courseStore, items
    };
  },
  data: () => ({
    page: 1,
    itemsPerPage: 8,
    headers: [
      {
        title: 'NAME',
        key: 'title',
        width: '20%',
        align: 'start',
        sortable: true,
      },
      { 
        title: 'TYPE', 
        width: '15%',
        key: 'course_type' 
      },
      { 
        title: 'INHALT', 
        key: 'date' 
      },
      {
        title: 'AKTIONEN', 
        key: 'actions',
        sortable: false, 
        align: 'end',
      },
    ],
    itemsFiltered: [],
    loading: false,
  }),
  props: ["searchText", "sortmode"],
  watch: {
    searchText: function () {
      if (this.searchText == null) {
        this.itemsFiltered = this.items
      } else {
        this.itemsFiltered = this.items.filter(
          (item) => (item.title.toUpperCase().search(this.searchText.toUpperCase()) === 0 || item.title.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
        );
      }
      
    },
  },/*
  watch: {
    searchText: function () {
      //console.log(this.searchText);
      this.itemsFiltered = new Sessions(
        this.courseStore.getSessions.filter(
          (course) => course.title.toUpperCase().indexOf(this.searchText.toUpperCase()) != -1
        )
      ).models;
    },
  },*/
  components: { VDataTable /*ListItemCourses*/ },
  mounted: function () {
    this.itemsFiltered = this.items
    //console.log(this.items)
    //console.log(new Sessions(this.courseStore.getSessions).models);
  },
  methods: {
    parseDate(timecode) {
      return parseDate(timecode)
    },
    routeDetails(/*ev, value*/) {
      /*
      this.$router.push({
        name: "DashboardTherapist4b",
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: value.item.raw,
          }),
        },
      });
      */
    },
    getCourseInfo: function (item) {
      var key = getCourseInfo(item)
      return this.$i18n.t(''+key)
    },
  },
  computed: {
    pageCount () {
      return Math.ceil(this.itemsFiltered.length / this.itemsPerPage)
    },
  },
};
</script>

<style></style>
