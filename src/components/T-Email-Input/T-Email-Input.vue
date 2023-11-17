<script setup>
import { EnvelopeIcon } from '@heroicons/vue/20/solid'
import {email as emailValidator, required} from "@vuelidate/validators"
import {useVuelidate} from "@vuelidate/core"

import './T-Email-Input.css'
import {computed} from "vue";

const props = defineProps({
  email: {
    type: String,
    default: '',
    required: true
  }
})

const emit = defineEmits([
  'update:email'
])

const v$ = useVuelidate({
  email: {
    required,
    emailValidator
  }
}, props)

const isEmailValid = computed(() => {
  return v$.value.email.$dirty ? !v$.value.email.$invalid : true
})

</script>

<template>
  <div :class="{ 't-email-input': true, 'error': !isEmailValid }">
    <label for="email"
           :class="{ 'label': true, 'error': !isEmailValid }"
    >
      {{ $t('passengers.email.label') }}
    </label>
    <div class="holder">
      <div class="icon">
        <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input type="email"
             name="email"
             required
             id="email"
             @blur="v$.email.$touch()"
             :placeholder="$t('passengers.email.placeholder')"
             :value="email"
             @input="$emit('update:email', $event.target.value)"
             :class="{ 'input': true, 'error': !isEmailValid }" />
    </div>
    <div v-if="v$.$errors.length > 0" class="px-3 text-sm text-red-500" >
      <p :key="error.$uid" v-for="error of v$.$errors">
        {{ $t('passengers.errors.' + error.$property + '.' + error.$validator) }}
      </p>
    </div>
  </div>
</template>