<template>
  <v-row
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title> Ihr Tagebucheintrag vom {{ parseDate(data.date) }}</v-card-title>
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
    :model-value="0"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
  <center>
  <v-card class="pa-8 mx-4 mt-4 mb-4 rounded-lg" variant="elevated" width="80%" >
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12">
        <v-list style="overflow-y: auto">
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
            <ListItemPlayer :elevated="false" :item="item" :index="i" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card></center>
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
    onClose() {
      this.$router.push("/Dashboard3");
    },
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
