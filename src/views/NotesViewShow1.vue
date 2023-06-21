<template>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 80%">
        <v-card-title>Ihr Verlauf</v-card-title>
        <v-card-subtitle class="ma-0 pa-0 ml-4 mr-4">
          {{ parseDate(data.date) }}</v-card-subtitle
        >
        <v-divider class="ma-4"></v-divider>

        <v-list style="height: 25em; overflow-y: auto">
          <v-list-item
            v-for="(item, i) in data.entries"
            :key="i"
            class="pa-0 ma-0"
            align="center"
          >
            <VoicePlayer v-if="0 == 1" :audioPath="item.audioPath" />
            <v-card-title class="ma-0 pa-0 ml-4 mr-4 mb-2">
              Frage #{{ i + 1 }}</v-card-title
            >
            <v-card-text style="width: 60em">{{ item.question }}</v-card-text>
            <ListItemPlayer :item="item" :index="i" />
          </v-list-item>
        </v-list>
      </v-col>
      <v-col :cols="12" style="height: 20%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end" class="pb-2">
            <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="routeBack()"
              class="ml-2"
            >
              Zurück
            </v-btn>
            <v-btn
              v-if="0 == 1"
              color="orange-lighten-2"
              variant="text"
              @click="onNext()"
              class="ml-2"
            >
              Durchführen
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VoicePlayer from "@/components/voicePlayer.vue";
import ListItemPlayer from "@/components/listItemPlayer.vue";
export default {
  name: "NotesViewShow1",
  data: () => ({
    data: {
      text: "Titel",
      date: "01.01.1960",
      icon: "mdi-error",
      audioPath: "/",
    },
  }),
  props: [
    /*"data"*/
  ],
  components: { VoicePlayer, ListItemPlayer },
  created: function () {
    this.data = JSON.parse(this.$route.params.data);
    console.log("created.data: " + JSON.stringify(this.data));
  },
  methods: {
    routeBack: function () {
      this.$router.push("/dashboard3");
    },
    parseDate(timecode) {
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
  },
};
</script>

<style></style>
