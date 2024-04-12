<template>
  <v-card
    variant="outlined"
    tile
    class="my-2 mx-4 pa-2 rounded-lg"
    max-width="auto"
    :style="'border: 1px solid #D9D9D9;'"
    @click="routeDetails()"
  >
    <v-card-subtitle class="mb-2 mt-2" v-if="item.fhirTherapist"> FHIR: {{ item.fhirTherapist.resourceType }} {{ getFhirID(item.fhirTherapist) }}</v-card-subtitle>

    <v-card-subtitle class="mb-2 mt-2" v-if="item.fhirPatient"> FHIR: {{ item.fhirPatient.resourceType }} {{ getFhirID(item.fhirPatient) }}</v-card-subtitle>

    <v-row no-gutters align="center" justify="start">
      <v-col :cols="12" v-for="(elements, i) in item.keycloakUsers" :key="i" >
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
            class="ml-4 mr-auto"
            style="justify-self: start; font-size: large;"
            v-text="elements.username"
          ></v-list-item-title>
          <v-spacer></v-spacer>
          <v-list-item-title
            class="ml-4 mr-4"
            style="justify-self: start"
            v-text="parseDate(elements.createdTimestamp)"
          ></v-list-item-title>
        </v-row>
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
            class="ml-4 mr-auto"
            style="justify-self: start; font-size: small;"
            v-text="elements.id"
          ></v-list-item-title>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
/*

CURSE STATE:
------------

clock-outline       = planned/scheduled
clock               = ?

text-box-edit       = in edit mode
file-document-edit  = in edit mode

checkbox-multiple-marked-circle   = done, complete

*/
import { parseDate } from "@/scripts/common/utils";

import { useAdminUserStore } from "@/stores/currentAdminUserStore";

export default {
  name: "listItemPatient",
  data: () => ({}),
  setup() {
    const adminUserStore = useAdminUserStore();
    return {
      adminUserStore,
    };
  },
  props: ["item", "index", "role"],
  components: {},
  mounted: function () {
  },
  methods: {
    routeDetails: function () {

      var data = {
            id: this.index,
            edit: false,
            item: this.item,
            role: this.role
          }

      this.adminUserStore.setItem(data)

      this.$router.push({
        name: "DashboardAdmin2",
        /*
        params: {
          data: JSON.stringify({
            id: this.index,
            edit: false,
            item: this.item,
            role: this.role
          }),
        },*/
      });
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
    getFhirID(object) {
      // id: "https://relivr-integration--fhir:8585/fhir-server/api/v4/Practitioner/18828ccb859-800f782b-51cd-4107-9f5c-4faab7a38d6d/_history/1"
      
      //let array = object.id.split('/')
      //const fhirId = array[array.length-3]
      //return fhirId

      return object.id
    }
  },
};
</script>

<style></style>
