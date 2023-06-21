<template>
  <v-list
    class="mt-0 pt-0"
    style="height: 24em; overflow-y: auto; background-color: #fff"
  >
    <center style="height: 100%" v-if="!items">
      <v-card-subtitle> Sie haben noch keine Patienten hinterlegt. </v-card-subtitle>
    </center>

    <!--
    <v-list-item
      :color="transparent"
      max-width="24em"
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      active-color="#fff"
      rounded="x0"
    >
    <ListItemPlayer v-if="0 == 1" :item="item" :index="i" />
    -->

    <ListItemPatients
      :item="item"
      :index="i"
      v-for="(item, i) in doSort(items, sortmode)"
      :key="i"
    />

    <!--</v-list-item>-->
  </v-list>
</template>

<script>
//import ListItemPlayer from "@/components/listItemPlayer.vue";
import ListItemPatients from "@/components/listItemPatients.vue";
//import data from "../scripts/data/data.js";
import { usePatientsStore } from "@/stores/patientStore";
import { Patients } from "@/types/patient";
export default {
  name: "PatientList",
  setup() {
    const patientsStore = usePatientsStore();
    return {
      patientsStore,
    };
  },
  data: () => ({
    items: null,
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
  components: { /*ListItemPlayer,*/ ListItemPatients },
  mounted: function () {
    console.log(new Patients(this.patientsStore.getPatients).models);
    this.items = new Patients(this.patientsStore.getPatients).models;
  },
  methods: {
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
    },
  },
};
</script>

<style></style>
