<template>
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
    <template #[`item.title`]="{ item }">
      {{item.raw.title}}
    </template>
    <template #[`item.date`]="{ item }">
      {{parseDate(item.raw.date)}}
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
import { getTextByLanguage, parseDate } from "@/scripts/common/utils";
//import { useNotesStore } from "@/stores/notesStore";
import { mergeProps, ref } from "vue";
import { VDataTable } from 'vuetify/labs/VDataTable'
//import { useCurrentSessionStore } from "@/stores/currentSessionStore";
import api from "@/scripts/api/api";
import { getUser } from "@/scripts/procedureEngine";

import { useCurrentSessionStore } from "@/stores/currentSessionStore";

export default {
  name: "NotesHistory",
  components: { VDataTable },
  setup() {

    //const notesStore = useNotesStore();
    //const sessionStore = useCurrentSessionStore();
    const sessionStore = useCurrentSessionStore();

    const items = ref([]);
    const page = ref(1);
    const itemsPerPage = ref(6);
    const headers = ref([
      {
        align: 'start',
        key: 'title',
        sortable: true,
        title: 'TITLE',
      },
      { title: 'DATUM', key: 'date' },
      { align: 'end', title: 'AKTIONEN', sortable: false, key: 'actions' },
    ]);

    return {
      items,
      page,
      itemsPerPage,
      headers,
      sessionStore,
    };
  },
  mounted: async function () {
    const data = await api.getVoiceRecords(getUser());
    console.log("data from backend", data)
    data.forEach(element => {
      this.items.push({
            title: this.getTextByLanguage(element.carePlanUnit.activity.translations, this.$i18n ),
            date: element.stopMoment,
            id: element.carePlanUnit.id,
            item: element
          })
    });
  },
  methods: {
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    routeDetails(ev, value) {
      //console.log("item",value.item.raw.id)

      console.log("STORE: " + JSON.stringify(value))

      this.sessionStore.setItem(value.item.raw)

      this.$router.push({
        name: "Dashboard3b",
        //params: { id: value.item.raw.id },
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
