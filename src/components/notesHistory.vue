<template>
  <v-card class="mx-2 mt-4 rounded-lg" variant="elevated">
    <v-list color="#FFFFFF" class="mt-0" style="height: 24em; overflow-y: auto">
      <v-list-subheader>{{ $t("notes_history_title") }}</v-list-subheader>
      <!--
    <v-list-item
      :color="transparent"
      max-width="24em"
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      active-color="#fff"
      rounded="x0"
    >
    <ListItemPlayer v-if="0 == 1" :item="item" :index="i" />-->
      <ListItemNotes :item="item" :index="i" v-for="(item, i) in items" :key="i" />
      <!--</v-list-item>-->
    </v-list>
  </v-card>
</template>

<script>
//import ListItemPlayer from "@/components/listItemPlayer.vue";
import ListItemNotes from "@/components/listItemNotes.vue";
//import data from "../scripts/data/data.js";
import { useNotesStore } from "@/stores/notesStore";
import { Notes } from "@/types/note";
export default {
  name: "NotesHistory",
  setup() {
    const notesStore = useNotesStore();
    return {
      notesStore,
    };
  },
  data: () => ({
    items: [], //data.getNotesHistory(),
  }),
  props: {},
  components: { /*ListItemPlayer,*/ ListItemNotes },
  mounted: function () {
    console.log(new Notes(this.notesStore.getNotes).models);
    this.items = new Notes(this.notesStore.getNotes).models;
  },
  methods: {},
};
</script>

<style></style>
