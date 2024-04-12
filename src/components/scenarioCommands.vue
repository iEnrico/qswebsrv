<template>
    <v-sheet height="22em" class="overflow-y-auto mb-4"> 
        <v-scroll>
            <v-btn variant="elevated" 
                    style="background-color: #28B9AF;" 
                    height="4em"
                    width="90%" 
                    class="mx-4 mb-2" 
                    v-for="(item, i) in items" 
                    :key="i" 
                    @click="sendCommand(item)">
                <span  style="white-space: normal;" class="text-xs text-white"> {{item.text}} </span>
            </v-btn>
        </v-scroll>
    </v-sheet>
</template>
  
<script>
export default {
    name: "ScenarioCommands",
    data: () => ({
        /*
        items: [ 
            { title: 'Command1' , value: 'com1' }, 
            { title: 'Command2' , value: 'com2' }, 
            { title: 'Command3' , value: 'com3' }, 
            { title: 'Command4' , value: 'com4' }, 
            { title: 'Command5' , value: 'com5' }, 
            { title: 'Command6' , value: 'com6' }, 
            { title: 'Command7' , value: 'com7' }, 
            { title: 'Command8' , value: 'com8' }, 
            { title: 'Command9' , value: 'com9' }, 
        ]
        */
    }),
    props: ["items"],
    computed: {
    },
    components: {},
    mounted: function () {
    },
    unmounted: function () {
    },
    methods: {
        sendCommand: function (item) {
            alert("send synchonous therapist command: " + item.id + ", " + item.text)
        }
    },
};
</script>

<style></style>