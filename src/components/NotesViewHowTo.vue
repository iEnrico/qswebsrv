<template>
  <center v-if="!notes_info_seen">
    <v-card class="pa-8 mx-4 mt-16 rounded-lg" variant="elevated" width="50%" align-content="start" justify="center">
        <v-col :cols="12" align="start" justify="start">
          <v-row dens align="start" justify="start">
            <v-card-title>Wie funktioniert das Tagebuch?</v-card-title>
          </v-row>
          <v-row dens align="start" justify="start">
            <v-card-text class="ma-8 pa-0 ml-4 mr-4 text-start">
              Vivamus neque ante, viverra non luctus nec, molestie in mauris. Fusce et
              volutpat diam, ut suscipit nulla. Fusce venenatis odio pellentesque lacinia
              tincidunt. Maecenas eu neque id leo vulputate faucibus ut vitae dolor.
              Vestibulum enim erat, condimentum eu quam vel, volutpat ultrices nisi.
              Maecenas placerat, sem a efficitur tempus, massa dui fringilla dui, vestibulum
              sollicitudin orci ligula nec leo. Etiam rhoncus fringilla aliquet. Nulla
              sollicitudin dignissim sem vel ultricies. Maecenas augue lorem, euismod eget
              mauris id, sagittis consectetur urna. Fusce quis congue arcu.
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

<style></style>
