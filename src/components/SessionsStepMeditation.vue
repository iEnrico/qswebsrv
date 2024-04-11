<template>
  <v-card variant="elevated" class="mx-auto rounded-lg">
    <v-container fluid align="center">
      <v-col :cols="12" align="start" justify="start">
        <v-row dens align="start" justify="start">
          <MeditationPlayer
            :playerdata="task_data[config_index]"
            :type=config_index
            :setProgress="this.setProgress"
            :onNext="this.onNext"
            :sendResults="this.sendResults"
          />
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import MeditationPlayer from "@/components/meditationPlayer.vue";

import api from "@/scripts/api/api";
import data from "@/scripts/data/data.js";

import { 
  //getContainingUnitsFromProcedure,
  getNextAvailableProcedures, 
  //isAllUnitsCompleteSync, 
  getUser,
  //getCourseIcon, 
  //getCourseInfo, 
  //getStateIcon, 
  //getStateMsg, 
  //getStateColor 
} from "@/scripts/procedureEngine";

export default {
  name: "SessionsStepMeditation",
  data: () => ({
    // id of task
    // type of task (0 = intro, 1 = audio, 2 = interact, 3 = outro)
    // only if type is audio
    // only if type is interact
    // pause after
    config_index: 0,
    task_data: data.getMeditationDatasets(),
  }),
  props: ["setProgress", "onBack", "updateView", "onNext", "data"],
  components: { MeditationPlayer },
  mounted: async function () {
    //console.log("USER CONFIG FOR WEB/VR:\n"+this.user_config)

    let parsedData = await getNextAvailableProcedures()
    parsedData = parsedData.data[0]

    //console.log("SESSIONSTEPMEDI.mounted DATA \n" + JSON.stringify(parsedData))

    //console.log("contentPackageResourceBundle: " + parsedData.units[parsedData.units.length-1].contentPackageResourceBundle)
    //console.log("packageParameters: " + parsedData.units[parsedData.units.length-1].packageParameters)



    /*  Environment
     *  EnvironmentSeeWhatYouDontSee
     *  EnvironmentShort
     *  Magnify
     *  Phone
     *  Imagination
     *  AttentionTraining
     *  BodyScan
     *  Freestyle
     */
    var useMethod = 0 
    parsedData.units[parsedData.units.length-1].packageParameters.forEach(element => {
      switch (element.key.value) {
        case "Magnify":
          useMethod = 0
          break;
        case "Phone":
          useMethod = 3
          break;
        case "Imagination":
          useMethod = 6
          break;
        
        case "BodyScan":
          useMethod = 9
          break;
        
        default:
          break;
      }
    });

    
    var useObject = 0
    if (useMethod != 9) { // NO OBJECTS ON BODY SCAN

      /*  None
      *  Stone
      *  Stick
      *  Statue
      */
      parsedData.units[parsedData.units.length-1].packageParameters.forEach(element => {
        switch (element.key.value) {
          //case "None": // MOSTLY BODY SCAN
          //  useObject = 0
          //  break;
          case "Stone":
            useObject = 0
            break;
          case "Stick":
            useObject = 1
            break;
          case "Statue":
            useObject = 2
            break;
        
          default:
            break;
        }

      });
    }

    this.config_index = (useMethod + useObject)

    console.log("-- > CONFIG-index: " + this.config_index)

  },
  methods: {
    async sendResults() {

/*
      const sampledata = {"state": "COMPLETED"};

      var availableProcedures = await getNextAvailableProcedures() 
      console.log("AVAILABLE PROC:\n"+JSON.stringify(availableProcedures))

      var procedure = availableProcedures.data[0]
      await api.patchProcedures(getUser(), procedure.id, sampledata)

      //this.routeBack("/dashboard1");
*/


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
      await api.patchActivityUnitAlternate(getUser(), procedureOd, unitID, sampledata)








      
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


    },
    routeBack: function (value) {
      this.$router.push(value);
    },

  },
};
</script>

<style></style>
