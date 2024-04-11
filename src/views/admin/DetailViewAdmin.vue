<template>
  <ConfirmDlg ref="confirm" />
  <v-container style="min-width: 100%; min-height: 100%" class="mx-0 my-0">
    <v-row no-gutters>
      
      <v-col cols="12" sm="12">
        <v-row no-gutters>
          <v-btn
              variant="elevated"
              class="ml-4 mb-4"
              style="background-color: #28b9af"
              @click="routeBack"
          >
            <span class="text-white">{{ this.$i18n.t("questionaire_btn_back") }}</span>
          </v-btn>
          <PickerDialogSelectUser :role="session_data.role" :action="createConsent"/>
        </v-row>
        <v-card class="rounded-lg ml-4 mt-4 pb-4" width="33%" variant="elevated">

          <v-card-title> {{ session_data.item.keycloakUsers[0].username }} </v-card-title>
          <v-card-subtitle> <b>created:</b> {{ parseDate(session_data.item.keycloakUsers[0].createdTimestamp) }} </v-card-subtitle>
          <v-card-subtitle> <b>First, Lastname:</b> {{ session_data.item.keycloakUsers[0].firstName }}, {{ session_data.item.keycloakUsers[0].lastName }}</v-card-subtitle>
          <v-card-subtitle> <b>Email:</b> {{ session_data.item.keycloakUsers[0].email }} </v-card-subtitle>
          <v-card-subtitle class="mt-2"> <b>keycloakID:</b> {{ session_data.item.keycloakUsers[0].id }} </v-card-subtitle>
          <v-card-subtitle> <b>fhirID:</b> {{ this.session_data.item.fhirResourceId }} </v-card-subtitle>
          
        </v-card>
      </v-col>

      <v-col cols="6" sm="6">
        <v-card class="rounded-lg mt-8 mx-4" variant="elevated">
          <v-list
              class="mt-4 pt-0 pa-4"
              style="height: 32em; overflow-y: auto; "
          >
            <center>
              <v-progress-circular
                class="mx-8 my-8"
                v-if="loadingConsents"
                indeterminate
                color="#28B9AF"
              />
            </center>
            <div v-if="!loadingConsents">
              <center style="height: 100%" v-if="!consents.length > 0">
                <v-card-subtitle>
                  Sie haben noch keine Consents hinterlegt.
                </v-card-subtitle>
              </center>
              <center v-if="consents.length > 0">
                <v-card-subtitle style="font-size: large">
                  Consents
                </v-card-subtitle>
              </center>
              <ListItemUserConsents
                  :item="consent"
                  :index="i"
                  v-for="(consent, i) in consents"
                  :key="i"
                  :actionDelete="deleteConsent"
              />
            </div>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6">
        <v-card class="rounded-lg mt-8 mx-4" variant="elevated">
          <v-list
              class="mt-4 pt-0 pa-4"
              style="height: 32em; overflow-y: auto; "
          >
            <center>
              <v-progress-circular
                class="mx-8 my-8"
                v-if="loadingProcedures"
                indeterminate
                color="#28B9AF"
              />
            </center>
            <div v-if="!loadingProcedures">
              <center style="height: 100%" v-if="!consents.length > 0">
                <v-card-subtitle>
                  Sie haben noch keine Aktivitäten hinterlegt.
                </v-card-subtitle>
              </center>
              <center v-if="consents.length > 0">
                <v-card-subtitle style="font-size: large">
                  Aktivitäten
                </v-card-subtitle>
              </center>
              <ListItemUserActivitys
                  :item="procedure"
                  :index="i"
                  v-for="(procedure, i) in procedures.data"
                  :key="i"
              />
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ListItemUserConsents from "@/components/listItems/listItemUserConsents.vue";
import ListItemUserActivitys from "@/components/listItems/listItemUserActivitys.vue";
import PickerDialogSelectUser from "@/components/dialogs/pickerDialogSelectUser.vue";
import ConfirmDlg from "@/components/dialogs/dialogConfirmation.vue";

import { parseDate } from "@/scripts/common/utils";
import api from "@/scripts/api/api";

import { useAdminUserStore } from "@/stores/currentAdminUserStore";

export default {
  name: "DetailViewAdmin",
  setup() {
    const adminUserStore = useAdminUserStore();
    return {
      adminUserStore,
    };
  },
  computed: {
    session_data() {
      return this.adminUserStore.getItem;
    },
  },
  data: () => ({
    //session_data: null,
    consents: [],
    procedures: [],
    loadingProcedures: false,
    loadingConsents: false
  }),
  components: {
    PickerDialogSelectUser,
    ListItemUserConsents,
    ListItemUserActivitys,
    ConfirmDlg,
  },
  mounted: async function () {
    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
    //this.session_data = this.adminUserStore.getItem
    await this.getConsents();
    await this.getProcedures();
  },
  created: function () {
    //this.session_data = this.adminUserStore.getItem //JSON.parse(this.$route.params.data);
    //console.log("created.data: " + JSON.stringify(this.session_data));
  },
  methods: {
    getProcedures: async function () {
      this.loadingProcedures = true
      this.procedures = await api.getProcedures(this.user);
      this.loadingProcedures = false
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

      console.log("item:\n" + JSON.stringify(this.session_data))

      this.loadingConsents = true
      if (this.session_data.role == "THERAPIST") {
        const consentsRelations= await api.getTherapistsConsents(this.user.id, this.session_data.item.keycloakUsers[0].fhirResourceId)
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
        const consentsRelations= await api.getPatientsConsents(this.user.id, this.session_data.item.keycloakUsers[0].fhirResourceId)
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
      this.loadingConsents = false
    },
    deleteConsent: async function (fhirResourceId) {
      if (
          await this.$refs.confirm.open(
              "Confirm",
              "Sind Sie sicher, dass Sie diesen Datensatz löschen möchten?"
          )
      ) {
        if (this.session_data.role == "THERAPIST") {
          await api.deleteTherapistsConsents(
              this.session_data.item.fhirResourceId,
              fhirResourceId
          );
          this.consents = this.consents.filter((c) => {
            return ( c.fhirResourceId !== fhirResourceId );
          });
        } else if (this.session_data.role == "PATIENT") {
          await api.deletePatientsConsents(
              this.session_data.item.fhirResourceId,
              fhirResourceId
          );
          this.consents = this.consents.filter((c) => {
            return ( c.fhirResourceId !== fhirResourceId );
          });
        }
      }
    },
    parseDate(timecode) {
      return parseDate(timecode)
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
