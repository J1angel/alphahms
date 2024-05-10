<template>
  <header>
    <nav
      class="mx-auto flex max-w-[65%] items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <div class="py-6 px-3">
          <img src="@/assets/icons/alphaIcon.jpeg" class="w-[200px] h-[50px]" />
        </div>
      </div>
      <div class="hidden lg:flex lg:gap-x-12 px-10">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">About Us</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact Us</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-center">
        <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-[200px]">
          Login
        </button>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
