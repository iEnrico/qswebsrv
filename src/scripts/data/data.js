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
    /* 
    Tagebucheinträge 
    */
    getNotesHistory: /*async*/ function () {
      return new Notes([
        {
          text: "Tagebucheintrag 8",
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
          text: "Tagebucheintrag 7",
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
          text: "Tagebucheintrag 6",
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
          text: "Tagebucheintrag 5",
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
          text: "Tagebucheintrag 4",
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
    /* 
    Notifications 
    - NOT USED ANYMORE !! -- replaced by dynamic code 
    */
    getNotifications: /*async*/ function () {
      return new Notifications([
          {
              id: 0,
              type: common.notification_type_1,
              title: "Kurs verpasst",
              message:
              "Sie haben ihren letzten Kurs verpasst. Bitte kontaktieren sie ihren Therapeuten.",
              hasAction: false,
              link: "",
          },
          {
              id: 1,
              type: common.notification_type_2,
              title: "Laufender Kurs",
              message: "Es existiert eine laufende Kursdurchführung.",
              hasAction: true,
              link: this.getSessions()[2],
          },
      ]).models;
    },
    /* 
    Kurse 
    */
    getSessions: /*async*/ function () {
        return new Sessions([
            {
                id: 0,
                date: 1673482872000,
                title: "Initialer Fragebogen",
                subtitle: "Lorem Ipsum 1",
                state: common.session_state_notstarted, // see "session states" in common.js
                description:
                  "Dieser Fragebogen enthält 21 Gruppen von Aussagen.<br/><br/>Bitte lesen Sie jede dieser Gruppen von Aussagen sorgfältig durch und suchen Sie sich dann in jeder Gruppe eine Aussage heraus, die am besten beschreibt, wie Sie sich in den letzten zwei Wochen, einschließlich heute, gefühlt haben. Klicken Sie die Zahl zu der Aussage an, die Sie sich herausgesucht haben. Falls in einer Gruppe mehrere Aussagen gleichermaßen auf Sie zutreffen, wählen Sie die Aussage mit der höheren Zahl.",
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
                state: common.session_state_done, // see "session states" in common.js
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
                state: common.session_state_running, // see "session states" in common.js
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
                  { date: 1673482872000, text: "Kurs Initalialer Fragebogen durchgeführt", type: 0 },
                  { date: 1673482872000, text: "Vom Therapeuten Freigeschaltet", type: 1 },
                ],
            },
            {
                id: 3,
                date: 1673481272000,
                title: "Tagebucheintrag",
                subtitle: "Lorem Ipsum 4",
                state: common.session_state_overdue, // see "session states" in common.js
                description:
                  "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                progress: 2,
                max_progress: 8,
                duration: "20 Min.",
                course_type: common.course_type_diary,
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
                title: "Einleitung Achtsamkeit",
                subtitle: "Lorem Ipsum 5",
                state: common.session_state_notstarted, // see "session states" in common.js
                description:
                  "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "",
                progress: 1,
                max_progress: 3,
                duration: "15 Min.",
                course_type: common.course_type_video,
                elements: [],
                requirements: [
                ],
                completed: [
                ],
            },
            {
              id: 5,
              date: 1673482872000,
              title: "Demographischer Fragebogen",
              subtitle: "Lorem Ipsum 1",
              state: common.session_state_notstarted, // see "session states" in common.js
              description:
                "Lesen Sie bitte zunächst aufmerksam die folgenden Hinweise:<br/><br/>Dieser Fragebogen dient der Erfassung einiger Merkmale zu Ihrer Person, Ihres Sprechverhaltens sowie gesundheitsbezogener Daten, die für die Untersuchung von Relevanz sind. Schreiben Sie Ihren Namen bitte nicht auf diesen Fragebogen.<br/><br/>Alle Daten werden vertraulich behandelt. Auch die Auswertung und Darstellung der erfassten Daten wird anonym erfolgen und zu keiner Zeit die Identifizierung Ihrer Person ermöglichen. Die in diesem Fragebogen abgefragten Informationen helfen uns bei der Interpretation der erhobenen Daten. Es ist daher wichtig, dass Sie die Fragen wahrheitsgemäß beantworten.<br/><br/>Bitte füllen Sie die nachstehenden freien Felder aus bzw. kreuzen Sie die jeweils auf Sie zutreffenden<br/><br/>Antwortalternativen an. Wenn Sie bereits an einer Sitzung teilgenommen und diesen Fragebogen ausgefüllt haben, überspringen Sie bitte die Abschnitte „Angaben zur Person“ und „Sprache und Region“ und füllen Sie den Fragebogen erst ab Seite 2 „Rauch- und Trinkverhalten“ aus.<br/><br/>Bei Fragen können Sie sich jederzeit an die Versuchsleitung wenden.",
              image: require('@/assets/sunshine.jpg'),
              progress: 0,
              max_progress: 1,
              duration: "10 Min.",
              course_type: common.course_type_demographic,
              elements: [
                { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
                { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
              ],
              requirements: [],
              completed: [],
          },
          {
            id: 6,
            date: 1673482872000,
            title: "Five Facet Mindfulness",
            subtitle: "Lorem Ipsum 1",
            state: common.session_state_notstarted, // see "session states" in common.js
            description:
              "currently no description...",
            image: require('@/assets/sunshine.jpg'),
            progress: 0,
            max_progress: 1,
            duration: "10 Min.",
            course_type: common.course_type_ffaf,
            elements: [
              { date: 1673482872000, text: "Objektmeditation (Stein)", type: "VR-Achtsamkeit 1" },
              { date: 1673482872000, text: "Objektmeditation (Stock)", type: "VR-Achtsamkeit 1" }
            ],
            requirements: [],
            completed: [],
        },
        ]).models;
    },
    /*
    Test Questions
    - used for diary audio recordings
    */
    getNotesQuestions: /*async*/ function () {
        return new NoteEntrys([
            {
              id: 0,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: true,
              list_items: [
                { text: "Regelmäßige Aktivitäten (z.B. Sport)", icon: "mdi-circle-small" },
                { text: "Freizeitaktivitäten (z.B. Kino)", icon: "mdi-circle-small" },
                { text: "Arbeitsbezogene Situationen", icon: "mdi-circle-small" },
              ],
              hasSubtext: false,
              subtext: "",
              answerType: 2, // 0=rating, 1=select, 2=voice
              userRating: -1,
            },
            {
              id: 1,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: false,
              list_items: [],
              hasSubtext: true,
              subtext:
                "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
              answerType: 2, // 0=rating, 1=select, 2=voice
              userRating: -1,
            },
            {
              id: 2,
              question:
                "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben.",
              hasList: false,
              list_items: [],
              hasSubtext: true,
              subtext:
                "Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
              answerType: 2, // 0=rating, 1=select, 2=voice
              userRating: -1,
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
          id: 2,
          fieldName: "question_1",
          name: "system-usability-scale",
          question:
            "I think that I would like to use this system frequently",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 3,
          fieldName: "question_2",
          name: "system-usability-scale",
          question:
            "I found the system unnecessarily complex",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 4,
          fieldName: "question_3",
          name: "system-usability-scale",
          question:
            "I thought the system was easy to use",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 5,
          fieldName: "question_4",
          name: "system-usability-scale",
          question:
            "I think that I would need the support of a technical person to be able to use this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 6,
          fieldName: "question_5",
          name: "system-usability-scale",
          question:
            "I found the various functions in this system were well integrated",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 7,
          fieldName: "question_6",
          name: "system-usability-scale",
          question:
            "I thought there was too much inconsistency in this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 8,
          fieldName: "question_7",
          name: "system-usability-scale",
          question:
            "I would imagine that most people would learn to use this system very quickly",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 9,
          fieldName: "question_8",
          name: "system-usability-scale",
          question:
            "I found the system very cumbersome to use",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        },
        {
          id: 10,
          fieldName: "question_9",
          name: "system-usability-scale",
          question:
            "I felt very confident using the system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
        }, 
        {
          id: 11,
          fieldName: "question_10",
          name: "system-usability-scale",
          question:
            "I needed to learn a lot of things before I could get going with this system",
          hasList: false,
          hasSubtext: false,
          subtext:
          "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo.",
          answerType: 0, // 0=rating, 1=select, 2=voice
          userRating: -1,
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
    getSessionsQuestionsFFMQD: function () {
      /*
        FFAF - Five Facet Mindfulness Questionnaire
        (Fünf Facetten der Achtsamkeit Fragebogen)

        list_items-> type:

        0 = single checkbox
        1 = radio group
        2 = text box
        3 = dropdown
      */
      return new SessionQuestions([
        {
          question:
            "Wenn ich gehe, dann nehme ich ganz bewusst wahr, wie sich die Bewegungen meines Körpers anfühlen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich kann meine Gefühle gut in Worte fassen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich kritisiere mich dafür, irrationale oder unangebrachte Gefühle zu haben.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich nehme meine Gefühle und Empfindungen wahr, ohne auf sie reagieren zu müssen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich etwas tue, dann schweifen meine Gedanken ab und ich bin leicht abzulenken.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich dusche oder bade, bin ich mir des Gefühls des Wassers auf meinem Körper bewusst.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Es fällt mir leicht, meine Überzeugung, Meinung und Erwartungen in Worte zu fassen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich achte nicht drauf, was ich tue, da ich tagträume, mir Sorgen mache oder anderweitig abgelenkt bin.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich beobachte meine Gefühle, ohne mich in ihnen zu verlieren.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich sage mir, das ich nicht das fühlen sollte, was ich fühle.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich bemerke, wie Lebensmittel und Getränke meine Gedanken, meine Körperempfindungen und meine Gefühle beeinflussen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Es fällt mir schwer, das, was ich denke, in Worte zu fassen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich bin leicht abgelenkt.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich glaube, dass einige meiner Gedanken unnormal sind, und dass ich nicht so denken sollte.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich achte auf Empfindungen, wie zum Beispiel Wind in meinem Haar oder Sonnenschein auf meinem Gesicht.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich habe Schwierigkeiten, die richtigen Worte zu finden, um meine Gefühle auszudrücken.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich urteile darüber, ob meine Gedanken gut oder schlecht sind.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich finde es schwierig, auf das konzentriert zu bleiben, was im gegenwärtigen Augenblick passiert.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich belastende Gedanken oder Vorstellungen habe, kann ich von diesen Abstand nehmen und bin mir der Gedanken oder Vorstellungen bewusst, ohne dass ich von ihnen überwältigt werde.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich achte auf Geräusche, wie beispielsweise das Ticken von Uhren, Vogelzwitschern oder das Geräusch vorüber fahrender Autos.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "In schwierigen Situationen kann ich innehalten, ohne sofort zu reagieren.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Körperliche Empfindungen sind für mich schwer zu beschreiben, weil mir die richtigen Worte dazu fehlen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Es sieht so aus, als würde ich 'automatisch funktionieren', ohne viel Bewusstsein für das, was ich tue.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich belastende Gedanken oder Vorstellungen habe, beruhige ich mich kurz danach wieder.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich sage mir, dass ich nicht so denken sollte, wie ich denke.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich nehme Gerüche und Düfte der Dinge wahr.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Sogar wenn ich schrecklich verärgert bin, kann ich das in Worte fassen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich hetzte durch Aktivitäten, ohne wirklich aufmerksam für sie zu sein.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich belastende Gedanken oder Vorstellungen habe, kann ich sie einfach nur wahrnehmen, ohne auf sie zu reagieren.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich denke, das manche meiner Gefühle schlecht oder unangebracht sind, und dass ich sie nicht haben sollte.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich bemerke visuelle Elemente sowohl in der Kunst als auch in der Natur, zum Beispiel Farben, Formen, Strukturen oder Muster aus Licht und Schatten.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich habe die natürliche Tendenz, meine Erfahrungen in Worte zu fassen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich belastende Gedanken oder Vorstellungen habe, registriere ich sie nur und lasse sie wieder ziehen.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich erledige Aufträge oder Aufgaben automatisch, ohne mir bewusst zu sein, was ich tue.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wenn ich belastende Gedanken oder Vorstellungen habe, bewerte ich mich selbst entweder als gut oder schlecht, abhängig vom Inhalt des Gedankens/der Vorstellung.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich achte darauf, wie sich meine Gefühle auf meine Gedanken und mein Verhalten auswirken.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich kann ziemlich genau beschreiben, wie ich mich im Moment gerade fühle.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich merke, wie ich Dinge tue, ohne auf sie zu achten.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ich missbillige mich, wenn ich unvernünftige Ideen habe.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Nie ode sehr selten zutreffend","Selten zutreffend","Manchmal zutreffend","Oft zutreffend", "Sehr oft oder immer zutreffend"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
      ]).models;
    },
    getSessionsQuestionsDemographic: function () {
      /*
        list_items-> type:

        0 = single checkbox
        1 = radio group
        2 = text box
        3 = dropdown
      */
      return new SessionQuestions([
        {
          question:
            "Geschlecht",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: ["Männlich","Weiblich","Divers"], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Alter (in Jahren)",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 2, text: "Alter", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Gewicht (in kg)",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 2, text: "Gewicht", value: "", suffix: "kg", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Größe (in m, auf zwei Nachkommastellen gerundet)",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 2, text: "Größe", value: "", suffix: "m", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Höchster Bildungsabschluss",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "ohne Abschluss",
              "Volksschule / Hauptschule",
              "Realschule / mittlerer Schulabschluss",
              "Fachoberschule / Gymnasium / Hochschulreife",
              "Fachhochschule / Universität / sonst. akademische Einrichtung"
            ], value: 0, required: true, },
            /*
            { text: "ohne Abschluss", icon: "mdi-numeric-0-circle-outline" },
            { text: "Volksschule / Hauptschule", icon: "mdi-numeric-0-circle-outline" },
            { text: "Realschule / mittlerer Schulabschluss", icon: "mdi-numeric-0-circle-outline" },
            { text: "Fachoberschule / Gymnasium / Hochschulreife", icon: "mdi-numeric-0-circle-outline" },
            { text: "Fachhochschule / Universität / sonst. akademische Einrichtung", icon: "mdi-numeric-0-circle-outline" },*/
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Zuletzt ausgeübter Beruf/Branchenkenntnisse",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 2, text: "Beruf", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Bitte geben Sie Ihre Muttersprache(n) an",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 2, text: "Sprache", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Meine Grundschulzeit habe ich in folgender Region verbracht",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ruhrgebiet",
              "Rheinland",
              "sonstiges Nordrhein-Westfalen",
            ], value: 0, required: true, },
            { type: 2, text: "andere Regionen", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "In den letzten 20 Jahren habe ich vorwiegend in dieser Region / diesen Regionen gelebt",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ruhrgebiet",
              "Rheinland",
              "sonstiges Nordrhein-Westfalen",
            ], value: 0, required: true, },
            { type: 2, text: "andere Regionen", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Rauchen Sie zurzeit?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, wie viele Zigaretten rauchen Sie durchschnittlich an einem Tag?", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Haben Sie in den letzten 4 Stunden geraucht?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Haben Sie im letzten Jahr aufgehört zu rauchen?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, wann haben Sie aufgehört?", value: "", suffix: "MM/YY", required: true, },
            { type: 2, text: "Falls ja, wie viele Zigaretten haben Sie durchschnittlich an einem Tag geraucht?", value: "", suffix: "Stk.", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wie oft nehmen Sie alkoholische Getränke zu sich?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "nie",
              "etwa 1 mal pro Monat",
              "2-4 mal pro Monat",
              "2-3 mal pro Woche",
              "4 oder öfter pro Woche",
            ], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Haben Sie in den letzten 8 h Alkohol konsumiert?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ist Ihre Sehfähigkeit beeinträchtigt?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 3, label: "Falls ja: ", text: [
              "kurzsichtig",
              "weitsichtig",
              "partielle Blindheit",
            ], value: "", required: true, },
            { type: 3, label: "Sehkorrektur: ", text: [
              "Brille",
              "Kontaktlinsen",
              "nichts",
            ], value: "", required: true, },
            { type: 2, text: "Dpt. links:", value: "", suffix: "", required: true, },
            { type: 2, text: "Dpt. rechts:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Ist Ihre Sprechfähigkeit momentan eingeschränkt oder beeinträchtigt?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, bitte Art der Einschränkung/Beeinträchtigung angeben:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Besteht oder bestand in den letzten 5 Jahren ein Hörschaden oder ist Ihr Gehör in irgendeiner Art und Weise beeinträchtigt?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, bitte Art des Hörschadens/der Beeinträchtigung angeben:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Besteht oder bestand in den letzten 5 Jahren eine Ihnen bekannte Grunderkrankung (z. B. Diabetes mellitus, rheumatische Erkrankungen)?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, bitte Erkrankung(en) angeben:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Besteht oder bestand in den letzten 5 Jahren eine oder mehrere der folgenden psychischen/psychiatrischen Erkrankungen? Bitte kreuzen Sie Zutreffendes an.",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Nein",
              "Posttraumatische Belastungsstörung",
              "Zwangsstörung (Zwangsgedanken und/oder -handlungen)",
              "Schizophrenie",
              "Suchterkrankung",
              "Angststörung",
              "Depression",
              "Klaustrophobie",
              "Prosopagnosie",
            ], value: 0, required: true, },
            { type: 2, text: "Andere:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Wurde bei Ihnen eine neurologische oder neurodegenerative Erkrankung, insbesondere eine Erkrankung des Gleichgewichtsorgans oder -sinns, diagnostiziert?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, bitte Erkrankung(en) angeben:", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Nehmen Sie zurzeit Medikamente ein?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 2, text: "Falls ja, welche Medikamente in welcher Dosierung?", value: "", suffix: "", required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Haben Sie in den letzten 24 Stunden Schmerzmittel zu sich genommen?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Welche der folgenden Aussagen beschreibt am besten Ihr aktuelles Müdigkeitsgefühl?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "äußerst wach",
              "sehr wach",
              "normal wach",
              "ziemlich wach",
              "weder wach noch schläfrig",
              "etwas schläfrig",
              "schläfrig, ohne Mühe wach zu bleiben",
              "schläfrig, etwas Mühe wach zu bleiben",
              "sehr schläfrig, große Mühe wach zu bleiben",
              "äußerst schläfrig, kann nicht wach bleiben",
            ], value: 0, required: true, },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
        {
          question:
            "Sind Sie zurzeit erkältet?",
          list_headline: "Mögliche Antworten:",
          list_items: [
            { type: 1, text: [
              "Ja",
              "Nein",
            ], value: 0, required: true, },
            { type: 1, label: "falls ja:", text: [
              "Husten",
              "Halsschmerzen",
              "Gliederschmerzen",
              "Kopfschmerzen",
              "Schnupfen / zugeschwollene Nase",
            ], value: 0, required: true, },
            /*
            { text: "Ja", icon: "mdi-numeric-0-circle-outline" },
            { text: "Nein", icon: "mdi-numeric-0-circle-outline" },
            { text: "(ja) Husten", icon: "mdi-numeric-0-circle-outline" },
            { text: "(ja) Halsschmerzen", icon: "mdi-numeric-0-circle-outline" },
            { text: "(ja) Gliederschmerzen", icon: "mdi-numeric-0-circle-outline" },
            { text: "(ja) Kopfschmerzen", icon: "mdi-numeric-0-circle-outline" },
            { text: "(ja) Schnupfen / zugeschwollene Nase", icon: "mdi-numeric-0-circle-outline" },*/
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
          userRating: -1,
        },
      ]).models;
    },
    /*
    BDI Questionaire
    - used for inital questionaire
    */
    getSessionsQuestionsBDI2: /*async*/ function () {
      return new SessionQuestions([
        {
          question:
            "Traurigkeit",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich bin nicht traurig", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich bin oft traurig", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich bin ständig traurig", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich bin so traurig oder unglücklich, dass ich es nicht aushalte", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Pessimismus",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich sehe nicht mutlos in die Zukunft", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich sehe mutloser in die Zukunft als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich bin mutlos und erwarte nicht, dass meine Situation besser wird", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich glaube, dass meine Zukunft hoffnungslos ist und nur noch schlechter wird", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Versagensgefühle",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich fühle mich nicht als Versager", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe häufiger Versagensgefühle", icon: "mdi-numeric-1-circle-outline" },
            { text: "Wenn ich zurückblicke, sehe ich eine Menge Fehlschläge", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe das Gefühl, als Mensch ein völliger Versager zu sein", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Verlust von Freude",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich kann die Dinge genauso gut genießen wie früher", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich kann die Dinge nicht mehr so genießen wie früher", icon: "mdi-numeric-1-circle-outline" },
            { text: "Dinge, die mir früher Freude gemacht haben, kann ich kaum mehr genießen", icon: "mdi-numeric-2-circle-outline" },
            { text: "Dinge, die mir früher Freude gemacht haben, kann ich überhaupt nicht mehr genießen", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Schuldgefühle",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich habe keine besonderen Schuldgefühle", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe oft Schuldgefühle wegen Dingen, die ich getan habe oder hätte tun sollen", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich habe die meiste Zeit Schuldgefühle", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe ständig Schuldgefühle", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Bestrafungsgefühle",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich habe nicht das Gefühl, für etwas bestraft zu sein", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe das Gefühl, vielleicht bestraft zu werden", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich erwarte, bestraft zu werden", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe das Gefühl, bestraft zu sein", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Selbstablehnung",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich halte von mir genauso viel wie immer", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe Vertrauen in mich verloren", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich bin von mir enttäuscht", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich lehne mich völlig ab", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Selbstvorwürfe",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich kritisiere oder tadle mich nicht mehr als sonst", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich bin mir gegenüber kritischer als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich kritisiere mich für all meine Mängel", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich gebe mir die Schuld für alles Schlimme, was passiert ist", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Selbstmordgedanken",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich denke nicht daran, mir etwas anzutun", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich denke manchmal an Selbstmord, aber ich würde es nie tun", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich möchte mich am liebsten umbringen", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich würde mich umbringen, wenn ich die Gelegenheit dazu hätte", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Weinen",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich weine nicht öfter als früher", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich weine jetzt mehr als früher", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich weine beim geringsten Anlass", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich möchte gern weinen, aber ich kann nicht", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Unruhe",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich bin nicht unruhiger als sonst", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich bin unruhiger als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich bin so unruhig, dass es mir schwerfällt, still zu sitzen", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich bin so unruhig, dass ich mich ständig bewegen oder etwas tun muss", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Interessenverlust",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich habe das Interesse an anderen Menschen oder an Tätigkeiten nicht verloren", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe weniger Interesse an anderen Menschen oder an Dingen als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich habe das Interesse an anderen Menschen oder Dingen zum größten Teil verloren", icon: "mdi-numeric-2-circle-outline" },
            { text: "Es fällt mir schwer, mich überhaupt für irgendetwas zu interessieren", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Entschlussunfähigkeit",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich bin so entschlussfreudig wie immer", icon: "mdi-numeric-0-circle-outline" },
            { text: "Es fällt mir schwerer als sonst, Entscheidungen zu treffen", icon: "mdi-numeric-1-circle-outline" },
            { text: "Es fällt mir sehr viel schwerer als sonst, Entscheidungen zu treffen.", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe Mühe, überhaupt Entscheidungen zu treffen", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Wertlosigkeit",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich fühle mich nicht wertlos", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich halte mich für weniger wertvoll und nützlich als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Verglichen mit anderen Menschen fühle ich mich viel weniger wert", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich fühle mich völlig wertlos", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Energieverlust",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich habe so viel Energie wie immer", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich habe weniger Energie als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich habe so wenig Energie, dass ich kaum noch etwas schaffe", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe keine Energie mehr, um überhaupt noch etwas zu tun", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Veränderungen der Schlafgewohnheiten",
          hasList: true,
          list_headline: "Mögliche Antworten: (ACHTUNG! BITTE KONTROLLIEREN!)",
          list_items: [
            { text: "Ich schlafe etwas [mehr/weniger] als sonst", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich schlafe viel [mehr/weniger] als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich schlafe fast [den ganzen Tag/wache 1-2 Stunden früher auf als gewöhnlich und kann dann nicht mehr einschlafen]", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich hab keine Energie mehr, um überhaupt noch etwas zu tun", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Reizbarkeit",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich bin nicht reizbarer als sonst", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich bin reizbarer als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich bin viel Reizbarer als sonst", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich fühle mich dauernd gereizt", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Veränderungen des Appetits",
          hasList: true,
          list_headline: "Mögliche Antworten: (ACHTUNG! BITTE KONTROLLIEREN!)",
          list_items: [
            { text: "Mein Appetit hat sich nicht verändert", icon: "mdi-numeric-0-circle-outline" },
            { text: "Mein Appetit ist etwas [schlechter/größer] als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Mein Appetit ist viel [schlechter/größer] als sonst", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe [überhaupt keinen Appetit/ständig Heißhunger]", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Konzentrationsschwierigkeiten",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich kann mich so gut konzentrieren wie immer", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich kann mich nicht mehr so gut konzentrieren wie sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Es fällt mir schwer, mich längere Zeit auf irgendetwas zu konzentrieren", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich kann mich überhaupt nicht mehr konzentrieren", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Ermüdung oder Erschöpfung",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Ich fühle mich nicht müder oder erschöpfter als sonst", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich werde schneller müde oder erschöpft als sonst", icon: "mdi-numeric-1-circle-outline" },
            { text: "Für viele Dinge, die ich üblicherweise tue, bin ich zu müde oder erschöpft", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich bin so müde und erschöpft, dass ich fast nichts mehr tun kann", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
        },
        {
          question:
            "Verlust an sexuellem Interesse",
          hasList: true,
          list_headline: "Mögliche Antworten:",
          list_items: [
            { text: "Mein Interesse an Sexualität hat sich in letzter Zeit nicht verändert", icon: "mdi-numeric-0-circle-outline" },
            { text: "Ich interessier mich weniger für Sexualität als früher", icon: "mdi-numeric-1-circle-outline" },
            { text: "Ich interessiere mich jetzt viel weniger für Sexualität", icon: "mdi-numeric-2-circle-outline" },
            { text: "Ich habe das Interesse an Sexualität völlig verloren", icon: "mdi-numeric-3-circle-outline" },
          ],
          hasSubtext: false,
          subtext: "",
          answerType: 1, // 0=rating, 1=select
          userRating: -1,
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
    /*
    Test Calendar Entries
    - used for calendar
    */
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
            },/*
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
            },*/
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
    /*
    Test Patients
    - used for patients overview in therapist
    */
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
              title: "Beispielnachricht #1",
              text: "Hallo hier ist ein langer Text der nur komplett sichtbar ist wenn man die Nachricht öffnet.",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht #2",
              text: "Hallo hier ist noch ein langer Text damit die Seite nicht so langweilig aussieht.",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht #3",
              text: "Hallo hier ist ...",
              date: 1673482872000,
            },{
              id: 0,
              title: "Beispielnachricht #4",
              text: "Hallo hier ist ...",
              date: 1673482872000,
            },],
          },
          {
            id: 0,
            text: "Patient 003",
            date: 1673482222000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 004",
            date: 1673482222000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 005",
            date: 1673435782000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 006",
            date: 1673498722000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 007",
            date: 1673482754200,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 008",
            date: 1673482252000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 009",
            date: 1673436452000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 010",
            date: 1673482522000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
          {
            id: 0,
            text: "Patient 011",
            date: 1673483722000,
            icon: "mdi-account",
            sessions: [],
            notes: [],
          },
      ]).models;
    },
    /*
    NOT USED ANYMORE !!
    */
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
    /*
    NOT USED ANYMORE !!
    */
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
