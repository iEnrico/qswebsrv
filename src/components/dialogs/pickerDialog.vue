<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Titel des Dialogs</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at,
          magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem
          nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum
          in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut
          elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus
          morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris
          dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget
          rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent,
          elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel
          erat. Justo ex quisque nulla accusamus venenatis, sed quis.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
