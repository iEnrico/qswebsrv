<template>
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <!--
        <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
          <span style="color: #28B9AF">hinzufügen</span>
        </v-btn>
        @click="route('/dashboard3a')"
        -->
        <v-btn v-bind="props" variant="elevated" style="background-color: #28B9AF;" class="mt-0 mr-0">
          <span class="text-white">+ Patient hinzufügen</span>
        </v-btn>
      </template>
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
            <span style="color: #000">{{ "Patient erstellen" }}</span>
          </v-card-title>
          <v-text-field
            class="mt-4"
            model-value="Patienten ID"
            clearable
            hide-details="auto"
            label="Title"
          ></v-text-field>
          <!--
          <v-textarea
            class="mt-4"
            name="input-7-1"
            variant="filled"
            label="Message"
            max-rows="32"
            auto-grow
            model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          -->
        </v-container>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="elevated" @click="dialog = false"><span color="#000">Abbrechen</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="dialog = false"><span class="text-white">Übernehmen</span></v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {},
  mounted: function () {},
};
</script>

<style>
</style>
