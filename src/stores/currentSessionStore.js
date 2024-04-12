import { defineStore } from 'pinia'

export const useCurrentSessionStore = defineStore('currentSession', {
    state: () => ({
      item: "",
    }),
    persist: true,
    getters: {
      getLength: (state) => state.item.length,
      getItem: (state) => state.item,
    },
    actions: {
      
      setItem(item) {
        this.item = item;
      },

    },
  })
  