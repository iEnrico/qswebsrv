import { defineStore } from 'pinia'
//import { Notifications } from "@/types/notification";
import data from "@/scripts/data/data"

export const useNotificationStore = defineStore('notifications', {
    state: () => ({
        notifications: data.getNotifications(),
    }),
    getters: {
        getNotifications: (state) => state.notifications,
        totalNotifications: (state) => state.notifications.length,
    },
    actions: {

        addNotification(item) {
            this.notifications = [item, ...this.notifications];
        },
    
        async removeNotification(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.notifications = this.notifications.filter((notification) => notification.id !== item.id);
        },
    },
  })
  