<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="40em"
    >
    <!--
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
    -->
      <v-card class="pa-4 ma-4">
        <v-card-title class="ml-0 pl-2">
          Session Abbrechen?
        </v-card-title>
        <v-card-text class="ml-0 pl-2 mb-4">
          Sie können Ihre bisherigen Eingaben speichern und die Session zu einem weiteren Zeitpunkt fortsetzen. 
        </v-card-text>
        
        <v-switch 
        class="ml-4"
        label="Eingaben speichern"
        color="#28B9AF">
        </v-switch>
        <v-card-actions>
          <v-btn variant="elevated" style="background-color: #E5E5E7;" @click="dialog = false"><span class="text-black">Zurück zur Session</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="this.$router.push('/Dashboard3')"><span class="text-white">Jetzt Abbrechen</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <v-row
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title> Neuer Tagebucheintrag </v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
      <!--  append-icon="mdi-account-circle"  -->
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      {{$t("overlay_btn_close")}}
      <!--
      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
      -->
    </v-btn>
  </v-row>
  <v-progress-linear
    :model-value="progress_value"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
  <v-card hover height="100%" align="center" class="pa-0 ma-0 rounded-lg">
    <v-card hover height="90%" width="100%" class="pa-0 ma-0 rounded-lg">
      <!--<v-card-title v-if="question_index < max_elements"
        >Neuer Tagebucheintrag</v-card-title
      >-->
      
      <QuestionVisual
        class="ma-0 pa-0"
        :data="elements"
        :setProgress="this.setProgress"
      />
      <!--
      <NotesBottomBar
        :question_index="question_index"
        :max_elements="max_elements"
        :prevStep="prevStep"
        :nextStep="nextStep"
        :finish="finish"
      />
      -->
      <v-card-subtitle v-if="question_index < max_elements" class="pa-2 ma-2"
        >Bitte antworten Sie im folgenden möglichst ausfühlich und detailreich auf die
        Frage(n).</v-card-subtitle
      >
      
      <v-row align="end" justify="end" v-if="question_index < max_elements && 0 == 1">
        <v-card-subtitle>{{ question_index + 1 }} / {{ max_elements }}</v-card-subtitle>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
//import NotesBottomBar from "@/components/notesBottomBar.vue";
import QuestionVisual from "@/components/questionVisual.vue";
import data from "@/scripts/data/data.js";

export default {
  name: "NotesAddView1",
  data: () => ({
    dialog: false,
    question_index: 0,
    max_elements: data.getNotesQuestions().length,
    progress_value: 0,
    next_step_disabled: true,
    elements: data.getNotesQuestions(),
  }),
  props: {},
  components: { /*NotesBottomBar,*/ QuestionVisual },
  mounted: function () {},
  methods: {
    onClose() {
      this.dialog = true;
      //this.$router.push("/Dashboard3");
    },
    enableNextStep(value) {
      this.next_step_disabled = value;
    },
    prevStep() {
      if (this.question_index > 0) {
        this.question_index--;
      } else {
        this.routeBack();
      }
    },
    nextStep() {
      if (this.question_index < this.max_elements) {
        this.question_index++;
      }
    },
    finish() {
      console.log("NotesViewAdd.finish(): done");
      this.routeBack();
    },
    setProgress(value) {
      this.progress_value = value;
    },
    routeBack: function () {
      this.$router.push("/dashboard3");
    },
  },
};
</script>

<style></style>
