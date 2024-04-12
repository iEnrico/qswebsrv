<template>
  <v-card
      variant="outlined"
      tile
      class="my-4 mx-4 pa-2 rounded-lg"
      max-width="auto"
      :style="'border: 1px solid #D9D9D9;'"
  ><!--@click="routeDetails()"-->
    <v-row no-gutters align="center" justify="start">
      <v-col :cols="10">
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
              class="ml-2 mr-auto"
              style="justify-self: start; font-size: large"
              v-text="`${item.keycloakUsers && item.keycloakUsers.length > 0 &&  item.keycloakUsers[0].username }`"
          >

          </v-list-item-title>
          <!--
          <v-spacer></v-spacer>
          <v-list-item-title
            class="ml-2 mr-auto"
            style="justify-self: start"
            v-text="parseDate(item[0].createdTimestamp)"
          ></v-list-item-title>
          -->
        </v-row>
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
              class="ml-2 mr-auto"
              style="justify-self: start; font-size: small"
              v-text="'erstellt am: ' + parseDate(item.keycloakUsers && item.keycloakUsers.length > 0 && item.keycloakUsers[0].createdTimestamp)"
          >
          </v-list-item-title>
          <!--
          <v-list-item-title
              class="ml-2 mr-auto"
              style="justify-self: start; font-size: small"
              v-text="`${item.fhirResourceId}`"
          >
          </v-list-item-title>
          -->
        </v-row>
      </v-col>
      <v-col :cols="2">
        <v-row no-gutters align="end" justify="end">
          <v-list-item>
            <template v-slot:prepend>
              <v-btn
                  variant="text"
                  color="grey"
                  icon="mdi-delete"
                  size="mdi-open-in-new"
                  @click="deleteConsent(item.fhirResourceId)"
              ></v-btn>
            </template>
          </v-list-item>
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

export default {
  name: "listItemPatient",
  data: () => ({}),
  props: ["item", "index", "role", "actionDelete"],
  components: {},
  mounted: function () {
    console.log("consent list item: " + JSON.stringify(this.item));
    console.log("consent list item: " + this.item.length);
  },
  methods: {
    parseDate(timecode) {
      return parseDate(timecode)
    },
    deleteConsent(item) {
      this.actionDelete(item);
    },
  },
};
</script>

<style></style>
