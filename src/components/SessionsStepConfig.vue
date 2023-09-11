<template>
  <v-row class="pa-0 ma-0 fill-height" align-content="center" justify="center">
    <!-- LEFT BIG -->
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-card-title>Umgebungskonfiguration</v-card-title>
        <v-row class="ml-4 mr-4 mt-0 mb-2">
          <v-container class="pa-0 ma-0" align="center" justify="center">
            <v-row no-gutters>
              <v-col v-for="(item, index) in session_configs" :key="index" :cols="6">
                <v-card
                  class="rounded-lg"
                  max-width="90%"
                  :style="
                    selectedSessionEnv != index
                      ? 'border: none;'
                      : 'border: 2px solid #28B9AF;'
                  "
                  :color="
                    selectedSessionEnv != index ? '#FFFFFF' : '#EDF7F5' //' F4D2CA  #28B9AF'
                  "
                  @click.stop="onChangeEnv(index)"
                  outlined
                  tile
                >
                  <v-img :src="item.image" height="12em" cover></v-img>

                  <v-card-title><span :style=" selectedSessionEnv != index ? 'color: #000' : 'color: #28B9AF'">{{
                    getSessionEnvTitle(item.session_environment)
                  }}</span></v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <!--
        <v-row class="pa-0 ma-0">
          <v-col :cols="6"> Übungstyp </v-col>
          <v-col :cols="6"> Schwierigkeit </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> Objektmeditation </font>
          </v-col>
          <v-col class="mt-0 pt-0" :cols="6">
            <v-rating
              :active-color="getSessionDifficultyColor(user_config.session_difficulty)"
              :color="getSessionDifficultyColor(user_config.session_difficulty)"
              length="3"
              size="small"
              density="compact"
              :model-value="2"
            ></v-rating>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="12"> Beschreibung </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="12"> {{ $t(this.getCourseDescription(0)) }} </v-col>
        </v-row>-->
        <!-- 

 :items="options_SessionTypeAlternate"

        -->
        <v-row class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-combobox
            class="ml-8 mr-8 font-color=#423412"
            label="Meditationstyp"
            :items="typeOfMeditation"
            v-model="selectedTypeOfMeditation"
            return-object
          ></v-combobox>
        </v-row>
        <v-row class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-combobox
            class="ml-8 mr-8 font-color=#423412"
            label="Objekttyp"
            :items="objectType"
            v-model="selectedObjectType"
            return-object
          ></v-combobox>
        </v-row>
        <v-row class="pa-0 mx-4 mt-2 mb-4" align-content="center">
          <v-btn variant="elevated" color="#28B9AF" @click="onNextDebug()"
            ><span class="text-white">
              {{ "Start" }}
            </span></v-btn
          >
        </v-row>
      </v-card>
    </v-col>
    <!-- RIGHT SMALL 
    <v-col :cols="4" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-row class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-combobox
            class="ml-8 mr-8 font-color=#423412"
            label="Übungstyp"
            :items="options_SessionTypeAlternate"
            v-model="selectedType"
            return-object
          ></v-combobox>
        </v-row>
        <v-row class="pa-0 mx-4 mt-2 mb-4" align-content="center">
          <v-btn block variant="elevated" color="#28B9AF" @click="onNext()"
            ><span class="text-white">
              {{ "Start" }}
            </span></v-btn
          >
        </v-row>
      </v-card>
    </v-col>-->
  </v-row>
</template>

<script>

import common from "@/scripts/common/common";
import api from "@/scripts/api/api";

export default {
  name: "SessionsStepConfig",
  data: () => ({
    options_SessionEnv: [
      { id: 0, label: "Morgens" },
      { id: 1, label: "Abends" },
    ],
    selectedSessionEnv: null,
    options_SessionTypeAlternate: [
      "Lupenübung Stein (ca. 9 Minuten)",
      "Lupenübung Stock (ca. 9 Minuten)",
      "Lupenübung Statue (ca. 9 Minuten)",
      "Telefonübung Stein (ca. 6 Minuten)",
      "Telefonübung Stock (ca. 6 Minuten)",
      "Telefonübung Statue (ca. 7 Minuten)",
      "Imaginationsübung Stein (ca. 7 Minuten)",
      "Imaginationsübung Stock (ca. 7 Minuten)",
      "Imaginationsübung Statue (ca. 7 Minuten)",
    ],
    typeOfMeditation: [],
    selectedTypeOfMeditation: null,
    objectType:[],
    selectedObjectType: null,
    cpParam:[],
    /*
    options_SessionDifficulty: [
      { id: 0, label: "Leicht" },
      { id: 1, label: "Ausgeglichen" },
      { id: 2, label: "Herausfordernd" },
    ],
    */
    // current config
    /*
    user_config: {
      session_environment: common.session_environment_early,
      //session_type: common.session_type_meditation,
      session_typeAlternate: common.session_type_meditation,
      session_description:
        "Aivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
      session_difficulty: common.session_difficulty_easy,
    },*/
    // possible configs
    session_configs: [
      {
        session_environment: common.session_environment_early,
        image: require("@/assets/ph1.png"), 
      },
      {
        session_environment: common.session_environment_late,
        image: require("@/assets/ph2.png"), 
      },
    ],
    unitsId: 0,
    carePlanUnitsId: 0,
    carePlanUUId: 0,
    unitResourceId: 0,
  }),
  /*
  watch: {
    selectedType(value , oldValue) {
      this.onChangeType(value);
    },
  },
  */
  props: [
    "data",
    //"user_config",
    //"setUserConfigType",
    //"setUserConfigEnv",
    "onBack",
    "onNext",
  ],
  components: {},
  mounted: function () {
    //this.selectedType = this.options_SessionTypeAlternate[0];
    
    this.selectedSessionEnv = 0
    /*
    this.selectedTypeOfMeditation = ""
    this.selectedObjectType = ""
    */

    if (!this.access_token) {
      api.getUserData();
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    this.availableActivitys("vr-meditation");
    //console.log(JSON.stringify(this.user_config));
  },
  methods: {
    /*
    test() {
      alert(this.user_config.session_type);
    },*/
    availableActivitys: async function (activityName) {
      console.log("request backend data with following params: " + this.user.id);
      const response = await api.getAvailableActivitys(this.user.id);
      if (response) {

        response.data.forEach(async (element) => {

          //console.log(element.name)

          if (element.name == activityName) {

            let ownFHIRRessourceId = this.user.fhirResourceId;

            this.unitsId = element.units[0].contentPackage.id;
            this.carePlanUnitsId = element.carePlanUnits[0].id;
            this.carePlanUUId = element.carePlanUnits[0].carePlan.uuid;
            this.unitResourceId = element.units[0].contentPackage.resources[0].id;
            //let unitResultTemplateId = element.units[0].contentPackage.resultTemplates[0].id; //units[0].contentPackage.resources[0].id;

            /*
            const result = await api.postProcedures(this.user, procedure_data)
              //alert("result of post procedure: " + JSON.stringify(result))

            this.procedureId = result.data.id;
            this.procedureUnitId = result.data.units[0].id;
            */
           
            let cpType = element.units[0].contentPackage.type
            this.cpParam = element.units[0].contentPackage.parameters
            let cpRes = element.units[0].contentPackage.resources

            let carePlan = element.carePlanUnits[0].carePlan

            alert(
              "found vr activity"+
              "\nown fhir: "+ownFHIRRessourceId+
              "\nid: "+element.id+
              "\nname: "+element.name+
              "\ncpType: "+cpType+
              "\ncpParam: "+JSON.stringify(this.cpParam)+
              "\ncpRes: "+JSON.stringify(cpRes)+
              "\ncarePlan: "+JSON.stringify(carePlan)
            );

            this.cpParam.filter((param) => param.name == "typeOfMeditation").forEach((item) => {
              //this.data.push(item.keycloakUsers[0].username)
              this.typeOfMeditation.push(item.value) //(this.getFhirID(item));//item.fhirTherapist. //keycloakUsers[0].username)
              //console.log(item)
            });
            //console.log("meditation types: " + JSON.stringify(this.typeOfMeditation))

            this.cpParam.filter((param) => param.name == "objectType").forEach((item) => {
              //this.data.push(item.keycloakUsers[0].username)
              this.objectType.push(item.value) //(this.getFhirID(item));//item.fhirTherapist. //keycloakUsers[0].username)
              //console.log(item)
            });
            //console.log("object types: " + JSON.stringify(this.objectType))

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

          /*
          this.unitsId = result2.data.units[0].contentPackage.id;
          this.carePlanUnitsId = result2.data.carePlanUnits[0].id;
          this.carePlanUUId = result2.data.carePlanUnits[0].carePlan.uuid;
          this.unitResourceId = result2.data.units[0].contentPackage.resources[0].id;
          */

          this.cpParam = result2.data.units[0].activityUnit.contentPackage.parameters
            
          this.cpParam.filter((param) => param.name == "typeOfMeditation").forEach((item) => {
            //this.data.push(item.keycloakUsers[0].username)
            this.typeOfMeditation.push(item.value) //(this.getFhirID(item));//item.fhirTherapist. //keycloakUsers[0].username)
            //console.log(item)
          });
          //console.log("meditation types: " + JSON.stringify(this.typeOfMeditation))

          this.cpParam.filter((param) => param.name == "objectType").forEach((item) => {
            //this.data.push(item.keycloakUsers[0].username)
            this.objectType.push(item.value) //(this.getFhirID(item));//item.fhirTherapist. //keycloakUsers[0].username)
            //console.log(item)
          });

          //this.selectedSessionEnv = result2.data.units[0].contentPackageResource.id;
          this.onNext();
        }

      }
    },
    sendConfig: async function (env, type, object) {
      
      console.log(env + type + object)
      
      let typeId = 0;
      this.cpParam.filter((param) => param.value == type).forEach((item) => {
        typeId = item.id
      });

      let objectId = 0;
      this.cpParam.filter((param) => param.value == object).forEach((item) => {
        objectId = item.id
      });

      let ownFHIRRessourceId = this.user.fhirResourceId;

      let procedure_data = {
        "patient": ownFHIRRessourceId,
        "carePlanUuid": this.carePlanUUId,
        "carePlanUnitId": this.carePlanUnitsId,
        "fhirProcedure": "0",
        "units": [
          {
            "activityUnitId": this.unitsId,
            "contentPackageResourceId": this.unitResourceId,
            "packageParametersIds": [typeId, objectId],
            "resourceParametersIds": []
          }
        ]
      }

      alert("sendConfig: " + JSON.stringify(procedure_data));

      const result = await api.postProcedures(this.user, procedure_data)
      alert("result of post procedure: " + JSON.stringify(result))

      //this.procedureId = result.data.id;
      //this.procedureUnitId = result.data.units[0].id;

      /*
      */

      /*
      let results = [
        {
          "name" : "typeOfMeditation",
          "value" : "Magnify",
          "id" : 4
        },
        {
          "name" : "objectType",
          "value" : "Stone",
          "id" : 11
        }
      ]

      const result = await api.postProcedureResultBatch(this.user, this.procedureId, this.procedureUnitId, questionaire_results);
      alert("result of post procedure results: " + JSON.stringify(result.data))
      */
    },
    getSessionTypeTitle(index) {
      return this.options_SessionTypeAlternate[index].label;
    },
    getSessionEnvTitle(index) {
      return this.options_SessionEnv[index].label;
    },
    getSessionDifficulty(index) {
      return this.options_SessionDifficulty[index].label;
    },
    getSessionDifficultyColor(index) {
      switch (index) {
        case 0:
          return "green";
        case 1:
          return "orange";
        case 2:
          return "red";
      }
    },
    /*
    onChangeType(value) {
      //this.setUserConfigType(this.options_SessionTypeAlternate.indexOf(value));
      //alert("type: " + this.user_config.session_typeAlternate);
    },
    */
    onChangeEnv(value) {
      this.selectedSessionEnv = value
      //this.setUserConfigEnv(value);
      //alert("type: " + this.user_config.session_typeAlternate);
    },
    getCourseDescription(type) {
      //switch (type) {
      //case 0:
      console.log(type);
      return "session_object_meditation_info_text";
      //case 1:
      //  return "orange";
      //case 2:
      //  return "red";
      //}
    },
    onNextDebug() {
      alert(
        "start session:\n"+
        this.selectedSessionEnv+"\n"+
        this.selectedTypeOfMeditation+"\n"+
        this.selectedObjectType
      );

      /*
      this.cpParam.filter((param) => param.name == "objectType").forEach((item) => {
        //this.data.push(item.keycloakUsers[0].username)
        this.objectType.push(item.value) //(this.getFhirID(item));//item.fhirTherapist. //keycloakUsers[0].username)
        //console.log(item)
      });
      */

      this.sendConfig(this.selectedSessionEnv, this.selectedTypeOfMeditation, this.selectedObjectType )
    }
  },
};
</script>

<style></style>
