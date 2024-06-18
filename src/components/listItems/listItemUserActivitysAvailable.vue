<template>
  <ConfirmDlg ref="notcompleted" />
  <v-card
      variant="outlined"
      tile
      class="my-4 mx-4 pa-2 rounded-lg"
      max-width="auto"
      :style="item.state == 'COMPLETED' ? 'background-color: #FFF; border: 1px solid #D8D8D8;' : 'background-color: #F5F5F5; border: 1px solid #D9D9D9;'"
      @click="routeDetails()"
  >
    <v-row v-if="item.units.length >0" no-gutters align="center" justify="start">
      <v-col :cols="1">
        <v-icon class="ml-2" :color="getStateColor(item)" :icon="getStateIcon(item)"></v-icon>
      </v-col>
      <v-col :cols="11" >
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
              class="ml-2 mr-auto"
              style="justify-self: start; font-size: large;"
              v-text="item.units.length > 1 ? 'VR-Achtsamkeit' : getTextByLanguage( item.units[0].activityUnit.contentPackage.translations, this.$i18n )"
          ></v-list-item-title>
          <!--item.units[0].activityUnit.contentPackage.name-->
          <v-spacer></v-spacer>
          <v-list-item-title
              class="ml-2 mr-auto text-sm"
              style="justify-self: start"
              v-text="item.stopMoment"
          ></v-list-item-title>

        </v-row>
        <v-row no-gutters align="start" justify="start">
          <v-list-item-title
              class="ml-2 mr-auto"
              style="justify-self: start; font-size: small;"
              v-text="'id: ' + item.id + ', type: ' + item.units[0].activityUnit.contentPackage.type+ ', state: ' + item.state"
          ></v-list-item-title>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else no-gutters align="center" justify="start">
      <v-list-item-title
          class="ml-2 mr-auto"
          style="justify-self: start; font-size: large;"
          v-text="'MISSED'"
      ></v-list-item-title>
      <!--item.units[0].activityUnit.contentPackage.name-->
      <v-spacer></v-spacer>
      <v-list-item-title
          class="ml-2 mr-auto text-sm"
          style="justify-self: start"
          v-text="item.stopMoment"
      ></v-list-item-title>
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
import { parseDate, getTextByLanguage } from "@/scripts/common/utils";
import { getStateIcon, getStateColor } from "@/scripts/procedureEngine";

import ConfirmDlg from "@/components/dialogs/dialogConfirmation.vue";

import { useAdminActivityStore } from "@/stores/currentAdminActivityStore";

export default {
  name: "listItemPatient",
  data: () => ({}),
  setup() {
    const adminActivityStore = useAdminActivityStore();
    return {
      adminActivityStore,
    };
  },
  props: ["item", "index", /*"role"*/],
  components: {ConfirmDlg,},
  mounted: function () {
  },
  methods: {
    routeDetails: async function () {
      if (this.item.state == "COMPLETED") {

        var data = {
          id: this.index,
          edit: false,
          item: this.item,
          //role: this.role
        }

        this.adminActivityStore.setItem(data)

        this.$router.push({
          name: "DashboardAdmin3a",
          /*
          params: {
            data: JSON.stringify({
              id: this.index,
              edit: false,
              item: this.item,
              //role: this.role
            }),
          },*/
        });
      } else {
        await this.$refs.notcompleted.open(
            "Fehler",
            "Diese Aktivität wurde nicht abgeschlossen."
        )
        //alert("not completed by user, please select another one.")
      }
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    getStateIcon: function (item) {
      var state = item.carePlan ? item.carePlan.state : item.state
      return getStateIcon(state)
    },
    getStateColor: function (item) {
      //var state = item.carePlan ? item.carePlan.state : item.state
      return getStateColor(item)
    },
  },
};
</script>

<style></style>
