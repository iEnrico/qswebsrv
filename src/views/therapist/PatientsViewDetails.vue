<template>
    <v-row class="pa-2 ma-2 fill-height">

      <v-col :cols="4" class="pa-0 ma-0 mt-4" style="height: 38%">
        <v-card variant="elevated" class="pa-2 mx-2 my-0 rounded-lg" style="height: 100%">
          <!--
          <v-text-field
            class="pa-2 ma-2"
            v-model="this.data.item.text"
            :variant="this.data.edit ? 'outlined' : 'plain'"
            :readonly="!this.data.edit"
            :clearable="this.data.edit"
            density="compact"
            hide-details="auto"
            label="Name/ID"
          ></v-text-field>
          -->
          <v-card-title style="font-size: 1.8em" class="pa-0 ma-2">{{ this.data.item.text }}</v-card-title>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "Registriert seit:" }}</v-card-subtitle>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ parseDate(this.data.item.date) }}</v-card-subtitle>
          <!--
          <v-list color="#FFFFFF" class="mt-0 pt-0" style="overflow-y: auto">
            
          </v-list>
          -->
        </v-card>
        <NewsView :showAddButton="true"/>
      </v-col>
      <v-col :cols="8" class="pa-0 ma-0" style="height: 80%">
        <CoursesView :mode="1"/>
        <!--
        <v-card variant="elevated" class="pa-2 mx-2 my-1 rounded-lg" style="height: 100%">
          
          <v-card-title style="font-size: 2em" class="pa-0 ma-2">{{ "Studien-Programm" }}</v-card-title>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "" }}</v-card-subtitle>
          <v-card-subtitle class="pa-0 mx-2 mb-0">{{ "" }}</v-card-subtitle>
          
          <v-list color="#FFFFFF" class="mt-0 pt-0" style="overflow-y: auto">
            
          </v-list>
          
        </v-card>
        -->
      </v-col>

<!--
      <v-col :cols="12" class="pa-2 ma-0" style="height: 14%">
        <v-card variant="elevated" class="pa-0 ma-0 rounded-lg" style="height: 100%">
          <v-card-text class="pa-0 ma-0">
            <v-row class="pa-0 ma-0 fill-height" style="align-items: center">
              <v-text-field
                class="pa-2 ma-2"
                v-model="this.data.item.text"
                :variant="this.data.edit ? 'outlined' : 'plain'"
                :readonly="!this.data.edit"
                :clearable="this.data.edit"
                density="compact"
                hide-details="auto"
                label="Name/ID"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                style="height: 24px"
                variant="text"
                size="medium"
                icon="mdi-pencil-outline"
                :color="this.data.edit ? '#28B9AF' : 'gray'"
                @click="this.data.edit = !this.data.edit"
              ></v-btn>
              <v-btn
                variant="outlined"
                class="mt-0 ml-4 mr-4"
                @click="saveData(this.data.item)"
              >
                Speichern
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card> 
      </v-col>
-->

<!--
      <v-col :cols="3" class="pa-0 ma-0" style="height: 38%">
        <v-card variant="elevated" class="pa-2 mx-2 my-1 rounded-lg" style="height: 100%">
          <v-list color="#FFFFFF" class="mt-0 pt-0" style="overflow-y: auto">
            <v-card-subtitle class="pa-0 ma-0">{{ "Informationen" }}</v-card-subtitle>
          </v-list>
        </v-card>
      </v-col>
-->

<!--
      <v-col :cols="6" class="pa-0 ma-0" style="height: 38%">
        <v-card variant="elevated" class="pa-2 mx-2 my-1 rounded-lg" style="height: 100%">
          <v-list color="#FFFFFF" class="mt-0 pt-0" style="overflow-y: auto">
            <v-card-subtitle class="pa-0 ma-0">{{ "Verlauf" }}</v-card-subtitle>
          </v-list>
        </v-card>
      </v-col>
-->

<!--
      <v-col :cols="3" class="pa-0 ma-0" style="height: 38%">
        <v-card variant="elevated" class="pa-2 ma-2 my-1 rounded-lg" style="height: 100%">
          <v-row align="center" class="pa-0 ma-0 pb-1">
            <v-card-subtitle class="py-0 pl-0">{{ "Notizen" }}</v-card-subtitle>
            <PickerDialogWriteNote />
          </v-row>
          <v-list
            color="#FFFFFF"
            class="mt-0 pt-0"
            style="height: 10em; overflow-y: auto"
          >
            <ListItemCourses
              :item="item"
              :index="i"
              v-for="(item, i) in this.data.item.notes"
              :key="i"
            />
          </v-list>
        </v-card>
      </v-col>
-->

<!--
      <v-col :cols="8" class="pa-2 ma-0" style="height: 48%">
        <v-card variant="elevated" class="pa-0 ma-0 my-2 rounded-lg" style="height: 100%">
          <v-row align="center" class="pa-2 ma-0 pb-1">
            <v-card-subtitle class="py-0 pl-0">{{ "Kurse" }}</v-card-subtitle>
            <pickerDialogSessions />
          </v-row>
          <v-list
            color="#FFFFFF"
            class="mt-0 pt-0"
            style="height: 10em; overflow-y: scroll"
          >
            <ListItemCourses
              :item="item"
              :index="i"
              v-for="(item, i) in this.data.item.sessions"
              :key="i"
            />
          </v-list>
        </v-card>
      </v-col>
-->

<!--
      <v-col :cols="4" class="pa-2 ma-0 my-2" style="height: 48%">
        <div class="text-center section">
          <v-calendar
            class="max-w-full"
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
            :columns="1">
            <template v-slot:day-content="{ day, attributes }">
              <div class="flex flex-col h-full z-10 overflow-hidden">
                <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
                <div class="flex-grow overflow-y-auto overflow-x-auto">
                  <p
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                    :class="getElementStyle(attr)"
                    style="cursor: pointer"
                    @click="onClick(attr)"
                  >
                    <v-icon v-if="!attr.bar && attr.key != -1" small>
                      {{getIconForType(attr.customData.type)}}
                    </v-icon>

                    {{ attr.customData.title }}

                    <v-tooltip
                      v-if="attr.customData.tooltip"
                      activator="parent"
                      location="bottom"
                    >
                      <v-card
                        color="#ffffff"
                        class="pa-0 ma-0 flex"
                        variant="plain"
                        width="20em"
                      >
                        {{ attr.customData.tooltip }}
                      </v-card>
                    </v-tooltip>
                  </p>
                </div>
              </div>
            </template>
          </v-calendar>
        </div>
      </v-col>
-->  

    </v-row>
</template>

<script>
//import ListItemCourses from "@/components/listItemCourses.vue";
import { usePatientsStore } from "@/stores/patientStore";
import { /*Patients,*/ Patient } from "@/types/patient";
//import PickerDialogSessions from "@/components/pickerDialogSessions.vue";
//import PickerDialogWriteNote from "@/components/pickerDialogWriteNote.vue";
import CoursesView from "@/components/coursesOverview.vue";
import NewsView from "@/components/newsListPatient.vue";

export default {
  name: "PatientsViewAddTherapist",
  setup() {
    const patientsStore = usePatientsStore();
    return {
      patientsStore,
    };
  },
  data: () => ({
    data: {
      edit: false,
      item: {},
    },
  }),
  props: [
    /*"data"*/
  ],
  components: { CoursesView, NewsView /*PickerDialogSessions, PickerDialogWriteNote, ListItemCourses*/ },
  mounted: function () {
    this.data = JSON.parse(this.$route.params.data);
    console.log("created.data: " + JSON.stringify(this.data));
  },
  methods: {
    parseDate(timecode) {
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
    saveData(item) {
      console.log(JSON.stringify(item));
      this.patientsStore.replacePatient(new Patient(item));
    },
  },
};
</script>

<style></style>
