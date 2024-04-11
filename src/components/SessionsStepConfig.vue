<template>
  <InfoDlg ref="validation" />
  <v-row class="pa-0 ma-0 fill-height" align-content="center" justify="center">
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-card-title>Umgebungskonfiguration</v-card-title>
        <v-row class="ml-4 mr-4 mt-0 mb-2">
          <v-container class="pa-0 ma-0" align="center" justify="center">
            <v-row no-gutters>
              <v-col v-for="(item, index) in sessionEnvironments" :key="index" :cols="6">
                <v-card
                  class="rounded-lg"
                  max-width="90%"
                  :style="
                    selectedSessionEnv != item
                      ? 'border: none;'
                      : 'border: 2px solid #28B9AF;'
                  "
                  :color="
                    selectedSessionEnv != item 
                      ? '#FFFFFF' 
                      : '#EDF7F5' 
                  "
                  @click.stop="onChangeEnv(item)"
                  outlined
                  tile
                >
                  <v-img :src="item.img" height="12em" cover></v-img>

                  <v-card-title><span :style=" selectedSessionEnv != index ? 'color: #000' : 'color: #28B9AF'">{{
                    item.value
                  }}</span></v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row v-if="typeOfMeditation.length >0" class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-select
            class="ml-8 mr-8 font-color=#423412"
            label="Meditationstyp"
            v-model="selectedTypeOfMeditation"
            :items="preTypeOfMeditation ? [preTypeOfMeditation] : typeOfMeditation"
            :selectable="preTypeOfMeditation ? false : true"
            :disabled="preTypeOfMeditation ? true : false"
            item-title="value"
            item-value="id"
            return-object
          ></v-select>
        </v-row>
        <v-row v-if="objectType.length >0" class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-select
            class="ml-8 mr-8 font-color=#423412"
            label="Objekttyp"
            v-model="selectedObjectType"
            :items="preObjectType ? [preObjectType] : objectType"
            :selectable="preObjectType ? false : true"
            :disabled="preObjectType ? true : false"
            item-title="value"
            item-value="id"
            return-object
          ></v-select>
        </v-row>
        <v-row v-if="roleType.length >0" class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-select
            class="ml-8 mr-8 font-color=#423412"
            label="Rolle"
            v-model="selectedRoleType"
            :items="preRoleType ? [preRoleType] : roleType"
            :selectable="preRoleType ? false : true"
            :disabled="preRoleType ? true : false"
            item-title="value"
            item-value="id"
            return-object
          ></v-select>
        </v-row>

        <v-row v-if="avatarType.length >0" class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-select
            class="ml-8 mr-8 font-color=#423412"
            label="Avatar"
            v-model="selectedAvatarType"
            :items="preAvatarType ? [preAvatarType] : avatarType"
            :selectable="preAvatarType ? false : true"
            :disabled="preAvatarType ? true : false"
            item-title="value"
            item-value="id"
            return-object
          ></v-select>
        </v-row>

        <v-row v-if="textType.length >0" class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-select
            class="ml-8 mr-8 font-color=#423412"
            label="Texte"
            v-model="selectedTextType"
            :items="preTextType ? [preTextType] : textType"
            :selectable="preTextType ? false : true"
            :disabled="preTextType ? true : false"
            item-title="value"
            item-value="id"
            return-object
          ></v-select>
        </v-row>

        <v-row class="pa-0 mx-4 mt-2 mb-4" align-content="center">
          <v-spacer></v-spacer>
          <v-btn variant="elevated" color="#28B9AF" @click="onNextStep()"
            ><span class="text-white">
              {{ "Start" }}
            </span></v-btn
          >
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

//import common from "@/scripts/common/common";
import api from "@/scripts/api/api";
import { getTextByLanguage } from "@/scripts/common/utils";
import InfoDlg from "@/components/dialogs/dialogInformation.vue";
import { 
  /*
  createConfig, 
  
  createProcedure, 
  startProcedure,
  */
  isAllUnitsComplete, 
  isAllUnitsCompleteSync, 
  getFHIRId,
  getUser
} from "@/scripts/procedureEngine";

export default {
  name: "SessionsStepConfig",
  data: () => ({

    cpParam:[], // sum of all parameters
    cpResources:[], // sum of all resources

    sessionEnvironments: [],
    selectedSessionEnv: 0,

    typeOfMeditation: [], // sorted parameter by type
    selectedTypeOfMeditation: null, // selected type parameter
    preTypeOfMeditation: null, // predefined type of meditation

    objectType:[], // sorted parameter by object
    selectedObjectType: null, // selected object parameter
    preObjectType: null, // predefined object

    roleType:[], // sorted parameter by role
    selectedRoleType: null, // selected role parameter
    preRoleType: null, // predefined role

    avatarType:[], // sorted parameter by avatar
    selectedAvatarType: null, // selected avatar parameter
    preAvatarType: null, // predefined avatar

    textType:[], // sorted parameter by texts
    selectedTextType: null, // selected texts parameter
    preTextType: null, // predefined text

  }),
  props: [
    "data",
    "onBack",
    "onNext",
  ],
  components: {InfoDlg},
  mounted: async function () {
    
    //this.selectedSessionEnv = 0

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    await this.init()
  },
  methods: {
    init: async function () {
      //console.log("init config with:\n" + this.data)

      var parsedData = this.data

      console.log(parsedData)

      if ( (await isAllUnitsComplete(parsedData) && parsedData.nextActivityUnit) || parsedData.activity) {
        console.log("---> NO CONFIG YET")


        var hasPredefined = parsedData.activity 
          ? parsedData.activity.units[0].parameters.length > 0
          : parsedData.nextActivityUnit.parameters.length > 0
        console.log("has predefined Parameter: " + hasPredefined)

        var predefinedParams = parsedData.activity 
          ? parsedData.activity.units[0].parameters
          : parsedData.nextActivityUnit.parameters

        // get content package
        let contentPackage = await this.getContentPackage()

        // get parameters and resources
        this.cpParam = contentPackage.parameters
        this.cpResources = contentPackage.resourceBundles

        // PARAMETERS
           
/*
        var mapping = [
          { key: "typeOfMeditation", array: this.typeOfMeditation},
          { key: "objectType", array: this.objectType},
          { key: "role", array: this.roleType},
          { key: "avatar", array: this.avatarType},
          { key: "text", array: this.textType},
        ]
        mapping.forEach(item => {
          this.cpParam.filter((param) => param.name == item.key).forEach((item) => {
            item.array.push(
              { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n)}
            )
          });
        });
*/

        this.cpParam.filter((param) => param.name == "typeOfMeditation").forEach((item) => {
          this.typeOfMeditation.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'name': item.value}
          )
        });

        var predefinedType = predefinedParams.find(param => param.name === 'typeOfMeditation');
        if (predefinedType) {
          console.log("predefined typeOfMeditation found!")
          console.log(this.typeOfMeditation)
          console.log("found: " + this.typeOfMeditation.find(param => param.name === predefinedType.value))
          this.preTypeOfMeditation = this.typeOfMeditation.find(param => param.name === predefinedType.value);
          console.log("found: " + this.preTypeOfMeditation.value)
          this.selectedTypeOfMeditation = this.preTypeOfMeditation
        }

        
        this.cpParam.filter((param) => param.name == "objectType").forEach((item) => {
          this.objectType.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'name': item.value}
          ) 
        });
        
        var predefinedObject = predefinedParams.find(param => param.name === 'objectType');
        if (predefinedObject) {
          console.log("predefined objectType found!")
          console.log(this.objectType)
          console.log("found: " + this.objectType.find(param => param.name === predefinedObject.value))
          this.preObjectType = this.objectType.find(param => param.name === predefinedObject.value);
          console.log("found: " + this.preObjectType.value)
          this.selectedObjectType = this.preObjectType
        }

        
        this.cpParam.filter((param) => param.name == "role").forEach((item) => {
          this.roleType.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'name': item.value}
          ) 
        });

        var predefinedRole = predefinedParams.find(param => param.name === 'role');
        if (predefinedRole) {
          console.log("predefined role found!")
          console.log(this.roleType)
          console.log("found: " + this.roleType.find(param => param.name === predefinedRole.value))
          this.preRoleType = this.roleType.find(param => param.name === predefinedRole.value);
          console.log("found: " + this.preRoleType.value)
          this.selectedRoleType = this.preRoleType
        }

        
        this.cpParam.filter((param) => param.name == "avatar").forEach((item) => {
          this.avatarType.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'name': item.value}
          ) 
        });

        var predefinedAvatar = predefinedParams.find(param => param.name === 'avatar');
        if (predefinedAvatar) {
          console.log("predefined avatar found!")
          console.log(this.avatarType)
          console.log("found: " + this.avatarType.find(param => param.name === predefinedAvatar.value))
          this.preAvatarType = this.avatarType.find(param => param.name === predefinedAvatar.value);
          console.log("found: " + this.preAvatarType.value)
          this.selectedAvatarType = this.preAvatarType
        }

        
        /*
        this.cpParam.filter((param) => param.name == "text").forEach((item) => {
          this.textType.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'name': item.value}
          ) 
        });
        
        var predefinedText = predefinedParams.find(param => param.name === 'text');
        if (predefinedText) {
          console.log("predefined text found!")
          console.log(this.textType)
          console.log("found: " + this.textType.find(param => param.name === predefinedText.value))
          this.preTextType = this.textType.find(param => param.name === predefinedText.value);
          console.log("found: " + this.preTextType.value)
          this.selectedTextType = this.preTextType
        }
        */

        // RESSOURCES
        
        this.cpResources.forEach(item => {
          this.sessionEnvironments.push(
            { 'id': item.id, 'value': getTextByLanguage(item.translations, this.$i18n), 'img': this.getImageForEnvironment(item)}
          ) 
        });

        //TODO: setting default first element. should we?
        if (this.sessionEnvironments.length > 0) {
          this.selectedSessionEnv = this.sessionEnvironments[0]
        }

      } 
      else {
        console.log("---> CONFIG ALREADY SET...")
        await this.onNextStep();
      }

    },
    getContentPackage: async function () {

      var contentPackage = ( isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit )
        ? this.data.nextActivityUnit.contentPackage
        : this.data.activity 
          ? this.data.activity.units[this.data.activity.units.length-1].contentPackage
          : this.data.units[this.data.units.length-1].activityUnit.contentPackage
      
      return await api.getContentPackageByName(this.user.id, contentPackage.name)
      
    },
    getImageForEnvironment(item) {
      switch (item.name) {
        case "day_scene":
          return require("@/assets/ph1.png")
        case "night_scene":
          return require("@/assets/ph2.png")
      
        default:
          break;
      }
    },
    onChangeEnv(item) {
      this.selectedSessionEnv = item
      //console.log("resource bundle: \nitem: " + item + "\nenvironment: " + this.selectedSessionEnv.id)
    },
    onNextStep: async function (){

      //TODO: check for type of unit (roleplay, meditation etc) and verify required fields are filled
      if (!this.selectedSessionEnv && this.sessionEnvironments.length > 0 || 
          !this.selectedTypeOfMeditation && this.typeOfMeditation.length > 0 ||  
          !this.selectedObjectType && this.objectType.length > 0 || 
          !this.selectedRoleType && this.roleType.length > 0 || 
          !this.selectedAvatarType && this.avatarType.length > 0 /*|| 
          !this.selectedTextType && this.textType.length > 0 */
          ) {
        //alert("please set config!")
        this.showInfo()
      }
      else {

        /*
        console.log(  
          "Config to set: \n" 
          + this.selectedSessionEnv       ? "Environment: " + this.selectedSessionEnv.id        + ", " : ""
          + this.selectedTypeOfMeditation ? "Type: "        + this.selectedTypeOfMeditation.id  + ", " : ""
          + this.selectedObjectType       ? "Object: "      + this.selectedObjectType.id        + ", " : ""
          + this.selectedRoleType         ? "Role: "        + this.selectedRoleType.id          + ", " : ""
          + this.selectedAvatarType       ? "Avatar: "      + this.selectedAvatarType.id        + ", " : ""
          + this.selectedTextType         ? "Text: "        + this.selectedTextType.id          + ", " : ""
        )*/

        //let contentPackage = await this.getContentPackage()
        
        var packageParams = []
        this.selectedTypeOfMeditation ? packageParams.push(this.selectedTypeOfMeditation.id) : console.log("no type of meditation to add")
        this.selectedObjectType ? packageParams.push(this.selectedObjectType.id) : console.log("no object to add")
        this.selectedRoleType ? packageParams.push(this.selectedRoleType.id) : console.log("no role to add")
        this.selectedAvatarType ? packageParams.push(this.selectedAvatarType.id) : console.log("no avatar to add")
        //this.selectedTextType ? packageParams.push(this.selectedTextType.id) : console.log("no text variant to add")

        if (isAllUnitsCompleteSync(this.data) && this.data.nextActivityUnit) {
            console.log("-- next activity") 

              let procedure_data = {     
                "activityUnitId": this.data.nextActivityUnit.id,
                "contentPackageResourceId": this.selectedSessionEnv.id, 
                "packageParametersIds": packageParams,
                "resourceParametersIds": [
                  //env
                ],
                "state": "RUNNING"
              }

              let result = await api.postActiveUnit(getUser(), procedure_data)
      
              console.log("RESULT:\n" + result)

        } else {
          if (this.data.activity) {
            console.log("-- first activity")

            let payload = 
            {
              "patient": getFHIRId(), 
              "carePlanUuid": this.data.carePlan.uuid, 
              "carePlanUnitId": this.data.id, 
              "fhirProcedure": "0",
              "units": [
                {
                  "activityUnitId": this.data.activity.units[0].id, 
                  "contentPackageResourceBundleId": this.selectedSessionEnv.id, 
                  "packageParametersIds": packageParams,
                  "resourceParametersIds": [
                    //env
                  ],
                  "state": "RUNNING"
                }
              ]
            }

            const result = await api.postProcedures(
                getUser(), 
                payload
            )

            console.log("RESULT:\n" + result)

          } else {
            console.log("-- runnning activity") 
          }
        }
        this.onNext();
      }
      
    },
    showInfo: async function() {

      var options = { color: '#28B9AF', width: 400, zIndex: 200, noconfirm: false }

      await this.$refs.validation.open(
          "Information",
          "Bitte wählen sie eine gültige Konfiguration aus."
          , options
      )
    }
  },
};
</script>

<style></style>
