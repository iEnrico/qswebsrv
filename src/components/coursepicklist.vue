<template>
  <v-list color="#FFFFFF" class="mt-0 pt-0" style="height: 24em; overflow-y: auto">
    <center style="height: 100%" v-if="!items">
      <v-card-subtitle> Sie haben noch keine Kurse hinterlegt. </v-card-subtitle>
    </center>

    <ListItemCoursesNoAction
      :item="item"
      :index="i"
      v-for="(item, i) in doSort(items, sortmode)"
      :key="i"
    />
  </v-list>
</template>

<script>
import ListItemCoursesNoAction from "@/components/listItems/listItemCoursesNoAction.vue";
import { useSessionStore } from "@/stores/sessionStore";
import { Sessions } from "@/types/session";
export default {
  name: "CoursesPickList",
  setup() {
    const courseStore = useSessionStore();
    return {
      courseStore,
    };
  },
  data: () => ({
    items: null,
  }),
  props: ["searchText", "sortmode"],
  watch: {
    searchText: function () {
      //console.log(this.searchText);
      this.items = new Sessions(
        this.courseStore.getSessions.filter(
          (course) => course.title.toUpperCase().indexOf(this.searchText.toUpperCase()) != -1
        )
      ).models;
    },
  },
  components: { ListItemCoursesNoAction },
  mounted: function () {
    console.log(new Sessions(this.courseStore.getSessions).models);
    this.items = new Sessions(this.courseStore.getSessions).models;
  },
  methods: {
    doSort(array, sortmode) {
      if (array == null) return;
      switch (sortmode) {
        case 0:
          return array.sort((a, b) => a.title.localeCompare(b.title));
        case 1:
          return array.sort((a, b) => b.title.localeCompare(a.title));
        case 2:
          return array.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
        case 3:
          return array.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

        default:
          return array;
      }
    },
  },
};
</script>

<style></style>
