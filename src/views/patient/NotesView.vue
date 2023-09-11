<template>
  <v-card class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="ma-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">Tagebuch</v-card-title>
      <v-btn
        style="height: 24px"
        variant="text"
        size="medium"
        icon="mdi-information-outline"
        color="#28B9AF"
        to="/dashboard3pre"
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
            single-line
            hide-details
            @click:append-inner="onSearch"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn  variant="elevated" style="background-color: #28B9AF;" @click="route('/dashboard3a')" class="mt-0 mr-0">
        <span class="text-white">+ Neuer Eintrag</span>
      </v-btn>
      <!-- 
        
        to="/dashboard3a" 
        
        block variant="elevated" color="#28B9AF"
        -->
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
import NotesHistory from "@/components/notesHistory.vue";
export default {
  name: "NotesView",
  data: () => ({
    searchText: "",
    loaded: false,
    loading: false,
  }),
  props: {},
  components: {
    NotesHistory,
  },
  mounted: function () {},
  methods: {
    route: function (route) {
      this.$router.push(route);
    },
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<style></style>
