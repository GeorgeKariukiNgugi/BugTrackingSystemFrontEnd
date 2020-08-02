<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-form ref="form" v-model="valid">
        <v-row class=" py-15">
          <v-col cols="12" class=" offset-md-4 offset-xs-2" xs="8"  md="4" >
            <base-material-card class="v-card-profile" avatar="email">
              <v-card-text class="text-center">
                Register To Report A Bug.
              </v-card-text>
              <div v-show="showErrors">
                <v-alert
                  border="left"
                  v-for="value in errors"
                  dismissible
                  outlined
                  close-icon="delete"
                  :key="value"
                  type="error"
                >
                  {{ value[0] }}
                </v-alert>
              </div>
              <v-row>
                <v-col cols="12" class="offset-md-1 offset-sm-2" sm="8" md="10">
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      class="offset-md-1 offset-sm-1"
                      sm="10"
                      md="10"
                    >
                      <v-text-field
                        counter
                        v-model="name"
                        prepend-icon="face"
                        label="Name"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                      <v-text-field
                        :counter="10"
                        v-model="email"
                        prepend-icon="email"
                        label="Email Address"
                        required
                        :rules="[rules.required, rules.email]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="12" class="offset-md-1" md="10">
                      <v-text-field
                        prepend-icon="vpn_key"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        v-model="password"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="vpn_key"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[
                          rules.required,
                          rules.min,
                          rules.confirmPassword,
                        ]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Retype Password"
                        v-model="confirmPassword"
                        hint="At least 8 characters"
                        counter
                        @click:append="show2 = !show2"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      class=" offset-sm-4 offset-md-3 "
                      sm="4"
                      md="6"
                    >
                      <v-btn
                        @click="submitData()"
                        large
                        rounded
                        color="success"
                        dark
                      >
                        <span v-show="!registrationState"
                          ><v-icon>gavel</v-icon> Register User.</span
                        >
                        <v-progress-circular
                          v-show="registrationState"
                          :width="3"
                          color="white"
                          indeterminate
                        ></v-progress-circular
                      ></v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center">
                      <router-link
                        class="text-decoration-none"
                        color="blue lighten-5"
                        to="/login"
                      >
                        <p small text color="blue" dark>
                          Have An Account? Click To LogIn.
                        </p>
                      </router-link>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </base-material-card>
          </v-col>
        </v-row>
      </v-form>
    </v-img>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: false },
  },
  methods: {
    ...mapActions(["postRegisteringAUser", "unsettlingRegistrationState"]),

    submitData() {
      if (this.$refs.form.validate()) {
        this.registrationState = true;

        // ! call the action to post the data, with the appropriate data.
        var obj = {};
        obj["name"] = this.name;
        obj["email"] = this.email;
        obj["password"] = this.password;
        (obj["password_confirmation"] = this.password),
          this.$store.dispatch("postRegisteringAUser", obj);
      }
    },
  },
  data() {
    return {
      registrationState: false,
      showErrors: false,
      errors: null,
      email: "",
      name: "",
      confirmPassword: "",
      password: "",
      valid: false,
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
        email: (v) => /.+@.+/.test(v) || "E-mail must be valid",
        confirmPassword: (v) =>
          v === this.password || "Pasword Must Match To Retyped Password.",
      },
    };
  },

  // ! watching the registerState map getter.

  watch: {
    registeringState: function() {
      if (this.registrationState == true) {
        this.registrationState = false;
        this.$store.dispatch("unsettlingRegistrationState");
      }
    },

    errorsState: function() {
      this.errors = this.errorsState;
      this.showErrors = true;
    },
  },

  computed: {
    ...mapGetters(["registeringState", "errorsState"]),

    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>
