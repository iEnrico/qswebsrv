<template>
    <v-row
      class="pa-0 ma-0"
      style="background-color: white; justify-content: center; align-items: center"
    >
      <v-card-title> {{ session_data.title }} vom {{ parseDate(session_data.date) }}</v-card-title>
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
      :model-value="0"
      :max="100"
      height="3"
      color="#28B9AF"
      class="mr-16"
    ></v-progress-linear>
    <center>
        <v-card class="pa-8 mx-4 mt-4 mb-4 rounded-lg" variant="elevated" width="80%" >
            <v-row class="pa-0 ma-0 fill-height">

                <!-- DIARY VISUAL -->
                <v-col :cols="12" v-if="session_data.course_type == 3" >
                    <v-list style="overflow-y: auto">
                        <v-list-item
                        v-for="(item, i) in result_data.entries"
                        :key="i"
                        class="pa-0 ma-0"
                        align="center"
                        >
                        <VoicePlayer v-if="0 == 1" :audioPath="item.audioPath" />
                        <v-card-title class="ma-0 pa-0 ml-4 mr-4 mb-2">
                            Frage #{{ i + 1 }}</v-card-title
                        >
                        <v-card-text style="width: 60em">{{ item.question }}</v-card-text>
                        <ListItemPlayer :elevated="false" :item="item" :index="i" />
                        </v-list-item>
                    </v-list>
                </v-col>

                <!-- VR -->
                <v-col :cols="12" v-if="session_data.course_type == 2" >
                    <v-card-title style="width: 60em">{{ "VR not available, yet" }}</v-card-title>
                </v-col>

                <!-- WEB -->
                <v-col :cols="12" v-if="session_data.course_type == 1" >
                    <v-card-title style="width: 60em">{{ "WEB not available, yet" }}</v-card-title>
                </v-col>

                <!-- INITAL QUESTIONAIRE VISUAL -->
                <v-col :cols="8" v-if="session_data.course_type == 0" >
                    <v-list style="overflow-y: auto">
                        <v-list-item
                        v-for="(item, i) in result_data"
                        :key="i"
                        min-height="80"
                        max-height="80"
                        class="pa-0 ma-0"
                        align="start"
                        >
                        <!--<VoicePlayer v-if="0 == 1" :audioPath="item.audioPath" />-->
                        <v-card-title align="left" justify="left" class="ma-0 pa-0 ml-4 mr-4 mb-2">
                            Frage #{{ i + 1 }}</v-card-title
                        >
                        <v-card-text align="left" justify="left" style="width: auto">{{ item.question }}</v-card-text>
                        <!--<ListItemPlayer :item="item" :index="i" />-->
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col :cols="4" v-if="session_data.course_type == 0" >
                    <v-list style="overflow-y: auto" >
                        <v-list-item
                        v-for="(item, i) in result_data"
                        :key="i"
                        min-height="80"
                        max-height="80"
                        class="pa-0 ma-0"
                        justify="right"
                        align="right"
                        >
                            <v-btn 
                                v-for="(anwser, i) in item.list_items" 
                                :key="i" 
                                variant="outlined" 
                                :style="(item.userRating == i ? 'background-color: #28B9AF' : 'background-color: #FFF')"
                                width="52px"
                                height="52px"
                                class="mr-2">
                                <span :class="item.userRating == i ? 'text-white' : 'text-black'">{{i}}</span>
                            </v-btn>
                        </v-list-item>

<!--
                        <v-list-item
                        v-for="(item, i) in result_data"
                        :key="i"
                        min-height="80"
                        max-height="80"
                        class="pa-0 ma-0"
                        align="start"
                        >
                        <v-card-text align="left" justify="left" style="width: auto">{{ item.userRating }}</v-card-text>
                        </v-list-item>
-->
                    </v-list>
                </v-col>
                
            </v-row>
            <v-divider :thickness="1" class="border-opacity-100" color="#f22"></v-divider>
            <v-row class="pa-2 ma-2" v-if="session_data.course_type == 0" align="center" justify="center" >
                <v-btn 
                    variant="outlined" 
                    style="background-color: #FFF"
                    class="mr-2">
                    <span class="text-black">{{"Export"}}</span>
                </v-btn>
                <v-spacer></v-spacer>
                <!--
                    width="52px"
                    height="52px"
                    -->
                <v-card-title> {{ "Total Score: " }} {{ summary_score }} </v-card-title>
            </v-row>
        </v-card>
    </center>
</template>

<script>
import VoicePlayer from "@/components/voicePlayer.vue";
import ListItemPlayer from "@/components/listItemPlayer.vue";
import { useNotesStore } from "@/stores/notesStore";
import { Notes } from "@/types/note";
import common from "@/scripts/common/common";
import data from "@/scripts/data/data.js";

export default {
    name: "PatientResultView",
    setup() {
        const notesStore = useNotesStore();
        return {
            notesStore,
        };
    },
    data: () => ({
        session_data: {},
        result_data: {},
        summary_score: 0,
    }),
    props: [
        /*"data"*/
    ],
    components: { VoicePlayer, ListItemPlayer },
    created: function () {
        this.session_data = JSON.parse(this.$route.params.data);
        console.log("created.data: " + JSON.stringify(this.session_data));

        this.loadDataForSession();
    },
    methods: {
        onClose() {
            this.$router.push("/DashboardTherapist3");
        },
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
        loadDataForSession() {
            switch (this.session_data.course_type) {
                case common.course_type_init:
                    this.result_data = data.getSessionsQuestionsBDI2();

                    var summary_score = 0
                    this.result_data.forEach(function (item, index) {
                        item.userRating = (Math.random() * 3) | 0; 
                        console.log("item.userRating" + index + ": " + item.userRating);
                        summary_score += item.userRating;
                    });
                    this.summary_score = summary_score;

                    console.log("loaded data size: " + this.result_data.length);
                    console.log("data: -- " + JSON.stringify(this.result_data))
                    break;
                case common.course_type_web:
                    break;
                case common.course_type_vr:
                    break;
                case common.course_type_question:
                    //this.result_data = data.getSessionsQuestionsBDI2();
                    //console.log("loaded data size: " + this.result_data.length);
                    break;
                case common.course_type_diary:
                    var items = new Notes(this.notesStore.getNotes).models;
                    this.result_data = items[0];
                    break;
                case common.course_type_video:
                    break;
            }
        }
    },
};
</script>

<style></style>
  