<script setup>
import {onMounted} from "vue";

const props = defineProps({
  date: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

</script>

<template>
  <section>
    <header class="grid grid-cols-6 pb-2">
      <time datetime="2024-10-10" class="col-span-1 font-medium text-xl">{{ date }}</time>
      <h2 class="col-span-4 text-left font-medium text-xl">{{ day }}</h2>
      <p v-html="description" class="col-span-1 text-right font-medium text-xl"></p>
    </header>
    <div class="grid grid-cols-6">
      <ul class="grid grid-cols-1 gap-4 col-start-2 col-span-5 mb-4">
        <slot></slot>
      </ul>
    </div>
  </section>
</template>