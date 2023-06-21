<template>
  <!-- QUESTION -->
  <v-container
    v-if="this.data.course_type == 0"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <SessionsStep4 v-if="index == 1" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
  <!-- WEB -->
  <v-container
    v-if="this.data.course_type == 1"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <SessionsStep2
      v-if="index == 1"
      :setUserConfigType="setUserConfigType"
      :setUserConfigEnv="setUserConfigEnv"
      :user_config="this.user_config"
      :data="data"
      :onBack="onBack"
      :onNext="onNext"
    />
    <DebugMeditation v-if="index == 2" :user_config="this.user_config" />
    <SessionsStep4 v-if="index == 3" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
  <!--VR-->
  <v-container
    v-if="this.data.course_type == 2"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <SessionsStep2
      v-if="index == 1"
      :setUserConfigType="setUserConfigType"
      :setUserConfigEnv="setUserConfigEnv"
      :user_config="this.user_config"
      :data="data"
      :onBack="onBack"
      :onNext="onNext"
    />
    <SessionsStep3 v-if="index == 2" :data="data" :onBack="onBack" :onNext="onNext" />
    <SessionsStep4 v-if="index == 3" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
  <!-- TAGEBUCH EINTRAG -->
  <v-container
    v-if="this.data.course_type == 3"
    style="min-width: 100%; min-height: 100%"
    class="mx-0 my-0"
  >
    <SessionsStep1 v-if="index == 0" :data="data" :onBack="onBack" :onNext="onNext" />
    <NotesViewAdd v-if="index == 1" />
    <SessionsStep4 v-if="index == 2" :data="data" :onBack="onBack" :onNext="onNext" />
  </v-container>
</template>

<script>
import SessionsStep1 from "@/components/SessionsStep1.vue";
import SessionsStep2 from "@/components/SessionsStep2.vue";
import SessionsStep3 from "@/components/SessionsStep3.vue";
import SessionsStep4 from "@/components/SessionsStep4.vue";

import DebugMeditation from "@/views/DebugMeditationView.vue";
import NotesViewAdd from "@/views/NotesViewAdd1.vue";

import common from "@/scripts/common/common";

export default {
  name: "SessionsView",
  data: () => ({
    index: 0,
    max: 3,
    data: {},
    user_config: {
      session_environment: common.session_environment_early,
      //session_type: common.session_type_meditation,
      session_typeAlternate: common.session_type_meditation,
      session_description:
        "Aivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
      session_difficulty: common.session_difficulty_easy,
    },
  }),
  components: {
    SessionsStep1,
    SessionsStep2,
    SessionsStep3,
    SessionsStep4,
    DebugMeditation,
    NotesViewAdd,
  },
  mounted: function () {
    this.data = JSON.parse(this.$route.params.data);
    console.log(this.data.course_type);
  },
  methods: {
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
    setUserConfigType(value) {
      this.user_config.session_typeAlternate = value;
      console.log("config type set to: " + value);
    },
    setUserConfigEnv(value) {
      this.user_config.session_environment = value;
      console.log("config env set to: " + value);
    },
  },
};
</script>

<style></style>
