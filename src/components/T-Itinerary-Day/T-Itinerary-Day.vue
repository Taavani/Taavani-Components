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
      <time datetime="2024-10-10" class="col-span-2 md:col-span-1  font-medium text-lg md:text-xl">{{ date }}</time>
      <h2 class="col-span-1 md:col-span-4 text-left font-medium text-lg  md:text-xl">{{ day }}</h2>
      <p v-html="description" class="col-span-3 md:col-span-1 text-right font-medium text-lg  md:text-xl"></p>
    </header>
    <div class="grid grid-cols-6">
      <ul class="grid col-span-6 md:grid-cols-1 gap-4 col-start-1 md:col-start-2 md:col-span-5 mb-4">
        <slot></slot>
      </ul>
    </div>
  </section>
</template>