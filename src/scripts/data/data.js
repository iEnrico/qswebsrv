// handling data, stores to DB, storage etc.
// does connections to api via api.js
import common from "../common/common.js";
import { Notifications } from "@/types/notification";
import { Sessions } from "@/types/session";
import { SessionQuestions } from "@/types/sessionquestion";
import { Notes } from "@/types/note";
import { NoteEntrys } from "@/types/noteentry";
//import { useCommonStore } from "@/stores/commonStore";
import { Patients } from "@/types/patient";
import { Courses } from "@/types/course";

var data = {
    //store: useCommonStore(),
    getNotesHistory: /*async*/ function () {
      return new Notes([
        {
          text: "Tagebucheintrag 3",
          date: 1674282872000, 
          icon: "mdi-volume-high",
          entries: [
            {
              question: "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben. Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
              audioPath: "audio1.ogg",
            },
            {
              question: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor. ",
              audioPath: "audio2.ogg",
            },
            {
              question: "Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor.",
              audioPath: "audio3.ogg",
            }
          ],
        },
        {
          text: "Tagebucheintrag 2",
          date: 1673482872000,
          icon: "mdi-volume-high",
          entries: [
            {
              question: "Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt.",
              audioPath: "audio1.ogg",
            },
            {
              question: "lorem ipsum 2",
              audioPath: "audio2.ogg",
            },
            {
              question: "lorem ipsum 3",
              audioPath: "audio3.ogg",
            }
          ],
        },
        {
          text: "Tagebucheintrag 1",
          date: 1672464872000,
          icon: "mdi-volume-high",
          entries: [
            {
              question: "lorem ipsum 1",
              audioPath: "audio1.ogg",
            },
            {
              question: "lorem ipsum 2",
              audioPath: "audio2.ogg",
            },
            {
              question: "lorem ipsum 3",
              audioPath: "audio3.ogg",
            }
          ],
        },
      ]).models;
    },
    getNotifications: /*async*/ function () {
      return new Notifications([
          {
              id: 0,
              title: "Kurs verpasst",
              message:
              "Sie haben ihren letzten Kurs verpasst. Bitte kontaktieren sie ihren Therapeuten.",
              hasAction: false,
              link: "",
          },
          {
              id: 1,
              title: "Laufender Kurs",
              message: "Es existiert eine laufende Kursdurchführung.",
              hasAction: true,
              link: this.getSessions()[2],
          },
      ]).models;
    },
    getSessions: /*async*/ function () {
        return new Sessions([
            {
                id: 0,
                date: 1673482872000,
                title: "Initialer Fragebogen",
                subtitle: "Lorem Ipsum 1",
                description:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: require('@/assets/sunshine.jpg'),
                progress: 0,
                max_progress: 1,
                duration: "10 Min.",
                course_type: common.course_type_init,
                elements: [
                  { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                  { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
                ],
                requirements: [],
                completed: [],
            },
            {
                id: 1,
                date: 1673486572000,
                title: "VR-Achtsamkeit",
                subtitle: "Lorem Ipsum 2",
                description:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                progress: 8,
                max_progress: 10,
                duration: "45 Min.",
                course_type: common.course_type_vr,
                elements: [],
                requirements: [
                { text: "VR-Achtsamkeit 1" },
                { text: "VR-Achtsamkeit 2" },
                { text: "VR-Achtsamkeit 3" },
                { text: "VR-Achtsamkeit 4" },
                ],
                completed: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "Fragebogen" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 2" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "Fragebogen" },
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 3" },
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "Fragebogen" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 4" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "Fragebogen" },
                ],
            },
            {
                id: 2,
                date: 1673482812000,
                title: "Web-Achtsamkeit",
                subtitle: "Lorem Ipsum 3",
                description:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                progress: 2,
                max_progress: 3,
                duration: "30 Min.",
                course_type: common.course_type_web,
                elements: [],
                requirements: [{ text: "Web-Achtsamkeit 1" }, { text: "Fragebogen" }],
                completed: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "Web-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "Fragebogen" },
                ],
            },
            {
                id: 3,
                date: 1673481272000,
                title: "Tagebucheintrag",
                subtitle: "Lorem Ipsum 4",
                description:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                progress: 2,
                max_progress: 8,
                duration: "20 Min.",
                course_type: common.course_type_question,
                elements: [],
                requirements: [
                { text: "Objektmeditation (Stein)" },
                { text: "Objektmeditation (Stock)" },
                ],
                completed: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "Tagebucheintrag" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "Tagebucheintrag" },
                ],
            },
            {
                id: 4,
                date: 1673482472000,
                title: "Title",
                subtitle: "Lorem Ipsum 5",
                description:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "",
                progress: 1,
                max_progress: 3,
                duration: "15 Min.",
                course_type: common.course_type_vr,
                elements: [],
                requirements: [
                { text: "Objektmeditation (Stein)" },
                { text: "Objektmeditation (Stock)" },
                ],
                completed: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "Fragebogen" },
                ],
            },
        ]).models;
    },
    getNotesQuestions: /*async*/ function () {
        return new NoteEntrys([
            {
              id: 0,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: true,
              hasSubtext: false,
              list_items: [
                { text: "Regelmäßige Aktivitäten (z.B. Sport)", icon: "mdi-circle-small" },
                { text: "Freizeitaktivitäten (z.B. Kino)", icon: "mdi-circle-small" },
                { text: "Arbeitsbezogene Situationen", icon: "mdi-circle-small" },
              ],
              subtext: "",
            },
            {
              id: 1,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: false,
              hasSubtext: true,
              list_items: [],
              subtext:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
            },
            {
              id: 2,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: false,
              hasSubtext: true,
              list_items: [],
              subtext:
                "Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
            },
          ]).models;
    },
    /*
    Scoring SUS Questionare

    SUS yields a single number representing a composite measure of the overall usability of the
    system being studied. Note that scores for individual items are not meaningful on their own.
    To calculate the SUS score, first sum the score contributions from each item. Each item's
    score contribution will range from 0 to 4. For items 1,3,5,7,and 9 the score contribution is the
    scale position minus 1. For items 2,4,6,8 and 10, the contribution is 5 minus the scale position.
    Multiply the sum of the scores by 2.5 to obtain the overall value of SU.
    SUS scores have a range of 0 to 100.
    
    The following section gives an example of a scored SU scale. 
    */
    getSessionsQuestions: /*async*/ function () {
      return new SessionQuestions([
        {
          question:
            "I think that I would like to use this system frequently",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I found the system unnecessarily complex",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I thought the system was easy to use",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I think that I would need the support of a technical person to be able to use this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I found the various functions in this system were well integrated",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I thought there was too much inconsistency in this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I would imagine that most people would learn to use this system very quickly",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I found the system very cumbersome to use",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        },
        {
          question:
            "I felt very confident using the system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        }, 
        {
          question:
            "I needed to learn a lot of things before I could get going with this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          userRating: 0,
        }, 
        /*
          {
            question:
              "Wie haben sie sich bei der {{VR Umgebung}} gefühlt.",
            hasList: false,
            hasSubtext: true,
            subtext:
            "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
            userRating: 0,
          },
          {
            question:
              "Wie stark haben sie...",
            hasList: false,
            hasSubtext: true,
            list_items: [],
            subtext:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
            userRating: 0,
          },
          {
            question:
              "Haben sie dabei...",
            hasList: false,
            hasSubtext: true,
            list_items: [],
            subtext:
              "Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
            userRating: 0,
          },
        */
        ]).models;
    },
    getCalenderEntries: /*async*/ function () {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        return [
            {
              key: 1,
              customData: {
                title: "Initaler Fragebogen",
                class: common.calendar_entry_color_session,
                type: common.calendar_entry_type_session, 
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 2),
            },
            {
              key: 2,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio, 
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 6),
            },
            {
              key: 3,
              customData: {
                title: "Web Achtsamkeitsübung",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_session,
                type: common.calendar_entry_type_session,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 11),
            },
            {
              key: 4,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio, 
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 11),
            },/*
            {
              key: 5,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio, 
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 11),
            },
            {
              key: 6,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio, 
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 11),
            },*/
            {
              key: 7,
              customData: {
                title: "VR-Achtsamkeit",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_session,
                type: common.calendar_entry_type_session,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 14),
            },
            {
              key: 8,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 19),
            },
            {
              key: 9,
              customData: {
                title: "VR-Achtsamkeit",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_session,
                type: common.calendar_entry_type_session,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 27),
            },
            {
              key: 10,
              customData: {
                title: "Fragebogen",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_session,
                type: common.calendar_entry_type_session,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 22),
            },
            {
              key: 11,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 25),
            },
            {
              key: 12,
              customData: {
                title: "Tagebuchaufnahme",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_audio,
                type: common.calendar_entry_type_audio,
                state: common.calendar_item_state_done,
              },
              dates: new Date(year, month, 30),
            },
            {
              key: 13,
              customData: {
                title: "Therapiegespräch",
                tooltip: "Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                class: common.calendar_entry_color_therapist,
                type: common.calendar_entry_type_therapist,
                state: common.calendar_item_state_done,
              },
              dates: { 
                start: new Date('1/1/2023'), //TODO: define beginning
                monthlyInterval: 1,
                // every second week on tuesday
                ordinalWeekdays: { 2: 3, 4: 3 } 

                // every year, on first month, on second week monday
                //months: 1, ordinalWeekdays: { 2: 2 }

                // from 14th till 18th every day
                //start: new Date(year, month, 14), end: new Date(year, month, 18) 
              },
            },
            { // THIS IS ONLY USED FOR CURRENT DAY!
              
              // An optional key can be used for retrieving this attribute later,
              // and will most likely be derived from your data object
              key: -1,
              // Attribute type definitions
              highlight: {
                style: {
                  background: '#f59e0b',
                },
              },  // Boolean, String, Object
              dot: false,        // Boolean, String, Object
              bar: false,        // Boolean, String, Object
              //content: 'red',   // Boolean, String, Object
              popover: { }, // Only objects allowed
              // Your custom data object for later access, if needed
              customData: { },
              // We also need some dates to know where to display the attribute
              // We use a single date here, but it could also be an array of dates,
              //  a date range or a complex date pattern.
              dates: new Date(),
              // You can optionally provide dates to exclude
              excludeDates: null,
              // Think of `order` like `z-index`
              order: 0
            }
          ];
    },
    getData: async function () {
        try {
/*
            const response = await request("GET", BASE_BACKEND_URL+userEndpoint, null, null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);
                //alert(JSON.stringify(response.data));
                sessionStorage.setItem("user", JSON.stringify(response.data));
            } else {
                console.error(response);
            }*/
        } catch (error) {
/*
            sessionStorage.setItem(
                "user", 
                JSON.stringify({
                    "id": "00000000-0000-0000-0000-000000000000",
                    "firstName": "firstname",
                    "lastName": "lastname",
                    "fullName": "full name",
                    "email": "name@company.domain",
                    "fhirResourceId": null,
                    "roles": [
                        "ADMIN"
                    ],
                    "patients": []
                })
            );
*/
            console.log('Data.getData Error: ', error);
        }
    },
    getPatients: /*async*/ function () {
      return new Patients([
          {
            id: 0,
            text: "Patient 001",
            date: 1673482222000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 1,
            text: "Patient 002",
            date: 1673482872000,
            icon: "mdi-account",
            sessions: [{
              id: 0,
              title: "Initialer Fragebogen",
              subtitle: "Lorem Ipsum 1",
              description:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
            },
            {
              id: 0,
              title: "Initialer Fragebogen 2",
              subtitle: "Lorem Ipsum 1",
              description:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
            },
            {
              id: 0,
              title: "Initialer Fragebogen 2",
              subtitle: "Lorem Ipsum 1",
              description:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
            },
            {
              id: 0,
              title: "Initialer Fragebogen 2",
              subtitle: "Lorem Ipsum 1",
              description:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
            },
            {
              id: 0,
              title: "Initialer Fragebogen 2",
              subtitle: "Lorem Ipsum 1",
              description:
              "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_init,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
            }],
            notes: [{
              id: 0,
              title: "Beispielnachricht",
              text: "Hallo hier ist Patient 001",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht2",
              text: "Hallo hier ist Patient 001",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht3",
              text: "Hallo hier ist Patient 001",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht4",
              text: "Hallo hier ist Patient 001",
              date: 1673482872000,
            },],
          },
      ]).models;
    },
    getCourseOptions: /*async*/ function () {
      return new Courses([
          {
            id: 0,
            text: "Kursoption 1",
            date: 1673482872000,
            icon: "mdi-calendar-check",
          },
          {
            id: 1,
            text: "Kursoption 2",
            date: 1673482872000,
            icon: "mdi-calendar-check",
          },
      ]).models;
    },
    getCourseQuestions: /*async*/ function () {
      return new Courses([
          {
            id: 0,
            text: "Kursfrage 1",
            date: 1673482872000,
            icon: "mdi-calendar-check",
          },
          {
            id: 1,
            text: "Kursfrage 2",
            date: 1673482872000,
            icon: "mdi-calendar-check",
          },
      ]).models;
    },
}

export default data;
