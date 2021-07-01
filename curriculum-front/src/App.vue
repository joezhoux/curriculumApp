<template>
  <v-app>
      <TopNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>
