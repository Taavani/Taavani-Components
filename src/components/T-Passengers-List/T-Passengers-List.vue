<script setup>
import {defineProps} from 'vue'
import './T-Passengers-List.css'
import TPassenger from "../T-Passenger/T-Passenger.vue";

/**
 * Define the component properties.
 *
 * @type {Prettify<Readonly<ExtractPropTypes<{passengers: {type: ArrayConstructor, required: boolean}, requirements: {type: ObjectConstructor, required: boolean}}>>>}
 */
defineProps({
  passengers: {
    type: Array,
    required: true
  },
  requirements: {
    type: Object,
    required: true
  }
})

// Are all passengers information valid, activate the confirmation.
</script>

<template>
  <div class="t-passengers-list">
    <t-passenger :key="index"
                 :traveler="passenger"
                 v-for="(passenger, index) in passengers">

    </t-passenger>
  </div>
</template>
