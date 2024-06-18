// handling data, stores to DB, storage etc.
// does connections to api via api.js
import common from "../common/common.js";
//import { Notifications } from "@/types/notification";
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

  getNotifications:  function () {
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
  */
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
                course_type: common.course_type_question,
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
                course_type: common.course_type_question,
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
    getNotesRecordingQuestions: /*async*/ function () {
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
    getSUSQuestions: /*async*/ function () {
        return new SessionQuestions([
            {
                id: 2,
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
                mandatory: true,
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
    getSessionsQuestionsSAM: function () {
        return new SessionQuestions([
            {
                id: 1,
                mandatory: true,
                fieldName: "pleasure",
                name: "SAM",
                question:
                    "Im Moment fühle ich mich…",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 6, min: 1, max: 9, text: ["negativ, schlecht", "positiv, gut"], value: 1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 2,
                mandatory: true,
                fieldName: "arousal",
                name: "SAM",
                question:
                    "Im Moment fühle ich mich…",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 6, min: 1, max: 9, text: ["ruhig, gelassen", "aufgeregt, angespannt"], value: 1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 3,
                mandatory: true,
                fieldName: "dominance",
                name: "SAM",
                question:
                    "Im Moment fühle ich mich…",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 6, min: 1, max: 9, text: ["dominiert, unterlegen", "dominant, überlegen"], value: 1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
        ]).models;
    },
    getSessionsQuestionsTMS: function () {
        return new SessionQuestions([
            {
                id: 38,
                mandatory: true,
                fieldName: "question_1",
                name: "TMS",
                question:
                    "1.	Ich nahm mich selbst gesondert von meinen wechselnden Gedanken und Gefühlen wahr.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 39,
                mandatory: true,
                fieldName: "question_2",
                name: "TMS",
                question:
                    "2.	Ich war eher damit befasst, offen für mein gegenwärtiges Erleben zu sein als es zu kontrollieren oder zu verändern.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 40,
                mandatory: true,
                fieldName: "question_3",
                name: "TMS",
                question:
                    "3.	Ich war neugierig darauf, was ich über mich selbst lernen konnte, indem ich meine Reaktionen auf bestimmte Gedanken, Gefühle und Sinneseindrücke wahrnahm.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 41,
                mandatory: false,
                fieldName: "question_4",
                name: "TMS",
                question:
                    "4.	Ich nahm meine Gedanken eher als Ereignisse in meinem Verstand wahr als als zwangsläufig genaue Reflektionen der Realität.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 42,
                mandatory: true,
                fieldName: "question_5",
                name: "TMS",
                question:
                    "5.	Ich war neugierig zu beobachten, was von Moment zu Moment in meinem Verstand vorgeht.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 43,
                mandatory: true,
                fieldName: "question_6",
                name: "TMS",
                question:
                    "6.	Ich war neugierig auf jeden einzelnen Gedanken und jedes Gefühl, das ich erlebte.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 44,
                mandatory: true,
                fieldName: "question_7",
                name: "TMS",
                question:
                    "7.	Ich war dafür empfänglich, aufkommende unangenehme Gedanken und Gefühle aufmerksam zu verfolgen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 45,
                mandatory: true,
                fieldName: "question_8",
                name: "TMS",
                question:
                    "8.	Ich war eher damit befasst, meine gegenwärtig auftauchenden Erfahrungen zu beobachten, als herauszufinden, was diese bedeuten könnten.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 46,
                mandatory: true,
                fieldName: "question_9",
                name: "TMS",
                question:
                    "9.	Ich näherte mich jedem Erleben an, indem ich versuchte es zu akzeptieren, ganz gleich, ob es angenehm oder unangenehm war.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 47,
                mandatory: true,
                fieldName: "question_10",
                name: "TMS",
                question:
                    "10. Ich blieb auf jede Art der gegenwärtig auftauchenden Erfahrungen gespannt.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 48,
                mandatory: true,
                fieldName: "question_11",
                name: "TMS",
                question:
                    "11. Ich war mir meiner Gedanken und Gefühle bewusst, ohne mich übermäßig mit diesen zu identifizieren.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 49,
                mandatory: true,
                fieldName: "question_12",
                name: "TMS",
                question:
                    "12. Ich war auf meine unmittelbaren Reaktionen auf Ereignisse neugierig.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 50,
                mandatory: true,
                fieldName: "question_13",
                name: "TMS",
                question:
                    "13. Ich war gespannt, was ich über mich selbst lernen konnte, indem ich zur Kenntnis nahm, wohin meine Aufmerksamkeit gezogen wird.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "ein wenig", "etwas", "ziemlich", "sehr"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
        ]).models;
    },
    /*
      Wie oft fühlten Sie sich im Verlauf der letzten
      2 Wochen durch die folgenden Beschwerden
      beeinträchtigt
  */
    getSessionsQuestionsGAD7: function () {
        return new SessionQuestions([
            {
                id: 51,
                mandatory: true,
                fieldName: "question_a",
                name: "GAD-7",
                question:
                    "Nervosität, Ängstlichkeit oder Anspannung",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 52,
                mandatory: true,
                fieldName: "question_b",
                name: "GAD-7",
                question:
                    "Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 53,
                mandatory: true,
                fieldName: "question_c",
                name: "GAD-7",
                question:
                    "Übermäßige Sorgen bezüglich verschiedener Angelegenheiten",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 54,
                mandatory: true,
                fieldName: "question_d",
                name: "GAD-7",
                question:
                    "Schwierigkeiten zu entspannen",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 55,
                mandatory: true,
                fieldName: "question_e",
                name: "GAD-7",
                question:
                    "Rastlosigkeit, so dass Stillsitzen schwer fällt",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 56,
                mandatory: true,
                fieldName: "question_f",
                name: "GAD-7",
                question:
                    "Schnelle Verärgerung oder Gereiztheit",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 57,
                mandatory: true,
                fieldName: "question_g",
                name: "GAD-7",
                question:
                    "Gefühl der Angst, so als würde etwas Schlimmes passieren",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Überhaupt nicht", "An einzelnen Tagen", "An mehr als der Hälfte der Tage", "Beinahe jeden Tag"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
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
                id: 1,
                mandatory: true,
                fieldName: "question_1",
                name: "FFMQD",
                question:
                    "Wenn ich gehe, dann nehme ich ganz bewusst wahr, wie sich die Bewegungen meines Körpers anfühlen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 2,
                mandatory: true,
                fieldName: "question_2",
                name: "FFMQD",
                question:
                    "Ich kann meine Gefühle gut in Worte fassen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 3,
                mandatory: true,
                fieldName: "question_3",
                name: "FFMQD",
                question:
                    "Ich kritisiere mich dafür, irrationale oder unangebrachte Gefühle zu haben.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 4,
                mandatory: true,
                fieldName: "question_4",
                name: "FFMQD",
                question:
                    "Ich nehme meine Gefühle und Empfindungen wahr, ohne auf sie reagieren zu müssen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 5,
                mandatory: true,
                fieldName: "question_5",
                name: "FFMQD",
                question:
                    "Wenn ich etwas tue, dann schweifen meine Gedanken ab und ich bin leicht abzulenken.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 6,
                mandatory: true,
                fieldName: "question_6",
                name: "FFMQD",
                question:
                    "Wenn ich dusche oder bade, bin ich mir des Gefühls des Wassers auf meinem Körper bewusst.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 7,
                mandatory: true,
                fieldName: "question_7",
                name: "FFMQD",
                question:
                    "Es fällt mir leicht, meine Überzeugung, Meinung und Erwartungen in Worte zu fassen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 8,
                mandatory: true,
                fieldName: "question_8",
                name: "FFMQD",
                question:
                    "Ich achte nicht drauf, was ich tue, da ich tagträume, mir Sorgen mache oder anderweitig abgelenkt bin.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 9,
                mandatory: true,
                fieldName: "question_9",
                name: "FFMQD",
                question:
                    "Ich beobachte meine Gefühle, ohne mich in ihnen zu verlieren.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 10,
                mandatory: true,
                fieldName: "question_10",
                name: "FFMQD",
                question:
                    "Ich sage mir, das ich nicht das fühlen sollte, was ich fühle.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 11,
                mandatory: true,
                fieldName: "question_11",
                name: "FFMQD",
                question:
                    "Ich bemerke, wie Lebensmittel und Getränke meine Gedanken, meine Körperempfindungen und meine Gefühle beeinflussen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 12,
                mandatory: true,
                fieldName: "question_12",
                name: "FFMQD",
                question:
                    "Es fällt mir schwer, das, was ich denke, in Worte zu fassen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 13,
                mandatory: true,
                fieldName: "question_13",
                name: "FFMQD",
                question:
                    "Ich bin leicht abgelenkt.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 14,
                mandatory: true,
                fieldName: "question_14",
                name: "FFMQD",
                question:
                    "Ich glaube, dass einige meiner Gedanken unnormal sind, und dass ich nicht so denken sollte.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 15,
                mandatory: true,
                fieldName: "question_15",
                name: "FFMQD",
                question:
                    "Ich achte auf Empfindungen, wie zum Beispiel Wind in meinem Haar oder Sonnenschein auf meinem Gesicht.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 16,
                mandatory: true,
                fieldName: "question_16",
                name: "FFMQD",
                question:
                    "Ich habe Schwierigkeiten, die richtigen Worte zu finden, um meine Gefühle auszudrücken.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 17,
                mandatory: true,
                fieldName: "question_17",
                name: "FFMQD",
                question:
                    "Ich urteile darüber, ob meine Gedanken gut oder schlecht sind.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 18,
                mandatory: true,
                fieldName: "question_18",
                name: "FFMQD",
                question:
                    "Ich finde es schwierig, auf das konzentriert zu bleiben, was im gegenwärtigen Augenblick passiert.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 19,
                mandatory: true,
                fieldName: "question_19",
                name: "FFMQD",
                question:
                    "Wenn ich belastende Gedanken oder Vorstellungen habe, kann ich von diesen Abstand nehmen und bin mir der Gedanken oder Vorstellungen bewusst, ohne dass ich von ihnen überwältigt werde.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 20,
                mandatory: true,
                fieldName: "question_20",
                name: "FFMQD",
                question:
                    "Ich achte auf Geräusche, wie beispielsweise das Ticken von Uhren, Vogelzwitschern oder das Geräusch vorüber fahrender Autos.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 21,
                mandatory: true,
                fieldName: "question_21",
                name: "FFMQD",
                question:
                    "In schwierigen Situationen kann ich innehalten, ohne sofort zu reagieren.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 22,
                mandatory: true,
                fieldName: "question_22",
                name: "FFMQD",
                question:
                    "Körperliche Empfindungen sind für mich schwer zu beschreiben, weil mir die richtigen Worte dazu fehlen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 23,
                mandatory: true,
                fieldName: "question_23",
                name: "FFMQD",
                question:
                    "Es sieht so aus, als würde ich 'automatisch funktionieren', ohne viel Bewusstsein für das, was ich tue.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 24,
                mandatory: true,
                fieldName: "question_24",
                name: "FFMQD",
                question:
                    "Wenn ich belastende Gedanken oder Vorstellungen habe, beruhige ich mich kurz danach wieder.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 25,
                mandatory: true,
                fieldName: "question_25",
                name: "FFMQD",
                question:
                    "Ich sage mir, dass ich nicht so denken sollte, wie ich denke.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 26,
                mandatory: true,
                fieldName: "question_26",
                name: "FFMQD",
                question:
                    "Ich nehme Gerüche und Düfte der Dinge wahr.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 27,
                mandatory: true,
                fieldName: "question_27",
                name: "FFMQD",
                question:
                    "Sogar wenn ich schrecklich verärgert bin, kann ich das in Worte fassen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 28,
                mandatory: true,
                fieldName: "question_28",
                name: "FFMQD",
                question:
                    "Ich hetzte durch Aktivitäten, ohne wirklich aufmerksam für sie zu sein.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 29,
                mandatory: true,
                fieldName: "question_29",
                name: "FFMQD",
                question:
                    "Wenn ich belastende Gedanken oder Vorstellungen habe, kann ich sie einfach nur wahrnehmen, ohne auf sie zu reagieren.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 30,
                mandatory: true,
                fieldName: "question_30",
                name: "FFMQD",
                question:
                    "Ich denke, das manche meiner Gefühle schlecht oder unangebracht sind, und dass ich sie nicht haben sollte.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 31,
                mandatory: true,
                fieldName: "question_31",
                name: "FFMQD",
                question:
                    "Ich bemerke visuelle Elemente sowohl in der Kunst als auch in der Natur, zum Beispiel Farben, Formen, Strukturen oder Muster aus Licht und Schatten.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 32,
                mandatory: true,
                fieldName: "question_32",
                name: "FFMQD",
                question:
                    "Ich habe die natürliche Tendenz, meine Erfahrungen in Worte zu fassen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 33,
                mandatory: true,
                fieldName: "question_33",
                name: "FFMQD",
                question:
                    "Wenn ich belastende Gedanken oder Vorstellungen habe, registriere ich sie nur und lasse sie wieder ziehen.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 34,
                mandatory: true,
                fieldName: "question_34",
                name: "FFMQD",
                question:
                    "Ich erledige Aufträge oder Aufgaben automatisch, ohne mir bewusst zu sein, was ich tue.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 35,
                mandatory: true,
                fieldName: "question_35",
                name: "FFMQD",
                question:
                    "Wenn ich belastende Gedanken oder Vorstellungen habe, bewerte ich mich selbst entweder als gut oder schlecht, abhängig vom Inhalt des Gedankens/der Vorstellung.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 36,
                mandatory: true,
                fieldName: "question_36",
                name: "FFMQD",
                question:
                    "Ich achte darauf, wie sich meine Gefühle auf meine Gedanken und mein Verhalten auswirken.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 37,
                mandatory: true,
                fieldName: "question_37",
                name: "FFMQD",
                question:
                    "Ich kann ziemlich genau beschreiben, wie ich mich im Moment gerade fühle.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 38,
                mandatory: true,
                fieldName: "question_38",
                name: "FFMQD",
                question:
                    "Ich merke, wie ich Dinge tue, ohne auf sie zu achten.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 39,
                mandatory: true,
                fieldName: "question_39",
                name: "FFMQD",
                question:
                    "Ich missbillige mich, wenn ich unvernünftige Ideen habe.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Nie ode sehr selten zutreffend", "Selten zutreffend", "Manchmal zutreffend", "Oft zutreffend", "Sehr oft oder immer zutreffend"], value: -1, required: true, },
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
                id: 1,
                mandatory: true,
                fieldName: "question_1",
                name: "demographic",
                question:
                    "Geschlecht",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 1, text: ["Männlich", "Weiblich", "Divers"], value: -1, required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 2,
                mandatory: true,
                fieldName: "question_2",
                name: "demographic",
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
                id: 3,
                mandatory: true,
                fieldName: "question_3",
                name: "demographic",
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
                id: 4,
                mandatory: true,
                fieldName: "question_4",
                name: "demographic",
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
                id: 5,
                mandatory: true,
                fieldName: "question_5",
                name: "demographic",
                question:
                    "Höchster Bildungsabschluss",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "ohne Abschluss",
                            "Volksschule / Hauptschule",
                            "Realschule / mittlerer Schulabschluss",
                            "Fachoberschule / Gymnasium / Hochschulreife",
                            "Fachhochschule / Universität / sonst. akademische Einrichtung"
                        ], value: -1, required: true,
                    },
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
                id: 6,
                mandatory: true,
                fieldName: "question_6",
                name: "demographic",
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
                id: 7,
                mandatory: true,
                fieldName: "question_7",
                name: "demographic",
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
                id: 8,
                mandatory: true,
                fieldName: "question_8",
                name: "demographic",
                question:
                    "Meine Grundschulzeit habe ich in folgender Region verbracht",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ruhrgebiet",
                            "Rheinland",
                            "sonstiges Nordrhein-Westfalen",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "andere Regionen", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 9,
                mandatory: true,
                fieldName: "question_9",
                name: "demographic",
                question:
                    "In den letzten 20 Jahren habe ich vorwiegend in dieser Region / diesen Regionen gelebt",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ruhrgebiet",
                            "Rheinland",
                            "sonstiges Nordrhein-Westfalen",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "andere Regionen", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 10,
                mandatory: true,
                fieldName: "question_10",
                name: "demographic",
                question:
                    "Rauchen Sie zurzeit?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, wie viele Zigaretten rauchen Sie durchschnittlich an einem Tag?", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 11,
                mandatory: true,
                fieldName: "question_11",
                name: "demographic",
                question:
                    "Haben Sie in den letzten 4 Stunden geraucht?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 12,
                mandatory: true,
                fieldName: "question_12",
                name: "demographic",
                question:
                    "Haben Sie im letzten Jahr aufgehört zu rauchen?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, wann haben Sie aufgehört?", value: "", suffix: "MM/YY", required: true, },
                    { type: 2, text: "Falls ja, wie viele Zigaretten haben Sie durchschnittlich an einem Tag geraucht?", value: "", suffix: "Stk.", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 13,
                mandatory: true,
                fieldName: "question_13",
                name: "demographic",
                question:
                    "Wie oft nehmen Sie alkoholische Getränke zu sich?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "nie",
                            "etwa 1 mal pro Monat",
                            "2-4 mal pro Monat",
                            "2-3 mal pro Woche",
                            "4 oder öfter pro Woche",
                        ], value: -1, required: true,
                    },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 14,
                mandatory: true,
                fieldName: "question_14",
                name: "demographic",
                question:
                    "Haben Sie in den letzten 8 h Alkohol konsumiert?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 15,
                mandatory: true,
                fieldName: "question_15",
                name: "demographic",
                question:
                    "Ist Ihre Sehfähigkeit beeinträchtigt?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    {
                        type: 3, label: "Falls ja: ", text: [
                            "kurzsichtig",
                            "weitsichtig",
                            "partielle Blindheit",
                        ], value: "", required: true,
                    },
                    {
                        type: 3, label: "Sehkorrektur: ", text: [
                            "Brille",
                            "Kontaktlinsen",
                            "nichts",
                        ], value: "", required: true,
                    },
                    { type: 2, text: "Dpt. links:", value: "", suffix: "", required: true, },
                    { type: 2, text: "Dpt. rechts:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 16,
                mandatory: true,
                fieldName: "question_16",
                name: "demographic",
                question:
                    "Ist Ihre Sprechfähigkeit momentan eingeschränkt oder beeinträchtigt?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, bitte Art der Einschränkung/Beeinträchtigung angeben:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 17,
                mandatory: true,
                fieldName: "question_17",
                name: "demographic",
                question:
                    "Besteht oder bestand in den letzten 5 Jahren ein Hörschaden oder ist Ihr Gehör in irgendeiner Art und Weise beeinträchtigt?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, bitte Art des Hörschadens/der Beeinträchtigung angeben:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 18,
                mandatory: true,
                fieldName: "question_18",
                name: "demographic",
                question:
                    "Besteht oder bestand in den letzten 5 Jahren eine Ihnen bekannte Grunderkrankung (z. B. Diabetes mellitus, rheumatische Erkrankungen)?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, bitte Erkrankung(en) angeben:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 19,
                mandatory: true,
                fieldName: "question_19",
                name: "demographic",
                question:
                    "Besteht oder bestand in den letzten 5 Jahren eine oder mehrere der folgenden psychischen/psychiatrischen Erkrankungen? Bitte kreuzen Sie Zutreffendes an.",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Nein",
                            "Posttraumatische Belastungsstörung",
                            "Zwangsstörung (Zwangsgedanken und/oder -handlungen)",
                            "Schizophrenie",
                            "Suchterkrankung",
                            "Angststörung",
                            "Depression",
                            "Klaustrophobie",
                            "Prosopagnosie",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Andere:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 20,
                mandatory: true,
                fieldName: "question_20",
                name: "demographic",
                question:
                    "Wurde bei Ihnen eine neurologische oder neurodegenerative Erkrankung, insbesondere eine Erkrankung des Gleichgewichtsorgans oder -sinns, diagnostiziert?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, bitte Erkrankung(en) angeben:", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 21,
                mandatory: true,
                fieldName: "question_21",
                name: "demographic",
                question:
                    "Nehmen Sie zurzeit Medikamente ein?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    { type: 2, text: "Falls ja, welche Medikamente in welcher Dosierung?", value: "", suffix: "", required: true, },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 22,
                mandatory: true,
                fieldName: "question_22",
                name: "demographic",
                question:
                    "Haben Sie in den letzten 24 Stunden Schmerzmittel zu sich genommen?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 23,
                mandatory: true,
                fieldName: "question_23",
                name: "demographic",
                question:
                    "Welche der folgenden Aussagen beschreibt am besten Ihr aktuelles Müdigkeitsgefühl?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
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
                        ], value: -1, required: true,
                    },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 3, // 0=rating, 1=select, 2=experimental, 3=form
                userRating: -1,
            },
            {
                id: 24,
                mandatory: true,
                fieldName: "question_24",
                name: "demographic",
                question:
                    "Sind Sie zurzeit erkältet?",
                list_headline: "Mögliche Antworten:",
                list_items: [
                    {
                        type: 1, text: [
                            "Ja",
                            "Nein",
                        ], value: -1, required: true,
                    },
                    {
                        type: 1, label: "falls ja:", text: [
                            "Husten",
                            "Halsschmerzen",
                            "Gliederschmerzen",
                            "Kopfschmerzen",
                            "Schnupfen / zugeschwollene Nase",
                        ], value: -1, required: true,
                    },
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
                id: 1,
                mandatory: true,
                fieldName: "question_1",
                name: "BDI-II",
                question:
                    "Traurigkeit",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich bin nicht traurig", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich bin oft traurig", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich bin ständig traurig", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich bin so traurig oder unglücklich, dass ich es nicht aushalte", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 2,
                mandatory: true,
                fieldName: "question_2",
                name: "BDI-II",
                question:
                    "Pessimismus",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich sehe nicht mutlos in die Zukunft", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich sehe mutloser in die Zukunft als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich bin mutlos und erwarte nicht, dass meine Situation besser wird", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich glaube, dass meine Zukunft hoffnungslos ist und nur noch schlechter wird", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 3,
                mandatory: true,
                fieldName: "question_3",
                name: "BDI-II",
                question:
                    "Versagensgefühle",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich fühle mich nicht als Versager", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe häufiger Versagensgefühle", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Wenn ich zurückblicke, sehe ich eine Menge Fehlschläge", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe das Gefühl, als Mensch ein völliger Versager zu sein", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 4,
                mandatory: true,
                fieldName: "question_4",
                name: "BDI-II",
                question:
                    "Verlust von Freude",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich kann die Dinge genauso gut genießen wie früher", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich kann die Dinge nicht mehr so genießen wie früher", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Dinge, die mir früher Freude gemacht haben, kann ich kaum mehr genießen", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Dinge, die mir früher Freude gemacht haben, kann ich überhaupt nicht mehr genießen", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 5,
                mandatory: true,
                fieldName: "question_5",
                name: "BDI-II",
                question:
                    "Schuldgefühle",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich habe keine besonderen Schuldgefühle", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe oft Schuldgefühle wegen Dingen, die ich getan habe oder hätte tun sollen", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich habe die meiste Zeit Schuldgefühle", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe ständig Schuldgefühle", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 6,
                mandatory: true,
                fieldName: "question_6",
                name: "BDI-II",
                question:
                    "Bestrafungsgefühle",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich habe nicht das Gefühl, für etwas bestraft zu sein", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe das Gefühl, vielleicht bestraft zu werden", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich erwarte, bestraft zu werden", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe das Gefühl, bestraft zu sein", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 7,
                mandatory: true,
                fieldName: "question_7",
                name: "BDI-II",
                question:
                    "Selbstablehnung",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich halte von mir genauso viel wie immer", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe Vertrauen in mich verloren", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich bin von mir enttäuscht", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich lehne mich völlig ab", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 8,
                mandatory: true,
                fieldName: "question_8",
                name: "BDI-II",
                question:
                    "Selbstvorwürfe",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich kritisiere oder tadle mich nicht mehr als sonst", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich bin mir gegenüber kritischer als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich kritisiere mich für all meine Mängel", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich gebe mir die Schuld für alles Schlimme, was passiert ist", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 9,
                mandatory: true,
                fieldName: "question_9",
                name: "BDI-II",
                question:
                    "Selbstmordgedanken",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich denke nicht daran, mir etwas anzutun", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich denke manchmal an Selbstmord, aber ich würde es nie tun", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich möchte mich am liebsten umbringen", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich würde mich umbringen, wenn ich die Gelegenheit dazu hätte", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 10,
                mandatory: true,
                fieldName: "question_10",
                name: "BDI-II",
                question:
                    "Weinen",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich weine nicht öfter als früher", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich weine jetzt mehr als früher", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich weine beim geringsten Anlass", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich möchte gern weinen, aber ich kann nicht", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 11,
                mandatory: true,
                fieldName: "question_11",
                name: "BDI-II",
                question:
                    "Unruhe",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich bin nicht unruhiger als sonst", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich bin unruhiger als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich bin so unruhig, dass es mir schwerfällt, still zu sitzen", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich bin so unruhig, dass ich mich ständig bewegen oder etwas tun muss", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 12,
                mandatory: true,
                fieldName: "question_12",
                name: "BDI-II",
                question:
                    "Interessenverlust",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich habe das Interesse an anderen Menschen oder an Tätigkeiten nicht verloren", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe weniger Interesse an anderen Menschen oder an Dingen als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich habe das Interesse an anderen Menschen oder Dingen zum größten Teil verloren", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Es fällt mir schwer, mich überhaupt für irgendetwas zu interessieren", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 13,
                mandatory: true,
                fieldName: "question_13",
                name: "BDI-II",
                question:
                    "Entschlussunfähigkeit",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich bin so entschlussfreudig wie immer", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Es fällt mir schwerer als sonst, Entscheidungen zu treffen", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Es fällt mir sehr viel schwerer als sonst, Entscheidungen zu treffen.", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe Mühe, überhaupt Entscheidungen zu treffen", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 14,
                mandatory: true,
                fieldName: "question_14",
                name: "BDI-II",
                question:
                    "Wertlosigkeit",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich fühle mich nicht wertlos", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich halte mich für weniger wertvoll und nützlich als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Verglichen mit anderen Menschen fühle ich mich viel weniger wert", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich fühle mich völlig wertlos", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 15,
                mandatory: true,
                fieldName: "question_15",
                name: "BDI-II",
                question:
                    "Energieverlust",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich habe so viel Energie wie immer", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich habe weniger Energie als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich habe so wenig Energie, dass ich kaum noch etwas schaffe", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe keine Energie mehr, um überhaupt noch etwas zu tun", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 16,
                mandatory: true,
                fieldName: "question_16",
                name: "BDI-II",
                question:
                    "Veränderungen der Schlafgewohnheiten",
                hasList: true,
                list_headline: "Mögliche Antworten: (ACHTUNG! BITTE KONTROLLIEREN!)",
                list_items: [
                    { type: 0, text: "Ich schlafe etwas [mehr/weniger] als sonst", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich schlafe viel [mehr/weniger] als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich schlafe fast [den ganzen Tag/wache 1-2 Stunden früher auf als gewöhnlich und kann dann nicht mehr einschlafen]", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich hab keine Energie mehr, um überhaupt noch etwas zu tun", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 17,
                mandatory: true,
                fieldName: "question_17",
                name: "BDI-II",
                question:
                    "Reizbarkeit",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich bin nicht reizbarer als sonst", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich bin reizbarer als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich bin viel Reizbarer als sonst", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich fühle mich dauernd gereizt", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 18,
                mandatory: true,
                fieldName: "question_18",
                name: "BDI-II",
                question:
                    "Veränderungen des Appetits",
                hasList: true,
                list_headline: "Mögliche Antworten: (ACHTUNG! BITTE KONTROLLIEREN!)",
                list_items: [
                    { type: 0, text: "Mein Appetit hat sich nicht verändert", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Mein Appetit ist etwas [schlechter/größer] als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Mein Appetit ist viel [schlechter/größer] als sonst", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe [überhaupt keinen Appetit/ständig Heißhunger]", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 19,
                mandatory: true,
                fieldName: "question_19",
                name: "BDI-II",
                question:
                    "Konzentrationsschwierigkeiten",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich kann mich so gut konzentrieren wie immer", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich kann mich nicht mehr so gut konzentrieren wie sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Es fällt mir schwer, mich längere Zeit auf irgendetwas zu konzentrieren", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich kann mich überhaupt nicht mehr konzentrieren", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 20,
                mandatory: true,
                fieldName: "question_20",
                name: "BDI-II",
                question:
                    "Ermüdung oder Erschöpfung",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Ich fühle mich nicht müder oder erschöpfter als sonst", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich werde schneller müde oder erschöpft als sonst", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Für viele Dinge, die ich üblicherweise tue, bin ich zu müde oder erschöpft", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich bin so müde und erschöpft, dass ich fast nichts mehr tun kann", icon: "mdi-numeric-3-circle-outline" },
                ],
                hasSubtext: false,
                subtext: "",
                answerType: 1, // 0=rating, 1=select
                userRating: -1,
            },
            {
                id: 21,
                mandatory: true,
                fieldName: "question_21",
                name: "BDI-II",
                question:
                    "Verlust an sexuellem Interesse",
                hasList: true,
                list_headline: "Mögliche Antworten:",
                list_items: [
                    { type: 0, text: "Mein Interesse an Sexualität hat sich in letzter Zeit nicht verändert", icon: "mdi-numeric-0-circle-outline" },
                    { type: 0, text: "Ich interessier mich weniger für Sexualität als früher", icon: "mdi-numeric-1-circle-outline" },
                    { type: 0, text: "Ich interessiere mich jetzt viel weniger für Sexualität", icon: "mdi-numeric-2-circle-outline" },
                    { type: 0, text: "Ich habe das Interesse an Sexualität völlig verloren", icon: "mdi-numeric-3-circle-outline" },
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
    getCalenderEntries: async function () {
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
                popover: {}, // Only objects allowed
                // Your custom data object for later access, if needed
                customData: {},
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
    /*
  Test Patients
  - used for patients overview in therapist
  */
    getPatients: function () {
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
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
                        id: 5,
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
                }, {
                    id: 0,
                    title: "Beispielnachricht #2",
                    text: "Hallo hier ist noch ein langer Text damit die Seite nicht so langweilig aussieht.",
                    date: 1673482872000,
                }, {
                    id: 0,
                    title: "Beispielnachricht #3",
                    text: "Hallo hier ist ...",
                    date: 1673482872000,
                }, {
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
    getMeditationDatasets() {
        return [
            // --------------------------------
            // 1. Lupenübung Stein (ca. 9 Minuten)
            // --------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 2.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 1,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/1/1.1.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.1.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/1/1.2.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.2.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/1/1.3.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.3.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/1/1.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.4.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/1/1.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.5.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/1/1.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.6.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/1/1.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.7.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/1/1.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.8.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/1/1.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.9.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/1/1.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.10.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 2,
                    text: "Object Meditations/1/1.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.11.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 2,
                    text: "Object Meditations/1/1.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/1.12.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.2.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 19,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 20,
                    type: 3,
                    text: "End1.1",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/1/End1.1.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            // --------------------------------
            // 2. Lupenübung Stock (ca. 9 Minuten)
            // --------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 2.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 1,
                    text: "Einleitung 2.3.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/2/2.1.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.1.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/2/2.2.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.2.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/2/2.3.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.3.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/2/2.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.4.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/2/2.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.5.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/2/2.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.6.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/2/2.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.7.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/2/2.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.8.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/2/2.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.9.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/2/2.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.10.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 2,
                    text: "Object Meditations/2/2.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/2/2.11.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 2.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 2.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.2.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 3,
                    text: "Abschluss 2.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 2.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            // ---------------------------------
            // 3. Lupenübung Statue (ca. 9 Minuten)
            // ---------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 2.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 1,
                    text: "Einleitung 2.4.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/3/3.1.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.1.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/3/3.2.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.2.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/3/3.3.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.3.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/3/3.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.4.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/3/3.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.5.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/3/3.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.6.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/3/3.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.7.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/3/3.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.8.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/3/3.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/3/3.9.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            // ---------------------------------
            // 4. Telefonübung Stein (ca. 6 Minuten)
            // ---------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 3.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 3.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/4/4.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.4.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/4/4.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.5.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/4/4.5a.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.5a.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/4/4.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.6.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/4/4.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.7.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/4/4.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.8.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/4/4.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.9.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/4/4.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.10.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/4/4.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.11.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/4/4.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/4/4.12.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 5. Telefonübung Stock (ca. 6 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 3.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 3.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/5/5.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.4.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/5/5.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.5.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/5/5.5a.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.5a.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/5/5.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.6.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/5/5.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.7.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/5/5.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.8.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/5/5.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.9.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/5/5.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.10.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/5/5.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.11.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/5/5.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/5/5.12.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 6. Telefonübung Statue (ca. 7 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 3.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 3.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/6/6.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.4.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/6/6.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.5.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },/*
          {
            id: 5,
            type: 2,
            text: "Object Meditations/6/6.5a.ogg",
            audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.5a.ogg",
            model: "/3d/InteractableStatue.glb",
            pause: 10,
          },*/
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/6/6.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.6.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/6/6.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.7.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/6/6.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.8.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/6/6.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.9.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/6/6.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.10.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/6/6.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.11.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/6/6.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/6/6.12.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 7. Imaginationsübung Stein (ca. 7 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 4.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 4.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/7/7.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.4.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/7/7.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.5.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/7/7.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.6.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/7/7.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.7.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/7/7.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.8.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/7/7.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.9.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/7/7.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.10.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/7/7.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.11.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/7/7.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.12.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/7/7.13.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/7/7.13.ogg",
                    model: "/3d/Stone2023.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 8. Imaginationsübung Stock (ca. 7 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 4.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 4.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/8/8.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.4.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/8/8.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.5.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/8/8.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.6.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/8/8.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.7.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/8/8.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.8.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/8/8.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.9.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/8/8.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.10.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/8/8.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.11.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/8/8.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.12.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/8/8.13.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.13.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 2,
                    text: "Object Meditations/8/8.14.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.14.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 2,
                    text: "Object Meditations/8/8.15.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/8/8.15.ogg",
                    model: "/3d/astMitBlatt.glb",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 9. Imaginationsübung Statue (ca. 7 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 4.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 4.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 2.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 2.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 2,
                    text: "Object Meditations/9/9.4.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.4.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 2,
                    text: "Object Meditations/9/9.5.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.5.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 2,
                    text: "Object Meditations/9/9.6.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.6.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 2,
                    text: "Object Meditations/9/9.7.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.7.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 2,
                    text: "Object Meditations/9/9.8.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.8.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 2,
                    text: "Object Meditations/9/9.9.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.9.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 2,
                    text: "Object Meditations/9/9.10.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.10.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 2,
                    text: "Object Meditations/9/9.11.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.11.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 2,
                    text: "Object Meditations/9/9.12.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.12.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 2,
                    text: "Object Meditations/9/9.13.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.13.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 2,
                    text: "Object Meditations/9/9.14.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.14.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 2,
                    text: "Object Meditations/9/9.15.ogg",
                    audio: "/MindfulnessExercises/Meditations/Object Meditations/9/9.15.ogg",
                    model: "/3d/InteractableStatue.glb",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
            //-----------------------------------
            // 10. Body-Scan (ca. 10 Minuten)
            //-----------------------------------
            [
                {
                    id: 0,
                    type: 0,
                    text: "Einleitung 1.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 1,
                    type: 0,
                    text: "Einleitung 8.1.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 8.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 2,
                    type: 0,
                    text: "Einleitung 8.2.ogg",
                    audio: "/MindfulnessExercises/Intros/Einleitung 8.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 3,
                    type: 0,
                    text: "BodyScan/1.1",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 4,
                    type: 0,
                    text: "BodyScan/1.2",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 5,
                    type: 0,
                    text: "BodyScan/1.3",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 6,
                    type: 0,
                    text: "BodyScan/1.4",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 7,
                    type: 0,
                    text: "BodyScan/1.5",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.5.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 8,
                    type: 0,
                    text: "BodyScan/1.6",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.6.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 9,
                    type: 0,
                    text: "BodyScan/1.7",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.7.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 10,
                    type: 0,
                    text: "BodyScan/1.8",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.8.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 11,
                    type: 0,
                    text: "BodyScan/1.9",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.9.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 12,
                    type: 0,
                    text: "BodyScan/1.10",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.10.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 13,
                    type: 0,
                    text: "BodyScan/1.11",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.11.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 14,
                    type: 0,
                    text: "BodyScan/1.12",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.12.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 15,
                    type: 0,
                    text: "BodyScan/1.13",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.13.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 16,
                    type: 0,
                    text: "BodyScan/1.14",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.14.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 17,
                    type: 0,
                    text: "BodyScan/1.15",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.15.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 18,
                    type: 0,
                    text: "BodyScan/1.16",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.16.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 19,
                    type: 0,
                    text: "BodyScan/1.16",
                    audio: "/MindfulnessExercises/Meditations/Body Scan/1.16.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 20,
                    type: 3,
                    text: "Abschluss 1.1.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.1.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 21,
                    type: 3,
                    text: "Abschluss 1.2.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.2.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 22,
                    type: 3,
                    text: "Abschluss 1.3.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.3.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 23,
                    type: 3,
                    text: "Abschluss 1.4.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.4.ogg",
                    model: "",
                    pause: 10,
                },
                {
                    id: 24,
                    type: 3,
                    text: "Abschluss 1.5.ogg",
                    audio: "/MindfulnessExercises/Outtros/Abschluss 1.5.ogg",
                    model: "",
                    pause: 1,
                },
            ],
        ]
    },
    /*
  Get Dataset for dialog tree in therapist control view

  TODO: currently mocked debug data...
  */
    getRolePlayDataSet: function (type) {

        if (type === "vr_roleplay_boss_single" || !type) {
            return [
                {
                    "id": "intro1.1.1",
                    "entry_point": true,
                    "bordercolor": "#888",
                    "description": "Intro",
                    "text": "Einen kleinen Moment noch, ich muss noch eben die Mail zu Ende schreiben. Ich bin sofort bei Ihnen.",
                    "person": "Boss",
                    "successors": [
                        "intro1.1.3"
                    ]
                },
                {
                    "id": "intro1.1.3",
                    "bordercolor": "#888",
                    "description": "Intro",
                    "text": "Schön, dass Sie vorbei gekommen sind. Sie sehen etwas angestrengt aus, hatten Sie einen schwierigen Tag?",
                    "person": "Boss",
                    "successors": [
                        "intro1.3"
                    ]
                },
                {
                    "id": "intro1.3",
                    "bordercolor": "#888",
                    "description": "Intro",
                    "text": "Um zu meinem Anliegen zu kommen: Ich bräuchte noch dringend Unterstützung bei einer wichtigen Aufgabe, die morgen früh fertig sein sollte. Könnten Sie sich bitte darum kümmern?",
                    "person": "Boss",
                    "successors": [
                        "1.1",
                        "1.2"
                    ]
                },
                {
                    "id": "1.1",
                    "bordercolor": "#888",
                    "description": "Intro",
                    "text": "Es geht um die Erstellung der Quartalszahlen, die Datei ist aber schon vorbereitet. Ich denke es wird ca. eine halbe Stunde in Anspruch nehmen.",
                    "person": "Boss",
                    "successors": [
                        "2.1",
                        "2.2",
                        "2.3",
                        "2.4",
                        "2.5",
                        "2.6"
                    ]
                },
                {
                    "id": "1.2",
                    "bordercolor": "#888",
                    "description": "Beispiel Beschreibung",
                    "text": "Es geht um die Erstellung der Quartalszahlen. Allerdings ist die Datei noch nicht abschließend fertiggestellt. Es müssen noch ein paar Daten ergänzt und kontrolliert werden, bevor Sie die Berechnung vornehmen können. Ich denke der Prozess wird ca. 2 Stunden in Anspruch nehmen.",
                    "person": "Boss",
                    "successors": [
                        "2.1",
                        "2.2",
                        "2.3",
                        "2.4",
                        "2.5",
                        "2.6"
                    ]
                },
                {
                    "id": "2.1",
                    "description": "Beispiel Beschreibung",
                    "text": "Danke, das habe ich nicht anders von Ihnen erwartet. Einen schönen Abend noch und bis morgen.",
                    "person": "Boss",
                    "bordercolor": "#385D8A",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "2.2",
                    "description": "Beispiel Beschreibung",
                    "text": "Bitte haben Sie es bis morgen früh 8 Uhr zur Besprechung vorbereitet. Heute Abend schaffe ich das nicht mehr, da habe ich noch einen privaten Termin. Ich bin daher auch nicht mehr für Rückfragen erreichbar.",
                    "person": "Boss",
                    "bordercolor": "#8C3836",
                    "successors": [
                        "3.1"
                    ]
                },
                {
                    "id": "2.3",
                    "description": "Beispiel Beschreibung",
                    "text": "Nein, das geht auf keinen Fall. Das ist wirklich wichtig, dass es heute gemacht wird. Ich kann es selbst nicht erledigen, da ich noch einen privaten Termin habe.",
                    "person": "Boss",
                    "bordercolor": "#71893F",
                    "successors": [
                        "3.2",
                        "2.4",
                        "2.5"
                    ]
                },
                {
                    "id": "2.4",
                    "description": "Beispiel Beschreibung",
                    "text": "Ich habe extra Sie angesprochen, weil ich Sie als einen sehr kompetenten, zuverlässigen und fleißigen Mitarbeiter erlebe. Auch im Hinblick auf ihre berufliche Weiterentwicklung bei uns im Unternehmen wäre Ihre Unterstützung bei dieser Aufgabe jetzt wichtig.",
                    "person": "Boss",
                    "bordercolor": "#71893F",
                    "successors": [
                        "3.2",
                        "2.5"
                    ]
                },
                {
                    "id": "2.5",
                    "description": "Beispiel Beschreibung",
                    "text": "Das kann ich verstehen, dann müssen wir es morgen früh gemeinsam erledigen. Ihnen noch einen schönen Abend und bis morgen früh.",
                    "person": "Boss",
                    "bordercolor": "#71893F",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "2.6",
                    "description": "Beispiel Beschreibung",
                    "text": "Es ist wirklich dringend, sonst würde ich Sie nicht fragen. Ich hoffe sehr auf Ihre Unterstützung.",
                    "person": "Boss",
                    "bordercolor": "#357D91",
                    "successors": [
                        "3.2",
                        "2.5",
                        "3.3"
                    ]
                },
                {
                    "id": "3.1",
                    "description": "Beispiel Beschreibung",
                    "text": "Oh, da fällt mir gerade ein, dass es hilfreich wäre, wenn Sie die Quartalszahlen noch mit den Zahlen des letzten Jahres vergleichen. Das wäre noch eine interessante Ergänzung für die Besprechung morgen.",
                    "person": "Boss",
                    "bordercolor": "#8C3836",
                    "successors": [
                        "3.2",
                        "2.5"
                    ]
                },
                {
                    "id": "3.2",
                    "description": "Beispiel Beschreibung",
                    "text": "Wunderbar, bis morgen.",
                    "person": "Boss",
                    "bordercolor": "#71893F",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "3.3",
                    "description": "Beispiel Beschreibung",
                    "text": "Das ist eine Dienstanweisung. Es ist notwendig, dass Sie diese Aufgabe noch erledigen.",
                    "person": "Boss",
                    "bordercolor": "#357D91",
                    "successors": [
                        "0.1",
                        "4.1"
                    ]
                },
                {
                    "id": "4.1",
                    "description": "Beispiel Beschreibung",
                    "text": "Gut, dann geht es heute nicht anders. Dann muss es eben bis morgen früh warten. Bis morgen.",
                    "person": "Boss",
                    "bordercolor": "#357D91",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "0.1",
                    "description": "Beispiel Beschreibung",
                    "text": "Vielen Dank!",
                    "person": "Boss",
                    "bordercolor": "#F79646",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "finish",
                    "bordercolor": "#888",
                    "text": "Ausblenden",
                    "action": "FadeOut",
                    "successors": [
                        "restart"
                    ]
                },
                {
                    "id": "restart",
                    "text": "Gespräch neustarten",
                    "action": "FadeIn",
                    "successors": [
                        "intro1.1.1"
                    ]
                },
                {
                    "id": "bedeutetdasjetzt",
                    "text": "Bedeutet das jetzt, dass Sie es machen, oder nicht?",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "dasmuessen",
                    "text": "Das müssen Sie mir jetzt nochmal genauer erklären.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "daweiss",
                    "text": "Da weiß ich jetzt auch nicht weiter.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "nichtverstanden",
                    "text": "Das habe ich nicht ganz verstanden. Können Sie es nochmal erklären?",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "washeisst",
                    "text": "Was heißt das jetzt konkret?",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "woproblem",
                    "text": "Wo ist das Problem?",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "ja",
                    "text": "Ja.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "nein",
                    "text": "Nein.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "hmm",
                    "text": "Hmmmm.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "hmmok",
                    "text": "(seufzen) Ok.",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "nonverbal1",
                    "text": "Nonverbal: \"Machtposition zeigen, fordernd\"",
                    "person": "Boss",
                    "oneshot": true
                },
                {
                    "id": "nonverbal2",
                    "text": "Nonverbal: \"Komm' zum Punkt\"",
                    "person": "Boss",
                    "oneshot": true
                }
            ]
        }
        else if (type === "vr_roleplay_colleague_single") {
            return [
                {
                    "id": "intro.K0.1",
                    "entry_point": true,
                    "description": "Intro",

                    "text": "Da bist du ja endlich. Warte kurz, ich muss noch eben die Nachricht zu Ende schreiben.",
                    "person": "Kollege",
                    "bordercolor": "#8C3836",
                    "successors": [
                        "intro.K0.1.2"
                    ]
                },
                {
                    "id": "intro.K0.1.2",
                    "text": "Du bist jetzt schon zum dritten Mal in dieser Woche zu spät. Man kann sich überhaupt nicht mehr auf dich verlassen!",
                    "person": "Kollege",
                    "description": "Intro",

                    "bordercolor": "#8C3836",
                    "successors": [
                        "K1.1", "K1.2", "K1.3"
                    ]
                },
                {
                    "id": "K1.1",
                    "text": "Du hast die Frühschicht. Wenn du früher da gewesen wärst, hättest du es auch selbst mitbekommen!",
                    "person": "Kollege",

                    "bordercolor": "#8C3836",
                    "successors": [
                        "K2.1"
                    ]
                },
                {
                    "id": "K1.2",
                    "text": "Das hast du mir in letzter Zeit schon häufiger erzählt. Und es ändert sich nichts. Irgendwie muss die Arbeit hier ja auch gemacht werden!",
                    "person": "Kollege",

                    "bordercolor": "#8C3836",
                    "successors": [
                        "K1.1"
                    ]
                },
                {
                    "id": "K1.3",
                    "text": "Wir haben uns schon gefragt, was bei dir los ist. Das kenne ich von mir auch. Ich hatte vor einem Jahr auch so eine Phase, wo mir alles zu viel wurde.",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "K2.3a",
                        "Erzähl ich Dir ein anderes Mal",
                        "Welche Schicht du hast",
                        "Drück dir die Daumen",
                        "Es wird wieder besser"
                    ]
                },
                {
                    "id": "K2.1",
                    "text": "Auf die Frühschicht ist halt niemand besonders scharf! Wärst du pünktlich gewesen, hättest du ja mitdiskutieren können.",
                    "person": "Kollege",
                    "bordercolor": "#8C3836",
                    "successors": [
                        "K3.1"
                    ]
                },
                {
                    "id": "K2.3a",
                    "text": "Hmm, und genau du hast jetzt auch die Frühschicht zugeteilt bekommen! Hätte ich das gewusst, hätte ich in der Besprechung was gesagt, damit du eine andere Schicht bekommst.",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "K2.3b",
                        "Drück dir die Daumen",
                        "Es wird wieder besser"
                    ]
                },
                {
                    "id": "K2.3b",
                    "text": "Sag mal, kann ich dich irgendwie unterstützen?",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "Es wird wieder besser",
                        "Drück dir die Daumen",
                        "K3.3"
                    ]
                },
                {
                    "id": "K3.1",
                    "text": "Wir alle müssen für dich immer alles auffangen. Wenn jeder so unzuverlässig wäre, würde hier überhaupt nichts funktionieren.",
                    "person": "Kollege",
                    "bordercolor": "#8C3836",
                    "successors": [
                        "K4.1"
                    ]
                },
                {
                    "id": "K3.3",
                    "text": "Ahh, das ist mir jetzt nur etwas kurzfristig. Eigentlich passt mir das morgen gar nicht.",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "K4.3",
                        "Drück dir die Daumen",
                        "Es wird wieder besser"
                    ]
                },
                {
                    "id": "K4.1",
                    "text": "Ach, das wusste ich ja alles gar nicht.",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "K2.3a",
                        "K2.3b"
                    ]
                },
                {
                    "id": "K4.3",
                    "text": "Hmm ... weiß nicht ... ungünstig.",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "K5.3",
                        "Drück dir die Daumen",
                        "Es wird wieder besser"
                    ]
                },
                {
                    "id": "K5.3",
                    "text": "Okay, ich kann es dir nicht versprechen, aber ich versuche es. Ich sage Dir in der nächsten Stunde Bescheid, ob es klappt. Aber vielleicht kannst du zwischenzeitlich auch andere Kollegen fragen?",
                    "person": "Kollege",
                    "bordercolor": "#71893F",
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "finish",
                    "text": "(Ausblenden)",
                    "action": "FadeOut",
                    "successors": [
                        "restart"
                    ]
                },
                {
                    "id": "restart",
                    "text": "(Wieder einblenden und Gespräch neustarten)",
                    "action": "FadeIn",
                    "successors": [
                        "K0.1"
                    ]
                },
                {
                    "id": "Hmm",
                    "text": "Hmm.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Ja",
                    "text": "Ja.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Nein",
                    "text": "Nein.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Wusste ich nicht",
                    "text": "Das wusste ich ja gar nicht.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Ich verstehe",
                    "text": "Ah. Ich verstehe.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Das klingt gut",
                    "text": "Das klingt doch gut!",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Drück dir die Daumen",
                    "text": "Ich drück dir echt die Daumen, dass du das bald wieder hinbekommst.",
                    "person": "Kollege",
                    "oneshot": true,
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "Es wird wieder besser",
                    "text": "Es wird sicher auch wieder besser.",
                    "person": "Kollege",
                    "oneshot": true,
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "Weiß nicht weiter",
                    "text": "Da weiß ich jetzt auch nicht weiter.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Welche Schicht du hast",
                    "text": "Haben die dir anderen schon gesagt, welche Schicht dir zugeteilt wurde?",
                    "person": "Kollege",
                    "oneshot": true,
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "Erzähl ich Dir ein anderes Mal",
                    "text": "Das erzähl ich dir besser ein anderes Mal.",
                    "person": "Kollege",
                    "oneshot": true,
                    "successors": [
                        "finish"
                    ]
                },
                {
                    "id": "Seufz...Okay",
                    "text": "(Seufz) Okay.",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Nonverbal1 : Komm zum Punkt",
                    "text": "Nonverbal: Komm zum Punkt!",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Nonverbal2 : Pfhh!",
                    "text": "Nonverbal: Pfhh!",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Nonverbal3 : Kopfschütteln",
                    "text": "Nonverbal: Kopfschütteln",
                    "person": "Kollege",
                    "oneshot": true
                },
                {
                    "id": "Nonverbal4 : Empathisches Zuhören",
                    "text": "Nonverbal: Empathisches Zuhören",
                    "person": "Kollege",
                    "oneshot": true
                }
            ]

        }
        else {
            [];
        }

    }
}

export default data;
