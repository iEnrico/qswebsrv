<template>
    <v-dialog v-model="dialog" max-width="40%">
      <template v-slot:activator="{ props }">
        <!--
        <v-btn v-bind="props" variant="flat" prepend-icon="mdi-plus" >
          <span style="color: #28B9AF">hinzufügen</span>
        </v-btn>
        @click="route('/dashboard3a')"
        -->
        <v-btn v-bind="props" variant="elevated" style="background-color: #28B9AF;" class="mt-0 ml-4 mr-0">
          <span class="text-white">+ Nutzer hinzufügen</span>
        </v-btn>
      </template>
      <v-card justify="center" class="rounded-lg">
        <v-container fluid>
          <v-card-title class="pa-0 mt-0 mb-0 ml-2 mr-0" center>
            <span style="color: #000">{{ "Nutzer erstellen" }}</span>
          </v-card-title>
          <v-text-field
            class="mt-2"
            v-model="alias"
            :rules="[rules.required, rules.min]"
            clearable
            hide-details="auto"
            label="Alias"
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
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Nutzer Passwort"
            hint="At least 8 characters"
            hide-details="auto"
            counter
            clearable
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            class="mt-2"
            v-model="password_repeat"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Nutzer Passwort (wiederholen)"
            hint="At least 8 characters"
            hide-details="auto"
            counter
            clearable
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-select
            class="mt-2"
            label="Role"
            v-model="role"
            :items="['PATIENT', 'THERAPIST', 'ADMIN']"
          ></v-select>
        </v-container>
        <v-card-actions class="px-4">
          <v-spacer></v-spacer>
          <v-btn variant="elevated" @click="cancel()"><span color="#000">Abbrechen</span></v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" style="background-color: #28B9AF;" @click="save()"><span class="text-white">Übernehmen</span></v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
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
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || 'Required.',
        min3: v => v.length >= 3 || 'Min 3 characters',
        min8: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },
  props: ["action"],
  components: {},
  mounted: function () {
    //alert(this.action);
  },
  methods: {
    save: function () {
      if (!this.alias || this.alias.length <1) {
        alert("please enter a alias")
      }
      else if (this.password != this.password_repeat) {
        alert("passwords don't match!")
      } else {
        const sampledata = JSON.stringify({
          //fhirResourceId: "0",
          role: this.role,
          email: this.email,
          username: this.alias,
          password: this.password,
          name: this.firstname,
          lastName: this.lastname
        });
        this.action(sampledata);
        //this.dialog = false;
      }
    },
    cancel: function() {
      this.dialog = false;
    }
  },
};
</script>

<style>
</style>
