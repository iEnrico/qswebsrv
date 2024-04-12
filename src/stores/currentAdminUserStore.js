import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('currentAdminUser', {
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
  