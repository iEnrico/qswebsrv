<template>
  <v-container fluid class="pa-2 ma-0 fill-height">
    <v-row class="pa-4 ma-0 fill-height">
      <!--
      <v-col class="pa-0 ma-0" :cols="12" style="height: 14%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center">
            <v-card-subtitle>{{
              this.data.item.id >= 0
                ? "Kurs erstellen"
                : this.data.edit
                ? "Kurs editieren"
                : "Kurs ansicht"
            }}</v-card-subtitle>
            <v-btn
              style="height: 24px"
              variant="text"
              size="medium"
              icon="mdi-pencil-outline"
              color="#28B9AF"
              @click="this.data.edit = !this.data.edit"
            ></v-btn>
            <v-spacer></v-spacer>

            <v-btn variant="outlined" class="mt-0 mr-4" @click="saveData(this.data.item)">
              Speichern
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      -->
      <v-col class="pa-0 ma-0" :cols="8" >
        <v-text-field
          v-model="this.data.item.title"
          variant="outlined"
          :readonly="!this.data.edit"
          :clearable="this.data.edit"
          hide-details="auto"
          label="Kursname/ID"
        ></v-text-field>
      </v-col>
      <v-col :cols="6" class="pa-1 ma-0" style="height: 76%; overflow: hidden">
        <!-- background-color: greenyellow; -->
        <v-card
          variant="elevated"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-card-subtitle class="pl-2 pt-1 ma-0">{{ "Kursoptionen" }}</v-card-subtitle>
          <CoursesOptionList :searchText="searchText" />
        </v-card>
      </v-col>
      <v-col :cols="6" class="pa-0 ma-0" style="height: 76%">
        <v-col :cols="12" class="pa-1 ma-0" style="height: 50%; overflow: hidden">
          <v-card
            variant="elevated"
            class="pa-0 ma-0"
            style="
              height: 100%;
              background-color: #eceff1;
              display: flex;
              flex-direction: column;
            "
          >
            <v-card-subtitle class="pl-2 pt-1 ma-0">{{
              "Einheitenkatalog"
            }}</v-card-subtitle>
            <CoursesUnitList :searchText="searchText" />
          </v-card>
        </v-col>
        <!-- background-color: darksalmon; -->
        <v-col :cols="12" class="pa-1 ma-0" style="height: 50%; overflow: hidden">
          <v-card
            variant="elevated"
            class="pa-0 ma-0"
            style="
              height: 100%;
              background-color: #eceff1;
              display: flex;
              flex-direction: column;
            "
          >
            <v-card-subtitle class="pl-2 pt-1 ma-0">{{
              "Fragebogenkatalog"
            }}</v-card-subtitle>
            <CourseQuestionsList :searchText="searchText" />
          </v-card> </v-col
        ><!-- background-color: lightsteelblue; -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoursesOptionList from "@/components/courseoptionslist.vue";
import CoursesUnitList from "@/components/courseunitslist.vue";
import CourseQuestionsList from "@/components/coursequestionslist.vue";
export default {
  name: "PatientsViewAddTherapist",
  setup() {},
  data: () => ({
    data: {
      edit: false,
      item: {},
    },
  }),
  props: [
    /*"data"*/
  ],
  components: { CoursesOptionList, CoursesUnitList, CourseQuestionsList },
  mounted: function () {
    this.data = JSON.parse(this.$route.params.data);
    console.log("CoursesViewAdd.mounted.data: " + JSON.stringify(this.data));
  },
  methods: {
    saveData(item) {
      console.log(JSON.stringify(item));
    },
  },
};
</script>

<style></style>
