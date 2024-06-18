<template>
  <InfoDlg ref="session_continue" />
  <v-card class="pa-4 ma-4 mt-16" fluid style="width: 66%;" v-if="question_index < max_elements">
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>

    <!--
      RECODE THIS!
      // 0=rating, 1=number select, 2=voice, 3=checkbox select
    -->

    <div v-if="elements[question_index].answerType != 1" class="mt-8"  >
      <!--
        <v-card-title class="text-wrap text-start" >{{ elements[question_index].question }}</v-card-title>
        -->
      <span v-html="elements[question_index].question"></span>
      <v-col v-if="elements[question_index].hasSubtext">
        <v-card-text class="ma-0 pa-0 ml-4 mr-4">
          {{ elements[question_index].subtext }}
        </v-card-text>
      </v-col>
    </div>

    <div v-if="elements[question_index].answerType == 1">
      <v-row no-gutters align="start" justify="start" class="mt-2">
        <v-card-title class="text-wrap text-start" >{{ elements[question_index].question }}</v-card-title>
      </v-row>
    </div>

    <v-col :cols="12" style="height: 15%" class="mt-4 pt-0">

      <!-- RATING ANSWER -->
      <div v-if="elements[question_index].answerType == 0" class="mt-8 text-center">
        <v-rating
          v-if="question_index < max_elements"
          v-model="elements[question_index].userRating"
          @click="setSelection(elements[question_index].userRating)"
          empty-icon="mdi-circle-outline"
          full-icon="mdi-circle"
          half-icon="mdi-circle-half"
          color="#28B9AF"
          hover
        >
          <template v-slot:item-label="props">
            <span
              class="font-weight-black text-caption"
              :style="'color:' + colors[props.index]"
            >
              {{ props.label }}
            </span>
          </template>
        </v-rating>
      </div>

      <!-- SELECT ANSWER
          :style="'border: 1px solid #D9D9D9;'"
          :color="elements[question_index].userRating == i ? 'green-darken-1' : '#68271D'"
          variant="outlined"
      -->
      <!--
      <div v-if="elements[question_index].answerType == 99" class="mt-8 text-center">
        <v-btn
          v-for="(anwser, i) in elements[question_index].list_items"
          :key="i"
          @click="setSelection(i)"
          variant="outlined"
          :style="(elements[question_index].userRating == i ? 'background-color: #28B9AF' : 'background-color: #FFF')"
          width="52px"
          height="52px"
          class="mr-2">
          <span :class="elements[question_index].userRating == i ? 'text-white' : 'text-black'">{{i}}</span>
        </v-btn>
      </div>
      -->

      <!-- option select -->
      <div v-if="elements[question_index].answerType == 1" class="mt-8 text-start">
        <v-row v-for="(anwser, i) in elements[question_index].list_items" :key="i" no-gutters align="center" justify="start" class="mt-2">
          <v-btn
            @click="setSelection(i)"
            variant="outlined"
            :style="(elements[question_index].userRating == i ? 'background-color: #28B9AF' : 'background-color: #FFF')"
            width="52px"
            height="52px"
            class="mr-2">
            <span :class="elements[question_index].userRating == i ? 'text-white' : 'text-black'">{{i}}</span>
          </v-btn>
          <v-card-text class="ma-0 pa-0 ml-4 mr-4">
            {{ anwser.text }}
          </v-card-text>
        </v-row>
      </div>

      <!-- rule check boxed select
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
             -->
      <div v-if="elements[question_index].answerType == 3" class="mt-8 text-start">
        <v-sheet  class="mx-auto">
          <v-form ref="form">
            <v-row v-for="(item, i) in elements[question_index].list_items" :key="i" no-gutters align="center" justify="start" class="mt-0">

              <v-checkbox
                v-if="item.type == 0"
                v-model="item.value"
                :rules="[v => !!v || 'You must agree to continue!']"
                :label="item.text"
                required
              ></v-checkbox>

              <v-radio-group
                v-if="item.type == 1"
                v-model="item.value"
                >
                <!--<template v-slot:label>
                  <div>{{item.value}}</div>
                </template>-->
                <v-radio v-for="(element, e) in item.text" :key="e" :label="element" :value="e" v-on:click="setSelection(e)" ></v-radio>
              </v-radio-group>

              <v-text-field
                v-if="item.type == 2"
                :label="item.text"
                v-model="item.value"
                :model-value="item.value"
                :suffix="item.suffix"
              ></v-text-field>

              <v-combobox
                v-if="item.type == 3"
                :label="item.label"
                v-model="item.value"
                :items="item.text"
              ></v-combobox>

              <v-slider
                v-if="item.type == 4"
                v-model="item.value"
                :ticks="tickLabels"
                :max="4"
                step="1"
                show-ticks="always"
                tick-size="8"
                thumb-label
              >
                <template v-slot:thumb-label="{ modelValue }">
                  {{ tickLabels[modelValue] }}
                </template>
              </v-slider>

              <v-row class="mt-4" v-if="item.type == 5">
                <v-col :cols="3" class="text-center">
                  <span :class="elements[question_index].userRating == i ? 'text-white' : 'text-black'">{{item.text[0]}}</span>
                </v-col>
                <v-col :cols="6" class="text-center">
                  <v-slider
                    v-model="item.value"
                    :min="item.min"
                    :max="item.max"
                    step="1"
                    show-ticks="always"
                    tick-size="8"
                    thumb-label="always"
                  >
                  <!--
                    <template v-slot:thumb-label="{ modelValue }">
                      {{ satisfactionEmojis[modelValue] /*Math.min(Math.floor(modelValue / 10), 9)]*/ }}
                    </template>
                  -->
                  </v-slider>
                </v-col>
                <v-col :cols="3" class="text-center">
                  <span :class="elements[question_index].userRating == i ? 'text-white' : 'text-black'">{{item.text[1]}}</span>
                </v-col>
              </v-row>

              <v-row class="mt-4" v-if="item.type == 6">
                <v-col :cols="12" class="text-center">
                  <v-btn
                    v-for="(item, i) in getQuestionImagesForIndex(question_index)"
                    @click="setSelection(i)"
                    variant="flat"
                    :key="i"
                    :style="(elements[question_index].userRating == i ? 'background-color: #28B9AF' : 'background-color: #FFF')"
                    width="10%"
                    height="100%"
                    class="pa-0 ma-0 ml-1 mr-1">
                    <img class="pa-0 ma-0"  :src="require('@/assets/'+item)" />
                  </v-btn>
                </v-col>
                <v-col :cols="6" class="text-start pl-12">
                  <span :class="'text-black font-weight-bold '">{{item.text[0]}}</span>
                </v-col>
                <v-col :cols="6" class="text-end pr-12">
                  <span :class="'text-black font-weight-bold '">{{item.text[1]}}</span>
                </v-col>
              </v-row>

            </v-row>
            <!--
            <v-card-text class="ma-0 pa-0 ml-4 mr-4">
              {{ elements[question_index].list_items }}
            </v-card-text>
            -->
          </v-form>
        </v-sheet>
        <!--
        <v-row v-for="(anwser, i) in elements[question_index].list_items" :key="i" no-gutters align="center" justify="start" class="mt-2">
          <v-btn
            @click="setSelection(i)"
            variant="outlined"
            :style="(elements[question_index].userRating == i ? 'background-color: #28B9AF' : 'background-color: #FFF')"
            width="32px"
            height="32px"
            class="mr-2">
          </v-btn>
          <v-card-text class="ma-0 pa-0 ml-4 mr-4">
            {{ anwser.text }}
          </v-card-text>
        </v-row>
        -->
      </div>

      <!-- VOICE RECORDING -->
      <div v-if="elements[question_index].answerType == 2" class="mt-8 text-center">
      <center>
        <VoiceRecorder
          class="pa-0 ma-4"
          :index="question_index"
          :onHasAudio="enableNextStep"
          @item-updated="itemUpdated"
          v-if="question_index < max_elements"
        /></center>
      </div>

    </v-col>

    <!-- BOTTOM PROGRESS BAR -->
    <v-col :cols="12" class="mt-4">
        <v-row align="center" justify="center" class="pb-0">
        <!-- style="background-color: #28B9AF;" -->
          <v-btn
            v-if="question_index < max_elements && question_index != 0"
            variant="elevated"
            @click="prevStep()"
            class="ml-0"
          >
            <span class="text-black"> {{ $t("questionaire_btn_back") }} </span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            variant="elevated"
            :style="next_step_disabled ? 'background-color: #DDD;' : 'background-color: #28B9AF;'"
            :disabled="next_step_disabled"
            @click="nextStep()"
            class="ml-0"
          >
          <!-- {{ elements[question_index].list_items[0] }} -->
          <span class="text-white">{{ question_index < max_elements
                                      ? ( elements[question_index].mandatory
                                            ? $t("questionaire_btn_next")
                                            : elements[question_index].list_items[0].value > -1
                                                ? $t("questionaire_btn_next")
                                                : $t("questionaire_btn_skip") )
                                      : $t("questionaire_btn_finish") }}</span>
          </v-btn>
        </v-row>
    </v-col>

    <!-- @click="question_index < max_elements ? nextStep(): completeNote()" -->

    <v-spacer></v-spacer>

    <v-divider :thickness="1" class="mt-2 border-opacity-100" color="#f22"></v-divider>

    <v-row align="end" justify="end" class="mt-1" v-if="question_index < max_elements">
      <v-card-subtitle>{{ question_index + 1 }} / {{ max_elements }}</v-card-subtitle>
    </v-row>
  </v-card>

  <!-- END SCREEN -->
  <v-container class="pa-4 ma-4 mt-12 mb-12" v-if="question_index === max_elements">
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
              @click="nextStep()"
              class="ml-0 mr-0 mt-8 mb-4"
            >
            <span class="text-white">{{ $t("overlay_save_exit") }}</span>
            </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

//import data from "@/scripts/data/data.js";
import VoiceRecorder from "@/components/voiceRecorder.vue";
import { useNotesStore } from "@/stores/notesStore";
import api from "@/scripts/api/api";
//import { createUIElement } from "@/scripts/procedureUI";
import {
  getUser,
  /*continueProcedure, getNextActivity,*/
  getNextAvailableProcedures,
  //isAllUnitsCompleteSync,
} from "@/scripts/procedureEngine";
import InfoDlg from "@/components/dialogs/dialogInformation.vue";
console.log("entro")

export default {
  name: "QuestionVisual",
  setup() {
    const notesStore = useNotesStore();
    return {
      notesStore,
    };
  },
  watch: {
    eventAbort: function () {
      if (this.eventAbort) {
        this.sendResults(
          true,
          this.elements
        );
      }
    },
    results: function () {
      this.question_index = this.results.length
      if (this.results.length > 0) {
        this.showLoadedDataInfo(this.results.length)
      }
      this.results.forEach((element, index) => {
        this.elements[index].userRating = Number(element.value)
        this.elements[index].list_items[0].value = Number(element.value)
        console.log("setting value " + this.elements[index].list_items[0].value + " for item " + index)
      });
      this.setProgress((100/this.max_elements)*this.question_index);
      this.checkNextDisabled()
    },
  },
  data: () => ({
    //colors: ["#dc2626", "#d97706", "#a8a29e", "#10b981", "#65a30d"],
    //labels: ["bad", "so so", "ok", "good", "great"],
    question_index: 0,
    max_elements: 0,
    next_step_disabled: true,
    elements: null,
    result_data: [],
    //satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
    /*tickLabels: {
          0: 'Nie ode sehr selten zutreffend',
          1: 'Selten zutreffend',
          2: 'Manchmal zutreffend',
          3: 'Oft zutreffend',
          4: 'Sehr oft oder immer zutreffend'
        },*/
  }),
  props: ["setProgress" /*"question_index", "max_elements"*/, "results", "eventAbort", "metadata", "data", "updateView", "sendResults"],
  components: {VoiceRecorder, InfoDlg},
  mounted: async function () {

    this.elements = this.data;
    this.max_elements = this.data.length;

    //console.log("elements: " + this.elements)
    //console.log("elements: " + this.max_elements)

    //console.log(this.elements[0].list_items[0].type)
    console.log("data " + JSON.stringify(this.data))
    console.log("metadata " + JSON.stringify(this.metadata))

  },
  methods: {
    showLoadedDataInfo: async function(value) {
      await this.$refs.session_continue.open(
          "Information",
          "Ihre letzte Sitzung wurde wieder hergestellt. Sie haben bereits " + value + " Aufgabe(n) erledigt."
      )
    },
    getQuestionImagesForIndex(index) {
      switch (index) {
        case 0:
          return ["pleasure_1.png","pleasure_2.png","pleasure_3.png","pleasure_4.png","pleasure_5.png","pleasure_6.png","pleasure_7.png","pleasure_8.png","pleasure_9.png"]
        case 1:
          return ["arousal_1.png","arousal_2.png","arousal_3.png","arousal_4.png","arousal_5.png","arousal_6.png","arousal_7.png","arousal_8.png","arousal_9.png"]
        case 2:
          return ["dominance_1.png","dominance_2.png","dominance_3.png","dominance_4.png","dominance_5.png","dominance_6.png","dominance_7.png","dominance_8.png","dominance_9.png"]

        default:
          break;
      }
    },
    checkNextDisabled() {
      if ( this.question_index < this.elements.length ) {

        if (this.elements[this.question_index].answerType == 2) {
          this.next_step_disabled = this.result_data.length == this.question_index;
        } else {
          this.next_step_disabled =
            this.elements[this.question_index] &&
            this.elements[this.question_index].mandatory &&
            ( this.elements[this.question_index].userRating === -1 && this.elements[this.question_index].list_items[0].value === -1 )
        }
      }
      console.log("next disabled: " + this.next_step_disabled)
      return this.next_step_disabled;

      /*
      console.log(this.elements[this.question_index])
      console.log(this.elements[this.question_index].mandatory)
      console.log(( this.elements[this.question_index].userRating ))
      console.log(( this.elements[this.question_index].list_items[0].value ))
      */

    },
    setSelection(index) {
      console.log("selected item: " + index)
      //console.log(JSON.stringify(this.elements));

      if (this.elements[this.question_index].answerType == 1 || this.elements[this.question_index].answerType == 3) {
        this.elements[this.question_index].userRating = index;
        //console.log(index)
      } else {
        this.elements[this.question_index].list_items[0].value = (index+1);//userRating = index;
        //console.log((index+1))
      }
      this.checkNextDisabled();

      //console.log(this.elements[index].userRating)

    },
    itemUpdated(value) {
      //console.log("parent.itemUpdated: " + JSON.stringify(value));
      this.result_data = value;
      //console.log("audios recorded: " + this.result_data.length)
      this.checkNextDisabled();
    },
    enableNextStep(/*value*/) {
      //console.log("parent.enableNextStep: " + value);
      //this.next_step_disabled = value;
    },
    prevStep() {
      if (this.question_index > 0) {
        this.question_index--;
        this.checkNextDisabled();
      } else {
        this.routeBack("/dashboard1");
      }
      this.setProgress((100/this.max_elements)*this.question_index);
    },
    nextStep: async function(){
      console.log("next step, clicked!")
      //console.log("ELEMENTS: " + this.elements.length);
      // fallback if no elements
      if (this.elements.length === 0) {
        console.log("FALLBACK")
        this.routeBack("/dashboard1");
      }
      else {
        // next step
        if (this.question_index < this.max_elements) {
          console.log("index++")
          this.question_index++;
          this.checkNextDisabled();
        }
        // finish audio note
        else if (this.elements[0].answerType == 2) {
          console.log("finish audio!")
          console.log("audio data: " + this.result_data)
          if (this.result_data.length > 0) {
            console.log("has audio result -> send to backend")
            this.completeAudioNote();
          } else {
            console.log("NO audio result -> route back")
            this.routeBack("/dashboard1");
          }
        }
        // finish questionaire
        else {
          console.log("FINISH")
          var vm = this;
          await this.completeQuestionaire();
          // give the server a bit to update data
          setTimeout(async function(){
            await vm.routeNext();
          }, 500)
        }
        this.setProgress((100/this.max_elements)*this.question_index);
      }
    },
    routeBack: function (value) {
      this.$router.push(value);
    },
    routeNext: async function () {
      //console.log("routeNext QV: " + JSON.stringify(this.metadata))
      //console.log("finished: " + this.metadata.max_progress+1 === this.metadata.progress)
      //if(this.metadata.max_progress === this.metadata.progress+1) {

        //

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


      //} else {

        /*

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

        const metadata = await createUIElement(nextTask, contentPackage, this.$i18n)
        this.updateView(metadata)

        */

        //var availableProcedures = await getNextAvailableProcedures()
        //console.log(JSON.stringify(availableProcedures))

        //this.updateView(availableProcedures.data)

      //}
    },
    completeQuestionaire: async function () {
      console.log("send questionaire result to backend...")
      this.sendResults(
        false,
        this.elements
      );
    },
    completeAudioNote: async function () {

      try {
        console.log("send audio diary result to backend...\n" + this.result_data);

        var parsedData = await getNextAvailableProcedures();
        console.log("Parsed Data: ", parsedData);

        if (!parsedData.data || parsedData.data.length === 0) {
          console.error("No data available in parsed data");
          return;
        }

        var units = parsedData.data[0].units ? parsedData.data[0].units : parsedData.data[0].activity.units;

        if (!units || units.length === 0) {
          console.error("No units available in parsed data");
          return;
        }

        var lastUnit = units[units.length - 1];
        var contentPackage = lastUnit.contentPackage;

        if (!contentPackage) {
          console.error("Content Package is undefined for the last unit");
          return;
        }

        console.log("Content Package: ", contentPackage);

        var name = contentPackage.name;
        var contentPackageDetails = await api.getContentPackageByName(getUser(), name);
        console.log("Content Package Details: ", contentPackageDetails);

        if (!contentPackageDetails || !contentPackageDetails.resultTemplates || contentPackageDetails.resultTemplates.length === 0) {
          console.error("Result Templates are undefined for the content package");
          return;
        }

        var audio_file = new Audio(this.result_data);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", audio_file.src);
        xhr.responseType = "blob";
        xhr.onload = async () => {
          console.log("Recording audio for Procedure ID: ", parsedData.data[0].id);
          console.log("Recording audio for Unit ID: ", lastUnit.id);
          console.log("Recording audio with Template ID: ", contentPackageDetails.resultTemplates[0].id);

          try {
            await api.postVoiceRecords(
                getUser(),
                parsedData.data[0].id,
                lastUnit.id,
                contentPackageDetails.resultTemplates[0].id,
                xhr.response
            );
            console.log("Audio recorded successfully");
            // Proceed to the next audio recording or finish the process
          } catch (error) {
            console.error("Api.postVoiceRecords Error: ", error);
            console.error("Request Data: ", {
              userId: getUser(),
              procedureId: parsedData.data[0].id,
              unitId: lastUnit.id,
              templateId: contentPackageDetails.resultTemplates[0].id,
              audio: xhr.response
            });
          }
        };
        xhr.send();
      } catch (error) {
        console.error("Error in completeAudioNote: ", error);
      }


      /*
      type c

      api.postVoiceRecords(
        getUser(),
        parsedData.data[0].id,
        units[units.length-1].id,
        contentPackage.resultTemplates[0].id,
        this.result_data
      );
 */

 /*
      console.log(this.result_data)

      var xhr = new XMLHttpRequest();
      xhr.open("GET", this.result_data);
      xhr.responseType = "blob";
      xhr.onload = () => {
        api.postVoiceRecords(
          getUser(),
          parsedData.data[0].id,
          units[units.length-1].id,
          contentPackage.resultTemplates[0].id,
          xhr.response
        );
      };
      xhr.send();
*/


      /*
      this.sendResults(
        false,
        //this.elements,
        this.result_data
      );
      */

      /*
      this.notesStore.addNote({
        text: "Tagebucheintrag " + (this.notesStore.totalNotes + 1),
        date: Date.now(),
        icon: "mdi-volume-high",
        entries: [
          {
            question:
              "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben. Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
            audioPath: this.result_data[0].src,
          },
        ],
      });
      */

      /*
      console.log(
        ">> Test output 'notesStore': " +
          this.notesStore +
          ", " +
          this.notesStore.totalNotes +
          ", " +
          JSON.stringify(this.notesStore.notes)
      );
      */

      // after async finish the view
      var vm = this;
      setTimeout(async function(){
        vm.routeBack("/Dashboard1");
      }, 500)

    },
  },
};
</script>

<style></style>
