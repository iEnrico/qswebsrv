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
          :color="'gray'"
          @click="this.data.edit = !this.data.edit"
        ></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Kurskatalog</span>
        </v-card-title>
        <CoursesPickList :searchText="searchText" />
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
import CoursesPickList from "@/components/coursepicklist.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { CoursesPickList },
  mounted: function () {},
};
</script>

<style></style>
