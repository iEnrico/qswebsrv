<template>
    <!--
         v-if="data.course_type != 1 || hasSeenVideo()"
         -->
    <v-row class="pa-0 ma-0 fill-height">
        <v-col :cols="12" class="pa-0 ma-0 fill-height" align="center" justify="center">
            <v-card class="pa-8 mx-4 mt-16 rounded-lg" variant="elevated" width="50%" align-content="start" justify="start">
                <v-card-title style="text-align: left;">Einleitung</v-card-title>
                <v-card-text class="pa-0 mt-8 mb-8 ml-4 mr-4" style="text-align: left;" v-html="data">
                </v-card-text>
                <v-row class="pa-4 ma-0 mb-4" align-content="center" justify="center">
                    <v-btn variant="elevated" color="#28B9AF" @click="onNext()">
                        <span class="text-white">{{ "Jetzt Starten" }}</span>
                    </v-btn>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
    <!--
    <div v-if="data.course_type == 1 && !hasSeenVideo()">
        <v-row
        class="pa-0 ma-0"
        style="background-color: transparent; justify-content: center; align-items: center"
        >
        <video width="1080" controls >
            <source src="/video/psychodukation.m4v" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </v-row>
        <v-row class="pa-4 ma-0 mb-4" align-content="center" justify="center">
            <v-btn variant="elevated" color="#28B9AF" @click="action()">
                <span class="text-white">{{ "Jetzt Starten" }}</span>
            </v-btn>
        </v-row>
    </div>
    -->
</template>

<script>
//import common from "@/scripts/common/common";

export default {
    name: "SessionsStepIntros",
    data: () => ({
        
    }),
    props: [ "data", "onBack", "onNext" ],
    components: {
        
    },
    mounted: function () {
        //alert(!this.hasSeenVideo())
    },
    methods: {
        /*
        hasSeenVideo() {
            return window.sessionStorage.getItem('edu_video_seen') != null;
        },
        action() {
            window.sessionStorage.setItem("edu_video_seen", true);
            this.onNext();
        }
        */
    },
};
</script>

<style></style>
  