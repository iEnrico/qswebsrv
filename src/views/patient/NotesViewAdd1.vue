<template>
  <FullscreenNavBarActions :visible='dialog' :abort='onAbort'/>
  <v-row
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title> {{$t("diary_new_recording_entry")}} </v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" @click="this.dialog = true">
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>
      {{$t("overlay_btn_close")}}
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
      <QuestionVisual
        class="ma-0 pa-0"
        :data="elements"
        :setProgress="this.setProgress"
      />
      <v-card-subtitle v-if="question_index < max_elements" class="pa-2 ma-2"
        >{{$t("diary_new_recording_entry_info")}}</v-card-subtitle
      >
    </v-card>
  </v-card>
</template>

<script>
import FullscreenNavBarActions from "@/components/FullscreenNavBarActions.vue";
import QuestionVisual from "@/components/questionVisual.vue";
import data from "@/scripts/data/data.js";

export default {
  name: "NotesAddView1",
  data: () => ({
    dialog: false,
    question_index: 0,
    max_elements: data.getNotesRecordingQuestions().length,
    progress_value: 0,
    next_step_disabled: true,
    elements: data.getNotesRecordingQuestions(),
    //doSave: true,
  }),
  props: {},
  components: { QuestionVisual, FullscreenNavBarActions },
  mounted: function () {},
  methods: {
    onAbort(doSave) {
      if (doSave) {
        //async send data
        this.routeBack()
      }
      this.dialog = false
    },
    onClose() {
      this.dialog = true;
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
    setProgress(value) {
      this.progress_value = value;
    },
    routeBack() {
      this.$router.push("/dashboard3");
    },
  },
};
</script>

<style></style>
