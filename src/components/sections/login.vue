<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-row class=" py-15">
        <v-col cols="12" class="offset-md-4 offset-sm-1" md="4" sm="10">
          <base-material-card
            class="v-card-profile"
            avatar="email"
          >
            <v-card-text class="text-center">
              Sign in to start your session
            </v-card-text>
            <v-row>
              <v-col cols="12" class="offset-md-1 offset-sm-2" sm="8" md="10">
                <v-row no-gutters>
                  <v-col cols="12" class="offset-md-1 offset-sm-1" sm="10" md="10">
                    <v-text-field                                          
                      :counter="10"
                      prepend-icon="email"                      
                      label="Email"
                      required
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
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" class=" offset-sm-4 offset-md-4 " sm="4" md="4" >
                   <v-btn large rounded color="success" dark>     <v-icon>lock_open</v-icon>  Log In.</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </base-material-card>
        </v-col>
      </v-row>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: false },
  },

    data(){
      return {
      show1: false,
       rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
     
    },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>
