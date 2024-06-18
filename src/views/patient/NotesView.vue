<template>
  <NotesViewHowTo v-if="!notes_info_seen" :action="action"/>
  <v-card  v-if="notes_info_seen" class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="ma-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">Tagebuch</v-card-title>
      <v-btn
        style="height: 24px"
        variant="text"
        size="medium"
        icon="mdi-information-outline"
        color="#28B9AF"
        @click="showIntro()"
      ></v-btn>
      <v-spacer></v-spacer>
      <v-card class="rounded-lg" variant="text" min-width="400">
        <v-card-text>
          <v-text-field
            v-model="searchText"
            :loading="loading"
            density="compact"
            variant="solo"
            label="Eintrag suchen..."
            append-inner-icon="mdi-magnify"
            clearable
            single-line
            hide-details
          ></v-text-field>
        </v-card-text>
      </v-card>

      <v-btn :class="{'disabled-button': !audioDiaryAvailable}" :disabled="!audioDiaryAvailable" variant="elevated" style="background-color: #28B9AF;" @click="route('/dashboard3a')" class="mt-0 mr-0">
        <span class="text-white">+ Neuer Eintrag</span>
      </v-btn>

    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>
    <NotesHistory :searchText="searchText"/>
  </v-card>
</template>

<script>
import NotesViewHowTo from "@/components/NotesViewHowTo.vue";
import NotesHistory from "@/components/notesHistory.vue";
import api from "@/scripts/api/api";
import {getUser} from "@/scripts/procedureEngine";

export default {
  name: "NotesView",
  data: () => ({
    notes_info_seen: false,
    searchText: "",
    audioDiaryAvailable: false,
    loading: false,
  }),
  props: {},
  components: {
    NotesHistory,
    NotesViewHowTo
  },
  mounted: function () {
    this.notes_info_seen = this.hasSeenIntro()
    this.checkAudioDiaryAvailability();
  },
  methods: {
    route: function (route) {
      this.$router.push(route);
    },
    hasSeenIntro() {
      return window.sessionStorage.getItem('notes_history_seen') != null;
    },
    action() {
      window.sessionStorage.setItem("notes_history_seen", true);
      this.notes_info_seen = true;
    },
    showIntro() {
      this.notes_info_seen = false;
    },
    async checkAudioDiaryAvailability() {
      try {
        const userData = getUser();
        const userId = userData.id;
        if (!userId) {
          throw new Error('User ID not found');
        }
        const response = await api.getAvailableActivitys(userId);
        console.log('Response from API:', response);

        this.audioDiaryAvailable = response.data.some(activity => activity.activity.name === 'audio_diary');

        console.log('audioDiaryAvailable:', this.audioDiaryAvailable);
      } catch (error) {
        console.error('Error fetching care plan units:', error);
      }
    }
  },
};
</script>

<style>
  .disabled-button {
    background-color: grey !important;
    opacity: 0.5;
  }
</style>
