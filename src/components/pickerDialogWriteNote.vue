<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <v-btn
          style="height: 24px"
          v-bind="props"
          variant="text"
          size="medium"
          icon="mdi-plus-box-outline"
          :color="0 == 1 ? '#28B9AF' : 'gray'"
          @click="this.data.edit = !this.data.edit"
        ></v-btn>
      </template>
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-text-field
            model-value="Sample Note"
            clearable
            hide-details="auto"
            label="Title"
          ></v-text-field>
          <v-textarea
            class="mt-4"
            name="input-7-1"
            variant="filled"
            label="Message"
            max-rows="32"
            auto-grow
            model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Abbrechen
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Übernehmen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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

<style></style>
