import { defineStore } from 'pinia'

export const useCurrentPatientStore = defineStore('currentPatient', {
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
  