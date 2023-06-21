import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
//import data from "@/scripts/data/data"

export const useContentPackagesStore = defineStore('contentPackages', {
    state: () => ({
        contentPackages: [],//data.getPatients(),
    }),
    getters: {
        getContentPackages: (state) => state.contentPackages,
        totalContentPackages: (state) => state.contentPackages.length,
    },
    actions: {

        addContentPackage(item) {
            this.contentPackages = [item, ...this.contentPackages];
        },
    
        async removeContentPackage(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.contentPackages = this.contentPackages.filter((contentPackage) => contentPackage.id !== item.id);
        },

        async replaceContentPackage(item) {
            this.removeContentPackage(item)
            this.addContentPackage(item)
        }
    },
  })
  