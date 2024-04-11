<template>
  <v-card class="mx-6 mt-6 rounded-lg" variant="elevated">
    <v-row class="mt-1 mb-2 ml-4 mr-4" style="align-items: center; justify-items: center">
      <v-card-title class="ma-0 pa-0 mr-2">Kursübersicht</v-card-title>
      <v-spacer></v-spacer>
      <v-card class="rounded-lg" variant="text" min-width="400">
        <v-card-text>
          <v-text-field
            v-model="searchText"
            :loading="loading"
            density="compact"
            variant="solo"
            label="Kurs suchen..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            clearable
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-row>
    <v-divider
      class="mb-0 border-opacity-100"
      :thickness="1"
      color="#f22"
    ></v-divider>
    <CoursesList :searchText="searchText" :sortmode="sortmode" />
  </v-card>
</template>

<script>
import CoursesList from "@/components/courselist.vue";
import { useTherapistCourseStore } from "@/stores/therapistCourseStore";

export default {
  name: "CoursesViewTherapist",
  setup() {
    const coursesStore = useTherapistCourseStore();
    return {
      coursesStore,
    };
  },
  data: () => ({
    searchText: "",
    sortmode: 0,
  }),
  components: { CoursesList },
  mounted: function () {},
  methods: {
  },
};
</script>

<style></style>
