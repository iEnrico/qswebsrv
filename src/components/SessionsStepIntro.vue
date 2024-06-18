<template>
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
</template>

<script>

export default {
    name: "SessionsStepIntros",
    data: () => ({
    }),
    props: [ "data", "onBack", "onNext" ],
    components: {
    },
    mounted: function () {
    },
    methods: {
    },
};
</script>

<style></style>
