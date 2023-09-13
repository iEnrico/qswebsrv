<template>
  <ConfirmDlg ref="confirm" />
  <v-container style="min-width: 100%; min-height: 100%" class="mx-0 my-0">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-row no-gutters>
          <v-btn
            variant="elevated"
            class="ml-4 mb-2"
            style="background-color: #28b9af"
            @click="routeBack"
          >
            <span class="text-white">{{ "< back" }}</span>
          </v-btn>
          <!--
          <v-btn variant="elevated" class="ml-4 mb-2" style="background-color: #28B9AF;" @click="getConsents">
            <span class="text-white">{{ "reload consents" }}</span>
          </v-btn>
          -->
        </v-row>
        <v-card-title> Nutzerinformationen: </v-card-title>
        <v-card-subtitle style="font-size: large;"> {{ session_data.item.keycloakUsers[0].username }} </v-card-subtitle>
        <v-card-subtitle> fhirID: {{ this.session_data.item.fhirResourceId }} </v-card-subtitle>
        <v-card-subtitle> keycloakID: {{ session_data.item.keycloakUsers[0].id }} </v-card-subtitle>
        <v-card-subtitle> {{ parseDate(session_data.item.keycloakUsers[0].createdTimestamp) }} </v-card-subtitle>
        <v-card-subtitle> {{ session_data.item.keycloakUsers[0].firstName }} </v-card-subtitle>
        <v-card-subtitle> {{ session_data.item.keycloakUsers[0].lastName }} </v-card-subtitle>
        <v-card-subtitle> {{ session_data.item.keycloakUsers[0].email }} </v-card-subtitle>
        <PickerDialogSelectUser :role="session_data.role" :action="createConsent"/>
        <!-- height: 550px; -->
        <v-list
            class="mt-8 pt-0 pa-4"
            style="overflow-y: auto; background-color: #F6F6F6"
        >
          <center style="height: 100%" v-if="!consents.length > 0">
            <v-card-subtitle>
              Sie haben noch keine Consents hinterlegt.
            </v-card-subtitle>
          </center>
          <center v-if="consents.length > 0">
            <v-card-subtitle style="font-size: large">
              Consents:
            </v-card-subtitle>
          </center>
          <ListItemUserConsents
              :item="consent"
              :index="i"
              v-for="(consent, i) in consents"
              :key="i"
              :actionDelete="deleteConsent"
              :session_data="session_data"
          />
        </v-list>
        <!-- height: 550px; -->
        <v-list
            class="mt-8 pt-0 pa-4"
            style="overflow-y: auto; background-color: #F6F6F6"
        >
          <center style="height: 100%" v-if="!consents.length > 0">
            <v-card-subtitle>
              Sie haben noch keine Aktivitäten hinterlegt.
            </v-card-subtitle>
          </center>
          <center v-if="consents.length > 0">
            <v-card-subtitle style="font-size: large">
              Aktivitäten:
            </v-card-subtitle>
          </center>
          <ListItemUserActivitys
              :item="procedure"
              :index="i"
              v-for="(procedure, i) in procedures.data"
              :key="i"
          />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import PickerDialogNewUser from "@/components/pickerDialogNewUser.vue";
import ListItemUserConsents from "@/components/listItemUserConsents.vue";
import ListItemUserActivitys from "@/components/listItemUserActivitys.vue";
import PickerDialogSelectUser from "@/components/pickerDialogSelectUser.vue";
import ConfirmDlg from "@/components/dialogConfirmation.vue";

import api from "@/scripts/api/api";

export default {
  name: "DetailViewAdmin",
  /*setup() {
    const store = useNotificationStore();
    return {
      store,
    };
  },*/
  data: () => ({
    session_data: {},
    consents: [],
    procedures: []
  }),
  components: {
    PickerDialogSelectUser,
    ListItemUserConsents,
    ListItemUserActivitys /*PickerDialogNewUser*/,
    ConfirmDlg,
  },
  mounted: async function () {
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));


    }

    this.consents = [];

    await this.getConsents();
    await this.getProcedures();
  },
  created: function () {
    this.session_data = JSON.parse(this.$route.params.data);
    console.log("created.data: " + JSON.stringify(this.session_data));
  },
  /*
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },*/
  methods: {
    getProcedures: async function () {
      this.procedures = await api.getProcedures(this.user);
    },
    createConsent: async function (data) {

      if (this.session_data.role == 'PATIENT') {

        const id = this.session_data.item.fhirResourceId
        const requestBody = JSON.stringify({
          fhirResourceId: data.fhirResourceId,
        });
        const result = await api.postPatientsConsents(
          this.user.id,
          id,
          requestBody
        );
                  debugger;
        if (result.fhirPatient && result.fhirTherapist) {
          this.consents = [...this.consents, data];
        }



      } else if (this.session_data.role == 'THERAPIST') {

        const id = this.session_data.item.fhirResourceId
        const requestBody = JSON.stringify({
          fhirResourceId: data.fhirResourceId,
        });
        const result = await api.postTherapistsConsents(
          this.user.id,
          id,
          requestBody
        );
        if (result.fhirPatient && result.fhirTherapist) {
          this.consents = [...this.consents, data];
        }
      }

    },
    getConsents: async function () {
      if (this.session_data.role == "THERAPIST") {
        const consentsRelations= await api.getTherapistsConsents(this.user.id, this.session_data.item.fhirResourceId)
        const patients=[];
        if(consentsRelations && consentsRelations.length > 0){
          for (const consentRelation of consentsRelations) {
            const patient=  await api.getPatientById(this.user.id, consentRelation.fhirPatient);
            if(patient){
              patients.push(patient);
            }
          }
        }
        this.consents=patients;

      }
      else if (this.session_data.role == "PATIENT") {

        const consentsRelations= await api.getPatientsConsents(this.user.id, this.session_data.item.fhirResourceId)
        const therapists=[];
        if(consentsRelations && consentsRelations.length > 0){
          for (const consentRelation of consentsRelations) {
            const therapist=  await api.getTherapistByID(this.user.id, consentRelation.fhirTherapist);
            if(therapist){
              therapists.push(therapist);
            }
          }
        }
        this.consents=therapists;

      }
    },
    deleteConsent: async function (fhirResourceId) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Sind Sie sicher, dass Sie diesen Datensatz löschen möchten?"
        )
      ) {
        if (this.session_data.role == "THERAPIST") {
          const result = await api.deleteTherapistsConsents(
            this.session_data.item.fhirResourceId,
            fhirResourceId
          ); 
          this.consents = this.consents.filter((c) => {
            return (
              c.fhirResourceId !== fhirResourceId );
          });
          

        } else if (this.session_data.role == "PATIENT") {
          const result = await api.deletePatientsConsents(
            this.session_data.item.fhirResourceId,
            fhirResourceId
          ); 
          this.consents = this.consents.filter((c) => {
            return (
              c.fhirResourceId !== fhirResourceId );
          });

        }
      }
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
    routeBack() {
      this.$router.push({
        name: "DashboardAdmin1",
      });
    },
  },
};
</script>

<style></style>
