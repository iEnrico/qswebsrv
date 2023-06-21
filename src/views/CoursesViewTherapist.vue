<template>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 14%">
        <v-card
          variant="text"
          class="pa-0 ma-0 rounded-lg"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center">
            <v-card-title>Kursübersicht</v-card-title>
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
                  @click:append-inner="onSearch"
                ></v-text-field>
              </v-card-text>
            </v-card>
            <v-btn
              variant="outlined"
              class="mt-0 mr-4"
              @click="
                this.$router.push({
                  name: 'DashboardTherapist4b',
                  params: {
                    data: JSON.stringify({
                      id: 0,
                      edit: false,
                      item: {
                        id: 0,
                        title: 'Neuer Kurs',
                        subtitle: 'Lorem Ipsum 1',
                        description:
                          'Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.',
                        image: require('@/assets/sunshine.jpg'),
                        progress: 0,
                        max_progress: 1,
                        duration: '10 Min.',
                        course_type: 2,
                        elements: [],
                        requirements: [],
                        completed: [],
                      },
                    }),
                  },
                })
              "
            >
              + Neuer Kurs
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="12" style="height: 86%">
        <v-card variant="elevated" class="rounded-lg">
          <v-btn
            class="pl-1 pt-1"
            style="height: 24px"
            variant="text"
            size="medium"
            :icon="
              sortmode == 0
                ? 'mdi-sort-alphabetical-descending'
                : 'mdi-sort-alphabetical-ascending'
            "
            :color="sortmode == 0 || sortmode == 1 ? '#28B9AF' : 'gray'"
            @click="sortmode == 0 ? (sortmode = 1) : (sortmode = 0)"
          ></v-btn>
          <v-btn
            class="pt-1"
            style="height: 24px; width: 16px"
            variant="text"
            size="medium"
            disabled="true"
            icon="mdi-tally-mark-1"
            color="gray"
          ></v-btn>
          <v-btn
            class="pr-1 pt-1"
            style="height: 24px"
            variant="text"
            size="medium"
            :icon="
              sortmode == 3
                ? 'mdi-sort-clock-descending-outline'
                : 'mdi-sort-clock-ascending-outline'
            "
            :color="sortmode == 2 || sortmode == 3 ? '#28B9AF' : 'gray'"
            @click="sortmode == 2 ? (sortmode = 3) : (sortmode = 2)"
          ></v-btn>
          <v-divider class="mt-2 mb-2"></v-divider>
          <CoursesList :searchText="searchText" :sortmode="sortmode" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    loaded: false,
    loading: false,
  }),
  components: { CoursesList },
  mounted: function () {},
  methods: {
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
