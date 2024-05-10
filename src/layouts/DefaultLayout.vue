<template>
  <div class="h-screen flex flex-col">
    <Header />
    <LandingPageBackground />

    <div class="grow relative mb-10">
      <router-view class="h-full" />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/LayoutComponents/Header/index.vue'
import LandingPageBackground from '@/components/Backgrounds/LandingPageBackground.vue'
import Footer from '@/components/LayoutComponents/Footer/index.vue'
</script>
