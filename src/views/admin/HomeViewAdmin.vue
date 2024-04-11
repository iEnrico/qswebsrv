<template>
  <InfoDlg ref="user_created" />
  <PickerDialogNewUser :action="createUser"/>
  <v-container style="min-width: 100%; min-height: 95%" class="mx-0 my-0">
    <v-row no-gutters>
      
      <v-col cols="12" sm="6">
        <v-card class="rounded-lg mx-4" variant="elevated">
          <center style="height: 100%" v-if="!loadingPatients && patients.length == 0">
            <v-card-subtitle class="mt-4"> Sie haben noch keine Patienten hinterlegt. </v-card-subtitle>
          </center>
          <center v-if="patients">
            <v-card-subtitle class="mt-4" style="font-size: large;"> Patienten ({{ patients.length }}/{{ nrPatients }})</v-card-subtitle>
          </center>
          <v-card v-if="patients" class="rounded-lg" variant="text" >
            <v-card-text>
              <v-text-field
                v-model="searchTextPatient"
                class="ml-4 mr-4"
                :loading="loadingPatients"
                density="compact"
                variant="solo"
                label="Patient suchen..."
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                clearable
              ></v-text-field>
              <!-- @click:append-inner="onSearch" -->
            </v-card-text>
          </v-card>
          <center>
            <v-progress-circular
              class="mx-8 my-8"
              v-if="loadingPatients"
              indeterminate
              color="#28B9AF"
            />
          </center>
          <center style="height: 100%" v-if="!loadingPatients && patientsFiltered.length == 0">
            <v-card-title> Keine Patienten für "{{ searchTextPatient }}" gefunden. </v-card-title>
          </center>
          <v-list
            v-if="patients"
            class="mt-0 pt-0 pa-4"
            style="height: 38em; overflow-y: auto; "
          >
            <ListItemUser
              :role="'PATIENT'"
              :item="patient"
              :index="i"
              v-for="(patient, i) in patientsFiltered"
              :key="i"
            />
          </v-list>
        </v-card>
      </v-col>
      
      <v-divider vertical :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
      <v-col cols="12" sm="6">
        <v-card class="rounded-lg mx-4" variant="elevated" >
          <center style="height: 100%" v-if="!loadingTherapists && therapists.length == 0">
            <v-card-subtitle class="mt-4"> Sie haben noch keine Therapeuten hinterlegt. </v-card-subtitle>
          </center>
          <center v-if="therapists">
            <v-card-subtitle class="mt-4" style="font-size: large;"> Therapeuten ({{ therapists.length }}/{{ nrTherapists }})</v-card-subtitle>
          </center>
          <v-card v-if="therapists" class="rounded-lg" variant="text" min-width="400">
            <v-card-text>
              <v-text-field
                v-model="searchTextTherapist"
                class="ml-4 mr-4"
                :loading="loadingTherapists"
                density="compact"
                variant="solo"
                label="Therapeut suchen..."
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                clearable
              ></v-text-field>
              <!-- @click:append-inner="onSearch" -->
            </v-card-text>
          </v-card>
          <center>
            <v-progress-circular
              class="mx-8 my-8"
              v-if="loadingTherapists"
              indeterminate
              color="#28B9AF"
            />
          </center>
          <center style="height: 100%" v-if="!loadingTherapists && therapistsFiltered.length == 0">
            <v-card-title> Keine Therapeuten für "{{ searchTextTherapist }}" gefunden. </v-card-title>
          </center>
          <v-list
            v-if="therapists"
            class="mt-0 pt-0 pa-4"
            style="height: 38em; overflow-y: auto; "
          >
            <ListItemUser
              :role="'THERAPIST'"
              :item="therapist"
              :index="i"
              v-for="(therapist, i) in therapistsFiltered"
              :key="i"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PickerDialogNewUser from "@/components/dialogs/pickerDialogNewUser.vue";
import ListItemUser from "@/components/listItems/listItemUser.vue";
import InfoDlg from "@/components/dialogs/dialogInformation.vue";

import api from "@/scripts/api/api";

export default {
  name: "HomeViewAdmin",
  data: () => ({
    user: "",
    searchTextPatient: "",
    searchTextTherapist: "",
    //loaded: false,
    loadingPatients: false,
    loadingTherapists: false,
    patients: [], // temp, please remove by store
    patientsFiltered: [], // temp, please remove by store
    nrPatients: 0,
    therapists: [], // temp, please remove by store
    therapistsFiltered: [], // temp, please remove by store
    nrTherapists: 0,
  }),
  components: { 
    PickerDialogNewUser, 
    ListItemUser,
    InfoDlg, 
    /*NewsTicker, CoursesView, NewsView*/ },
  mounted :async function () {
    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
     this.getTherapists();
     this.getPatients();
  },
  watch: {
    searchTextPatient: function () {
      if (this.searchTextPatient == null) {
        this.patientsFiltered = this.patients
      } else {
        this.patientsFiltered = this.patients.filter(
          (patient) => (patient.keycloakUsers[0].username.toUpperCase().search(this.searchTextPatient.toUpperCase()) === 0 || patient.keycloakUsers[0].username.toUpperCase().indexOf(this.searchTextPatient.toUpperCase()) >= 0)
        );
      }
      console.log(this.patientsFiltered.length)
    },
    searchTextTherapist: function () {
      if (this.searchTextTherapist == null) {
        this.therapistsFiltered = this.therapists
      } else {
        this.therapistsFiltered = this.therapists.filter(
          (therapist) => (therapist.keycloakUsers[0].username.toUpperCase().search(this.searchTextTherapist.toUpperCase()) === 0 || therapist.keycloakUsers[0].username.toUpperCase().indexOf(this.searchTextTherapist.toUpperCase()) >= 0)
        );
      }
    },
  },
  methods: {
    getTherapists: async function () {
      this.loadingTherapists = true;
      this.therapists = await api.getTherapists(this.user.id);
      this.therapists.forEach((element) => {
        this.nrTherapists += element.keycloakUsers.length
      })
      this.therapistsFiltered = this.therapists
      this.loadingTherapists = false;
    },
    getPatients: async function () {
      this.loadingPatients = true;
      this.patients = await api.getPatients(this.user.id);
      this.patients.forEach((element) => {
        this.nrPatients += element.keycloakUsers.length
      })
      this.patientsFiltered = this.patients
      this.loadingPatients = false;
    },
    createUser: async function (data) {
      const result = await api.postCreateNewUser(this.user.id, data);
      await this.$refs.user_created.open(
        "Hinweis",
        result
      )
    },
    /*
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },*/
  },
};
</script>

<style></style>
