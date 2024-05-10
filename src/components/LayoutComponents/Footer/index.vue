<template>
  <div class="w-full flex justify-center pt-10 bg-[url('@/assets/background/dotbackground.jpeg')]">
    <div class="bg-gray-100 pt-[100px] pb-[30px] rounded-2xl w-[60%] text-center">
      <p class="text-md font-extrabold mb-10">Trusted by 25k+ business</p>
      <div class="flex justify-center flex-wrap">
        <div v-for="item in useBusinessStore().business" :key="item.name" class="px-10 mb-10">
          <div :class="item.design"><img :src="item.icon" />{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//store
import { useBusinessStore } from '@/stores/business'
</script>
