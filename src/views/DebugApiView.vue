<template>
  <v-card variant="text" class="mx-auto rounded-lg">
    <v-container fluid align="center">
      <v-col :cols="4" align="start" justify="start">
        <v-row dens align="start" justify="start">
          <v-card-title>API</v-card-title>
        </v-row>

        <v-col dens align="start" justify="start">
          USER

          <v-btn variant="outlined" class="ma-0" @click="userData()">
            {{ "/user/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="availableActivitys()">
            {{ "/user/available-activities/" }}
          </v-btn>
          
          <v-btn variant="outlined" class="ma-0" @click="postProcedures()">
            {{ "/user/post_procedure/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          CAREPLAN PRESETS

          <v-btn variant="outlined" class="ma-0" @click="careplanPresets()">
            {{ "/care-plans/presets/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanPresetById()">
            {{ "/care-plans/presets/{ID}/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          CAREPLAN RECORDS

          <v-btn variant="outlined" class="ma-0" @click="careplanRecords()">
            {{ "/care-plans/records/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordsById()">
            {{ "/care-plans/records/{ID}/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordHistory()">
            {{ "/care-plans/records/{ID}/history/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordUnits()">
            {{ "/care-plans/records/{ID}/units/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordUnitByUnitId()">
            {{ "/care-plans/records/{ID}/units/{UnitID}/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordUnitSchedules()">
            {{ "/care-plans/records/{ID}/units/{UnitID}/schedules/" }}
          </v-btn>

          <v-btn
            variant="outlined"
            class="ma-0"
            @click="careplanRecordUnitSchedulesById()"
          >
            {{ "/care-plans/records/{ID}/units/{UnitID}/schedules/{ScheduleID}/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="careplanRecordUpdateCheck()">
            {{ "/care-plans/records/{ID}/update-check/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          CONTENT PACKAGES

          <v-btn variant="outlined" class="ma-0" @click="contentPackage()">
            {{ "/content-packages/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="contentPackageByName()">
            {{ "/content-packages/{name}/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="contentPackageByNameVersion()">
            {{ "/content-packages/{name}/{version}/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          PATIENTS

          <v-btn variant="outlined" class="ma-0" @click="patients()">
            {{ "/users/" }}
          </v-btn>

          <v-btn variant="outlined" class="ma-0" @click="patientById()">
            {{ "/users/1/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          CREATE USER

          <v-btn variant="outlined" class="ma-0" @click="createNewUser()">
            {{ "/users/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          GET VOICE RECORDS

          <v-btn variant="outlined" class="ma-0" @click="getVoiceRecords()">
            {{ "/voice-records/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          GET VOICE RECORDS BY ID

          <v-btn variant="outlined" class="ma-0" @click="getVoiceRecordsById()">
            {{ "/voice-records/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          POST VOICE RECORD

          <v-btn variant="outlined" class="ma-0" @click="postVoiceRecord()">
            {{ "/voice-records/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          GET PROCEDURES

          <v-btn variant="outlined" class="ma-0" @click="getProcedures()">
            {{ "/procedures/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          POST PROCEDURES

          <v-btn variant="outlined" class="ma-0" @click="postProcedures()">
            {{ "/procedures/" }}
          </v-btn>
        </v-col>

        <v-col dens align="start" justify="start">
          PATCH PROCEDURES

          <v-btn variant="outlined" class="ma-0" @click="patchProcedure()">
            {{ "/procedures/{id}" }}
          </v-btn>
        </v-col>
        
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import api from "@/scripts/api/api";

export default {
  name: "DebugView",
  data: () => ({
    user: "",
  }),
  props: {},
  components: {},
  mounted: function () {
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
  methods: {
    // USER
    userData: async function () {
      console.log("request backend data with following params: " + this.user.id);
      const response = await api.getUserData();
      if (response) {
        alert(
          "USER - GET  /user/\n\n" +
            (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data))
        );
      }
    },
    availableActivitys: async function () {
      console.log("request backend data with following params: " + this.user.id);
      const response = await api.getAvailableActivitys(this.user.id);
      if (response) {

        /*
        alert(
          "USER - GET  /user/available-activities/\n\n" +
            (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data))
        );*/

        response.data.forEach((element) => {

          let unitsInfo = ""
          let carePlanUnitsInfo = ""

          element.units.forEach((unit) => {
            unitsInfo = "id: " + unit.id + ", name: " + unit.contentPackage.name + ", " 
          });

          element.carePlanUnits.forEach((unit) => {
            carePlanUnitsInfo = "id: " + unit.id + ", planid: " + unit.carePlan.id + ", planuuid: " + unit.carePlan.uuid + ", " 
          });

          alert(
            "Activity:\n" + "id: " + element.id + ", avail. " + element.available + ", name: " + element.name + "\n\n" +
            "units: " + element.units.length + "\n" + unitsInfo + "\n\n" +
            "carePlanUnits: " + element.carePlanUnits.length + "\n" + carePlanUnitsInfo + "\n" 
          );
        });
      }
    },
    // CAREPLAN RECORDS
    careplanRecords: async function () {
      console.log("request backend data with following params: " + this.user.id);
      const response = await api.getCareplanRecords(this.user.id);
      if (response) {
        alert(
          "CAREPLAN RECORDS - GET  /care-plans/records/\n\n" +
            (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data))
        );
      }
    },
    careplanRecordsById: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanRecordById(this.user.id, 1);
    },
    careplanRecordHistory: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanRecordHistory(this.user.id, 1);
    },
    careplanRecordUnits: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanRecordUnits(this.user.id, 1);
    },
    careplanRecordUnitByUnitId: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1, 1");
      api.getCareplanRecordUnitByUnitId(this.user.id, 1, 1);
    },
    careplanRecordUnitSchedules: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1, 1");
      api.getCareplanRecordUnitSchedules(this.user.id, 1, 1);
    },
    careplanRecordUnitSchedulesById: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1, 1, 1");
      api.getCareplanRecordUnitSchedulesById(this.user.id, 1, 1, 1);
    },
    careplanRecordUpdateCheck: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanRecordUpdateCheck(this.user.id, 1);
    },
    // CAREPLAN PRESETS
    careplanPresets: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanPresets(this.user.id);
    },
    careplanPresetById: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getCareplanPresetById(this.user.id, 1);
    },
    // CONTENT PACKAGE
    contentPackage: async function () {
      console.log("request backend data with following params: " + this.user.id);
      const result = await api.getContentPackage(this.user.id);
      if (result) {
        alert(
          "CONTENT PACKAGE - GET  /content-packages/\n\n" +
            (result.data.length == 0 ? "empty :(" : JSON.stringify(result.data))
        );
      }
    },
    contentPackageByName: function () {
      console.log(
        "request backend data with following params: " +
          this.user.id +
          ", web_writing_exercise"
      );
      api.getContentPackageByName(this.user.id, "web_writing_exercise");
    },
    contentPackageByNameVersion: function () {
      console.log(
        "request backend data with following params: " + this.user.id + ", 1, 1"
      );
      api.getContentPackageByNameVersion(this.user.id, "test", 1);
    },
    // PATIENT
    patients: function () {
      console.log("request backend data with following params: " + this.user.id);
      api.getPatients(this.user.id);
    },
    patientById: function () {
      console.log("request backend data with following params: " + this.user.id + ", 1");
      api.getPatientById(this.user.id, 1);
    },
    // CREATE USER
    createNewUser: function () {
      console.log("posting data to backend with following params: {debug}");

      /*
      {
        "id":"e1bdbe37-8af9-4859-8bbb-a0b5765237cd",
        "firstName":"Benjamin",
        "lastName":"Oster",
        "fullName":"Benjamin Oster",
        "email":"benjamin.oster@nuromedia.com",
        "fhirResourceId":"0",
        "roles":["THERAPIST","PATIENT","ADMIN"],
        "patients":["0","1","2"]
      }
      */

      /*
      {
        'fhirResourceId': 'string',
        'role': 'string',
        'email': 'string',
        'username': 'string',
        'password': 'string',
        'name': 'string',
        'lastName': 'string'
      }
      */

      const sampledata = JSON.stringify({
        fhirResourceId: "0",
        role: "PATIENT",
        email: "thesparxinc@googlemail.com",
        username: "ambro",
        password: "test123",
        name: "ambro",
        lastName: "zwacki",
      });
      //const sampledata = "{}";

      api.postCreateNewUser(this.user.id, sampledata);
    },
    getVoiceRecords() {
      console.log("posting data to backend with following params: {debug}");
      api.getVoiceRecords(this.user.id);
    },
    getVoiceRecordsById() {
      console.log("posting data to backend with following params: {debug}");
      api.getVoiceRecordsById(this.user.id, 1);
    },
    postVoiceRecord() {
      console.log("posting data to backend with following params: {debug}");

      // get path for audio file
      const audio = new Audio(require("@/assets/audio2.ogg"));

      var xhr = new XMLHttpRequest();
      xhr.open("GET", audio.src);
      xhr.responseType = "blob";
      xhr.onload = () => {
        api.postVoiceRecords(this.user.id, xhr.response);
      };
      xhr.send();

      /*
      var audioBlob = new window.Blob(localFile, {
        type: "audio/ogg",
      });
      console.log("type of audio2: " + typeof audioBlob.size);
      */

      //audio.play();
      //const sampledata = "{ 'file': BINARY }";
    },
    getProcedures() {
      console.log("posting data to backend with following params: {debug}");
      api.getProcedures(this.user.id);
    },
    postProcedures() {
      console.log("posting data to backend with following params: {debug}");
      const sampledata = JSON.stringify({
        patient: "<own fhirResourceId>",
        carePlanUuid: "<careplan.uuid>",
        carePlanUnitId: 1, //"<careplanUnits.id>"
        fhirProcedure: 0,
        units: [{
          activityUnitId: 0, //<units.id>
          contentPackageResourceId: 0, //<contentPackage.resources.id>
          packageParametersIds: [],
          resourceParametersIds: [],
        }]
      });

      api.postProcedures(this.user.id, sampledata);
    },
    postProcedureResult() {
      console.log("posting data to backend with following params: {debug}");
      
      const id = 1
      const unitId = 1
      const sampledata = JSON.stringify(
      {
        "resultTemplateId": 1,
        "value": "string",
        "fhirPatient": "string",
        "fhirTherapist": "string"
      });

      api.postProcedureResult(this.user.id, id, unitId, sampledata);
    },
    patchProcedure() {
      const sampledata = {"state": "ABORTED"};

      api.patchProcedures(this.user.id, 2, sampledata)
    }
  },
};
</script>

<style></style>
