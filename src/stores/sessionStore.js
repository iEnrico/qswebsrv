import { defineStore } from 'pinia'
//import { Sessions } from "@/types/session";
import data from "@/scripts/data/data"

export const useSessionStore = defineStore('sessions', {
    state: () => ({
        sessions: data.getSessions(),
    }),
    getters: {
        getOpenSessions: (state) => state.sessions.filter((session) => session.progress !== session.max_progress),
        getSessions: (state) => state.sessions,
        totalSessions: (state) => state.sessions.length,
    },
    actions: {

        addSession(item) {
            this.sessions = [item, ...this.sessions];
        },
    
        async removeSession(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.sessions = this.sessions.filter((session) => session.id !== item.id);
        },
    },
  })
  