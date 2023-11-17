<script setup>
import {useVuelidate} from '@vuelidate/core'
import {required, minLength } from '@vuelidate/validators'

import './T-Name-Input.css'
import {computed} from "vue";

const props = defineProps({
  firstName: {
    type: String,
    default: '',
    required: true
  },
  lastName: {
    type: String,
    default: '',
    required: true
  },

})

const emit = defineEmits([
  'update:first-name',
  'update:last-name'
])

const v$ = useVuelidate({
  firstName: {
    required,
    minLength: minLength(2)
  },
  lastName: {
    required,
    minLength: minLength(2)
  }
},props)

const isFirstNameValid = computed(() => {
  return v$.value.firstName.$dirty ? !v$.value.firstName.$invalid : true
})

const isLastNameValid = computed(() => {
  return v$.value.lastName.$dirty ? !v$.value.lastName.$invalid : true
})


</script>

<template>
  <div class="t-name-input">
    <h2 :class="{ 'title': true, 'valid': v$.$dirty && isLastNameValid && isFirstNameValid }">
      {{ $t('passengers.name.title')}}
    </h2>
    <div class="holder">
      <div :class="{ 'first-name': true, 'error': !isFirstNameValid, 'valid': v$.firstName.$dirty && isFirstNameValid }">
        <label for="firstName" class="label">
          {{ $t('passengers.name.firstNameLabel')}}
        </label>
        <input id="firstName"
               type="text"
               name="firstName"
               :placeholder="$t('passengers.name.firstNameLabel')"
               class="input"
               required
               @blur="v$.firstName.$touch()"
               :value="firstName"
               @input="($event) => $emit('update:first-name', $event.target.value)"
        />
      </div>
      <div :class="{ 'last-name': true, 'error': !isLastNameValid, 'valid': v$.lastName.$dirty && isLastNameValid }">
        <label for="lastName" class="label">
         {{ $t('passengers.name.lastNameLabel') }}
        </label>
        <input id="lastName"
               type="text"
               name="lastName"
               :placeholder="$t('passengers.name.lastNameLabel')"
               class="input"
               @blur="v$.lastName.$touch()"
               required
               :value="lastName"
               @input="$emit('update:last-name', $event.target.value)"
        />
      </div>
    </div>
    <div v-if="v$.$errors.length > 0" class="px-3 text-sm text-red-500" >
      <p :key="error.$uid" v-for="error of v$.$errors">
        {{ $t('passengers.errors.' + error.$property + '.' + error.$validator) }}
      </p>
    </div>
  </div>
</template>

