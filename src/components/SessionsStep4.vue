<template>
  <v-container fluid class="pa-0 ma-0 fill-height" v-if="1 == 1">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 10%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center" justify="center" class="pb-0">
            <v-container fill-height fluid align="center" justify="center">
              <v-card-title class="ma-2 pa-0 mt-0">Fragebogen</v-card-title>
            </v-container>
          </v-row>
        </v-card>
      </v-col>
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
                :question_index="question_index"
                :max_elements="max_elements"
                :elements="elements"
              />
            </v-container>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="12" style="height: 15%" class="pt-0">
        <div class="text-center">
          <v-rating
            v-if="question_index < max_elements"
            v-model="elements[question_index].userRating"
            :item-labels="labels"
            empty-icon="mdi-circle-outline"
            full-icon="mdi-circle"
            half-icon="mdi-circle-half"
            color="#28B9AF"
            half-increments
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
      </v-col>
      <v-col :cols="9" style="height: 10%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end">
            <v-card-text
              v-if="question_index < max_elements"
              class="ma-2 pa-2 ml-4 mr-4 mt-4"
              >Nach dem Abschluss des Fragebogens können Sie die Sitzung
              abschließen.</v-card-text
            >
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="3" style="height: 10%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end" class="pb-2">
            <v-btn
              v-if="question_index < max_elements"
              color="orange-lighten-2"
              variant="text"
              @click="prevStep()"
              class="ml-2"
            >
              Zurück
            </v-btn>
            <v-btn
              :disabled="
                elements[question_index] && elements[question_index].userRating === 0
              "
              color="orange-lighten-2"
              variant="text"
              @click="nextStep()"
              class="ml-2"
            >
              {{ question_index < max_elements ? "Nächste" : "Fertig" }}
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "@/scripts/data/data.js";
import QuestionVisual from "@/components/questionVisual.vue";
export default {
  name: "SessionsView4",
  data: () => ({
    colors: ["#dc2626", "#d97706", "#a8a29e", "#10b981", "#65a30d"],
    labels: ["bad", "so so", "ok", "good", "great"],
    question_index: 0,
    max_elements: data.getSessionsQuestions().length,
    next_step_disabled: true,
    elements: data.getSessionsQuestions(),
  }),
  props: ["onBack", "onNext"],
  components: { QuestionVisual },
  mounted: function () {},
  methods: {
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
      } else {
        this.routeBack();
      }
    },
    routeBack: function () {
      this.$router.push("/dashboard1");
    },
  },
};
</script>

<style></style>
