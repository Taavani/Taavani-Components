<script setup>
import {reactive, ref, watch} from "vue"
import CheckCircle from '@heroicons/vue/20/solid/CheckCircleIcon'
import ChevronDownIcon from '@heroicons/vue/20/solid/ChevronDownIcon'
import ChevronUpIcon from '@heroicons/vue/20/solid/ChevronUpIcon'
import {useVuelidate} from "@vuelidate/core"
import {minLength, required, email} from "@vuelidate/validators"

import Traveler from './Passenger.js'
import './T-Passenger.css'

import TNameInput from "../T-Name-Input/T-Name-Input.vue"
import TEmailInput from "../T-Email-Input/T-Email-Input.vue"
import TVueTelInput from "../T-Vue-Tel-Input/T-Vue-Tel-Input.vue";
import TButton from "../T-Button/T-Button.vue";

const props = defineProps({
  traveler: {
    type: Object,
    default: () => {
      return {
        'travelerID': 0,
        'name': {
          'firstName': '',
          'lastName': '',
          'middleName': '',
          'secondLastName': ''
        },
        'dateOfBirth': null,
        'gender': null,
        'contact': {
          'addresseeName': '',
          'address': '',
          'language': '',
          'purpose': '',
          'phones': '',
          'companyName': '',
          'emailAddress': ''
        },
        'profilePhoto':''
      }
    }
  },
  employees: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const emits = defineEmits([
  'update'
])

/**
 * Constants for local state
 * @type {string}
 */
const INPUT = 'input'
const SELECT = 'select'

/**
 * Local state - The local state has 3 variables:
 *  mode: input | select
 *  extended: true | false
 *  passenger: Traveler
 *
 */
const mode = ref(INPUT)
const extended = ref(true)
const passenger = reactive(Traveler.fromTraveler(props.traveler))

/**
 * Validation logic
 */
let v$ = useVuelidate({
  name: {
    firstName: {
      required,
      minLength: minLength(2)
    },
    lastName: {
      required,
      minLength: minLength(2)
    },
  },
  contact: {
    emailAddress: {
      required,
      email
    }
  }
}, passenger)

/**
 * Validation helper. Checks if the traveler is valid
 * @returns {boolean}
 */
function isTravelerValid() {
  return v$.value.$anyDirty === true && v$.value.$invalid === false
}

function selectTraveler(employee) {
  passenger.name.firstName = employee.name.firstName
  passenger.name.lastName = employee.name.lastName
  passenger.contact.emailAddress = employee.contact.emailAddress
  passenger.contact.phones = employee.contact.phones
  extended.value = false
  v$.value.$touch()
}


function toggleMode(nextMode) {
  mode.value = nextMode
  if (!extended.value) {
    extended.value = true
  }
}

function onUpdatedPhone(phone) {
  passenger.contact.phones = [{
    deviceType: 'MOBILE',
    countryCallingCode: phone.countryCallingCode,
    number: phone.nationalNumber
  }]
  v$.value.$touch()
}

/**
 * Watcher for the passenger object. Emits the update event
 */
watch(passenger, (value) => {
  isTravelerValid() ? emits('update', passenger) : ''
})

</script>

<template>
  <div class="t-passenger">
    <div :class="{ header: true, 'pb-4': extended }">
      <div class="grow flex items-center pr-4">
        <img class="h-8 w-8 rounded-full mr-3"
             :src="'https://ui-avatars.com/api/?name=' + (passenger.name.firstName.length > 0 ? passenger.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0'"
             alt=""
        />
        <h1 class="grow text-neutral-600">
          {{ passenger.name.firstName.length !== 0 ? passenger.name.firstName : 'Passenger ' + (Number(passenger.id) + 1) }}
          {{ passenger.name.lastName.length !== 0 ? passenger.name.lastName : '' }}
        </h1>
        <div v-if="isTravelerValid()" class="w-8">
          <check-circle class="text-success-900"></check-circle>
        </div>
      </div>

     <div class="flex gap-2">
        <t-button v-if="SELECT === mode"
                  :title="$t('passengers.passengerDetails')"
                  coat="liquid-blue-small"
                  @click="toggleMode(INPUT)"
        >
        </t-button>
        <t-button v-if="INPUT === mode"
                  :title="$t('passengers.selectPassenger')"
                  coat="liquid-blue-small"
                  @click="toggleMode(SELECT)"
        >
        </t-button>
        <button v-if="!extended" type="button" class="group outline-none" @click="() => extended = !extended">
          <chevron-down-icon class="w-8 stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue "></chevron-down-icon>
        </button>
        <button v-if="extended" type="button" class="outline-none" @click="() => extended = !extended">
          <chevron-up-icon class="w-8 stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue "></chevron-up-icon>
        </button>
      </div>
    </div>
    <div v-if="INPUT === mode && extended" class="content-input">
      <t-name-input
          v-model:first-name="passenger.name.firstName"
          v-model:last-name="passenger.name.lastName"
      >
      </t-name-input>
      <t-email-input v-model:email="passenger.contact.emailAddress"></t-email-input>
      <t-vue-tel-input v-bind:phone="passenger.contact.phones[0]"
                       v-on:update:phone="(value) => onUpdatedPhone(value)">
      </t-vue-tel-input>
    </div>
    <div v-if="SELECT === mode && extended" class="content-select-passenger grid grid-cols-1 gap-3">
      <button :key="index" v-for="(employee, index) in employees"
              class="border border-neutral-300 rounded-xl px-4 py-3 flex outline-none items-center"
              @click='() => selectTraveler(employee)'
      >
        <img class="h-8 w-8 rounded-full mr-3"
             :src="employee.profilePhoto ? employee.profilePhoto : 'https://ui-avatars.com/api/?name=' + (employee.name.firstName.length > 0 ? employee.name.firstName[0] : 'p') + '&color=828282&background=D3F8F0'"
             alt=""
        />
        <span class="grow text-neutral-600">
          {{ employee.name.firstName.length !== 0 ? employee.name.firstName : 'Passenger ' + (Number(employee.id) + 1) }}
          {{ employee.name.lastName && employee.name.lastName.length !== 0 ? employee.name.lastName : '' }}
        </span>
      </button>
    </div>
  </div>
</template>
