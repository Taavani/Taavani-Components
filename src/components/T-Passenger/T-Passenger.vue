<script setup>
import {reactive, ref} from "vue"
import Traveler from './Passenger.js'
import './T-Passenger.css'

import TButton from "../T-Button/T-Button.vue"
import TNameInput from "../T-Name-Input/T-Name-Input.vue"
import TEmailInput from "../T-Email-Input/T-Email-Input.vue"
import TVueTelInput from "../T-Vue-Tel-Input/T-Vue-Tel-Input.vue";

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
        'phone': null
      }
    }
  },
})

const INPUT = 'input'
const SELECT = 'select'

const mode = ref(INPUT)
const passenger = reactive(new Traveler(props.traveler.travelerID, props.traveler.type))
</script>

<template>
  <div class="t-passenger">
    <div class="header">
      <div class="grow flex items-center">
        <img class="h-8 w-8 rounded-full mr-3"
             :src="'https://ui-avatars.com/api/?name=' + (passenger.firstName.length > 0 ? passenger.firstName[0] : 'p') + '&color=000000&background=D3F8F0'"
             alt=""
        />
        <h1>
          {{ passenger.firstName.length !== 0 ? passenger.firstName : 'Passenger ' + (passenger.id + 1) }}
          {{ passenger.lastName.length !== 0 ? passenger.lastName : '' }}
        </h1>

      </div>

      <div class="flex gap-2">
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
      </div>
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
