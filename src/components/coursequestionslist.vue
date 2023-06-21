<template>
  <div style="height: 100%; position: relative; align-items: center">
    <v-card-text
      v-if="!items.length > 0"
      style="
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        text-align: center;
        padding: 4em;
      "
    >
      Sie haben noch keine Fragebögen hinterlegt.
    </v-card-text>

    <v-list
      color="#FFFFFF"
      class="mt-0 pt-0"
      style="
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        background-color: transparent;
        overflow-y: auto;
      "
    >
      <draggable
        :group="{ name: 'people', pull: 'clone', put: false }"
        class="dragArea list-group w-full"
        :list="items"
        @change="changed"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <ListItemCourseQuestion
          :item="item"
          :index="i"
          v-for="(item, i) in items"
          :key="i"
        />
      </draggable>
    </v-list>
  </div>
</template>

<script>
import ListItemCourseQuestion from "@/components/listItemCourseQuestion.vue";
import { useTherapistCourseStore } from "@/stores/therapistCourseStore";
import { Courses } from "@/types/course";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "CoursesQuestionList",
  setup() {
    const courseStore = useTherapistCourseStore();
    return {
      courseStore,
    };
  },
  data: () => ({
    items: [],
    isDragging: false,
  }),
  props: ["searchText"],
  watch: {
    searchText: function () {
      console.log(this.searchText);
      this.items = new Courses(
        this.courseStore.getCourseQuestions.filter(
          (course) => course.text.search(this.searchText) === 0
        )
      ).models;
    },
  },
  components: { ListItemCourseQuestion, draggable: VueDraggableNext },
  mounted: function () {
    console.log(new Courses(this.courseStore.getCourseQuestions).models);
    this.items = new Courses(this.courseStore.getCourseQuestions).models;
  },
  methods: {
    changed() {
      console.log("CoursesQuestionList.changed()");
    },
  },
};
</script>

<style></style>
