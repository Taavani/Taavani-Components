<script setup>
import './T-Large-Button.css'

defineProps({
  title: {
    type: String,
    required: true,
  },
  attentionText: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="t-large-button relative overflow-hidden">
    <span class="coming-soon">
      {{ attentionText }}
    </span>

    <span class="title ">{{ title }}</span>
    <span class="description ">{{ description}}</span>

    <span class="fake-button ">
      {{ buttonText }}
    </span>
  </button>

</template>
