<template>
  <div class="text-center section">
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      ><!--:class="attr.customData.class"-->
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="getElementStyle(attr)"
              style="cursor: pointer"
              @click="onClick(attr)"
            >
              <v-icon v-if="!attr.bar && attr.key != -1" small>{{
                getIconForType(attr.customData.type)
              }}</v-icon>
              {{ attr.customData.title }}
              <!-- 
              style="display: table"
              class="flex-grow overflow-y-auto overflow-x-auto"

              style="position: absolute; display: block"
              class="pa-0 ma-0"
              -->
              <v-tooltip
                v-if="attr.customData.tooltip"
                activator="parent"
                location="bottom"
              >
                <v-card
                  color="#ffffff"
                  class="pa-0 ma-0 flex"
                  variant="plain"
                  width="20em"
                >
                  {{ attr.customData.tooltip }}</v-card
                >
              </v-tooltip>
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import data from "../scripts/data/data.js";
import common from "@/scripts/common/common";
export default {
  name: "CalendarView",
  data() {
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: data.getCalenderEntries(),
    };
  },
  components: {},
  mounted: function () {},
  methods: {
    getElementStyle(item) {
      const before = this.isBeforeToday(item.dates);
      switch (item.customData.type) {
        case common.calendar_entry_type_audio:
          return before >= 0
            ? common.calendar_entry_color_audio
            : common.calendar_entry_color_audio2;
        case common.calendar_entry_type_session:
          return before >= 0
            ? common.calendar_entry_color_session
            : common.calendar_entry_color_session2;
        case common.calendar_entry_type_therapist:
          return before >= 0
            ? common.calendar_entry_color_therapist
            : common.calendar_entry_color_therapist2;
        default:
          return "";
      }
    },
    isBeforeToday(value) {
      // IMPORTANT !!!
      // currently dirty, please check the datamodel of 'value' parameter with json stringify
      // can has ranges, or repeats. And value array can has multiple elements not [0]
      //console.log(JSON.stringify(value[0]));

      // possible:
      // get actual month on first day of,
      // get ordinary steps,
      // create array with size of ordinary steps,
      // loop steps and store calculated day in array
      // compare all days

      const thisTime = value[0].startTime;

      const time = new Date();
      time.setHours(0);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      const anotherTime = time.getTime();

      /*console.log(
        thisTime +
          "/" +
          anotherTime +
          " is diff " +
          (thisTime - anotherTime) +
          " result: " +
          (thisTime < anotherTime ? -1 : thisTime == anotherTime ? 0 : 1)
      );*/
      return thisTime < anotherTime ? -1 : thisTime == anotherTime ? 0 : 1;
    },
    getIconForType(type) {
      switch (type) {
        case common.calendar_entry_type_session:
          return "mdi-notebook-outline";
        case common.calendar_entry_type_audio:
          return "mdi-play-circle-outline";
        case common.calendar_entry_type_therapist:
          return "mdi-account-heart-outline";
        default:
          return "mdi-close-circle-outline";
      }
    },
    onClick(item) {
      switch (item.customData.type) {
        case common.calendar_entry_type_audio:
          this.$router.push({
            name: "Dashboard3b",
            params: {
              data: JSON.stringify({
                text: "Tagebucheintrag 1",
                date: "09.01.2023 um 14:31 Uhr",
                icon: "mdi-volume-high",
                entries: [
                  {
                    question:
                      "Beschreiben Sie ausführlich was Sie in der vergangenden Woche über gemacht haben. Vivamus neque ante, viverra non luctus nec, molestie in mauris.",
                    audioPath: "audio1.ogg",
                  },
                  {
                    question:
                      "Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor. ",
                    audioPath: "audio2.ogg",
                  },
                  {
                    question:
                      "Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Vivamus neque ante, viverra non luctus nec, molestie in mauris.  Maecenas eu neque id leo vulputate faucibus ut vitae dolor.",
                    audioPath: "audio3.ogg",
                  },
                ],
              }),
            },
          });
          break;
        case common.calendar_entry_type_session:
          this.$router.push({
            name: "Dashboard2a",
            params: {
              data: JSON.stringify({
                title: "Web-Achtsamkeit",
                subtitle: "Lorem Ipsum 3",
                description:
                  "Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor. Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi. Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget mauris id, sagittis consectetur urna. Fusce quis congue arcu.",
                image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                progress: 2,
                max_progress: 3,
                duration: "30 Min.",
                course_type: common.course_type_web,
                requirements: [{ text: "Web-Achtsamkeit 1" }, { text: "Fragebogen" }],
                completed_parts: [
                  {
                    text: "12.10.2022 - Objektmeditation (Stein)",
                    type: "Web-Achtsamkeit 1",
                  },
                  { text: "04.10.2022 - Objektmeditation (Stock)", type: "Fragebogen" },
                ],
              }),
            },
          });
          break;
        case common.calendar_entry_type_therapist:
          console.log("not implemented yet!");
          break;
        default:
          console.log("not implemented yet!");
          break;
      }
    },
  },
};
</script>

<style>
.scrollbar {
  width: 0px;
}
.scrollbar-track {
  display: none;
}
.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}
.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
.custom-calendar.vc-container .vc-weeks {
  padding: 0;
}
.custom-calendar.vc-container .vc-weekday {
  background-color: #f8fafc;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 5px 0;
}
.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  min-height: 90px;
  min-width: 90px;
  overflow: auto;
  background-color: white;
}
.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}
.custom-calendar.vc-container .vc-highlights {
  background-color: #28b9af;
  opacity: 0.2;
}

/*
span .day-label {
  color: #621312;
  opacity: 0.2;
}*/

/* flex-start; // fixes compile error, but makes tooltip go crasy! */
/* flex-start; // fixes compile error, but makes tooltip go crasy! */

.custom-calendar.vc-container .vc-day-box-center-center {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transform-origin: 50% 50%;
}

.custom-calendar.vc-container .vc-highlight {
  border-color: #123123 !important;
  background-color: #28b9af !important;
  opacity: 0.2;
  width: 22px;
  height: 22px;
  margin-left: 1.5pt;
  margin-top: 0pt;
}
</style>
