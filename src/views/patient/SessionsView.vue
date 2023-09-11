<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="40em"
    >
    <!--
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
    -->
      <v-card class="pa-4 ma-4">
        <v-card-title class="ml-0 pl-2">
          Session Abbrechen?
        </v-card-title>
        <v-card-text class="ml-0 pl-2 mb-4">
          Sie können Ihre bisherigen Eingaben speichern und die Session zu einem weiteren Zeitpunkt fortsetzen. 
        </v-card-text>
        
        <v-switch 
        class="ml-4"
        label="Eingaben speichern"
        color="#28B9AF">
        </v-switch>
        <v-card-actions>
          <v-btn variant="elevated" style="background-color: #E5E5E7;" @click="dialog = false"><span class="text-black">Zurück zur Session</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="this.$router.push('/Dashboard1')"><span class="text-white">Jetzt Abbrechen</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <v-row
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title> {{metadata.title}} </v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
      <!--  append-icon="mdi-account-circle"  -->
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      {{$t("overlay_btn_close")}}
      <!--
      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
      -->
    </v-btn>
  </v-row>
  <v-progress-linear
    :model-value="progress_value"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
  <!-- QUESTION -->
  <v-container
    v-if="this.metadata.course_type == 8"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepIntro v-if="index == 0" :data="metadata.description" :onBack="onBack" :onNext="onNext" />
    <!-- <SessionsStep1 v-if="index == 1" :data="data" :onBack="onBack" :onNext="onNext" /> -->
    <SessionsStepQuestions v-if="index == 1" :data="metadata" :questions="sample_quest2" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!-- QUESTION -->
  <v-container
    v-if="this.metadata.course_type == 0"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepIntro v-if="index == 0" :data="metadata.description" :onBack="onBack" :onNext="onNext" />
    <!-- <SessionsStep1 v-if="index == 1" :data="data" :onBack="onBack" :onNext="onNext" /> -->
    <SessionsStepQuestions v-if="index == 1" :data="metadata" :questions="bdi2_quest" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!-- QUESTION -->
  <v-container
    v-if="this.metadata.course_type == 6"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepIntro v-if="index == 0" :data="metadata.description" :onBack="onBack" :onNext="onNext" />
    <!-- <SessionsStep1 v-if="index == 1" :data="data" :onBack="onBack" :onNext="onNext" /> -->
    <SessionsStepQuestions v-if="index == 1" :data="metadata" :questions="demograph_quest" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!-- QUESTION -->
  <v-container
    v-if="this.metadata.course_type == 7"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepIntro v-if="index == 0" :data="metadata.description" :onBack="onBack" :onNext="onNext" />
    <!-- <SessionsStep1 v-if="index == 1" :data="data" :onBack="onBack" :onNext="onNext" /> -->
    <SessionsStepQuestions v-if="index == 1" :data="metadata" :questions="ffmqd_quest" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!-- WEB -->
  <v-container
    v-if="this.metadata.course_type == 1"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepInfo v-if="index == 0" :data="metadata" :onBack="onBack" :onNext="onNext" />
    <SessionsStepConfig
      v-if="index == 1"
      :data="metadata"
      :onBack="onBack"
      :onNext="onNext"
    />
    <!--
      :setUserConfigType="setUserConfigType"
      :setUserConfigEnv="setUserConfigEnv"
      :user_config="this.user_config"
      
    -->
    <SessionsStepMeditation v-if="index == 2" :user_config="this.user_config" :setProgress="setProgress"/>
    <SessionsStepQuestions v-if="index == 3" :data="metadata" :questions="sample_quest" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!--VR-->
  <v-container
    v-if="this.metadata.course_type == 2"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStepInfo v-if="index == 0" :data="metadata" :onBack="onBack" :onNext="onNext" />
    <SessionsStepConfig
      v-if="index == 1"
      :data="metadata"
      :onBack="onBack"
      :onNext="onNext"
    />
    <!--
      :setUserConfigType="setUserConfigType"
      :setUserConfigEnv="setUserConfigEnv"
      :user_config="this.user_config"
      
    -->
    <SessionsStepVRLogin v-if="index == 2" :data="metadata" :onBack="onBack" :onNext="onNext" />
    <SessionsStepQuestions v-if="index == 3" :data="metadata" :questions="sample_quest2" :onBack="onBack" :onNext="onNext" :setProgress="setProgress" />
  </v-container>
  <!-- VIDEO -->
  <v-container
    v-if="this.metadata.course_type == 5"
    style="min-width: 100%; min-height: 100%; align-items: center;"
    class="mx-0 my-0"
  >
    <!-- fill-width fill-height -->
    <v-row
      class="pa-0 ma-0"
      style="background-color: transparent; justify-content: center; align-items: center"
    >
      <video width="1120" controls >
        <source src="/video/psychodukation.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </v-row>
  </v-container>
  <!-- TAGEBUCH EINTRAG // NOT USED ANYMORE, replaced by notes add view -->
  <!--
  <v-container
    v-if="this.data.course_type == 3"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <NotesViewAdd v-if="index == 1" />
    <SessionsStep4 v-if="index == 2" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
  -->
</template>

<script>
import SessionsStepIntro from "@/components/SessionsStepIntro.vue";
import SessionsStepInfo from "@/components/SessionsStepInfo.vue";
import SessionsStepConfig from "@/components/SessionsStepConfig.vue";
import SessionsStepVRLogin from "@/components/SessionsStepVRLogin.vue";
import SessionsStepQuestions from "@/components/SessionsStepQuestions.vue";
import SessionsStepMeditation from "@/components/SessionsStepMeditation.vue";
//import NotesViewAdd from "@/views/NotesViewAdd1.vue";

//import common from "@/scripts/common/common";
import data from "@/scripts/data/data.js";

export default {
  name: "SessionsView",
  data: () => ({
    index: 0,
    max: 3,
    metadata: {},
    /*
    user_config: {
      session_environment: common.session_environment_early,
      //session_type: common.session_type_meditation,
      session_typeAlternate: common.session_type_meditation,
      session_description:
        "Aivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
      session_difficulty: common.session_difficulty_easy,
    },*/
    progress_value: 0,
    dialog: false,
    sample_quest: null,
    sample_quest2: null,
    ffmqd_quest: null,
    bdi2_quest: null,
    demograph_quest: null,
  }),
  components: {
    SessionsStepIntro,
    SessionsStepInfo,
    SessionsStepConfig,
    SessionsStepVRLogin,
    SessionsStepQuestions,
    SessionsStepMeditation,
    //NotesViewAdd,
  },
  mounted: function () {
    this.metadata = JSON.parse(this.$route.params.data);
    console.log(this.metadata.course_type);

    this.sample_quest = data.getNotesQuestions();
    this.sample_quest2 = data.getSessionsQuestions(); //data.getSessionsQuestionsDebug();
    this.bdi2_quest = data.getSessionsQuestionsBDI2();
    //this.demograph_quest = data.getSessionsQuestionsDemographic();
    this.ffmqd_quest = data.getSessionsQuestionsFFMQD();
    this.demograph_quest = data.getSessionsQuestionsDemographic();
  },
  methods: {
    onClose() {
      this.dialog = true;
      //this.$router.push("/Dashboard1");
    },
    onBack() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.$router.push("/Dashboard1");
      }
    },
    onNext() {
      if (this.index < this.max) {
        this.index++;
      } else {
        //send data
        this.$router.push("/Dashboard1");
      }
    },
    /*
    setUserConfigType(value) {
      this.user_config.session_typeAlternate = value;
      console.log("config type set to: " + value);
    },
    setUserConfigEnv(value) {
      this.user_config.session_environment = value;
      console.log("config env set to: " + value);
    },
    */
    setProgress(value) {
      this.progress_value = value;
    }
  },
};
</script>

<style></style>
