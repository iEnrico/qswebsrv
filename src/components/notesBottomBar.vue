<template>
  <v-card
    width="100%"
    height="20%"
    class="card-actions"
    style="position: absolute; bottom: 0"
  >
    <v-row
      no-gutters
      fluid
      class="fill-height"
      align="center"
      justify="center"
      style="background-color: #fff"
    >
      <v-btn
        color="orange-lighten-2"
        variant="text"
        width="15%"
        :onclick="prevStep"
        v-if="question_index < max_elements"
      >
        {{ question_index == 0 ? "Abbrechen" : "Zurück" }}
      </v-btn>

      <v-spacer></v-spacer>

      <VoiceRecorder
        class="pa-0 ma-4"
        :index="question_index"
        :onHasAudio="enableNextStep"
        @item-updated="itemUpdated"
        v-if="question_index < max_elements"
      />

      <v-spacer></v-spacer>

      <v-btn
        :disabled="next_step_disabled"
        color="orange-lighten-2"
        variant="text"
        width="15%"
        :onclick="question_index < max_elements ? nextStep : completeNote"
      >
        {{ question_index < max_elements ? "Nächste Frage" : "Abschliessen" }}
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import VoiceRecorder from "@/components/voiceRecorder.vue";
import { useNotesStore } from "@/stores/notesStore";

export default {
  name: "NotesBottomBar",
  setup() {
    const notesStore = useNotesStore();
    return {
      notesStore,
    };
  },
  data: () => ({
    result_data: [],
    next_step_disabled: true,
  }),
  props: ["question_index", "max_elements", "prevStep", "nextStep", "finish"],
  components: { VoiceRecorder },
  mounted: function () {},
  methods: {
    itemUpdated(value) {
      console.log("parent.itemUpdated: " + value);
      this.result_data = value;
    },
    enableNextStep(value) {
      this.next_step_disabled = value;
    },
    completeNote() {
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
      this.finish();
    },
  },
};
</script>

<style></style>
