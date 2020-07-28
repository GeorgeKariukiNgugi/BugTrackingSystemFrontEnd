<template>
  <v-app>
    <ucore-app-bar />
    <v-main>
      <section-hero-alt/>
      <section-about-our-product />
      <section-theme-features />
      <section-affiliates />
      <section-newsletter />
      <!-- <section-pro-features/> -->
      <section-info />
    </v-main>
    <ucore-footer />
  </v-app>
</template>

<script>
export default {
    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>

<style></style>
