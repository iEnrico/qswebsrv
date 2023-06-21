<template>
  <v-row class="pa-0 ma-0 fill-height">
    <!-- LEFT BIG -->
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-img
          :src="data.image ? data.image : require('@/assets/placeholder.png')"
          height="320px"
          cover
        ></v-img>
        <v-card-title> Beschreibung </v-card-title>
        <v-card-text class="pa-0 mt-0 mb-4 ml-4 mr-4">{{ data.description }}</v-card-text>
      </v-card>
    </v-col>
    <!-- RIGHT SMALL -->
    <v-col :cols="4" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Typ </v-col>
          <v-col :cols="6" class="pb-0"> Dauer </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> VR </font>
          </v-col>
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> ca. 15 Minuten </font>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Voraussetzungen </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.requirements"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="center" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6" class="pb-0"> Enthaltene Einheiten </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.completed"
              :key="i"
              class="pa-0 ma-0"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row no-gutters align="start" justify="start" class="ml-4">
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-row>
        <v-row class="pa-0 mx-4 mt-4 mb-4" align-content="center">
          <v-btn block variant="elevated" color="#28B9AF" @click="onNext()"
            ><span class="text-white">
              {{ "Jetzt Durchführen" }}
            </span></v-btn
          >
        </v-row>
      </v-card>

      <v-card class="mx-4 mt-4 rounded-lg" variant="elevated">
        <v-row class="pa-0 ma-0">
          <v-col :cols="6"> Durchgeführte Kurse </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-progress-linear
            :model-value="50"
            :max="100"
            height="5"
            color="#28B9AF"
            class="ml-3 mr-3"
          ></v-progress-linear>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-card-text class="pa-0 mt-0 mb-4 ml-4 mr-4 text-right" style="color: gray">
            2 von 4 Kursen
          </v-card-text>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-list style="overflow-y: auto">
            <v-list-item
              v-for="(item, i) in data.completed"
              :key="i"
              class="pa-0 ma-0 pb-4"
              style="min-height: 32px; padding: 0px 0px"
            >
              <v-row class="pa-0 ma-0 ml-4">
                <font color="#888888" size="2"> 01.01.1960 </font>
              </v-row>
              <v-row class="pa-0 ma-0 ml-4"> Objektmeditation Stein </v-row>
              <v-row class="pa-0 ma-0">
                <v-btn density="compact" variant="text" color="#28B9AF" @click="onNext()">
                  {{ "details" }}
                </v-btn>
                <v-btn density="compact" variant="text" color="#28B9AF" @click="onNext()">
                  {{ "wiederholen" }}
                </v-btn>
              </v-row>
              <!--
              <v-row no-gutters align="start" justify="start" class="ml-4">

              size="small"
              -->

              <!--
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-icon icon="mdi-circle-small"></v-icon>
                </v-list-item>
                <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                  <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>
                </v-list-item>
              -->

              <!--
              </v-row>
              -->
            </v-list-item>
          </v-list>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <!--

  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="8" style="height: 60%">
        <v-card variant="text">
          <v-card-title>{{ data.title }}</v-card-title>
          <v-row class="ml-4 mr-4 mt-0 mb-2">
            <v-flex xs6 class="hidden-sm-and-down">
              <v-img
                :src="data.image ? data.image : require('@/assets/placeholder.png')"
                width="24em"
                style="flex: 0 0 content"
                cover
              ></v-img>
            </v-flex>
            <v-card variant="text" class="ml-4">
              <v-card-title class="pa-2 pb-0 ma-2 mt-4">Voraussetzungen:</v-card-title>
              <v-list style="height: 10em; overflow-y: auto">
                <v-list-item
                  v-for="(item, i) in data.requirements"
                  :key="i"
                  class="pa-0 ma-0"
                  style="min-height: 32px; padding: 0px 0px"
                >
                  <v-row no-gutters align="center" justify="start" class="ml-4">
                    <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                      <v-icon icon="mdi-circle-small"></v-icon>
                    </v-list-item>
                    <v-list-item class="ma-0" style="min-height: 32px; padding: 0px 0px">
                      <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                    </v-list-item>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-card>
          </v-row>
        </v-card>
        <v-card-subtitle class="ph-2 ma-0"
          >Typ: {{ getCourseTypeTitle(data.course_type) }}</v-card-subtitle
        >
        <v-card-subtitle class="ph-2 ma-0">Dauer: {{ data.duration }}</v-card-subtitle>
      </v-col>

      <v-col :cols="4" style="height: 60%">
        <v-card variant="text" class="pa-0 ma-0">
          <CoursesHistory :data="data" />
        </v-card>
      </v-col>

      <v-col :cols="8" style="height: 40%">
        <v-card-subtitle class="pa-2 ma-2 mt-4">Beschreibung:</v-card-subtitle>
        <v-card-text class="ma-0 pa-0 ml-4 mr-4">{{ data.description }}</v-card-text>
      </v-col>

      <v-col :cols="4" style="height: 40%">
        <v-card
          variant="text"
          class="pa-0 ma-0"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="end" justify="end" class="pb-2">
            <v-btn color="orange-lighten-2" variant="text" @click="onBack()" class="ml-2">
              Zurück
            </v-btn>
            <v-btn color="orange-lighten-2" variant="text" @click="onNext()" class="ml-2">
              Durchführen
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  -->
</template>

<script>
//import CoursesHistory from "@/components/coursesHistory.vue";
import common from "@/scripts/common/common";

export default {
  name: "SessionsStep1",
  inheritAttrs: false,
  data: () => ({}),
  props: ["data", "onBack", "onNext"],
  components: {
    /*CoursesHistory*/
  },
  mounted: function () {},
  methods: {
    getCourseTypeTitle(id) {
      switch (id) {
        case common.course_type_init:
          return "Fragebogen";
        case common.course_type_web:
          return "Online";
        case common.course_type_vr:
          return "VR";
        case common.course_type_question:
          return "Fragebogen";
      }
    },
  },
};
</script>

<style></style>
