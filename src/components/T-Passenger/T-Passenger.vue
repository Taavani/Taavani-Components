<script setup>
import {reactive, ref, watch} from "vue"
import CheckCircle from '@heroicons/vue/20/solid/CheckCircleIcon'
import Traveler from './Passenger.js'
import './T-Passenger.css'

import TNameInput from "../T-Name-Input/T-Name-Input.vue"
import TEmailInput from "../T-Email-Input/T-Email-Input.vue"
import TVueTelInput from "../T-Vue-Tel-Input/T-Vue-Tel-Input.vue";
import {useVuelidate} from "@vuelidate/core";
import {minLength, required} from "@vuelidate/validators";

const props = defineProps({
  traveler: {
    type: Object,
    default: () => {
      return {
        'travelerID': 0,
        'type': 'Adult',
        'firstName': '',
        'lastName': '',
        'dateOfBirth': null,
        'gender': null,
        'email': '',
        'phone': ''
      }
    }
  },
})

const emits = defineEmits([
  'update'
])

const INPUT = 'input'
const SELECT = 'select'

const mode = ref(INPUT)
const passenger = reactive(new Traveler(props.traveler.travelerId, props.traveler.type))

let v$ = useVuelidate({
  firstName: {
    required,
    minLength: minLength(2)
  },
  lastName: {
    required,
    minLength: minLength(2)
  },
  email: {
    required,
    emailValidator: (value) => {
      return value.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    }
  },
  phone: {
    required,
    minLength: minLength(2)
  }
}, passenger)

function isTravelerValid() {
  return v$.value.$anyDirty === true && v$.value.$invalid === false
}

watch(passenger, (value) => {
  isTravelerValid() ? emits('update', passenger) : emits('update', null)
})

</script>

<template>
  <div class="t-passenger">
    <div class="header">
      <div class="grow flex items-center pr-4">
        <img class="h-8 w-8 rounded-full mr-3"
             :src="'https://ui-avatars.com/api/?name=' + (passenger.firstName.length > 0 ? passenger.firstName[0] : 'p') + '&color=000000&background=D3F8F0'"
             alt=""
        />
        <h1 class="grow">
          {{ passenger.firstName.length !== 0 ? passenger.firstName : 'Passenger ' + (Number(passenger.id) + 1) }}
          {{ passenger.lastName.length !== 0 ? passenger.lastName : '' }}

        </h1>
        <div v-if="isTravelerValid()" class="w-8">
          <check-circle class="text-success-900"></check-circle>
        </div>
      </div>

      <!--<div class="flex gap-2">
        <t-button title="Input"
                  coat="liquid-blue-small"
                  @click="mode = INPUT"
                  :disabled='INPUT === mode'>
        </t-button>
        <t-button title="Select"
                  coat="liquid-blue-small"
                  @click="mode = SELECT"
                  :disabled='SELECT === mode'>
        </t-button>
      </div>-->
    </div>
    <div v-if="INPUT === mode" class="content-input">
      <t-name-input
          v-model:first-name="passenger.firstName"
          v-model:last-name="passenger.lastName"
      >
      </t-name-input>
      <t-email-input v-model:email="passenger.email"></t-email-input>
      <t-vue-tel-input v-bind:phone="passenger.phone"
                       v-on:update:phone="(value) => passenger.phone = value.formattedNumber">
      </t-vue-tel-input>
    </div>
    <div v-if="SELECT === mode" class="content-select-passenger">

    </div>
  </div>
</template>
