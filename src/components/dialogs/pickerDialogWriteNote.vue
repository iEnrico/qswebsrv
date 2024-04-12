<template>
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
          <span style="color: #28B9AF">hinzufügen</span>
        </v-btn>
      </template>
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
            <span style="color: #000">{{ "Notiz erstellen" }}</span>
          </v-card-title>
          <!--
          <v-text-field
            class="mt-4"
            model-value="Sample Note"
            clearable
            hide-details="auto"
            label="Title"
          ></v-text-field>
          -->
          <v-textarea
            class="mt-4"
            name="input-7-1"
            variant="filled"
            label="Notiz"
            max-rows="32"
            auto-grow
            v-model="text"
          ></v-textarea>
        </v-container>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="elevated" @click="dialog = false"><span color="#000">Abbrechen</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="saveNote"><span class="text-white">Übernehmen</span></v-btn>
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
      text: "" //"The Ambro set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    };
  },
  props: ["addNote"],
  components: {},
  mounted: function () {},
  methods: {
    saveNote: async function () {
      if (this.text != "")
      {this.addNote(this.text)}
      this.dialog = false
    },
  },
};
</script>

<style></style>
