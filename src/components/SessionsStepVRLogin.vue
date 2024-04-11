<template>
  <InfoDlg ref="sickness" />
  <v-container fluid class="pa-0 ma-0 fill-height" style="justify-content: center;" v-if="!finishedVR">
      <v-col :cols="12">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-2">
            <v-container fill-height fluid align="center" justify="center" class="mb-0">
              <v-card-title>
                <span class="text-4xl">Gewähltes VR-Scenario</span>
              </v-card-title>
              <v-card-subtitle class="ph-2 mt-4">
                <span>{{ getConfigurationText(environment, params) }}</span>
              </v-card-subtitle>
            </v-container>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="8">
        <v-card
          variant="text"
          class="pa-0 ma-0 mt-8"
          style="height: 14em; display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-2">
            <v-container fill-height fluid align="center" justify="center" class="mb-0">
              <v-card-title>
                Verbinden mit der VR-App
              </v-card-title>
              <v-card-subtitle class="ph-2 mt-4">
                Setzen sie nun die VR-Brille auf und merken sie sich das in der VR-App dargestellte Passwort.<br>
                Klicken sie danach auf VR-Login und geben dort das gemerkte Passwort ein.<br>
                Nach erfolgreichem Login können sie mit dem VR-Scenario beginnen.
              </v-card-subtitle>
              <v-btn
                variant="outlined"
                class="ma-2 pa-2 mt-8"
                v-bind="props"
                v-on:click="deviceLogin"
                >
                VR-Login
              </v-btn>
            </v-container>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="8">
        <v-row align="center" justify="center" class="pb-2 mb-16">
          <v-btn
            variant="outlined"
            class="ma-2 pa-2"
            v-bind="props"
            v-on:click="showSicknessInfo"
            >
            Sickness Information
          </v-btn>
        </v-row>
      </v-col>
      <v-col :cols="10">
        <v-row align="center" justify="center" class="pb-2">
          <v-card-text class="text-center pa-0 ma-4 ml-4 mr-4">
            <span class="text-grey">
              Sollten Sie nach Abschluss der VR-Einheit nicht automatisch weitergeleitet
              werden klicken Sie bitte auf "Weiter" um die Aktivität
              abzuschliessen.
            </span>
          </v-card-text>
          <center>
            <v-btn variant="elevated" color="#28B9AF" @click="onFinishVR()">
              <span class="text-white">
                {{ "Weiter" }}
              </span>
            </v-btn>
          </center>
        </v-row>
      </v-col>
  </v-container>
  
  <!-- END SCREEN -->
  <center>
    <v-container class="pa-4 ma-4 mt-12 mb-12" v-if="finishedVR">
      <v-card class="pa-4 ma-4" style="width: 50%;" >
        <v-row align="center" justify="center">
          <v-icon class="pa-8 mt-16 mb-0" size="64pt" color="#28B9AF">mdi-checkbox-marked-circle-outline</v-icon>
        </v-row>
        <v-row align="center" justify="center">
          <v-card-title style="font-size: 2em">Vielen Dank!</v-card-title>
        </v-row>
        <v-row align="center" justify="center">
          <v-card-text style="font-size: 0.8em">
            {{ $t("session_completed_info") }}
          </v-card-text>
        </v-row>
        <v-row align="center" justify="center">
          <v-btn
                variant="elevated" style="background-color: #28B9AF;"
                @click="onFinishSession()"
                class="ml-0 mr-0 mt-2 mb-2"
              >
              <!-- TODO: add storing of questionaries too! -->
              <span class="text-white">{{ $t("overlay_save_exit") }}</span>
              </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </center>
</template>

<script>

import auth from "@/scripts/auth/auth.js";
import api from "@/scripts/api/api";
import { getTextByLanguage } from "@/scripts/common/utils";
import InfoDlg from "@/components/dialogs/dialogInformation.vue";
//import { createUIElement } from "@/scripts/procedureUI";
import { 
  /*
  continueProcedure, 
  getNextActivity,
  */ 
 getNextAvailableProcedures, 
 //isAllUnitsComplete, 
} from "@/scripts/procedureEngine";

export default {
  name: "SessionsView3",
  data: () => ({
    finishedVR: false,
    environment: null,
    params: []
  }),
  props: ["data", "updateView", "onBack", "onNext"],
  components: {
    InfoDlg
  },
  mounted: async function () {

    if (!this.access_token) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    const result2 = await api.getRunningProcedures(this.user);

    result2.data.units[result2.data.units.length-1].packageParameters.forEach(element => {
      this.params.push(getTextByLanguage(element.key.translations, this.$i18n))
    }); 

    this.environment = getTextByLanguage(result2.data.units[result2.data.units.length-1].contentPackageResourceBundle.translations, this.$i18n); // resource with meta
  },
  methods: {
    getConfigurationText: function (environment, params) {
      return "Ein(e) " + this.getNameForParam(params, 0) + " in einer " + environment + " mit eine(r/m) " + this.getNameForParam(params, 1)
    },
    getNameForParam: function (params, index) {
      //TODO: more logic, get correct id and translation for it. currently not exists in data
      return params[index]
    },
    deviceLogin: function () {
      auth.deviceLogin();
    },
    onFinishVR: function () {
      this.finishedVR = true;
    },
    onFinishSession: async function () {
      
      var unitID = 0;
      var procedureOd = 0;

      // fetch running procedure 
      const result2 = await api.getRunningProcedures(this.user);
      if (result2.data) {
        unitID = result2.data.units[result2.data.units.length-1].id
        procedureOd = result2.data.id
      }

      // patch procedure complete
      const sampledata = {"state": "COMPLETED"};
      await api.patchActivityUnitAlternate(this.user.id, procedureOd, unitID, sampledata)


      //TODO: check if LAST or ONLY ONE , then go back to dashboard, else goto next

      var item = await getNextAvailableProcedures();

      if (item.data[0].nextActivityUnit) {
        
        this.$router.push({
          name: /*item.course_type == 3 ? "Dashboard3a" :*/ "Dashboard2a",
          //params: { data: JSON.stringify(item.data[0]) },
        });

        this.updateView()

      } else {
        this.routeBack('/Dashboard1')
      }

      /*
      if(this.data.max_progress == this.data.progress+1) {
        this.routeBack('/Dashboard1')
      } else {
        
        // next step, or route back
        let nextTask = await getNextAvailableProcedures();
        let showNextActivity = await isAllUnitsComplete(nextTask)
        let contentPackage = null

        // show next activity in course if all sub tasks completed
        if (showNextActivity && nextTask.nextActivityUnit) {
          contentPackage = nextTask.nextActivityUnit.contentPackage
        }
        // 
        else if (showNextActivity) {
          contentPackage = nextTask.units[0].contentPackage
        }
        // show existing activity
        else {
          contentPackage = nextTask.units[nextTask.units.length-1].contentPackage 
            ? nextTask.units[nextTask.units.length-1].contentPackage 
            : nextTask.units[nextTask.units.length-1].activityUnit.contentPackage
        }
        
        const metadata = await createUIElement(nextTask, contentPackage, this.$i18n) //JSON.parse(this.data)
        this.updateView(metadata)
      }
      */
    },
    routeBack: function (value) {
      this.$router.push(value);
    },
    showSicknessInfo: async function() {

      var options = { color: '#28B9AF', width: 800, zIndex: 200, noconfirm: false }

      await this.$refs.sickness.open(
          "Sickness Information",
          "Die Verwendung von VR-Headsets kann verschiedene Nebenwirkungen verursachen, darunter Übelkeit, Schwindel, Augenbelastung und Kopfschmerzen. Diese Symptome werden oft durch Bewegungssensoren im Gerät verursacht, die nicht immer perfekt mit den Bewegungen des Benutzers synchronisiert sind. Langfristige Nutzung kann auch zu Sehstörungen führen, insbesondere bei Kindern und Jugendlichen, da ihre Augen noch in der Entwicklung sind. Es wird empfohlen, regelmäßige Pausen einzulegen und die Nutzungsdauer zu begrenzen, um diese Nebenwirkungen zu minimieren. Außerdem sollten Benutzer darauf achten, dass sie das Headset korrekt einstellen und gegebenenfalls Anpassungen vornehmen, um Komfort und Sicherheit zu gewährleisten."
          , options
      )
    }
  },
};
</script>

<style></style>
