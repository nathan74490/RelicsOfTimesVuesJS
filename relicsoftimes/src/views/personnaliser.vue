<template>
  <div style="margin-top: 20vh;">
    <div id="page_personnaliser">
      <div style="width: 20vw;">
        <div v-if="activeCarousel === 'images'">
          <VerticalLogoCarousel :images="images" @logoSelected="handleLogoSelected" />
        </div>
      </div>

      <div id="carte">
        <svg width="425" height="620" style="border-radius: 15px;" xmlns="http://www.w3.org/2000/svg">
          <rect width="425" height="620" class="mon-rectangle" :style="{ fill: selectedColor }" />
        </svg>
        <img id="ContourCarte" src="../assets/ContourCarte.png" alt="Contour carte" />
        <img :src="selectedLogo" alt="logo sélectionné"
             style="min-width: 200px;max-width: 427px; min-height: 200px; max-height: 542px; z-index: 1000; position: absolute; align-self: center;"
             v-if="selectedLogo" />
      </div>

      <MenuPagePersonnaliser @select="handleSelection" @addToCart="addToCart" />
    </div>

    <div v-if="activeCarousel === 'colors'">
      <ScrollCarousel :colors="colors" @colorSelected="handleColorSelection" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuPagePersonnaliser from '../components/MenuPagePersonnailser.vue'
import ScrollCarousel from '../components/ScrollCarousel.vue'
import VerticalLogoCarousel from '../components/VerticalLogoCarousel.vue'
import { useCartStore } from '@/stores/cart'
import defaultLogo from '@/assets/logos/logo_default.png'
import { useRouter } from 'vue-router'
const router = useRouter()

const cartStore = useCartStore()
const activeCarousel = ref('')
const selectedColor = ref(null)
const selectedLogo = ref(defaultLogo)

const colors = [
  '#FF5733', '#A3CB38', '#3357FF', '#F1C40F', '#9B59B6',
  '#1ABC9C', '#E67E22', '#6AB04C', '#E74C3C', '#3498DB',
  '#F39C12', '#8E44AD', '#16A085', '#D35400', '#27AE60', '#2980B9'
]

const imageModules = import.meta.glob('@/assets/logos/*.{svg,png,jpg,jpeg}', { eager: true })
const images = Object.values(imageModules).map(mod => mod.default)

function handleSelection(type) {
  activeCarousel.value = type
}

function handleColorSelection(color) {
  selectedColor.value = color
}

function handleLogoSelected(logo) {
  selectedLogo.value = logo
}

function addToCart(discount = 0) {
  const originalPrice = 39.99
  const finalPrice = originalPrice - (originalPrice * discount / 100)

  cartStore.addToCart({
    id: Date.now(),
    custom: `Carte personnalisée - Couleur: ${selectedColor.value}, Logo: ${selectedLogo.value}`,
    delivery: "20/05/2025",
    originalPrice: originalPrice,
    discount: discount,
    price: finalPrice.toFixed(2),
    quantity: 1
  })

  router.push('/shoppingcart')
}
</script>

<style scoped>
body {
  background-color: black;
}

#page_personnaliser {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

#carte {
  height: 620px;
  width: 425px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

#ContourCarte {
  position: absolute;
  height: 620px;
  width: 425px;
  z-index: 500;
}

.mon-rectangle {
  fill: #4a4949;
  stroke: none;
  stroke-width: 5px;
}
</style>