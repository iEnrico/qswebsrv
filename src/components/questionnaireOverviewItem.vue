<template>
  <v-card
      class="rounded-lg"
      variant="outlined"
      :style="'border: 1px solid '+getStateColor(item.state)"
      max-width="240"
      min-width="240"
      max-height="120"
      min-height="120"
      @click="routeCourse(item)"
  >
    <v-row class="pa-2 ma-0" justify="top" align="top">
      <v-tooltip location="bottom" >
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" color="grey" >{{ "mdi-file-sign" }}</v-icon>
        </template>
      </v-tooltip>
      <v-card-text class="mx-2 mb-2 mt-0 pa-0" style="max-width: 80%; font-size: 0.8em" v-if="getTextByLanguage(item.translations, this.$i18n)" ><b>{{ getTextByLanguage(item.translations, this.$i18n) }}</b></v-card-text>
    </v-row>
  </v-card>
</template>

<script>
import { getStateColor/*, getStateMsg*/ } from "@/scripts/procedureEngine";
import { getTextByLanguage } from "@/scripts/common/utils";

export default {
  name: "questionnaireOverviewItem",
  data: () => ({
  }),
  props: [
    "item"
  ],
  components: {},
  watch: {},
  mounted: async function () { 
  },
  methods: {
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    /*
    getStateMsg: function (item) {
      return this.$i18n.t(getStateMsg(item))
    },*/
    getStateColor: function (item) {
      return getStateColor(item)
    },
    routeCourse: function (item) {
     
      // NOT IMPLEMENTED
      console.log(item)

    },
  },
};
</script>

<style>

</style>
