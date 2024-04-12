<template>
    <v-row
      class="pa-0 ma-0"
      style="background-color: white; justify-content: center; align-items: center"
    >
      <v-card-title> {{ name }} vom {{ date }}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
        <!--  append-icon="mdi-account-circle"  -->
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>

        {{$t("overlay_btn_close")}}
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

                <span v-if="this.result_data.length == 0">Results not available</span>

                <!-- DIARY VISUAL -->
                <v-col :cols="12" v-if="session_data.course_type == 3" >
                    <v-list style="overflow-y: auto">
                        <v-list-item
                        v-for="(item, i) in result_data.entries"
                        :key="i"
                        class="pa-0 ma-0"
                        align="center"
                        >
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
                        <v-card-title align="left" justify="left" class="ma-0 pa-0 ml-4 mr-4 mb-2">
                            Frage #{{ i + 1 }}</v-card-title
                        >
                        <v-card-text align="left" justify="left" style="width: auto">{{ item.question }}</v-card-text>
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
                    </v-list>
                </v-col>

                <!--  QUESTIONAIRE VISUAL - 4/8 + 6/6 cols -->
                <v-col :cols="getListElementType(name) == 6 ? 4 : 6" v-if="type == 'QUESTIONNAIRE'" >
                    <v-list style="overflow-y: auto">
                        <v-list-item
                        v-for="(item, i) in result_data"
                        :key="i"
                        min-height="100"
                        max-height="100"
                        class="pa-0 ma-0"
                        align="start"
                        >
                        <v-card-title align="left" justify="left" class="ma-0 pa-0 ml-4 mr-4 mb-2">
                            Frage #{{ i + 1 }}</v-card-title
                        >
                        <v-card-text align="left" justify="left" style="width: auto">
                            {{
                            questions.filter((object) => object.fieldName == item.resultTemplate.fieldName)[0].question
                            }}
                        </v-card-text>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col :cols="getListElementType(name) == 6 ? 8 : 6" v-if="type == 'QUESTIONNAIRE'" >

                    <v-list style="overflow-y: auto" v-if="this.questions.length>0">
                        <v-list-item
                        v-for="(item, i) in result_data"
                        :key="i"
                        min-height="100"
                        max-height="100"
                        class="pa-0 ma-0"
                        justify="right"
                        align="right"
                        >

                            <div v-if="getListElementType(name) == 0">
                                {{ this.questions[i].list_items[item.value].text }} | {{ item.value }}
                            </div>

                            <div v-if="getListElementType(name) == 1">
                                {{ this.questions[i].list_items[0].text[item.value] }} | {{ item.value }}
                            </div>

                            <div v-if="getListElementType(name) == 6">
                                <v-btn
                                    v-for="(image, idx) in getQuestionImagesForIndex(i)"
                                    :key="idx"
                                    variant="outlined"
                                    :style="(item.value-1 == idx ? 'background-color: #28B9AF' : 'background-color: #FFF')"
                                    width="4em"
                                    height="4em"
                                    class="mr-2">
                                        <img class="pa-0 ma-0" style="min-height: 3.5em; min-width: 3.5em;" :src="require('@/assets/'+image)" />
                                </v-btn>
                            </div>

                        </v-list-item>
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
                <v-card-title> {{ "Total Score: " }} {{ summary_score }} </v-card-title>
            </v-row>

        </v-card>
    </center>
</template>

<script>

import ListItemPlayer from "@/components/listItems/listItemPlayer.vue";
import data from "@/scripts/data/data.js";
import { useAdminUnitStore } from "@/stores/currentAdminUnitStore";

export default {
    name: "DetailViewAdminResultsView",
    data: () => ({
        session_data: [],
        questions: [],
        result_data: {},
        type: "",
        name: "",
        date: "",
        summary_score: 0,
    }),
    setup() {
        const adminUnitStore = useAdminUnitStore();
        return {
        adminUnitStore,
        };
    },
    props: [
    ],
    components: { ListItemPlayer },
    mounted: function () {
        this.session_data = this.adminUnitStore.getItem //JSON.parse(this.$route.params.data);
        console.log("created.data: " + JSON.stringify(this.session_data));

        this.loadDataForSession();
    },
    methods: {
        getQuestionImagesForIndex(index) {
            switch (index) {
                case 0:
                    return ["pleasure_1.png","pleasure_2.png","pleasure_3.png","pleasure_4.png","pleasure_5.png","pleasure_6.png","pleasure_7.png","pleasure_8.png","pleasure_9.png"]
                case 1:
                    return ["arousal_1.png","arousal_2.png","arousal_3.png","arousal_4.png","arousal_5.png","arousal_6.png","arousal_7.png","arousal_8.png","arousal_9.png"]
                case 2:
                    return ["dominance_1.png","dominance_2.png","dominance_3.png","dominance_4.png","dominance_5.png","dominance_6.png","dominance_7.png","dominance_8.png","dominance_9.png"]

                default:
                    break;
            }
        },
        onClose() {
            this.$router.go(-1)
        },
        loadDataForSession() {

            console.log(this.session_data.id)

            this.date = this.session_data.item.stopMoment
            this.name = this.session_data.item.activityUnit.contentPackage.name
            this.type = this.session_data.item.activityUnit.contentPackage.type

            this.result_data = this.session_data.results
            console.log("results available: " + this.result_data.length)

            this.getQuestions(this.name)

        },
        getQuestions(name) {
            console.log("questionaire name: "+name)
            switch (name) {
                case "GAD-7":
                    this.questions = data.getSessionsQuestionsGAD7()
                    break;
                case "SAM":
                    this.questions = data.getSessionsQuestionsSAM()
                    break;
                case "BDI-II":
                    this.questions = data.getSessionsQuestionsBDI2()
                    break;
                case "TMS":
                    this.questions = data.getSessionsQuestionsTMS()
                    break;
                case "system_usability_scale":
                    this.questions = data.getSUSQuestions()
                    break;

                default:
                    break;
            }
            //console.log(JSON.stringify(this.questions))
        },
        getListElementType(name) {
            //console.log("error"+name)
           if (name != "system_usability_scale") {
                return this.questions[0].list_items[0].type
           } else {
                return -1
           }
        },
    },
};
</script>

<style></style>
