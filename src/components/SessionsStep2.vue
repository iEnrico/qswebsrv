<template>
  <v-row class="pa-0 ma-0 fill-height">
    <!-- LEFT BIG -->
    <v-col :cols="8" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-card-title>Umgebungskonfiguration</v-card-title>
        <v-row class="ml-4 mr-4 mt-0 mb-2">
          <v-container class="pa-0 ma-0" align="start" justify="center">
            <v-row no-gutters>
              <v-col v-for="(item, index) in session_configs" :key="index" :cols="6">
                <v-card
                  class="rounded-lg"
                  max-width="90%"
                  :style="
                    user_config.session_environment != index
                      ? 'border: none;'
                      : 'border: 2px solid red;'
                  "
                  :color="
                    user_config.session_environment != index ? '#FFFFFF' : '#F4D2CA' //'#28B9AF'
                  "
                  @click.stop="onChangeEnv(index)"
                  outlined
                  tile
                >
                  <v-img :src="item.image" height="12em" cover></v-img>

                  <v-card-title>{{
                    getSessionEnvTitle(item.session_environment)
                  }}</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="6"> Übungstyp </v-col>
          <v-col :cols="6"> Schwierigkeit </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="mt-0 pt-0" :cols="6">
            <font color="#888888" size="2"> Objektmeditation </font>
          </v-col>
          <v-col class="mt-0 pt-0" :cols="6">
            <v-rating
              :active-color="getSessionDifficultyColor(user_config.session_difficulty)"
              :color="getSessionDifficultyColor(user_config.session_difficulty)"
              length="3"
              size="small"
              density="compact"
              :model-value="2"
            ></v-rating>
            <!-- hover -->
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="12"> Beschreibung </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col :cols="12"> {{ $t(this.getCourseDescription(0)) }} </v-col>
        </v-row>
      </v-card>
    </v-col>
    <!-- RIGHT SMALL -->
    <v-col :cols="4" class="pa-0 ma-0 fill-height">
      <v-card class="mx-4 mt-0 rounded-lg" variant="elevated">
        <v-row class="pa-0 mx-4 mt-4 mb-2" align-content="start">
          <v-combobox
            class="ml-8 mr-8 font-color=#423412"
            label="Übungstyp"
            :items="options_SessionTypeAlternate"
            v-model="selectedType"
            return-object
          ></v-combobox>
        </v-row>
        <v-row class="pa-0 mx-4 mt-2 mb-4" align-content="center">
          <v-btn block variant="elevated" color="#28B9AF" @click="onNext()"
            ><span class="text-white">
              {{ "Start" }}
            </span></v-btn
          >
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <!--
  <v-container fluid class="pa-0 ma-0 fill-height" v-if="1 == 1">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="6" style="height: 60%">
        <v-card variant="text">
          <v-card-title>Umgebungskonfiguration</v-card-title>
          <v-row class="ml-4 mr-4 mt-0 mb-2">
            <v-container class="pa-0 ma-0" align="center" justify="center">
              <v-row no-gutters>
                <v-col v-for="(item, index) in session_configs" :key="index" :cols="6">
                  <v-card
                    max-width="90%"
                    :color="
                      user_config.session_environment != index ? '#FFFFFF' : '#28B9AF'
                    "
                    @click.stop="onChangeEnv(index)"
                    outlined
                    tile
                  >
                    <v-img :src="item.image" height="12em" cover></v-img>

                    <v-card-title>{{
                      getSessionEnvTitle(item.session_environment)
                    }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-card>
      </v-col>

      <v-col :cols="6" style="height: 60%">
        <v-card-subtitle class="pa-2 ma-2 mt-4">Beschreibung:</v-card-subtitle>
        <v-card-text class="ma-0 pa-0 ml-4 mr-4">{{
          user_config.session_description
        }}</v-card-text>
        <v-card-subtitle class="pa-2 ma-2 mt-4">Schwierigkeit:</v-card-subtitle>
        <v-card-text class="ma-0 pa-0 ml-4 mr-4">{{
          getSessionDifficulty(user_config.session_difficulty)
        }}</v-card-text>
      </v-col>

      <v-col :cols="6" style="height: 40%">
        <v-combobox
          class="ml-8 mr-8 font-color=#423412"
          label="Übungstyp"
          :items="options_SessionTypeAlternate"
          v-model="selectedType"
          return-object
        ></v-combobox>
      </v-col>
      -->
  <!--
      :item-value="options_SessionTypeAlternate[user_config.session_typeAlternate]"
      :item-text="options_SessionTypeAlternate[user_config.session_typeAlternate]"
          :model-value="options_SessionTypeAlternate[user_config.session_typeAlternate]"
               
      -->
  <!--
      <v-col :cols="6" style="height: 40%">
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
              Weiter
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>-->
</template>

<script>
import common from "@/scripts/common/common";
export default {
  name: "SessionsStep2",
  data: () => ({
    options_SessionEnv: [
      { id: 0, label: "Morgens" },
      { id: 1, label: "Abends" },
    ],
    //options_SessionType: ["Meditationsübung", "Unbekannt 1", "Unbekannt 2"],
    options_SessionTypeAlternate: [
      "Lupenübung Stein (ca. 9 Minuten)",
      "Lupenübung Stock (ca. 9 Minuten)",
      "Lupenübung Statue (ca. 9 Minuten)",
      "Telefonübung Stein (ca. 6 Minuten)",
      "Telefonübung Stock (ca. 6 Minuten)",
      "Telefonübung Statue (ca. 7 Minuten)",
      "Imaginationsübung Stein (ca. 7 Minuten)",
      "Imaginationsübung Stock (ca. 7 Minuten)",
      "Imaginationsübung Statue (ca. 7 Minuten)",
    ],
    selectedType: null,
    options_SessionDifficulty: [
      { id: 0, label: "Leicht" },
      { id: 1, label: "Ausgeglichen" },
      { id: 2, label: "Herausfordernd" },
    ],
    // current config
    /*
    user_config: {
      session_environment: common.session_environment_early,
      //session_type: common.session_type_meditation,
      session_typeAlternate: common.session_type_meditation,
      session_description:
        "Aivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
      session_difficulty: common.session_difficulty_easy,
    },*/
    // possible configs
    session_configs: [
      {
        session_environment: common.session_environment_early,
        image: require("@/assets/ph1.png"), //"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        session_environment: common.session_environment_late,
        image: require("@/assets/ph2.png"), //"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
    ],
  }),
  watch: {
    selectedType(value /*, oldValue*/) {
      this.onChangeType(value);
    },
  },
  props: [
    "data",
    "user_config",
    "setUserConfigType",
    "setUserConfigEnv",
    "onBack",
    "onNext",
  ],
  components: {},
  mounted: function () {
    this.selectedType = this.options_SessionTypeAlternate[0];
    //console.log(JSON.stringify(this.user_config));
  },
  methods: {
    test() {
      alert(this.user_config.session_type);
    },
    getSessionTypeTitle(index) {
      return this.options_SessionTypeAlternate[index].label;
    },
    getSessionEnvTitle(index) {
      return this.options_SessionEnv[index].label;
    },
    getSessionDifficulty(index) {
      return this.options_SessionDifficulty[index].label;
    },
    getSessionDifficultyColor(index) {
      switch (index) {
        case 0:
          return "green";
        case 1:
          return "orange";
        case 2:
          return "red";
      }
    },
    onChangeType(value) {
      this.setUserConfigType(this.options_SessionTypeAlternate.indexOf(value));
      //alert("type: " + this.user_config.session_typeAlternate);
    },
    onChangeEnv(value) {
      this.setUserConfigEnv(value);
      //alert("type: " + this.user_config.session_typeAlternate);
    },
    getCourseDescription(type) {
      //switch (type) {
      //case 0:
      console.log(type);
      return "session_object_meditation_info_text";
      //case 1:
      //  return "orange";
      //case 2:
      //  return "red";
      //}
    },
  },
};
</script>

<style></style>
