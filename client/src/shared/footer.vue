<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-layout
      justify-center
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-4
        text-center
        white--text
        xs12
      >
        {{ new Date().getFullYear() }} — <strong>Chromispos Report Builder</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Contact Us',
      ],
    }),
  }
</script>
