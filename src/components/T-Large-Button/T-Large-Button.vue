<script setup>
import './T-Large-Button.css'

defineProps({
  title: {
    type: String,
    required: true,
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
  <button disabled class="t-large-button group relative overflow-hidden">
    <span class="coming-soon">
      Coming soon
    </span>

    <span class="title group-disabled:text-neutral-400">{{ title }}</span>
    <span class="description group-disabled:text-neutral-400">{{ description}}</span>

    <span class="fake-button group-disabled:bg-neutral-400 group-disabled:pointer-events-none">
      {{ buttonText }}
    </span>
  </button>

</template>
