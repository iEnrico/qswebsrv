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
                :setProgress="this.setProgress"
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

//import data from "@/scripts/data/data.js";
import QuestionVisual from "@/components/questionVisual.vue";
import api from "@/scripts/api/api";

export default {
  name: "SessionsStepQuestions",
  data: () => ({
    /*
    colors: ["#dc2626", "#d97706", "#a8a29e", "#10b981", "#65a30d"],
    labels: ["bad", "so so", "ok", "good", "great"],
    question_index: 0,
    max_elements: data.getSessionsQuestionsBDI2().length,
    next_step_disabled: true,
    */
    //elements: null, //data.getSessionsQuestionsBDI2(),
    procedureId: 0,
    procedureUnitId: 0,
  }),
  props: ["setProgress", "questions", /*"onBack", "onNext"*/],
  components: { QuestionVisual },
  mounted: function () {

    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    //this.elements = this.questions;
    console.log("Questions: " + JSON.stringify(this.questions))

    //alert(this.questions[0].name)

    this.availableActivitys(this.questions[0].name);
  },
  methods: {
    routeBack: function () {
      this.$router.push("/dashboard1");
    },
    sendQuestionaireResults: async function (data) {

      let questionaire_results = [
        {
          "resultTemplateId": 2,
          "values": [ data[0].userRating ]
        },
        {
          "resultTemplateId": 3,
          "values": [ data[1].userRating ]
        },
        {
          "resultTemplateId": 4,
          "values": [ data[2].userRating ]
        },
        {
          "resultTemplateId": 5,
          "values": [ data[3].userRating ]
        },
        {
          "resultTemplateId": 6,
          "values": [ data[4].userRating ]
        },
        {
          "resultTemplateId": 7,
          "values": [ data[5].userRating ]
        },
        {
          "resultTemplateId": 8,
          "values": [ data[6].userRating ]
        },
        {
          "resultTemplateId": 9,
          "values": [ data[7].userRating ]
        },
        {
          "resultTemplateId": 10,
          "values": [ data[8].userRating ]
        },
        {
          "resultTemplateId": 11,
          "values": [ data[9].userRating ]
        }
      ]

      const result = await api.postProcedureResultBatch(this.user, this.procedureId, this.procedureUnitId, questionaire_results);
      alert("result of post procedure results: " + JSON.stringify(result.data))
    },
    availableActivitys: async function (questionaireName) {
      console.log("request backend data with following params: " + this.user.id);
      const response = await api.getAvailableActivitys(this.user.id);
      if (response) {

        /*
        alert(
          "USER - GET  /user/available-activities/\n\n" +
            (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data))
        );
        */

        //console.log(questionaireName)

        response.data.forEach(async (element) => {

          //console.log(element.name)
          
          if (element.name == questionaireName) {
          
            let ownFHIRRessourceId = this.user.fhirResourceId;

            let unitsId = element.units[0].contentPackage.id;
            let carePlanUnitsId = element.carePlanUnits[0].id;
            let carePlanUUId = element.carePlanUnits[0].carePlan.uuid;
            let unitResourceId = element.units[0].contentPackage.resources[0].id;
            let unitResultTemplateId = element.units[0].contentPackage.resultTemplates[0].id; //units[0].contentPackage.resources[0].id;

            alert(
              "found "+questionaireName+"!" +
              "\nownFHIRRessourceId: " + ownFHIRRessourceId +
              "\nunitsId: " + unitsId +
              "\ncarePlanUnitsId: " + carePlanUnitsId +
              "\ncarePlanUUId: " + carePlanUUId +
              "\nunitResourceId: " + unitResourceId +
              "\nunitResultTemplateId: " + unitResultTemplateId
            )

            let procedure_data = {
              "patient": ownFHIRRessourceId,
              "carePlanUuid": carePlanUUId,
              "carePlanUnitId": carePlanUnitsId,
              "fhirProcedure": "0",
              "units": [
                {
                  "activityUnitId": unitsId,
                  "contentPackageResourceId": unitResourceId,
                  "packageParametersIds": [],
                  "resourceParametersIds": []
                }
              ]
            }

            const result = await api.postProcedures(this.user, procedure_data)
            //alert("result of post procedure: " + JSON.stringify(result))

            this.procedureId = result.data.id;
            this.procedureUnitId = result.data.units[0].id;

          }

          /*
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
          */
        });

        
        const result2 = await api.getRunningProcedures(this.user);
        //alert("result of getRunningProcedures: " + JSON.stringify(result2))
        if (result2.data) {
          this.procedureId = result2.data.id;
          this.procedureUnitId = result2.data.units[0].id;
          alert("found running procedure: " + this.procedureId + ", " + this.procedureUnitId)
        }

      }
    },
  },
};
</script>

<style></style>
