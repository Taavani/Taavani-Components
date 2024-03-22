<script setup>
import { defineProps } from "vue";
import "./T-Days-Selector.css";

/**
 * @type {Prettify<Readonly<ExtractPropTypes<{onChoose: FunctionConstructor, options: ArrayConstructor}>>>}
 */
const props = defineProps({
  options: Array,
  onChoose: Function
})

/**
 * Helper function to check if the index is in the middle of the options array.
 *
 * @param index
 * @returns {boolean}
 */
function isMiddle(index) {
  return Math.floor(props.options.length / 2) === index
}

/**
 * Helper function to check if the current value is the lowest value in the array.
 *
 * @param currentValue
 * @returns {boolean}
 */
function isCurrentValueLowest(currentValue) {
  // Split Currency from string
  const lowestValue = Math.min(...props.options.map(option => option.value.split(" ")[1]));
  return parseInt(currentValue.split(" ")[1]) === lowestValue;
}

</script>

<template>
  <ul class="t-days-selector">
    <li v-for="(option, index) in options" class="bg-white items ">
      <button :class="{ 'outline outline-2 outline-neutral-400': isMiddle(index), 'text-green-700': isCurrentValueLowest(option.value), 'text-brand-dark-blue': !isCurrentValueLowest(option.value) }" class="button" @click="() => onChoose(option.label)">
        <span class="label">
          {{ option.label }}
        </span>
        {{ option.value }}
      </button>
    </li>
  </ul>
</template>