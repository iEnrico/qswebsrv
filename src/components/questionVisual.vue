<template>
  <v-card class="pa-4 ma-4 mt-16" fluid style="width: 66%;" v-if="question_index < max_elements">
    <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>

    <!-- 
      RECODE THIS!

      // 0=rating, 1=number select, 2=voice, 3=checkbox select
    -->

    <div v-if="elements[question_index].answerType != 1">
      <!--
      <v-row no-gutters align="start" justify="start" class="mt-2">
        <v-card-title><span class="text-black">{{ elements[question_index].question }}</span></v-card-title>
      </v-row>
      -->

      <v-card-title class="text-wrap text-start" >{{ elements[question_index].question }}</v-card-title>

<!--
      <v-row no-gutters align="start" justify="start">
        <v-card-subtitle class="pa-2 ma-2">
          <span class="text-black">{{ elements[question_index].question }}</span>
        </v-card-subtitle>
      </v-row>
-->

<!--
      <v-col v-if="elements[question_index].hasList" class="pa-0 ma-0">
        <v-card-subtitle align="left" justify="left" class="pa-2 ma-2">{{ elements[question_index].list_headline }}</v-card-subtitle>

        <v-list-item
          style="justify-items: left"
          v-for="(item, i) in elements[question_index].list_items"
          :key="i"
          :value="item"
          active-color="#FFFFFF"
          rounded="xl"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title class="text-wrap"  align="left" justify="left" v-text="item.text"></v-list-item-title>
          <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
        </v-list-item>
      </v-col>
-->

      <v-col v-if="elements[question_index].hasSubtext">
        <v-card-text class="ma-0 pa-0 ml-4 mr-4">
          {{ elements[question_index].subtext }}
        </v-card-text>
      </v-col>
    </div>

    <div v-if="elements[question_index].answerType == 1">
      <v-row no-gutters align="start" justify="start" class="mt-2">
        <v-card-title><span class="text-black">{{ elements[question_index].question }}</span></v-card-title>
      </v-row>
    </div>

    <v-col :cols="12" style="height: 15%" class="mt-4 pt-0">

      <!-- RATING ANSWER -->
      <div v-if="elements[question_index].answerType == 0" class="mt-8 text-center">
        <v-rating
          v-if="question_index < max_elements"
          v-model="elements[question_index].userRating"
          @click="checkNextDisabled()" 
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

      <!-- check boxed select
      <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
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
            <v-row v-for="(item, i) in elements[question_index].list_items" :key="i" no-gutters align="center" justify="start" class="mt-2">
              
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
                <template v-slot:label>
                  <div>{{item.label}}</div>
                </template>
                <v-radio v-for="(element, e) in item.text" :key="e" :label="element" :value="e"></v-radio>
              </v-radio-group>

              <v-text-field
                v-if="item.type == 2"
                :label="item.text"
                v-model="item.value"
                :model-value="item.value"
                :suffix="item.suffix"
              ></v-text-field>
<!-- type="number" -->

              <v-combobox
                v-if="item.type == 3"
                :label="item.label"
                v-model="item.value"
                :items="item.text"
              ></v-combobox>

 <!--
              <v-slider
                v-if="item.type == 4"
                v-model="item.value"
                thumb-label="always"
              >
                <template v-slot:thumb-label="{ modelValue }">
                  {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
                </template>
              </v-slider>
-->

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
          <span class="text-black">&lt; Zurück</span>
          </v-btn>
          <v-spacer></v-spacer>
          <!--
:disabled="next_step_disabled"
next_step_disabled ? 'background-color: #DDD;' : 
            -->
          <v-btn
            variant="elevated" :style="'background-color: #28B9AF;'"
            @click="nextStep()"
            class="ml-0"
          >
          <span class="text-white">{{ question_index < max_elements ? "Weiter >" : "Fertig" }}</span>
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
       <!-- 
        mdi-check-circle-outline 
        mdi-checkbox-marked-circle-outline
       --> 
      </v-row>
      <v-row align="center" justify="center">
        <v-card-title style="font-size: 2em">Vielen Dank!</v-card-title>
      </v-row>
      <v-row align="center" justify="center">
        <v-card-text style="font-size: 0.8em">
        Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.
        </v-card-text>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
              variant="elevated" style="background-color: #28B9AF;"
              @click="nextStep()"
              class="ml-0 mr-0 mt-8 mb-4"
            >
            <!-- TODO: add storing of questionaries too! -->
            <span class="text-white">Speichern und Abschliessen</span>
            </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

//import data from "@/scripts/data/data.js";
import VoiceRecorder from "@/components/voiceRecorder.vue";
import { useNotesStore } from "@/stores/notesStore";
//import api from "@/scripts/api/api";

export default {
  name: "QuestionVisual",
  setup() {
    const notesStore = useNotesStore();
    return {
      notesStore,
    };
  },
  data: () => ({
    colors: ["#dc2626", "#d97706", "#a8a29e", "#10b981", "#65a30d"],
    labels: ["bad", "so so", "ok", "good", "great"],
    question_index: 0,
    max_elements: 0,
    next_step_disabled: true,
    elements: null,
    result_data: [],
    satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
    tickLabels: {
          0: 'Nie ode sehr selten zutreffend',
          1: 'Selten zutreffend',
          2: 'Manchmal zutreffend',
          3: 'Oft zutreffend',
          4: 'Sehr oft oder immer zutreffend'
        },
  }),
  props: ["setProgress" /*"question_index", "max_elements"*/, "data", "sendResults"],
  components: {VoiceRecorder},
  mounted: function () {
    this.elements = this.data;
    this.max_elements = this.data.length;
  },
  methods: {
    checkNextDisabled() {
      if ( this.question_index < this.elements.length ) {
        if (this.elements[this.question_index].answerType == 2) {
          this.next_step_disabled = this.result_data.length == this.question_index;
        } else {
          this.next_step_disabled = this.elements[this.question_index] && this.elements[this.question_index].userRating === -1 
        }
      }
      console.log("disabled: " + this.next_step_disabled)
    },
    setSelection(index) {
      this.elements[this.question_index].userRating = index;
      this.checkNextDisabled();
      //alert(index);
    },
    itemUpdated(value) {
      console.log("parent.itemUpdated: " + value);
      this.result_data = value;
      console.log("audios recorded: " + this.result_data.length)
      this.checkNextDisabled();
    },
    enableNextStep(value) {
      console.log("parent.enableNextStep: " + value);
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
    nextStep() {
      if (this.question_index < this.max_elements) {
        this.question_index++;
        this.checkNextDisabled();
      }
      else if (this.elements[0].answerType == 2) {
        if (this.result_data.length > 0) {
          this.completeAudioNote();
        } else {
          this.routeBack("/dashboard1");
        }
      } 
      else {
        this.completeQuestionaire();
        this.routeBack("/dashboard1");
      }
      this.setProgress((100/this.max_elements)*this.question_index);
    },
    routeBack: function (value) {
      this.$router.push(value);
    },
    completeQuestionaire() {
      /*
      alert(
        "done!\n"+"questionaire results\n" + 
        this.elements[0].userRating + "\n" + 
        this.elements[1].userRating + "\n" + 
        this.elements[2].userRating + "\n" 
      )
      */
      this.sendResults(this.elements);
    },
    completeAudioNote() {

      //alert("done!\n"+this.result_data)
      
      console.log("create new entry in notes store:\n");
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
          {
            question:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor. ",
            audioPath: this.result_data[1].src,
          },
          {
            question:
              "Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor.",
            audioPath: this.result_data[2].src,
          },
        ],
      });
      
      console.log(
        ">> Test output 'notesStore': " +
          this.notesStore +
          ", " +
          this.notesStore.totalNotes +
          ", " +
          JSON.stringify(this.notesStore.notes)
      );
      
      // after async finish the view
      this.routeBack("/Dashboard3");
    },
  },
};
</script>

<style></style>
