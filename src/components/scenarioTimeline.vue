<template>

    <!-- 
    <v-col
        cols="6"
        md="4"
    >
        <v-card
            class="pa-2"
            outlined
            tile
        >
        .col-6 .col-md-4
        </v-card>
    </v-col>
    -->

    <!--
    <v-container class="grey lighten-5">

        <v-row v-for="(item, index) in items" :key="index">

            <v-col
                :cols="item.id.includes('intro') ? 12 : 4"
            >
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                {{ item.id }}
                </v-card>
            </v-col>
            
        </v-row>

    </v-container>
    -->

    <v-sheet height="32em" class="pa-4"> 
        <v-timeline 
            density="compact" 
            class="overflow-y-auto"
            style="background-color: rgb(255, 255, 255);"
            align="start"
            side="end"
        >
            <!--v-for="(item, index) in active_items"-->
            <v-timeline-item
                v-for="(item, index) in active_items"
                style="background-color: rgb(255, 255, 255);"
                :key="item?.id"
                dot-color="#e8e8e8"
                icon="mdi-information"
                size="small"
            >
                <v-scroll>
                    
                    <!-- v-if="active_index >= index"
                    
                    <v-row>
 -->
                        <!--
                        <v-alert
                            
                            style="border: 1px; border-color: grey; border-style: solid;"
                            :value="true"
                            :color="item.entry_point == true ? '#cce8cc' : '#e8e8e8'"
                            width="75%"
                        > </v-alert>
                        -->

                        <v-alert
                            
                            :style="'border: 3px; border-color: ' + item?.bordercolor+ '; border-style: solid;'"
                            :value="true"
                            :color="item?.entry_point == true ? '#cce8cc' : item?.action ? '#ffb8b8' : '#e8e8e8'"
                            width="75%"
                        > 
                            
                            <!-- :icon="item.icon" -->

                            <v-row class="pa-0 ma-0">
                                <span style="z-index: 20;"> {{ item?.id }} - {{ item?.text }} </span>
                            </v-row>

                            <!-- color="#28B9AF" -->
                            <v-progress-linear
                                v-if="active_items.length-1 == index"
                                :model-value="progress"
                                :max="100"
                                color="rgba(0, 0, 0, 0.5)"
                                style="position:absolute; z-index: 0;"
                                class="ml-0 mr-0 mt-0 mb-0 fill-height" 
                            />
                            
                            <v-row style="z-index: 1;" class="pa-0 ma-0 mt-4" > <!-- v-if="items.length-1 == index" -->
                                <v-tooltip v-for="(option, index) in item?.successors" :key="index" location="bottom" :text="getNameOfOption(option)">
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            v-bind="props"
                                            color="black"
                                            variant="outlined"
                                            :disabled="!this.nextEnabled"
                                            class="pa-2 ma-0 ml-0 mr-2"
                                            @click="chooseNextElement(option)"
                                        >
                                            {{ option }}
                                        </v-btn>
                                    </template>
                                </v-tooltip>
                            </v-row>

                        </v-alert>
                    
                        <!--
                    </v-row>
                    -->

                </v-scroll>
            </v-timeline-item>
        </v-timeline>

    </v-sheet>

    <v-row class="pa-0 ml-4">
        <v-btn class="mt-4 mb-4 ml-4" v-for="(item, index) in actions" :key="index" @click="chooseAction(item)">
            <span class="text-xs"> {{ item.id }} {{ item.text }} </span>
        </v-btn>
    </v-row>
    
</template>
  
<script>

export default {
    name: "ScenarioTimeline",
    data: () => ({
        active_items: [],
        progress: 0,        // timely progress of current active element
        nextEnabled: false,
    }),
    props: ["items", "actions"],
    computed: {
    },
    components: {},
    watch: {
        items: function () {
            this.active_items.push( this.items[0] )
            console.log(this.active_items)

            //this.testSortItems()
        },
    },
    mounted: function () {
        this.doTimerAnimation()

        
    },
    unmounted: function () {
    },
    methods: {
        getNameOfOption(find) {
            console.log(find)
            return this.items.find(
                (item) => item.id == find
            )?.text
        },  
        chooseNextElement: function (find) {
            if (find == 'finish') {
                alert("session completed!")
            } else {
                this.progress = 0
                this.nextEnabled = false
                this.active_items.push( this.items.find(
                    (item) => item.id == find
                ))
            }
        },
        chooseAction: function (item) {
            alert("action selected: " + item.id + "\n" + item.text)
        },
        doTimerAnimation: function () {
            setTimeout(() => {
                this.progress < 100 ? this.progress++ : this.nextEnabled = true
                this.doTimerAnimation()
            }, 1000);
        },
        doTestAnimation: function () {
            setTimeout(() => {
                this.progress < 100 ? this.progress++ : this.progress = 0
                this.doTestAnimation()
            }, 1000);
        },
        testSortItems: function () {

            let results = [];

/*
            results.push(this.items.filter(
                (item) => !item.id.includes('intro')
            ));
            
            results[0].push(this.items.filter(
                (item) => item.id.startsWith('intro')
            ));
*/

            results.push(this.items.filter(
                (item) => item.id.startsWith('1.')
            ));

            results.push(this.items.filter(
                (item) => item.id.startsWith('2.')
            ));

            results.push(this.items.filter(
                (item) => item.id.startsWith('3.')
            ));

            console.log("items start with: " + JSON.stringify(results))

            console.log("a start with: " + JSON.stringify(results[0]))
            console.log("b start with: " + JSON.stringify(results[1]))
            console.log("c start with: " + JSON.stringify(results[2]))

            console.log("depth of array: " + results.length)
        }
    },
};
</script>

<style></style>