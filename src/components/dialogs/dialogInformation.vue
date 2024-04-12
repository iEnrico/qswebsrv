<template>
  <v-dialog
      v-model="dialog"
      persistent
      :max-width="options.width"
      :style="{ zIndex: options.zIndex }"
      @keydown.esc="cancel"
  >
    <v-card>
      <v-card-title
          v-show="!!title"
          class="pa-4 black--text"
          style="color: options.color;"
      >{{ title }}</v-card-title>
      <v-card-text
          v-show="!!message"
          class="pa-4 black--text"
          v-html="message"
      ></v-card-text>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn
            :color="options.color"
            class="body-2 font-weight-bold"
            outlined
            @click="ok"
        >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "InfoDlg",
  data() {
    return {
      dialog: false,
      resolve: null,
      message: null,
      title: null,
      options: {
        color: "#28B9AF",
        width: 400,
        zIndex: 200,
        noconfirm: false,
      },
    };
  },

  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    },
    ok() {
      this.resolve(true);
      this.dialog = false;
    },
  },
};
</script>
