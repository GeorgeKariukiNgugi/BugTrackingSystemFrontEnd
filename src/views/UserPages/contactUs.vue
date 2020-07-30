<template>

   <v-app>
    <ucore-app-bar/>
    <v-main>         
        <section-hero-alt :name="pageName"/>
        <section-keep-in-touch/>
        <section-map/>
        <section-newsletter/>
        <!-- <section-pro-features/> -->
    </v-main>
    <ucore-footer/>
  </v-app>

</template>

<script>
export default {
      data: () => ({
      pageName:'Contact Us',      
    }),
}
</script>

<style>

</style>