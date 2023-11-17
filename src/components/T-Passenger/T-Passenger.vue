<script setup>
import {reactive, ref } from "vue"

import './T-Passenger.css'

import TButton from "../T-Button/T-Button.vue"
import TNameInput from "../T-Name-Input/T-Name-Input.vue"
import TEmailInput from "../T-Email-Input/T-Email-Input.vue"
import TVueTelInput from "../T-Vue-Tel-Input/T-Vue-Tel-Input.vue";

const INPUT = 'input'
const SELECT = 'select'

const mode = ref(INPUT)
const passenger = reactive({
  id: 0,
  name: {
    firstName: '',
    lastName: ''
  },
  gender: null,
  email: '',
  phone: {
    countryCallingCode: '',
    formattedNumber: '',
    number: ''
  }
})

</script>

<template>
  <div class="t-passenger">
    <div class="header">
      <div class="grow flex items-center">
        <img class="h-8 w-8 rounded-full mr-3"
             :src="'https://ui-avatars.com/api/?name=' + (passenger.name.firstName.length > 0 ? passenger.name.firstName[0] : 'p') + '&color=000000&background=D3F8F0'"
             alt=""
        />
        <h1>
          {{ passenger.name.firstName.length !== 0 ? passenger.name.firstName : 'Passenger ' + (passenger.id + 1)  }}
          {{ passenger.name.lastName.length !== 0 ? passenger.name.lastName : '' }}
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
          v-model:first-name="passenger.name.firstName"
          v-model:last-name="passenger.name.lastName"
      >
      </t-name-input>
      <t-email-input v-model:email="passenger.email"></t-email-input>
      <t-vue-tel-input v-bind:phone="passenger.phone.formattedNumber"
                       v-on:update:phone="(value) => passenger.phone = value">
      </t-vue-tel-input>
    </div>
    <div v-if="SELECT === mode" class="content-select-passenger">

    </div>
  </div>
</template>
