<script setup>

import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

const plan = ref('startup')

</script>

<template>
  <div >
    <RadioGroup v-model="plan" class="grid grid-cols-3">
      <RadioGroupLabel>Plan</RadioGroupLabel>
      <RadioGroupOption v-slot="{ checked }" value="startup">
        <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="business">
        <span :class="checked ? 'bg-blue-200' : ''">Business</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="enterprise">
        <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>