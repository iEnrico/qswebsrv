import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
import data from "@/scripts/data/data"

export const usePatientsStore = defineStore('patients', {
    state: () => ({
        patients: data.getPatients(),
    }),
    getters: {
        getPatients: (state) => state.patients,
        totalPatients: (state) => state.patients.length,
    },
    actions: {

        addPatient(item) {
            this.patients = [item, ...this.patients];
        },
    
        async removePatient(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.patients = this.patients.filter((patient) => patient.id !== item.id);
        },

        async replacePatient(item) {
            this.removePatient(item)
            this.addPatient(item)
        }
    },
  })
  