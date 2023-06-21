import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
//import data from "@/scripts/data/data"

export const useCareplanRecordsStore = defineStore('careplanRecords', {
    state: () => ({
        careplanRecords: [],//data.getPatients(),
    }),
    getters: {
        getCareplanRecords: (state) => state.careplanRecords,
        totalCareplanRecords: (state) => state.careplanRecords.length,
    },
    actions: {

        addCareplanRecord(item) {
            this.careplanRecords = [item, ...this.careplanRecords];
        },
    
        async removeCareplanRecord(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.careplanRecords = this.careplanRecords.filter((careplanRecord) => careplanRecord.id !== item.id);
        },

        async replaceCareplanRecord(item) {
            this.removeCareplanRecord(item)
            this.addCareplanRecord(item)
        }
    },
  })
  