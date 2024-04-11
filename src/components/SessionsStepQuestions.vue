<template>
  <v-container fluid class="pa-0 ma-0 fill-height" v-if="1 == 1">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 65%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-0">
            <v-container fill-height fluid align="center" justify="center">
              <QuestionVisual
                class="ma-0 pa-0"
                :data="questions"
                :results="preloaded_results"
                :metadata="this.data"
                :updateView="this.updateView"
                :setProgress="this.setProgress"
                :eventAbort="this.eventAbort"
                :sendResults="this.sendQuestionaireResults"
              />
            </v-container>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import QuestionVisual from "@/components/questionVisual.vue";
//import api from "@/scripts/api/api";

import { 
  sendResults,
  //createProcedure, 
  //startProcedure, 
  //continueProcedure, 
  //getNextActivity, 
  //startNextProcedure, 
  //getNextTaskActivity, 
  //connectEventSource,
} from "@/scripts/procedureEngine";

export default {
  name: "SessionsStepQuestions",
  data: () => ({
    procedureId: 0,
    procedureUnitId: 0,
    preloaded_results: null,
  }),
  props: ["data", "updateView", "setProgress", "questions", "eventAbort", /*"onBack", "onNext"*/],
  components: { QuestionVisual },
  mounted: function () {
    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    //console.log("start " + this.questions[0].name)
    //this.init(this.questions[0].name);
  },
  methods: {
    sendQuestionaireResults: async function (partial, data) {

      console.log("SEND RESULT INFO: " + JSON.stringify(this.data))

      //console.log(data)
      if (data) {
        //alert("send results")
        sendResults(/*this.data,*/ data, /*this.procedureId, this.procedureUnitId,*/ partial)
      }
    },
    //init: async function (questionaireName) {
    //  console.log("SessionStepQuestion loaded with : " + questionaireName)

      /*
      const runningProcedures = await api.getRunningProcedures(this.user);
      if (runningProcedures.data == "") {
        const availableActivities = await api.getAvailableActivitys(this.user.id);
        let createdProcedure = await createProcedure(questionaireName, availableActivities)
        let startedProcedure = await startProcedure(createdProcedure) ///TODO: currently required, later fixed
        this.procedureId = startedProcedure.data.procedure.id 
        this.procedureUnitId = startedProcedure.data.id 
        
        connectEventSource(this.procedureId, this.procedureUnitId)

      }
      else {

        let procedure = await continueProcedure(runningProcedures.data)

        if (runningProcedures.data.id && procedure.item) {
          this.procedureId = runningProcedures.data.id 
          this.procedureUnitId = procedure.item.id 

          //alert("existing procedure, check load existing data now...")
          this.preloaded_results = runningProcedures.data.units[runningProcedures.data.units.length-1].results
          //console.log("pre: " + this.preloaded_results)

          connectEventSource(this.procedureId, this.procedureUnitId)

        } else {
        
          if (!procedure) {
            let nextTask = await getNextTaskActivity(questionaireName);
            startProcedure(nextTask)
          }
          else {
            procedure =  await getNextActivity()

            let procedure_data = {     
              "activityUnitId": procedure.nextActivityUnit.id,
              "contentPackageResourceId": procedure.nextActivityUnit.contentPackage.resources[0].id,
              "packageParametersIds": [
                
              ],
              "resourceParametersIds": [
                
              ],
              "state": "RUNNING"
            }
            let result = await api.postActiveUnit(this.user, procedure_data)
            await startNextProcedure(result)
            
            this.procedureId = result.data.procedure.id
            this.procedureUnitId = result.data.id
            
            connectEventSource(this.procedureId, this.procedureUnitId)

          }
        }
      }

      */

    //},
  },
};
</script>

<style></style>
