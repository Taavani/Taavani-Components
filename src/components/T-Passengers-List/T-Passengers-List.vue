<script setup>
import {isProxy, onMounted, ref, toRaw, watch} from "vue";
import './T-Passengers-List.css'
import TPassenger from "../T-Passenger/T-Passenger.vue";

/**
 * Define the component properties.
 *
 * @type {Prettify<Readonly<ExtractPropTypes<{passengers: {type: ArrayConstructor, required: boolean}, requirements: {type: ObjectConstructor, required: boolean}}>>>}
 */
const props = defineProps({
  passengers: {
    type: Array,
    required: true
  },
  employees:{
    type: Array,
    required: true
  },
  requirements: {
    type: Object,
    required: true
  }
})

const passengerRequirements = ref([]);
const emits = defineEmits(['update'])

onMounted(function () {
  const { requirements, passengers } = props
  passengerRequirements.value = mapRequirementsToPassengers(toRaw(passengers), toRaw(requirements))
})

// Map requirements to passengers.
watch(() => props.requirements, (requirements) => {
  if (isProxy(requirements)) {
    const { passengers } = props
    passengerRequirements.value = mapRequirementsToPassengers(toRaw(passengers), toRaw(requirements))
  }
});

function mapRequirementsToPassengers (passengers, requirements) {
  let passengerRequirements = [];

  for (let i = 0; i < passengers.length; i++) {
    let passenger = passengers[i]
    let passReq = {};

    passReq.emailAddressRequired = props.requirements.emailAddressRequired ?? false;
    passReq.mobilePhoneNumberRequired = props.requirements.mobilePhoneNumberRequired ?? false;

    // Make sure there are any travelerRequirements
    if (requirements.travelerRequirements && Array.isArray(requirements.travelerRequirements)) {
      let travelerReq = requirements.travelerRequirements.find(function (req) {
        return req.travelerId === passenger.travelerId
      })

      if (travelerReq) {
        passReq.genderRequired = travelerReq.genderRequired ?? false
        passReq.documentRequired = travelerReq.documentRequired ?? false
        passReq.dateOfBirthRequired = travelerReq.dateOfBirthRequired ?? false
        passReq.residenceRequired = travelerReq.residenceRequired ?? false
        passReq.redressRequiredIfAny = travelerReq.redressRequiredIfAny ?? false
      }
    }

    passengerRequirements[passenger.travelerId] = passReq
  }
  return passengerRequirements;
}

function update(updatedPassenger) {
  let passengers = props.passengers;
  let updatedPassengerIndex = passengers.findIndex(passenger => passenger.travelerId === updatedPassenger.travelerId);
  passengers[updatedPassengerIndex] = updatedPassenger;
  emits('update', passengers);
}

// Are all passengers information valid, activate the confirmation.
</script>

<template>
  <div class="t-passengers-list">
    <t-passenger v-for="(passenger, index) in passengers"
                 :key="index"
                 :traveler="passenger"
                 :employees="employees"
                 :requirements="passengerRequirements[passenger.travelerId]"
                 @update="update"
    >
    </t-passenger>
  </div>
</template>
