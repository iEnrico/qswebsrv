import { defineStore } from 'pinia'
//import { Notes } from "@/types/note";
import data from "@/scripts/data/data"

export const useTherapistCourseStore = defineStore('therapistCourses', {
    state: () => ({
        options: data.getCourseOptions(),
        questions: data.getCourseQuestions(),
    }),
    getters: {
        getCourseOptions: (state) => state.options,
        totalCourses: (state) => state.options.length,
        getCourseQuestions: (state) => state.questions,
        totalCourseQuestions: (state) => state.questions.length,
    },
    actions: {

        addCourseOptions(item) {
            this.options = [item, ...this.options];
        },
    
        async removeCourseOptions(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.options = this.options.filter((option) => option.id !== item.id);
        },
        
        async replaceCourseOptions(item) {
            this.removeCourseOptions(item)
            this.addCourseOptions(item)
        },
        
        addCourseQuestions(item) {
            this.options = [item, ...this.options];
        },
    
        async removeCourseQuestions(item) {

            // example of an async request
            /*
            const response = await axios.get(
                "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain",
            );
            console.log("received data ", response.data);
            */

            // remove todos
            this.options = this.options.filter((option) => option.id !== item.id);
        },
        
        async replaceCourseQuestions(item) {
            this.removeCourseOptions(item)
            this.addCourseOptions(item)
        }
    },
  })
  