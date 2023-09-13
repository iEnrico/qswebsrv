<template>
  <v-dialog v-model="dialog" max-width="40%">
    <template v-slot:activator="{ props }">
      <!--
      <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
        <span style="color: #28B9AF">hinzufügen</span>
      </v-btn>
      @click="route('/dashboard3a')"
      -->
      <v-btn v-bind="props" variant="elevated" style="background-color: #28B9AF;" class="mt-8 ml-4 mr-0">
        <span class="text-white">+ Consent hinzufügen</span>
      </v-btn>
    </template>
    <v-card justify="center" class="rounded-lg">
      <v-container fluid>
        <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
          <span style="color: #000">{{ "Nutzer auswählen" }}</span>
        </v-card-title>
        <v-autocomplete
            class="mt-8"
            label="Nutzerliste"
            v-model="model"
            :items="data"
        ></v-autocomplete>
      </v-container>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn variant="elevated" @click="cancel()"><span color="#000">Abbrechen</span></v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="elevated" style="background-color: #28B9AF;" @click="save()"><span class="text-white">Übernehmen</span></v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

import api from "@/scripts/api/api";

export default {
  data() {
    return {
      dialog: false,
      data: [],
      model: null,
    };
  },
  props: ["action", "role"],
  components: {},
  mounted: async function () {
    //console.log(" >> Test output 'commonstore': " + this.store.totalNotifications);
    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    let results = ""
    if (this.role == 'PATIENT') {
      results = await api.getTherapists(this.user.id)
      results.forEach((item) => {
        //this.data.push(item.keycloakUsers[0].username)
        this.data.push(item.fhirResourceId);//item.fhirTherapist. //keycloakUsers[0].username)
        console.log(item)
      });
    } else {
      results = await api.getPatients(this.user.id)
      results.forEach((item) => {
        this.data.push(item.fhirResourceId);//item.keycloakUsers[0].username)
        console.log(item)
      });
    }

    this.model = this.data[0];

    /*
    for (item of results) {
      this.data.push(item.username);
    }
    */
    //alert(this.action);
  },
  methods: {
    /*
    getFhirID: function (object) {
      console.log(object)
      // id: "https://relivr-integration--fhir:8585/fhir-server/api/v4/Practitioner/18828ccb859-800f782b-51cd-4107-9f5c-4faab7a38d6d/_history/1"
      let array = object.fhirPatient ? object.fhirPatient.id.split('/') : object.fhirTherapist ? object.fhirTherapist.id.split('/') : ""
      const fhirId = array[array.length-3]
      return fhirId
    },*/
    save: function () {
      /*
      if (this.password != this.password_repeat) {
        alert("passwords don't match!")
      } else {
        const sampledata = JSON.stringify({
          //fhirResourceId: "0",
          role: this.role,
          email: this.email,
          username: this.alias,
          password: this.password,
          name: this.firstname,
          lastName: this.lastname
        });
        this.action(sampledata);
        //this.dialog = false;
      }
      */
      this.action(this.model);
      this.dialog = false;
    },
    cancel: function() {
      this.dialog = false;
    }
  },
};
</script>

<style>
</style>
