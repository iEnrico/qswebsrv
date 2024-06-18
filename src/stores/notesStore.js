import { defineStore } from 'pinia';
import api from "@/scripts/api/api";
import {getUser} from "@/scripts/procedureEngine";
//import { Notes } from "@/types/note";

export const useNotesStore = defineStore('notes', {

    state: () => ({
        notes: [],
        userId: null,
    }),
    getters: {
        getNotes: (state) => state.notes,
        totalNotes: (state) => state.notes.length,
    },
    actions: {
        initializeUser() {
            const user = getUser();
            if (user && user.id) {
                this.userId = user.id;
            } else {
                console.error('UserID not available');
            }
        },

        async loadNotes() {
            if (!this.userId) {
                console.error('UserID not available');
                return;
            }
            try {
                const data = await api.getVoiceRecords(this.userId);
                this.notes = data;
                console.log("aqui las notes", data )
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        },
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
