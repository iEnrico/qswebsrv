<template>
  <v-table 
    v-if="0 == 1"
    fixed-header 
    show-select height="300px">
    <thead>
      <tr>
        <!-- <th class="text-left">[]</th> -->
        <th class="text-left">ID</th>
        <th class="text-left">REGISTRIERT SEIT</th>
        <th class="text-left">REGISTRIERUNG</th>
        <th class="text-left">FOLLOW UP</th>
        <th class="text-left">FINAL</th>
        <th class="text-right">AKTIONEN</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="item.text" style="cursor: pointer" @click="routeDetails(item)">
        <!-- <td>{{ "[]" }}</td> -->
        <td>{{ item.text }}</td>
        <td>{{ parseDate(item.date) }}</td>
        <td>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#4FAF9C">{{ "mdi-book-settings-outline" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#F47F76">{{ "mdi-file-document-edit" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#FAC194">{{ "mdi-file-video-outline" }}</v-icon> 
            </template>
          </v-tooltip>
        </td>
        <td>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-file-sign" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-web" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-safety-goggles" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-file-video-outline" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-file-document-edit" }}</v-icon> 
            </template>
          </v-tooltip>
        </td>
        <td>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-web" }}</v-icon> 
            </template>
          </v-tooltip>
          <v-tooltip location="bottom" :text="'Item ' + (index+1)">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="#DDD">{{ "mdi-safety-goggles" }}</v-icon> 
            </template>
          </v-tooltip>
        </td>
        <td class="text-right">
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
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-pagination v-if="0 == 1" :length="3" rounded="circle" class="mb-2"></v-pagination>

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
    <template #[`item.reg`]="{  }">
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#4FAF9C">{{ "mdi-book-settings-outline" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#F47F76">{{ "mdi-file-document-edit" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#FAC194">{{ "mdi-file-video-outline" }}</v-icon> 
        </template>
      </v-tooltip>
    </template>
    <template #[`item.follow`]="{  }">
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-file-sign" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-web" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-safety-goggles" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-file-video-outline" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-file-document-edit" }}</v-icon> 
        </template>
      </v-tooltip>
    </template>
    <template #[`item.final`]="{  }">
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-web" }}</v-icon> 
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="'Item ' + (index+1)">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="#DDD">{{ "mdi-safety-goggles" }}</v-icon> 
        </template>
      </v-tooltip>
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
//import ListItemPatients from "@/components/listItemPatients.vue";
//import data from "../scripts/data/data.js";
import { usePatientsStore } from "@/stores/patientStore";
import { Patients } from "@/types/patient";
import { mergeProps } from "vue"; 
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
  name: "PatientList",
  setup() {
    const patientsStore = usePatientsStore();
    
    console.log(new Patients(patientsStore.getPatients).models);
    const items = new Patients(patientsStore.getPatients).models;
    
    return {
      patientsStore, items
    };
  },
  data: () => ({
    page: 1,
    itemsPerPage: 6,
    headers: [
      {
        align: 'start',
        key: 'text',
        sortable: false,
        title: 'ID',
      },
      { title: 'REGISTRIERT SEIT', key: 'date' },
      { title: 'REGISTRIERUNG', key: 'reg' },
      { title: 'FOLLOW UP', key: 'follow' },
      { title: 'FINAL', key: 'final' },
      { align: 'end',
        title: 'AKTIONEN', key: 'actions' },
    ],
  }),
  props: ["searchText", "sortmode"],
  watch: {
    searchText: function () {
      console.log(this.searchText);
      this.items = new Patients(
        this.patientsStore.getPatients.filter(
          (patient) => patient.text.indexOf(this.searchText) != -1
        )
      ).models;
    },
  },
  components: { VDataTable },
  mounted: function () { },
  methods: {
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
    routeDetails(ev, value) {
      this.$router.push({
        name: "DashboardTherapist3b",
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: value.item.selectable,
          }),
        },
      });
    },
    /*
    doSort(array, sortmode) {
      if (array == null) return;
      switch (sortmode) {
        case 0:
          return array.sort((a, b) => a.text.localeCompare(b.text));
        case 1:
          return array.sort((a, b) => b.text.localeCompare(a.text));
        case 2:
          return array.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
        case 3:
          return array.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

        default:
          return array;
      }
    },*/
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
  background-color: #4FAF9C40 !important;
}

</style>
