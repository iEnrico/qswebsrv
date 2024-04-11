<template>
  <v-card class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="mt-1 mb-2 ml-4 mr-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">Patientenübersicht</v-card-title>
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
            clearable
            hide-details
          ></v-text-field>
        </v-card-text>
      </v-card>
      <!--<PickerDialogNewPatient />
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

import PatientList from "@/components/patientslist.vue";
//import PickerDialogNewPatient from "@/components/dialogs/pickerDialogNewPatient.vue";

export default {
  name: "PatientsViewTherapist",
  data: () => ({
    searchText: "",
    sortmode: 0,
    //loaded: false,
    //loading: false,
  }),
  components: { /*PickerDialogNewPatient,*/ PatientList },
  mounted: async function () { },
  methods: {
    /*
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
    */
    /*
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    */
  },
};
</script>

<style></style>
