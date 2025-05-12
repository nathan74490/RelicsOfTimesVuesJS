<template>
  <div class="wrapper">
    <h2 id="autoplay-example-heading">Autoplay</h2>

    <Splide
      aria-labelledby="autoplay-example-heading"
      :options="options"
      :has-track="false"
    >
      <div style="position: relative">
        <SplideTrack>
          <SplideSlide v-for="(src, index) in images" :key="index">
            <img :src="src" :alt="`Image ${index + 1}`">
          </SplideSlide>
        </SplideTrack>
      </div>

      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>

      <button class="splide__toggle">
        <span class="splide__toggle__play">Play</span>
        <span class="splide__toggle__pause">Pause</span>
      </button>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide';

const images = ref([
  '../assets/photodesgolmont.png',
  'https://via.placeholder.com/300x200/33FF57',
  'https://via.placeholder.com/300x200/3357FF',
  'https://via.placeholder.com/300x200/FFC300',
  'https://via.placeholder.com/300x200/DAF7A6'
]);

const options: Options = {
  rewind: true,
  gap: '1rem',
  autoplay: true,
  height: '15rem',
};
</script>
