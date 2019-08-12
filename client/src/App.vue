<template>
  <v-app>

    <HeaderComponent />
    
    <v-content>
      <router-view />
    </v-content>

    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from '@/shared/header.vue';
import FooterComponent from '@/shared/footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .v-content {
    background-color: rgba(25, 118, 210, .95);
  }
</style>