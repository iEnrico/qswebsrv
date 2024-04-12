<template>
    <InfoDlg ref="warning" style="z-index: 20001"/>
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <!--
        <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
          <span style="color: #28B9AF">hinzufügen</span>
        </v-btn>
        @click="route('/dashboard3a')"
        -->
        <v-btn v-bind="props" variant="elevated" style="background-color: #28B9AF;" class="ml-8 mt-4 mb-4 mr-0">
          <span class="text-white">+ Nutzer hinzufügen</span>
        </v-btn>
      </template>
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
            <span style="color: #000">{{ "Nutzer hinzufügen" }}</span>
          </v-card-title>
          <v-text-field
            class="mt-2"
            v-model="alias"
            :rules="[rules.required, rules.min]"
            clearable
            hide-details="auto"
            label="Alias*"
          ></v-text-field>
          <v-text-field
            class="mt-2"
            v-model="email"
            clearable
            hide-details="auto"
            label="Mail (optional)"
          ></v-text-field>
          <v-text-field
            class="mt-4"
            v-model="firstname"
            clearable
            hide-details="auto"
            label="Vorname"
          ></v-text-field>
          <v-text-field
            class="mt-2"
            v-model="lastname"
            clearable
            hide-details="auto"
            label="Nachname"
          ></v-text-field>
          <v-text-field
            class="mt-8"
            v-model="password"
            :append-icon="show_password_1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show_password_1 ? 'text' : 'password'"
            name="input-10-1"
            label="Nutzer Passwort*"
            hint="At least 8 characters"
            hide-details="auto"
            counter
            clearable
            @click:append="show_password_1 = !show_password_1"
          ></v-text-field>
          <v-text-field
            class="mt-2"
            v-model="password_repeat"
            :append-icon="show_password_2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show_password_2 ? 'text' : 'password'"
            name="input-10-1"
            label="Nutzer Passwort* (wiederholen)"
            hint="At least (3 for testing) 8 characters"
            hide-details="auto"
            counter
            clearable
            @click:append="show_password_2 = !show_password_2"
          ></v-text-field>
          <v-select
            class="mt-2"
            label="Role"
            v-model="role"
            :items="['PATIENT', 'THERAPIST', 'ADMIN']"
          ></v-select>
        </v-container>
        <v-card-actions class="px-4 pb-4">
          
          <v-btn variant="elevated" @click="cancel()"><span color="#000">Abbrechen</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="save()"><span class="text-white">Übernehmen</span></v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import InfoDlg from "@/components/dialogs/dialogInformation.vue";

export default {
  data() {
    return {
      dialog: false,
      role: "PATIENT",
      alias: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_repeat: "",
      show_password_1: false,
      show_password_2: false,
      rules: {
        required: value => !!value || 'Required.',
        min3: v => v.length >= 3 || 'Min 3 characters',
        min8: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },
  props: ["action"],
  components: {InfoDlg, },
  mounted: function () {
  },
  methods: {
    save: async function () {
      const MIN_PASS_LEN = 5
      if (!this.alias || this.alias.length <1) {
        await this.$refs.warning.open(
          "Hinweis",
          "Sie haben keinen Alias vergeben."
        )
      } else if (this.password.length < MIN_PASS_LEN)  {
        await this.$refs.warning.open(
          "Hinweis",
          "Das Passwort ist zu kurz. Bitte mindestens 8 Zeichen."
        )
      } else if (this.password != this.password_repeat) {
        await this.$refs.warning.open(
          "Hinweis",
          "Das eingegebene Passwort stimmt nicht überein."
        )
      } else {
        const sampledata = JSON.stringify({
          //fhirResourceId: "0",
          role: this.role,
          email: this.email,
          username: this.alias,
          password: this.password,
          name: this.firstname,
          lastName: this.lastname
        })
        this.action(sampledata)
        this.resetFields()
        this.dialog = false
      }
    },
    cancel: function() {
      this.dialog = false
    },
    resetFields: function() {
      this.role = "PATIENT"
      this.alias = ""
      this.firstname = ""
      this.lastname = ""
      this.email = ""
      this.password = ""
      this.password_repeat = ""
      this.show_password_1 = false
      this.show_password_2 = false
    },
  },
};
</script>

<style>
</style>
