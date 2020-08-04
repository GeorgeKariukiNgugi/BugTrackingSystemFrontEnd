<template>
 <v-navigation-drawer v-model="drawer" color="#FFFFFF 0.7" absolute src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" app id="drawer">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav  app>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/profile">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Profile.</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cart">
            <v-list-item class="hidden-md-and-up">
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cart</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
// import {mapGetters} from 'vuex';
  export default {
    name: 'DashboardCoreDrawer',  
  }
</script>

<style lang="css"> 

 #drawer{

 }
a{
  text-decoration: none;
}
</style>
