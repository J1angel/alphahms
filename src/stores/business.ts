import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Business } from '@/types/business'

export const useBusinessStore = defineStore('business', () => {
  const business = ref<Business[]>([
    { name: 'ProSaas', icon: '', design: 'text-xl font-bold' },
    { name: '', icon: 'src/assets/icons/business/nolcity.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/mata.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/brand.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/techhouse.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/bitmax.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/target.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/classic.png', design: 'w-[120px]' },
    { name: '', icon: 'src/assets/icons/business/buildup.png', design: 'w-[120px]' }
  ])
  return { business }
})
