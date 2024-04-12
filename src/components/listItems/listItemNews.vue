<template>
  <ConfirmDlg ref="delete_note" />
  <div class="text-center">
    <v-dialog
      v-model="delete_dialog"
      width="40em"
    >
      <v-card class="pa-4 ma-4">
        <v-card-title class="ml-0 pl-2">
          {{this.item.title }} {{ parseDate(this.item.date) }}
        </v-card-title>
        <v-divider :thickness="1" class="mt-0 border-opacity-100" color="#f22"></v-divider>
        <v-card-text class="ml-0 pl-2 mb-4">
          {{this.item.text}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="delete_dialog = false"><span class="text-white">Ok</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <!--
  <v-hover v-for="(note, i) in item" :key="i">
    <template v-slot:default="{ isHovering, props }">

v-bind="props"
        overflow-y: auto; 
-->

      <v-row
        no-gutters
        class="pt-2"
        align="center"
        justify="start"
        :style="isHovering ? 'cursor: pointer; background-color: #CBE2DD' : 'cursor: pointer; background-color: white'"
        
      >
      <!--@click="showNews(note)"-->
      
        <v-col cols="12" sm="7">
          <v-list-item-title
            max-width="40px"
            class="ml-4 mr-auto"
            style="justify-self: start"
            v-text="this.item.text"
            @click="showNews(note)"
          ></v-list-item-title>
        </v-col>

        <!--
        <v-divider
          v-if="i != (item.length-1)"
          class="border-opacity-100"
          :thickness="1"
          color="#f22"
        >
        </v-divider>
        -->

        <v-spacer></v-spacer>

        <v-dialog v-model="edit_dialog" max-width="40%">
          <template v-slot:activator="{  }">

            <v-tooltip location="bottom" text="Editieren">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="mr-2" size="20" @click="edit_dialog=true" color="#DDDDDD" >{{ "mdi-pencil" }}</v-icon>
              </template>
            </v-tooltip>

            <!--
            <v-icon v-bind="props" class="mr-2" size="24" color="#DDDDDD" >{{ "mdi-pencil" }}</v-icon>
            -->

            <!--

              @click="editNote(note)"
              
            <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
              <span style="color: #28B9AF">hinzufügen</span>
            </v-btn>
            -->
          </template>
          <v-card justify="center" class="rounded-lg">
            <v-container fluid>
              <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
                <span style="color: #000">{{ "Notiz bearbeiten" }}</span>
              </v-card-title>
              <!--
              <v-text-field
                class="mt-4"
                model-value="Sample Note"
                clearable
                hide-details="auto"
                label="Title"
              ></v-text-field>
              -->
              <v-textarea
                class="mt-4"
                name="input-7-1"
                variant="filled"
                label="Notiz"
                max-rows="32"
                auto-grow
                v-model="updatedText"
              ></v-textarea>
            </v-container>
            <v-card-actions class="pa-4">
              <v-spacer></v-spacer>
              <v-btn variant="elevated" @click="edit_dialog = false"><span color="#000">Abbrechen</span></v-btn>
              <v-spacer></v-spacer>
              <v-btn variant="elevated" style="background-color: #28B9AF;" @click="updateNote"><span class="text-white">Übernehmen</span></v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-tooltip location="bottom" text="Löschen">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" class="mr-4" size="20" color="#DDDDDD" @click="removeNote(note)">{{ "mdi-delete" }}</v-icon>
          </template>
        </v-tooltip>
      </v-row>

        <!--style="align-self: top; position: absolute; right: 0;"
        /*parseDate(note.date)*/ 
        v-text="parseDate(note.date)"
        -->

      <v-row
        no-gutters
        class="pt-0"
        align="center"
        justify="start"
        :style="isHovering ? 'cursor: pointer; background-color: #CBE2DD' : 'cursor: pointer; background-color: white'"
        @click="showNews(note)"
      >
      
        <v-col cols="12" sm="5">
          <v-list-item-subtitle
            class="ml-4 mr-4"
            style="text-align: start;">
            <span class="text-xs">
              {{ this.item.createMoment }} 
            </span>
          </v-list-item-subtitle>
        </v-col>
        
        <!-- this.item.updateMoment -->

        <!--
        <v-col cols="12" sm="12">
          <v-list-item-subtitle
            class="ml-4 mr-4 mt-2 mb-2"
            style="justify-self: start">
            <div class="headerClass"> {{ "01.01.2024" }} </div>
          </v-list-item-subtitle>
        </v-col>
        -->

      </v-row>

      <v-divider
        v-if="i != (item.length-1)"
        class="border-opacity-100 mx-0 mt-2"
        :thickness="1"
        color="#f22"
      >
      </v-divider>

      <!--
    </template>
  </v-hover>
  -->
</template>

<script>
import { parseDate } from "@/scripts/common/utils";

import ConfirmDlg from "@/components/dialogs/dialogConfirmation.vue";

export default {
  name: "ListItemNews",
  data: () => ({
    delete_dialog: false,
    edit_dialog: false,
    updatedText: "",
    //note: null
  }),
  props: ["item", "index", "editNote", "deleteNote"],
  components: {ConfirmDlg},
  mounted: function () {
    //console.log("mounted: " + this.item)
    this.updatedText = this.item.text
  },
  updated: function () {
    //console.log("mounted: " + this.item)
    this.updatedText = this.item.text
  },
  methods: {
    showNews() {
      //this.note = note;
      this.delete_dialog = true;
    },
    async updateNote() {

      //alert("edit:\n" + this.item.text + ", " + this.updatedText)
      this.editNote(this.item, this.updatedText)
      this.edit_dialog = false

    },
    async removeNote() {
      var result = await this.$refs.delete_note.open(
            "Notiz löschen?",
            "Möchten sie diese Notiz wirklich löschen?\n\n" + this.item.text
      )
      if (result == true) {
        
        //alert("delete\n" + this.item.id + " , " + this.item.fhirPatientId)

        this.deleteNote(this.item)
        //await api.deletePatientNoteById(getUser(), this.item.fhirPatientId, this.item.id)

      }
      //
    },
    routeDetails: function () {
      this.$router.push({
        name: "Dashboard3b",
        //params: { data: JSON.stringify(this.item) },
      });
    },
    parseDate(timecode) {
      return parseDate(timecode)
    },
  },
};
</script>

<style>
.headerClass{
    display: block !important;
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*
v-row:hover {
  background-color: #4FAF9C40;
}*/
</style>
