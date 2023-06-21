<template>
  <v-container fluid class="pa-0 ma-0 fill-height">
    <v-row class="pa-0 ma-0 fill-height">
      <v-col :cols="12" style="height: 14%">
        <v-card
          variant="text"
          class="pa-0 ma-0 rounded-lg"
          style="height: 100%; display: flex; flex-direction: column"
        >
          <v-row align="center">
            <v-card-title>Patientenübersicht</v-card-title>
            <v-spacer></v-spacer>
            <v-card class="rounded-lg" variant="text" min-width="400">
              <v-card-text>
                <v-text-field
                  v-model="searchText"
                  :loading="loading"
                  density="compact"
                  variant="solo"
                  label="Patient suchen..."
                  append-inner-icon="mdi-magnify"
                  single-line
                  hide-details
                  @click:append-inner="onSearch"
                ></v-text-field>
              </v-card-text>
            </v-card>
            <v-btn
              variant="outlined"
              class="mt-0 mr-4"
              @click="
                this.$router.push({
                  name: 'DashboardTherapist3b',
                  params: {
                    data: JSON.stringify({
                      edit: true,
                      item: {
                        id: patientsStore.totalPatients,
                        text: '',
                        date: 1673482872000,
                        icon: 'mdi-account',
                      },
                    }),
                  },
                })
              "
            >
              + Neuer Patient
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="12" style="height: 86%">
        <v-card variant="elevated" class="rounded-lg">
          <v-btn
            class="pl-1 pt-1"
            style="height: 24px"
            variant="text"
            size="medium"
            :icon="
              sortmode == 0
                ? 'mdi-sort-alphabetical-descending'
                : 'mdi-sort-alphabetical-ascending'
            "
            :color="sortmode == 0 || sortmode == 1 ? '#28B9AF' : 'gray'"
            @click="sortmode == 0 ? (sortmode = 1) : (sortmode = 0)"
          ></v-btn>
          <v-btn
            class="pt-1"
            style="height: 24px; width: 16px"
            variant="text"
            size="medium"
            disabled="true"
            icon="mdi-tally-mark-1"
            color="gray"
          ></v-btn>
          <v-btn
            class="pr-1 pt-1"
            style="height: 24px"
            variant="text"
            size="medium"
            :icon="
              sortmode == 3
                ? 'mdi-sort-clock-descending-outline'
                : 'mdi-sort-clock-ascending-outline'
            "
            :color="sortmode == 2 || sortmode == 3 ? '#28B9AF' : 'gray'"
            @click="sortmode == 2 ? (sortmode = 3) : (sortmode = 2)"
          ></v-btn>

          <v-divider class="mt-2 mb-2"></v-divider>
          <PatientList :searchText="searchText" :sortmode="sortmode" />
        </v-card>
      </v-col>
    </v-row>
    <!--
    <v-card
      variant="text"
      class="pa-0 ma-0 rounded-lg"
      style="height: 100%; display: flex; flex-direction: column"
    >
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th
              class="text-left"
              @click="sortmode == 0 ? (sortmode = 1) : (sortmode = 0)"
            >
              Name
            </th>
            <th class="text-left">Group</th>
            <th class="text-left">Group</th>
            <th class="text-left">Group</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.items" :key="index">
            <td>
              <v-row no-gutters align="start" justify="start">
                <v-list-item-title
                  class="ml-2 mr-auto"
                  style="justify-self: start"
                  v-text="item.text"
                ></v-list-item-title>
              </v-row>
              <v-row no-gutters align="start" justify="start">
                <v-list-item-subtitle
                  class="ml-2 mr-auto"
                  style="justify-self: start"
                  v-text="parseDate(item.date)"
                ></v-list-item-subtitle>
              </v-row>
            </td>
            <td>{{ "c1" }}</td>
            <td>{{ "c2" }}</td>
            <td>{{ "c3" }}</td>
            <td>{{ "a" }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    -->
  </v-container>
</template>

<script>
import PatientList from "@/components/patientslist.vue";
import { usePatientsStore } from "@/stores/patientStore";
import { Patients } from "@/types/patient";
export default {
  name: "PatientsViewTherapist",
  setup() {
    const patientsStore = usePatientsStore();
    return {
      patientsStore,
    };
  },
  data: () => ({
    searchText: "",
    sortmode: 0,
    loaded: false,
    loading: false,
    items: null,
  }),
  components: { PatientList },
  mounted: function () {
    this.items = new Patients(this.patientsStore.getPatients).models;
    console.log(this.items);
  },
  methods: {
    onSearch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    parseDate(timecode) {
      return new Date(timecode).toLocaleDateString("de-DE", {
        // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        //second: "2-digit",
      });
    },
  },
};
</script>

<style></style>
