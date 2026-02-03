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
    <header class="flex flex-wrap items-baseline pb-2 gap-y-1 md:grid md:grid-cols-6">
      <time datetime="2024-10-10" class="font-medium text-lg md:text-xl md:col-span-1 mr-2 md:mr-0">{{ date }}</time>
      <h2 class="font-medium text-lg md:text-xl text-left md:col-span-4 mr-auto md:mr-0">{{ day }}</h2>
      <p v-html="description" class="font-medium text-lg md:text-xl text-right md:col-span-1 ml-auto md:ml-0"></p>
    </header>
    <div class="grid grid-cols-6">
      <ul class="grid col-span-6 md:grid-cols-1 gap-4 col-start-1 md:col-start-2 md:col-span-5 mb-4">
        <slot></slot>
      </ul>
    </div>
  </section>
</template>