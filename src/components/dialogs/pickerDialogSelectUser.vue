<template>
  <v-dialog v-model="dialog" max-width="40%">
    <template v-slot:activator="{ props }">
      <!--
      <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
        <span style="color: #28B9AF">hinzufügen</span>
      </v-btn>
      @click="route('/dashboard3a')"
      -->
      <v-btn v-bind="props" variant="elevated" style="background-color: #28B9AF;" class="mt-0 ml-4 mr-0">
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
            label="Wählen sie einen Nutzer"
            v-model="model"
            item-value="fhirResourceId"
            item-title="keycloakUsers[0].username"
            @change="change()"
            :items="data"
            return-object
        ></v-autocomplete>
      </v-container>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn variant="elevated" @click="cancel()">
          <span color="#000">Abbrechen</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            variant="elevated"
            style="background-color: #28b9af"
            @click="save()"
        >
          <span class="text-white">Übernehmen</span></v-btn
        >
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
      //api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
    let results = "";
    if (this.role == "PATIENT") {
      results = await api.getTherapists(this.user.id);
      this.data=results;
    } else {
      results = await api.getPatients(this.user.id);
      this.data=results;

    }

  },

  methods: {

    save: function () {
      this.action(this.model);
      this.dialog = false;
    },
    cancel: function () {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
