<template>
  <center v-if="!notes_info_seen">
    <v-card class="pa-8 mx-4 mt-16 rounded-lg" variant="elevated" width="50%" align-content="start" justify="center">
        <v-col :cols="12" align="start" justify="start">
          <v-row dens align="start" justify="start">
            <v-card-title>Willkommen zu Ihrem Tagebuch!</v-card-title>
          </v-row>
          <v-row dens align="start" justify="start" style="white-space: pre-wrap;">
            <v-card-text class="ma-8 pa-0 ml-4 mr-4 text-start">
              <p>Selbstreflexion ist ein wesentlicher Bestandteil auf dem Weg zur Bewältigung von Depressionen. Indem Sie bewusst über Ihre Gedanken, Gefühle und Erlebnisse nachdenken, können Sie wichtige Muster erkennen und Strategien entwickeln, um den Umgang mit Ihrer Depression zu erlernen.</p>
              <p>Ein sprachbasiertes Tagebuch kann Ihnen dabei helfen, diesen Prozess zu erleichtern. Anstatt Ihre Gedanken aufzuschreiben, können Sie sie einfach aussprechen. Dies kann besonders hilfreich sein, wenn das Schreiben für Sie eine Herausforderung darstellt.</p>
              <p>Durch regelmäßige Einträge in Ihr sprachbasiertes Tagebuch können Sie Ihre Gedanken, Gefühle und Erlebnisse festhalten und diese erneut anhören. Es bietet Ihnen einen sicheren Raum, um Ihre Emotionen auszudrücken, sich selbst zu reflektieren und Ihre Fortschritte zu verfolgen.</p>
              <p>Um Sie dabei zu unterstützen, Ihre Woche zu reflektieren, haben wir vier Fragen vorbereitet. Diese fokussieren sich auf Ihre Erlebnisse, Aktivitäten und Gefühle der letzten Woche. Die Antworten auf die Fragen werden Sie sprachbasiert festhalten. Diese werden nach der Aufnahme gespeichert. Es gibt nach der Aufnahme die Möglichkeit Ihre Einträge neu aufzunehmen.</p>
              <p>Für diese Übung empfehlen wir, sich 5-10 Minuten Zeit zu nehmen. Es ist ratsam, sich an einem ruhigen Ort aufzuhalten, um Ihre Gedanken klar und präzise ausdrücken zu können und Hintergrundgeräusche zu vermeiden. Beantworten Sie die Fragen möglichst frei und ausführlich. Bei der Beantwortung der Fragen gibt es keine richtigen oder falschen Antworten.</p>
              <p>Als nächstes werden Sie zu Ihrem ersten Tagebucheintrag geleitet, um mit der Selbstreflexion zu beginnen. Sobald Sie bereit sind, beginnen Sie mit Ihrem Eintrag.</p>
            </v-card-text>
          </v-row>
          <v-row dens align="center" justify="center">
            <v-btn variant="elevated" style="background-color: #28B9AF;" @click="action()">
              <span class="text-white">Ok</span>
            </v-btn>
          </v-row>
        </v-col>
    </v-card>
  </center>
</template>

<script>
export default {
  name: "NotesView",
  data: () => ({
  }),
  props: [
    "action"
  ],
  components: {
  },
  mounted: function () {
  },
  methods: {
  },
};
</script>

<style>
.text-start p{margin-bottom:10px}
</style>
