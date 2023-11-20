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
const passenger = reactive(new Traveler(props.traveler.travelerId, props.traveler.type))

/**
 * Validation logic
 */
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
    email
  },
  phone: {
    required,
    minLength: minLength(2)
  }
}, passenger)

/**
 * Validation helper. Checks if the traveler is valid
 * @returns {boolean}
 */
function isTravelerValid() {
  return v$.value.$anyDirty === true && v$.value.$invalid === false
}

function toggleMode(nextMode) {
  mode.value = nextMode
  if (!extended.value) {
    extended.value = true
  }
}

/**
 * Watcher for the passenger object. Emits the update event
 */
watch(passenger, (value) => {
  isTravelerValid() ? emits('update', passenger) : emits('update', null)
})

</script>

<template>
  <div class="t-passenger">
    <div :class="{ header: true, 'pb-4': extended }">
      <div class="grow flex items-center pr-4">
        <img class="h-8 w-8 rounded-full mr-3"
             :src="'https://ui-avatars.com/api/?name=' + (passenger.firstName.length > 0 ? passenger.firstName[0] : 'p') + '&color=828282&background=D3F8F0'"
             alt=""
        />
        <h1 class="grow text-neutral-600">
          {{ passenger.firstName.length !== 0 ? passenger.firstName : 'Passenger ' + (Number(passenger.id) + 1) }}
          {{ passenger.lastName.length !== 0 ? passenger.lastName : '' }}

        </h1>
        <div v-if="isTravelerValid()" class="w-8">
          <check-circle class="text-success-900"></check-circle>
        </div>
      </div>

     <div class="flex gap-2">
        <t-button v-if="SELECT === mode"
                  :title="$t('Provide passenger details')"
                  coat="liquid-blue-small"
                  @click="toggleMode(INPUT)"
        >
        </t-button>
        <t-button v-if="INPUT === mode"
                  :title="$t('Select employee')"
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
          v-model:first-name="passenger.firstName"
          v-model:last-name="passenger.lastName"
      >
      </t-name-input>
      <t-email-input v-model:email="passenger.email"></t-email-input>
      <t-vue-tel-input v-bind:phone="passenger.phone"
                       v-on:update:phone="(value) => passenger.phone = value.formattedNumber">
      </t-vue-tel-input>
    </div>
    <div v-if="SELECT === mode && extended" class="content-select-passenger">
      <div v-for="employee in employees">
        {{ employee }}
      </div>
    </div>
  </div>
</template>
