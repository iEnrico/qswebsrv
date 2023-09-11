<template>

  <v-card class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="mt-1 mb-2 ml-4 mr-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">Patientenübersicht</v-card-title>
      <!--
      <v-btn
        style="height: 24px"
        variant="text"
        size="medium"
        icon="mdi-information-outline"
        color="#28B9AF"
        to="/dashboard3pre"
      ></v-btn>
      -->
      <v-spacer></v-spacer>
      <v-card class="rounded-lg" variant="text" min-width="400">
        <v-card-text>
          <v-text-field
            v-model="searchText"
            :loading="loading"
            density="compact"
            variant="solo"
            label="Patient suchen..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onSearch"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <PickerDialogNewPatient />
      <!-- 
      <v-btn  variant="elevated" style="background-color: #28B9AF;" @click="createNew" class="mt-0 mr-0">
        <span class="text-white">+ Neuer Patient</span>
      </v-btn>
      -->
      <!-- 
        
        to="/dashboard3a" 
        
        block variant="elevated" color="#28B9AF"
        -->
    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>
    <PatientList :searchText="searchText" :sortmode="sortmode" />
  </v-card>


</template>

<script>
//import PatientList from "@/components/patientslist.vue";
import PatientList from "@/components/patientslist.vue";
import { usePatientsStore } from "@/stores/patientStore";
import { Patients } from "@/types/patient";
import PickerDialogNewPatient from "@/components/pickerDialogNewPatient.vue";

//import { parseDate } from "@/scripts/media/utils";
export default {
  name: "PatientsViewTherapist",
  setup() {
    const patientsStore = usePatientsStore();
    return {
      patientsStore,
    };
  },
  data: () => ({
    searchText: "",
    sortmode: 0,
    loaded: false,
    loading: false,
    items: null,
  }),
  components: { PickerDialogNewPatient, PatientList },
  mounted: function () {
    this.items = new Patients(this.patientsStore.getPatients).models;
    console.log(this.items);
  },
  methods: {
    createNew: function () {
      this.$router.push({
                  name: 'DashboardTherapist3b',
                  params: {
                    data: JSON.stringify({
                      edit: true,
                      item: {
                        id: this.patientsStore.totalPatients,
                        text: '',
                        date: 1673482872000,
                        icon: 'mdi-account',
                      },
                    }),
                  },
                })
    },
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<style></style>
