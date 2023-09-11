<template>
  <PickerDialogNewUser :action="createUser"/>
  <v-container style="min-width: 100%; min-height: 100%" class="mx-0 my-0">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-list
          class="mt-0 pt-0 pa-4"
          style="height: 550px; overflow-y: auto; background-color: #F6F6F6"
        >
          <center style="height: 100%" v-if="!patients">
            <v-card-subtitle> Sie haben noch keine Patienten hinterlegt. </v-card-subtitle>
          </center>
          <center v-if="patients">
            <v-card-subtitle style="font-size: large;"> Patienten ({{ patients.length }}/{{ nrPatients }})</v-card-subtitle>
          </center>
          <v-card class="rounded-lg" variant="text" min-width="400">
            <v-card-text>
              <v-text-field
                v-model="searchTextPatient"
                :loading="loading"
                density="compact"
                variant="solo"
                label="Patient suchen..."
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                clearable
                @click:append-inner="onSearch"
              ></v-text-field>
            </v-card-text>
          </v-card>
          <ListItemUser
            :role="'PATIENT'"
            :item="patient"
            :index="i"
            v-for="(patient, i) in patientsFiltered"
            :key="i"
          />
          <!--
            doSort(patients, sortmode)
            -->
        </v-list>
      </v-col>
      <v-divider vertical :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
      <v-col cols="12" sm="6">
        <v-list
          class="mt-0 pt-0 pa-4"
          style="height: 550px; overflow-y: auto; background-color: #F6F6F6"
        >
          <center style="height: 100%" v-if="!therapists">
            <v-card-subtitle> Sie haben noch keine Therapeuten hinterlegt. </v-card-subtitle>
          </center>
          <center v-if="therapists">
            <v-card-subtitle style="font-size: large;"> Therapeuten ({{ therapists.length }}/{{ nrTherapists }})</v-card-subtitle>
          </center>
          <v-card class="rounded-lg" variant="text" min-width="400">
            <v-card-text>
              <v-text-field
                v-model="searchTextTherapist"
                :loading="loading"
                density="compact"
                variant="solo"
                label="Therapeut suchen..."
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                clearable
                @click:append-inner="onSearch"
              ></v-text-field>
            </v-card-text>
          </v-card>
          <ListItemUser
            :role="'THERAPIST'"
            :item="therapist"
            :index="i"
            v-for="(therapist, i) in therapistsFiltered"
            :key="i"
          />
          <!--
            doSort(therapists, sortmode)
            -->
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-overlay v-model="overlay"></v-overlay> -->
</template>

<script>
//import NewsTicker from "@/components/newsTicker.vue";
//import CoursesView from "@/components/coursesOverview.vue";
//import NewsView from "@/components/newsListPatient.vue";
//import { useNotificationStore } from "../stores/notificationStore.ts";
import PickerDialogNewUser from "@/components/pickerDialogNewUser.vue";
import ListItemUser from "@/components/listItemUser.vue";

import api from "@/scripts/api/api";

export default {
  name: "HomeViewAdmin",
  /*setup() {
    const store = useNotificationStore();
    return {
      store,
    };
  },*/
  data: () => ({
    user: "",
    //overlay: false,
    //sortmode: 0,
    searchTextPatient: "",
    searchTextTherapist: "",
    loaded: false,
    loading: false,
    patients: null, // temp, please remove by store
    patientsFiltered: [], // temp, please remove by store
    nrPatients: 0,
    therapists: null, // temp, please remove by store
    therapistsFiltered: [], // temp, please remove by store
    nrTherapists: 0,
  }),
  components: { PickerDialogNewUser, ListItemUser /*NewsTicker, CoursesView, NewsView*/ },
  mounted: function () {
    //console.log(" >> Test output 'commonstore': " + this.store.totalNotifications);
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    this.getTherapists();
    this.getPatients();
  },
  watch: {
    searchTextPatient: function () {
      console.log(this.searchTextPatient)
      if (this.searchTextPatient == null) {
        this.patientsFiltered = this.patients
      } else {
        this.patientsFiltered = this.patients.filter(
          (patient) => patient.keycloakUsers[0].username.search(this.searchTextPatient) === 0
        );
      }
      console.log(this.patientsFiltered)
    },
    searchTextTherapist: function () {
      console.log(this.searchTextTherapist)
      if (this.searchTextTherapist == null) {
        this.therapistsFiltered = this.therapists
      } else {
        this.therapistsFiltered = this.therapists.filter(
          (therapist) => therapist.keycloakUsers[0].username.search(this.searchTextTherapist) === 0
        );
      }
      console.log(this.therapistsFiltered)
    },
  },
  methods: {
    getTherapists: async function () {
      this.therapists = await api.getTherapists(this.user.id);
      this.therapists.forEach((element) => {
        this.nrTherapists += element.keycloakUsers.length
      })
      this.therapistsFiltered = this.therapists
      console.log("therapists: " + this.therapists)
    },
    getPatients: async function () {
      this.patients = await api.getPatients(this.user.id);
      this.patients.forEach((element) => {
        this.nrPatients += element.keycloakUsers.length
      })
      this.patientsFiltered = this.patients
      console.log("patients: " + this.patients)
    },
    createUser: function (data) {
      
      alert("create user:\n" + data);
      //alert("create user:\n"+this.alias+"\n"+this.firstname+"\n"+this.lastname+"\n"+this.password+"\n"+this.password_repeat+"\n"+this.role);
        
      console.log(data);

      api.postCreateNewUser(this.user.id, data);
    },
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    /*
    doSort(array, sortmode) {
      if (array == null) return;
      switch (sortmode) {
        case 0:
          return array.sort((a, b) => a.id.localeCompare(b.id));
        case 1:
          return array.sort((a, b) => b.id.localeCompare(a.id));
        case 2:
          return array.sort((a, b) => (a.createdTimestamp < b.createdTimestamp ? -1 : a.createdTimestamp > b.createdTimestamp ? 1 : 0));
        case 3:
          return array.sort((a, b) => (a.createdTimestamp < b.createdTimestamp ? 1 : a.createdTimestamp > b.createdTimestamp ? -1 : 0));

        default:
          return array;
      }
    },*/
  },
};
</script>

<style></style>
