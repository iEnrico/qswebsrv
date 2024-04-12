<template>
  <div class="text-center">
    <v-dialog
      v-model="show"
      width="40em"
    >
      <v-card class="pa-4 ma-4">
        <v-card-title class="ml-0 pl-2">
          {{$t("overlay_title")}}
        </v-card-title>
        <v-card-text class="ml-0 pl-2 mb-4">
          {{$t("overlay_info")}}
        </v-card-text>
        
        <v-switch 
        v-model="doSave"
        class="ml-4"
        label="Eingaben speichern"
        color="#28B9AF">
        </v-switch>
        <v-card-actions>
          <v-btn variant="elevated" style="background-color: #E5E5E7;" @click="abort(false, false)"><span class="text-black">{{$t("overlay_btn_cancel")}}</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="abort(true, doSave)"><span class="text-white">{{$t("overlay_btn_ok")}}</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  name: "FullscreenNavBarActions",
  watch: {
    visible: function () {
      this.show = this.visible
    },
  },
  data: () => ({
    show: false,
    doSave: true,
  }),
  props: [
    "visible", "abort"
  ],
  components: {
  },
  mounted: async function () {
  },
  methods: {
  },
};
</script>

<style></style>
