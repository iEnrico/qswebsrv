import { defineStore } from 'pinia'

export const useCurrentNoteStore = defineStore('currentNote', {
    state: () => ({
      item: "",
    }),
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
  