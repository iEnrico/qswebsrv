<template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="filteredItems"
    :items-per-page="itemsPerPage"
    hide-default-footer
    hover
    class="elevation-1"
  >
  <!-- @click:row="routeDetails" -->
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
    <template #[`item.translations`]="{ item }">
      {{ getTextByLanguage(item.props.title.translations, this.$i18n) }} 
    </template>
    <template #[`item.date`]="{ item }">
      {{ parseDate(item.raw.date) }}
    </template>
    <template #[`item.actions`]="{  }">
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
  </v-data-table>
</template>

<script>
import { parseDate } from "@/scripts/common/utils";
//import { useNotesStore } from "@/stores/notesStore";
//import { Notes } from "@/types/note";
import { mergeProps } from "vue"; 
import { VDataTable } from 'vuetify/labs/VDataTable'
import { getTextByLanguage } from "@/scripts/common/utils";

export default {
  name: "ActivitiesList",
  /*
  setup() {
    const notesStore = useNotesStore();
    const items = new Notes(notesStore.getNotes).models;
    return {
      notesStore, items
    };
  },*/
  data: () => ({
    filteredItems: [],
    page: 1,
    itemsPerPage: 6,
    headers: [
      {
        align: 'start',
        key: 'translations',
        sortable: true,
        title: 'TITEL',
      },
      //{ title: 'DATUM', key: 'date' },
      { align: 'end',
        title: 'AKTIONEN', sortable: false, key: 'actions' },
    ],
  }),
  props: [ "searchText", "items" ],
  watch: {
    searchText: function () {
      console.log("searching: " + this.searchText)
      this.filteredItems = this.items.filter(
          (item) => (getTextByLanguage(item.translations, this.$i18n).toUpperCase().search(this.searchText.toUpperCase()) === 0 || getTextByLanguage(item.translations, this.$i18n).toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
      )
    },
  },
  components: { 
    VDataTable
  },
  mounted: function () {
    this.filteredItems = this.items
  },
  methods: {
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    routeDetails(ev, value) {
      this.$router.push({
        name: "Dashboard3b",
        params: { data: JSON.stringify(value.item) },
      });
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
    archiveUser() {
      alert("not yet implemented!")
    },
    mergeProps,
  },
  computed: {
    pageCount () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
  },
};
</script>

<style>
tr:hover {
  background-color: #4FAF9C40;
}
</style>
