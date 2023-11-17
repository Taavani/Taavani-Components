<script setup>
import {ref} from "vue"
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import {VueTelInput} from 'vue-tel-input'

import './vue-tel-input.css'

const props = defineProps({
  phone: {
    type: String,
    default: '',
    required: true
  }
})

const emit = defineEmits([
  'update:phone'
])

const state = ref({
  phone: props.phone && ''
})

const v$ = useVuelidate({
  phone: {
    required,
    minLength: minLength(2)
  }
}, state)

function onValidate(validation) {
  if (validation.valid) {
    emit('update:phone', {
      formattedNumber: validation.formatted
    })
  }
}
</script>

<template>
  <div class="v-vue-tel-input">
    <h2 class="label">
      {{ $t('passengers.phone.label') }}
    </h2>
    <vue-tel-input mode="international"
                   v-model="state.phone"
                   required="true"
                    :inputOptions="{ placeholder: $t('passengers.phone.placeholder') }"
                   @blur="v$.phone.$touch()"
                   @validate="(value) => onValidate(value)"
                   :class="{ 'error': v$.phone.$error }"
    ></vue-tel-input>
    <div v-if="v$.$errors.length > 0" class="px-3 text-sm text-red-500" >
      <p :key="error.$uid" v-for="error of v$.$errors">
        {{ $t('passengers.errors.' + error.$property + '.' + error.$validator) }}
      </p>
    </div>
  </div>

</template>

