<template>
  <v-card hover height="100%" class="pa-0 ma-0 rounded-lg">
    <v-card hover height="80%" class="pa-0 ma-0 rounded-lg">
      <v-card-title v-if="question_index < max_elements"
        >Neuer Tagebucheintrag</v-card-title
      >
      <v-card-subtitle v-if="question_index < max_elements" class="pa-2 ma-2"
        >Bitte antworten Sie im folgenden möglichst ausfühlich und detailreich auf die
        Frage(n).</v-card-subtitle
      >
      <QuestionVisual
        :question_index="question_index"
        :max_elements="max_elements"
        :elements="elements"
      />
      <v-row align="end" justify="end" v-if="question_index < max_elements && 0 == 1">
        <v-card-subtitle>{{ question_index + 1 }} / {{ max_elements }}</v-card-subtitle>
      </v-row>
    </v-card>
    <NotesBottomBar
      :question_index="question_index"
      :max_elements="max_elements"
      :prevStep="prevStep"
      :nextStep="nextStep"
      :finish="finish"
    />
  </v-card>
</template>

<script>
import NotesBottomBar from "@/components/notesBottomBar.vue";
import QuestionVisual from "@/components/questionVisual.vue";
import data from "@/scripts/data/data.js";

export default {
  name: "NotesAddView1",
  data: () => ({
    question_index: 0,
    max_elements: data.getNotesQuestions().length,
    next_step_disabled: true,
    elements: data.getNotesQuestions(),
  }),
  props: {},
  components: { NotesBottomBar, QuestionVisual },
  mounted: function () {},
  methods: {
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
    routeBack: function () {
      this.$router.push("/dashboard3");
    },
  },
};
</script>

<style></style>
