<template>
  <v-card class="pa-4 ma-4" v-if="question_index < max_elements">
    <v-divider></v-divider>

    <v-row no-gutters align="start" justify="start" class="mt-2">
      <v-card-title>Frage #{{ question_index + 1 }}</v-card-title>
    </v-row>

    <v-row no-gutters align="start" justify="start">
      <v-card-subtitle class="pa-2 ma-2">
        {{ elements[question_index].question }}
      </v-card-subtitle>
    </v-row>

    <v-col v-if="elements[question_index].hasList">
      <v-card-subtitle class="pa-2 ma-2">Mögliche Themen:</v-card-subtitle>

      <v-list-item
        v-for="(item, i) in elements[question_index].list_items"
        :key="i"
        :value="item"
        active-color="#FFFFFF"
        rounded="xl"
      >
        <!--
      <v-card color="#FFFFFF" outlined tile>
        <v-row no-gutters>
          <v-list-item-title v-text="item.text" />
          <v-list-subheader v-text="item.date" />
        </v-row>
        <VoicePlayer class="pa-2 ma-2" />
      </v-card>
         -->
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
      </v-list-item>
    </v-col>

    <v-col v-if="elements[question_index].hasSubtext">
      <v-card-text class="ma-0 pa-0 ml-4 mr-4">
        {{ elements[question_index].subtext }}
      </v-card-text>
    </v-col>

    <v-spacer></v-spacer>

    <v-divider class="mt-2"></v-divider>

    <v-row align="end" justify="end" class="mt-1" v-if="question_index < max_elements">
      <v-card-subtitle>{{ question_index + 1 }} / {{ max_elements }}</v-card-subtitle>
    </v-row>
  </v-card>
  <v-container class="pa-4 ma-4 mt-16 mb-16" v-if="question_index === max_elements">
    <v-row align="center" justify="center">
      <v-icon size="148pt" color="#28B9AF">mdi-check-circle-outline</v-icon>
    </v-row>
    <v-row align="center" justify="center">
      <v-card-title>Vielen Dank!</v-card-title>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuestionVisual",
  data: () => ({}),
  props: ["question_index", "max_elements", "elements"],
  components: {},
  mounted: function () {},
  methods: {},
};
</script>

<style></style>
