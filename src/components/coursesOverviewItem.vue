
<template>
  <v-card
    class="rounded-lg d-flex flex-column ml-2 mt-4 mb-4"
    variant="outlined"
    :style="'border: 1px solid ' + getStateColor(item)"
    max-width="220"
    min-width="220"
  >
    <!--
    min-height="150"
    max-height="150"
  -->
    <v-row class="pa-0 ma-2 mt-1 mb-0" style="height: auto">
      <span
        @click="routeCourse(item)"
        style="display: inline-flex; max-width: 90%; align-items: center"
        >{{ getItemTitle(item) }}</span
      >
      <v-spacer></v-spacer>
      <v-tooltip location="bottom" :text="getStateMsg(item)">
        <template v-slot:activator="{ props }">
          <v-icon
            @click="onClickIcon(item)"
            style="justify-self: center; align-self: top"
            class="pa-0 ma-0"
            v-bind="props"
            :color="getStateColor(item)"
            size="20px"
            :icon="this.getStateIcon(item)"
          ></v-icon>
        </template>
      </v-tooltip>
    </v-row>
    <v-row class="pa-0 ma-2 mt-0" style="height: 20px">
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-progress-linear
            class="mt-2"
            v-bind="props"
            :model-value="determine"
            :buffer-value="progress"
            color="#28B9AF"
            height="14"
            stream
            style="border-width: 1px; border-color: lightgray"
          >
            <span class="text-xs"
              >{{ determine ? determine / percent_step : 0 }} / {{ max }}</span
            >
          </v-progress-linear>
        </template>
        <span v-html="generateStringOfUnits(item)"></span>
      </v-tooltip>
    </v-row>
    <v-spacer></v-spacer>
    <v-row
      class="pa-0 ma-2 my-0"
      style="height: auto; align-items: end; justify-items: end"
    >
      <span class="text-xs">{{ getItemSubtitle(item) }}</span>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="pa-2 pt-0 ma-0 mt-4">
      <v-tooltip location="bottom" :text="getCourseInfo(item)">
        <template v-slot:activator="{ props }">
          <v-icon
            v-bind="props"
            color="grey"
            style="justify-self: center; align-self: center"
            :icon="getCourseIcon(item)"
          ></v-icon>
        </template>
      </v-tooltip>
      <v-card-text
        style="justify-self: center; align-self: center"
        text-align="center"
        class="pa-0 mt-0 mb-0 ml-2 mr-0"
      >
        <span class="text-grey">{{ getCourseInfo(item) }}</span>
      </v-card-text>
      <v-spacer></v-spacer>
    </v-row>
  </v-card>
</template>

<script>
import {
  isAllUnitsCompleteSync,
  getCourseIcon,
  getCourseInfo,
  getStateColor,
  getStateIcon,
  getStateMsg,
} from "@/scripts/procedureEngine";

import {
  /*getDescriptionText,*/
  getTextByLanguage,
} from "@/scripts/common/utils";
import api from "@/scripts/api/api";

import { useCurrentSessionStore } from "@/stores/currentSessionStore";

export default {
        /* eslint-disable */ 
  name: "CourseOverviewItem",
  setup() {
    const sessionStore = useCurrentSessionStore();
    return {
      sessionStore,
      user: JSON.parse(sessionStorage.getItem("user"))
    };
  },
  data: () => ({
    determine: 0,
    progress: 0,
    percent_step: 0,
    max: 0,
  }),
  props: ["item", "mode", "clickable", "onUnitChange"],
  components: {},
  mounted: async function () {
    this.init();
  },
  methods: {
    init: async function () {
      this.progress = 0; //this.percent_step * this.item.progress
      this.determine = 0; //this.percent_step * (isAllCompleted ? this.item.progress : this.item.progress-1)

      this.max = this.item.units
        ? this.item.units.length
        : this.item.activity.units.length;

      this.percent_step = 100 / this.max;
    },
    getItemTitle(item) {
      if (item == null) return;

      var activity = item.activity
        ? item.activity
        : item.units[0].activityUnit?.activity
        ? item.units[0].activityUnit?.activity
        : item.units[0].activity;

      return getTextByLanguage(activity.translations, this.$i18n);
    },
    getItemSubtitle(item) {
      var contentPackage =
        isAllUnitsCompleteSync(item) && item.nextActivityUnit
          ? item.nextActivityUnit.contentPackage
          : item.activity
          ? item.activity.units[0].contentPackage
          : item.units[item.units.length - 1].activityUnit?.contentPackage;

      return getTextByLanguage(contentPackage?.translations, this.$i18n);
    },
    generateStringOfUnits() {
      var result = "<p><b>Inhalt dieser Aktivität:</b></p><br>";

      if (this.item == null) return;

      var units =
        isAllUnitsCompleteSync(this.item) && this.item.nextActivityUnit
          ? [this.item.nextActivityUnit]
          : this.item.activity
          ? this.item.activity.units
          : this.item.units;

      //TODO: combine units and next activity unit here!!!!

      units.forEach((unit, index) => {
        var icon =
          this.determine / this.percent_step > index
            ? "✓"
            : this.progress / this.percent_step > index
            ? "⇾" //"⇢"
            : "•";

        var contentPackage = unit.contentPackage
          ? unit.contentPackage
          : unit.activityUnit?.contentPackage;

        result +=
          "<p>" +
          icon +
          " " +
          getTextByLanguage(contentPackage?.translations, this.$i18n) +
          "</p>";
      });

      return result;
    },
    getCourseIcon: function (item) {
      /* type of NEXT to perform content package

      var contentPackage = ( isAllUnitsCompleteSync(item) && item.nextActivityUnit)
        ? item.nextActivityUnit.contentPackage
        : item.activity
          ? item.activity.units[0].contentPackage
          : item.units[0].activityUnit.contentPackage

      let value = contentPackage.type
      */

      // type of COMPLETE activity (overall, not next unit)
      let value = item.activity?.primaryType;

      return getCourseIcon(value);
    },
    getCourseInfo: function (item) {
      /* type of NEXT to perform content package

      var contentPackage = ( isAllUnitsCompleteSync(item) && item.nextActivityUnit)
        ? item.nextActivityUnit.contentPackage
        : item.activity
          ? item.activity.units[0].contentPackage
          : item.units[0].activityUnit.contentPackage

      let value = contentPackage.type
      */

      // type of COMPLETE activity (overall, not next unit)
      let value = item.activity?.primaryType;

      return this.$i18n.t("" + getCourseInfo(value));
    },
    getStateIcon: function (item) {
      var state = item.carePlan ? item.carePlan.state : item.state;
      return getStateIcon(state);
    },
    getStateMsg: function (item) {
      var state = item.carePlan ? item.carePlan.state : item.state;
      var key = getStateMsg(state);
      return this.$i18n.t("" + key);
    },
    getStateColor: function (item) {
      return getStateColor(item);
    },
    routeCourse: function (item) {
      debugger;
      console.log(this.sessionStore);
      console.log(item);
      // PATIENT - Audio Diary
      /*
      if (item.activity.name == 'audio_diary') {

        this.sessionStore.setItem(item)

        this.$router.push({
          name: "Dashboard3a"
        });
      }
      // PATIENT - Others
    else*/ 
    if (this.mode == 0) {
        this.sessionStore.setItem(item);

        this.$router.push({
          name: "Dashboard2a",
        });
      }
      // THERAPIST
      else {
        // eslint-disable-next-line 
        debugger;
        this.sessionStore.setItem(item);
        if(item.state){
          this.$router.push({
            name: "DashboardTherapist5",
            query: {
              patientId: item.fhirPatient,
              unitId: item.units[0].id,
              procedureId: item.id,
            },
          });
        }

      }
    },
    async stopActivity(item) {
      const result = await api.patchProcedures(item.fhirPatient, item.id, {
        state: "ABORTED",
      });
      if (result?.status == 200) {
        this.onUnitChange();
      } else {
        this.onUnitChange();
      }
    },
    async startActivity(item) {      const units = item.activity.units.map((unit) => ({
        activityUnitId: unit.id,
        contentPackageResourceId: item.activity.name === "vr_roleplay_boss_single" ? 16 : 17,
        packageParametersIds: [],
        resourceParametersIds: [],
        state: "CREATED",
      }));
      const payload = {
        patient: item.carePlan.fhirPatient,
        carePlanUuid: item.carePlan.uuid,
        carePlanUnitId: item.id,
        units: units,
      };
      const result = await api.postProcedures(
        item.carePlan.fhirPatient,
        payload
      );
      if (result?.state === "CREATED") {
        if(this.mode == 0){
        this.$router.push({
            name: "Dashboard2a",
          }); 
        }else{
          this.$router.push({
            name: "DashboardTherapist5",
            query: {
              patientId: result.fhirPatient,
              unitId: result.units[0].id,
              procedureId: result.id,
            },
          });
  
        }

      }
    },
    async onClickIcon(item) {
      if (item.state && (item.state === "RUNNING" || item.state === "CREATED") ) {
        this.stopActivity(item);
      } else {
        this.startActivity(item);
      }
    },
  },
};
</script>

<style>
.v-progress-linear .v-progress-linear__stream {
  animation: none;
  animation-play-state: paused;
  bottom: 0;
  left: auto;
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  display: none;
  transition: inherit;
  transition-property: width, left, right;
}

.v-progress-linear .v-progress-linear__background {
  opacity: 0.2;
}
</style>
