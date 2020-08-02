<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-form ref="form" v-model="valid">
        <v-row class=" py-15">
          <v-col cols="12" class="offset-md-4 offset-sm-1" md="4" sm="10">
            <base-material-card class="v-card-profile" avatar="email">
              <v-card-text class="text-center">
                Sign in to start your session
              </v-card-text>
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
                        v-model="email"
                        prepend-icon="email"
                        label="Email"
                        required
                        :rules="[rules.required, rules.email]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row v-show="unsucessfullLogIn" no-gutters="">
                    <v-col
                      cols="12"
                      class="offset-md-1 offset-sm-1 text-center"
                      sm="10"
                      md="10"
                    >
                      <p class="red--text text--darken-5">
                        <v-icon class="red--text text--darken-5"
                          >report_problem</v-icon
                        >
                        The Credentials DoNot Match Our Records.
                      </p>
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
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      class=" text-center offset-sm-3 offset-md-3 "
                      sm="6"
                      md="6"
                    >
                      <v-btn
                        @click="submitData()"
                        large
                        rounded
                        color="success"
                        dark
                      >
                        <span v-show="!progress"
                          ><v-icon>lock_open</v-icon> Log In.</span
                        >
                        <v-progress-circular
                          v-show="progress"
                          :width="3"
                          color="white"
                          indeterminate
                        ></v-progress-circular>
                      </v-btn>                      
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center">
                      <!-- <a href="/registration" class="text-decoration-none" color="blue lighten-5">Don't Have An Account? Click To Register.</a> -->
                      <router-link
                        class="text-decoration-none"
                        to="/registration"
                      >
                        <p class="text-decoration-none" small text blue dark>
                          Don't Have An Account? Click To Register. {{postingProgressState + '   ' + logInStatus}}
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
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: false },
  },
  methods: {
    ...mapActions([
      "unsetLogInStatus",
      "postingLogInData",
      "unset_progress_state",
    ]),
    submitData() {
      if (this.$refs.form.validate()) {
        this.progress = true;
        this.progressText = true;
        // ! posting data to LogIn.
        var obj = {};
        obj["email"] = this.email;
        obj["password"] = this.password;

        this.$store.dispatch("postingLogInData", obj);
      }
    },
  },
  data() {
    return {
      progress: false,
      progressText: false,
      unsucessfullLogIn: false,
      email: "",
      password: "",
      valid: false,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
        email: (v) => /.+@.+/.test(v) || "E-mail must be valid",
      },
    };
  },

  computed: {
    ...mapGetters(["logInStatus", "postingProgressState"]),

    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },

  // ! watching the progress state.

  watch: {
    postingProgressState: function() {
      console.log("Change happened to Progress.");
      if (this.progress == true) {
        console.log("Change happened.");
        this.progress = false;        
        // ! unssetting the posting progres state.
        this.$store.dispatch("unset_progress_state");
      }
    },
    logInStatus: function(){
      console.log("Change happened to LogIn Status");
      if (this.logInStatus == false ) {
        this.logInStatus = true;
        this.$store.dispatch("unsetLogInStatus");
      }
    }
  },
};
</script>
