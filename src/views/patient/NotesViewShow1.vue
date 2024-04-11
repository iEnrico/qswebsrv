<template>
  <v-row
    class="pa-0 ma-0"
    style="background-color: white; justify-content: center; align-items: center"
  >
    <v-card-title v-if="item"> {{ item.title }} - {{ item.date }}</v-card-title>
    <v-spacer></v-spacer>
    <v-btn variant="flat" prepend-icon="mdi-close" :onclick="onClose">
      <!--  append-icon="mdi-account-circle"  -->
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      {{$t("overlay_btn_close")}}
      <!--
      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
      -->
    </v-btn>
  </v-row>
  <v-progress-linear
    :model-value="0"
    :max="100"
    height="3"
    color="#28B9AF"
    class="mr-16"
  ></v-progress-linear>
  <center>
    <v-card class="pa-8 mx-4 mt-4 mb-4 rounded-lg" variant="elevated" width="80%">
      <v-row class="pa-0 ma-0 fill-height">
        <v-col :cols="12">
          <v-list v-if="units.length" style="overflow-y: auto">
            <v-list-item
                v-for="(unit, i) in units"
                :key="i"
                class="pa-0 ma-0"
                align="center"
            >
              <v-card-title class="ma-0 pa-0 ml-4 mr-4 mb-2">
                {{unit.question}}
              </v-card-title>
              <v-card-text style="width:60%" v-html="unit.description"></v-card-text>
              <!--
              <div @click="playfile(unit)">klick me</div>
              <div @click="streamFile()">klick me</div>
              -->
              <ListItemPlayer class="mb-8" :elevated="false" item="audio1.ogg" :index="i" />
              <!--
                <ListItemPlayer class="mb-8" :elevated="false" :item="unit.audio" :index="i" />
              -->
              
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </center>
</template>

<script>
import ListItemPlayer from "@/components/listItems/listItemPlayer.vue";
import { ref } from 'vue';
import {
  getTextByLanguage,
  getDescriptionByLanguage
} from "@/scripts/common/utils";
import { Buffer } from 'buffer';
import { useCurrentSessionStore } from "@/stores/currentSessionStore";
import api from "@/scripts/api/api";
import { getUser } from "@/scripts/procedureEngine";
export default {
  name: "NotesViewShow1",
  components: { ListItemPlayer },
  setup() {

    const units = ref([]);
    const sessionStore = useCurrentSessionStore();

    return {
      units,
      sessionStore
    };
  },
  data: () => ({
    item: null,
  }),
  mounted: async function () {

    this.item = this.sessionStore.getItem

    const idProcedure = this.item.item.id;

    this.units = await Promise.all(this.item.item.units.map(async (unit) => {

      const unitId = unit.id;
      
      const userData = getUser();
      const userId = userData.id;
      const results = await api.getProcedureResults(userId, idProcedure, unitId);

      var buf = []
      var audio_data = null
      const resultId = results.data[0].id 
      audio_data = await api.getResultAudioFile(userId, idProcedure, unitId, resultId);
      //var audio_buf = null
      if (results.data && results.data.length > 0) {

        const resultId = results.data[0].id 
        audio_data = await api.getResultAudioFile(userId, idProcedure, unitId, resultId);
        console.log("Audio Data Response: " + audio_data)
        
/*
        if (audio_data) {
          
          //const audioblob = new Audio()
          //var blob = new Blob([audio_data], { type: 'audio/webm' })
          //var url = window.URL.createObjectURL(blob)        
          //audioblob.src = url
          //console.log("AUDIO SRC: " + audioblob.src)

          audio_buf = Buffer.from(audio_data, 'binary')
          const audio_b64 = audio_buf.toString('base64')
          console.log("Audio Decoded: " + audio_b64)

          const audio_b642 =  Buffer.from(audio_data).toString('base64')
          console.log("Audio Decoded2: " + audio_b642)

          //const testdata = this.getTestData1()
          //console.log("Real Audio: " + testdata)
          buf = new Uint8Array(atob(audio_b64).split("").map(function (c) {
              return c.charCodeAt(0);
          }));
          console.log("Buffer: " + buf)
        }
*/

      }
      
      return {
        question: getTextByLanguage(unit.activityUnit.contentPackage.translations, this.$i18n),
        description: getDescriptionByLanguage(unit.activityUnit.contentPackage.translations, this.$i18n),
        audio: audio_data,
        audio_buf: buf,
      };

    }));
  },
  methods: {
    getTextByLanguage: function (item, i18n) {
      return getTextByLanguage(item, i18n)
    },
    getDescriptionByLanguage: function (item, i18n) {
      return getDescriptionByLanguage(item, i18n)
    },
    onClose() {
      this.$router.push("/dashboard3");
    },
    streamFile: async function () {
      const userData = getUser();
      const userId = userData.id;
      
      const idProcedure = this.item.item.id;

      var octet = await api.getResultAudioFile(userId, idProcedure, 799, 3282)
      var blob = new Blob([octet], { type: "audio/ogg" })
      console.log(JSON.stringify(blob))

      const blobUrl = URL.createObjectURL(blob); 
      const a = document.createElement('a'); 
      a.style.display = 'none'; 
      a.href = blobUrl; 
      a.download = 'audio_file.mp3'; // set the desired filename 
      document.body.appendChild(a); 
      a.click(); 
      document.body.removeChild(a); 
      //var test = new Audio( URL.createObjectURL( blob ))
      //test.play()
    },
    playfile(unit) {

      console.log("unit.audio: " + unit.audio)

      // NOT USED----START
      var str = ""
      var data = Buffer.from(str, 'base64');
      console.log("converted bytes: " + data)
      // NOT USED----END

      const blob = new Blob([unit.audio_buf], { type: "audio/ogg" });
      //const blob = new Blob([unit.audio], {type: "octet/stream"})
      const audioblob = new Audio(window.URL.createObjectURL(blob));
      audioblob.play()
      
    },
  },
};
</script>
