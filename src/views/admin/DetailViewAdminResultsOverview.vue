<template>
    <v-row
      class="pa-0 ma-0"
      style="background-color: white; justify-content: center; align-items: center"
    >
      <v-card-title> {{ name }} vom {{ date }}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>
        {{$t("overlay_btn_close")}}
      </v-btn>
    </v-row>
    <v-progress-linear
      :model-value="0"
      :max="100"
      height="3"
      color="#28B9AF"
      class="mr-16"
    ></v-progress-linear>

    <center class="mt-8">
        <v-card class="rounded-lg ml-4 mt-4 pb-4" width="33%" variant="outlined">
            <v-card-title>In dieser Aktivität enthaltene Module</v-card-title>
            <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
            <v-col v-for="(unit, index) in this.session_data.item.units" :key="index" cols="12">
                <v-btn 
                    style="justify-content: start; max-width: 90%; min-width: 90%; background-color: #FFF;"
                    @click="routeDetails(index)"
                    variant="outlined" 
                    class="mt-2">
                    <span class="text-black">
                        {{ (index+1) + ": " + getTextByLanguage(unit.activityUnit.contentPackage.translations, this.$i18n)}}
                    </span>
                </v-btn>
            </v-col>
        </v-card>
    </center>
</template>

<script>
import { parseDate, getTextByLanguage } from "@/scripts/common/utils";
//import { getStateIcon, getStateColor } from "@/scripts/procedureEngine";

import { useAdminActivityStore } from "@/stores/currentAdminActivityStore";
import { useAdminUnitStore } from "@/stores/currentAdminUnitStore";

import api from "@/scripts/api/api";

import { 
  /*getNextTaskActivity, 
  continueProcedure, 
  getNextActivity,*/ 
  //isAllUnitsComplete, 
  //isAllUnitsCompleteSync,
  //getCourseIcon, 
  //getCourseInfo, 
  //getFHIRId,
  getUser
} from "@/scripts/procedureEngine";

export default {
    name: "DetailViewAdminResultsOverview",
    data: () => ({
        session_data: null,
        id: "",
        name: "",
        date: ""
    }),
    setup() {
        const adminActivityStore = useAdminActivityStore();
        const adminUnitStore = useAdminUnitStore();
        return {
        adminActivityStore,
        adminUnitStore,
        };
    },
    props: [
    ],
    components: { },
    created: function () {
        this.session_data = this.adminActivityStore.getItem //JSON.parse(this.$route.params.data);
        this.id = this.session_data.item.id;
        console.log("info: " + JSON.stringify(this.session_data.item))
        
        //this.name = this.session_data.item.description;
        this.name = getTextByLanguage(this.session_data.item.units[0].activityUnit.activity.translations, this.$i18n);

        this.date = this.session_data.item.stopMoment;
    },
    methods: {
        parseDate(timecode) {
            return parseDate(timecode)
        },
        getTextByLanguage: function (item, i18n) {
            return getTextByLanguage(item, i18n)
        },
        onClose() {
            this.$router.go(-1)
        },
        routeDetails: async function (index) {

            var procedureID = this.session_data.item.id
            var unitId = this.session_data.item.units[index].id
            var results = await api.getProcedureResults(
                getUser(),
                procedureID,
                unitId
            )

            console.log("results:\n"+JSON.stringify(results))

            var data = {
                id: index,
                edit: false,
                item: this.session_data.item.units[index],
                results: results.data
                //role: this.role
            }

            this.adminUnitStore.setItem(data)

            this.$router.push({
                name: "DashboardAdmin3",
                /*
                params: {
                    data: JSON.stringify({
                        id: index,
                        edit: false,
                        item: this.session_data.item.units[index],
                        //role: this.role
                    }),
                },*/
            });
        },
    },
};
</script>

<style>

</style>
  