import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
import data from "@/scripts/data/data"

export const useNotesStore = defineStore('notes', {
    state: () => ({
        notes: data.getNotesHistory(),
    }),
    getters: {
        getNotes: (state) => state.notes,
        totalNotes: (state) => state.notes.length,
    },
    actions: {

        addNote(item) {
            this.notes = [item, ...this.notes];
        },
    
        async removeNote(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.notes = this.notes.filter((note) => note.id !== item.id);
        },
    },
  })
  