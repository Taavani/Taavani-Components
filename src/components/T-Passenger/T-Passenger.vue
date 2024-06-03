<script setup>
import {reactive, ref, watch} from "vue"
import {useVuelidate} from "@vuelidate/core"
import {minLength, required, email} from "@vuelidate/validators"

import CheckCircle from '@heroicons/vue/20/solid/CheckCircleIcon'
import ChevronDownIcon from '@heroicons/vue/20/solid/ChevronDownIcon'
import ChevronUpIcon from '@heroicons/vue/20/solid/ChevronUpIcon'

import Traveler from './Passenger.js'
import './T-Passenger.css'

import TNameInput from "../T-Name-Input/T-Name-Input.vue"
import TEmailInput from "../T-Email-Input/T-Email-Input.vue"
import TVueTelInput from "../T-Vue-Tel-Input/T-Vue-Tel-Input.vue";
import TGenderInput from "../T-Gender-Input/T-Gender-Input.vue";
import TBirthdayInput from "../T-Birthday-Input/T-Birthday-Input.vue";

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
        'profilePhoto': ''
      }
    }
  },
  employees: {
    type: Array,
    default: () => {
      return []
    }
  },
  requirements: {
    type: Object,
    default: () => {
      return {
        'bookingRequirements': {
          'dateOfBirthRequired': false,
          'genderRequired': false,
          'documentRequired': false,
          'documentIssuanceCityRequired': false,
          'redressRequiredIfAny': false,
          'residenceRequired': false,
          'travelerRequirements': []
        }
      }
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

let rules = {
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
    }
  }
}

if (props.requirements.emailAddressRequired) {
  rules.contact.emailAddress = {
    required,
    email
  }
}

if (props.requirements.mobilePhoneNumberRequired) {
  rules.contact.phones = {
    required
  }
}

/*
if (props.requirements.dateOfBirthRequired) {
  rules.dateOfBirth = {
    required
  }
}

if (props.requirements.genderRequired) {
  rules.gender = {
    required
  }
}

/**
 * Validation logic
 */
let v$ = useVuelidate(rules, passenger)

/**
 * Validation helper. Checks if the traveler is valid
 * @returns {boolean}
 */
function isTravelerValid() {
  return v$.value.$anyDirty === true && v$.value.$invalid === false
}

/**
 * Selects a traveler from the list of employees
 * @param employee
 */

function selectTraveler(employee) {
  passenger.name.firstName = employee.name.firstName
  passenger.name.lastName = employee.name.lastName
  passenger.contact.emailAddress = employee.contact.emailAddress
  passenger.contact.phones = employee.contact.phones
  extended.value = false
  v$.value.$touch()
}

/**
 * Toggles the mode between input and select
 * @param nextMode
 */
function toggleMode(nextMode) {
  mode.value = nextMode
  if (!extended.value) {
    extended.value = true
  }
}

/**
 * Updates the phone number
 * @param phone
 */

function onUpdatedPhone(phone) {
  console.log(phone)
  if (phone.valid === true) {
    passenger.contact.phones = [{
      deviceType: 'MOBILE',
      countryCallingCode: phone.countryCallingCode,
      number: phone.nationalNumber
    }]
    v$.value.$touch()
  } else {
    passenger.contact.phones.length = 0
    v$.value.$touch()
  }
}
/*
function onUpdateGender(value) {
  passenger.gender = value
  v$.value.$touch()
}

/**
 * Watcher for the passenger object. Emits the update event
 */
watch(v$, (value) => {
  if (passenger) {
    passenger.valid = isTravelerValid()
    isTravelerValid() ? emits('update', passenger) : false
  }
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
          {{
            passenger.name.firstName.length !== 0 ? passenger.name.firstName : $t('passengers.placeholder', (Number(passenger.id) + 1))
          }}
          {{ passenger.name.lastName.length !== 0 ? passenger.name.lastName : '' }}
        </h1>
        <div v-if="isTravelerValid()" class="w-8">
          <check-circle class="text-success-900"></check-circle>
        </div>
      </div>

      <div class="flex gap-2">
        <!--<t-button v-if="SELECT === mode"
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
        </t-button>-->
        <button v-if="!extended" type="button" class="group outline-none" @click="() => extended = !extended">
          <chevron-down-icon
              class="w-8 stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue "></chevron-down-icon>
        </button>
        <button v-if="extended" type="button" class="outline-none" @click="() => extended = !extended">
          <chevron-up-icon
              class="w-8 stroke-neutral-400 text-neutral-400 group-focus-visible:text-brand-blue group-focus-visible:stroke-brand-blue "></chevron-up-icon>
        </button>
      </div>
    </div>

    <div v-if="INPUT === mode && extended" class="content-input">
      <t-name-input
          v-model:first-name="passenger.name.firstName"
          v-model:last-name="passenger.name.lastName"
      >
      </t-name-input>

      <t-birthday-input v-if="requirements.dateOfBirthRequired">

      </t-birthday-input>

      <t-gender-input v-if="requirements.genderRequired"
                      v-bind:gender="passenger.gender"
                      v-on:update:gender="(value) => onUpdateGender(value)"
      >
      </t-gender-input>

      <t-email-input v-if="requirements.emailAddressRequired"
                     v-model:email="passenger.contact.emailAddress"></t-email-input>

      <t-vue-tel-input v-if="requirements.mobilePhoneNumberRequired"
                       v-bind:phone="passenger.contact.phones[0] ? passenger.contact.phones[0].number : passenger.contact.phones[0]"
                       v-on:update:phone="(value) => onUpdatedPhone(value)"
      >
      </t-vue-tel-input>

      <div v-if="requirements.documentRequired">
        A document is required for the concerned traveler for the creation of the flight-order
      </div>

      <div v-if="requirements.documentIssuanceCityRequired">
        The issuance city of the document is required for the concerned traveler for the creation of the flight-order
      </div>

      <div v-if="requirements.redressRequiredIfAny">
        The redress is required if any for the concerned traveler for the creation of the flight-order
      </div>

      <div v-if="requirements.residenceRequired">
        The address is required for the concerned traveler for the creation of the flight-order
      </div>
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
