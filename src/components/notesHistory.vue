<template>
  <v-table v-if="0 == 1" fixed-header show-select height="300px">
    <thead>
      <tr>
        <th class="text-left">TITEL</th>
        <th class="text-left">DATUM</th>
        <th class="text-right">AKTIONEN</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.text" style="cursor: pointer" @click="routeDetails(item)">
        <td>{{ item.text }}</td>
        <td>{{ parseDate(item.date) }}</td>
        <td class="text-right">
          <v-menu location="bottom" open-on-hover="false" :close-on-content-click="false">
            <template v-slot:activator="{ props: menu }">
              <!--
              <v-tooltip location="bottom" text="Benutzer">
              <template v-slot:activator="{ props: tooltip }">

              icon
              -->
              <v-btn v-bind="mergeProps(menu, tooltip)" variant="text" class="mx-2">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <!--</template>
              </v-tooltip>-->
            </template>
            <v-card min-width="auto" class="rounded-lg">
              <v-list-item>
                <v-btn variant="flat" @click="archiveUser(item)"> Archivieren </v-btn>
              </v-list-item>

<!--

              <v-divider :thickness="1" class="my-2 border-opacity-100" color="#f22"></v-divider>
              <v-list>
                <v-list-item>
                  <v-btn variant="flat" @click="logout()"> logout </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn variant="flat" @click="refreshToken()"> refresh token </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-combobox
                    label="Sprache"
                    :items="$i18n.availableLocales"
                    v-model="$i18n.locale"
                  ></v-combobox>
                </v-list-item>
              </v-list>
-->
            </v-card>
          </v-menu>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-if="0 == 1" :length="3" rounded="circle" class="mb-2"></v-pagination>
  
  <!-- @click="routeDetails(item)" -->
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="items"
    :items-per-page="itemsPerPage"
    hide-default-footer
    hover
    class="elevation-1"
    @click:row="routeDetails"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
    <template #[`item.date`]="{ item }">
      {{parseDate(item.selectable.date)}}
    </template>
    <template #[`item.actions`]="{  }">
      <v-menu location="bottom" open-on-hover="false" :close-on-content-click="false">
        <template v-slot:activator="{ props: menu }">
          <v-btn v-bind="mergeProps(menu, tooltip)" variant="text" class="mx-2">
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
//import ListItemPlayer from "@/components/listItemPlayer.vue";
//import ListItemNotes from "@/components/listItemNotes.vue";
//import ListItemNotesHeader from "@/components/listItemNotesHeader.vue";
//import data from "../scripts/data/data.js";
//import { parseDate } from "@/scripts/media/utils";
import { useNotesStore } from "@/stores/notesStore";
import { Notes } from "@/types/note";
import { mergeProps } from "vue"; 
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
  name: "NotesHistory",
  setup() {
    const notesStore = useNotesStore();

    console.log(new Notes(notesStore.getNotes).models);
    const items = new Notes(notesStore.getNotes).models;

    return {
      notesStore, items
    };
  },
  data: () => ({
    page: 1,
    itemsPerPage: 6,
    //items: [], //data.getNotesHistory(),
    headers: [
      {
        align: 'start',
        key: 'text',
        sortable: false,
        title: 'TITEL',
      },
      { title: 'DATUM', key: 'date' },
      { align: 'end',
        title: 'AKTIONEN', key: 'actions' },
    ],
  }),
  props: [ "searchText" ],
  watch: {
    searchText: function () {
      console.log(this.searchText);
      this.items = new Notes(
        this.notesStore.getNotes.filter(
          (note) => note.text.indexOf(this.searchText) != -1
        )
      ).models;
    },
  },
  components: { VDataTable
    /*ListItemPlayer, ListItemNotes, ListItemNotesHeader */
  },
  mounted: function () {
    
  },
  methods: {
    routeDetails(ev, value) {
      //alert(JSON.stringify(value.item.selectable))
      this.$router.push({
        name: "Dashboard3b",
        params: { data: JSON.stringify(value.item.selectable) },
      });
    },
    parseDate(timecode) {
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
    archiveUser() {
      alert("not yet implemented!")
    },
    mergeProps,
    //#4FAF9C
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
