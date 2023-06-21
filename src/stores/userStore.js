import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
//import data from "@/scripts/data/data"

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null, //data.getPatients(),
    }),
    getters: {
        getUser: (state) => state.user,
        totalUser: (state) => state.user.length,
    },
    actions: {

        addUser(item) {
            this.user = item;//[item, ...this.careplanRecords];
        },
    
        async removeUser(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.careplanRecords = null;
        },

        async replaceUser(item) {
            this.removeUser(item)
            this.addUser(item)
        }
    },
  })
  