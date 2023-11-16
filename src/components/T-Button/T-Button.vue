<script setup>
import {computed} from "vue"
import "./T-Button.css"

const props = defineProps({
  title: {
    default: 'Title',
    type: String
  },
  coat: {
    type: String,
    validator(value) {
      return [ 'liquid-blue', 'small-gray' ].indexOf(value) !== -1;
    }
  }
})

const classes = computed(() => ({
  't-button': true,
  [`t-button--${props.coat || 'solid-blue'}`]: true,
}))
</script>

<template>
  <button type="button" :class="classes" >
    {{ title }}
  </button>
</template>
