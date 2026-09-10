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

    passReq.emailAddressRequired = requirements.emailAddressRequired ?? false;
    passReq.mobilePhoneNumberRequired = requirements.mobilePhoneNumberRequired ?? false;
    passReq.genderRequired = requirements.travelerRequirements?.genderRequired ?? false;

    if (requirements.travelerRequirements) {
      const travelerReqs = requirements.travelerRequirements;
      let travelerReq;

      if (Array.isArray(travelerReqs)) {
        travelerReq = travelerReqs.find(req => req.travelerId === passenger.travelerId)
      } else {
        // travelerRequirements is an object keyed by travelerId string
        travelerReq = travelerReqs[passenger.travelerId]
      }

      if (travelerReq) {
        passReq.genderRequired = travelerReq.genderRequired ?? passReq.genderRequired
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
  const updatedPassengers = props.passengers.map(passenger =>
      passenger.travelerId === updatedPassenger.travelerId ? updatedPassenger : passenger
  );
  emits('update', updatedPassengers);
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