import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
      users: [{ id: 0, name: 'Eduardo' }],
    }),
    getters: {
      totalUser: (state) => state.users.length,
    },
    actions: {
      
      addUser(item) {
        this.users = [item, ...this.users];
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
          this.users = this.users.filter((user) => user.id !== item.id);
      },
    },
  })
  