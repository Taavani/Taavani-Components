<script setup>
import {isProxy, ref, watch} from "vue";
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

// Map requirements to passengers.
watch(() => props.requirements, (requirements) => {
  if (isProxy(requirements)) {

    for (let i = 0; i < props.passengers.length; i++) {
      let passenger = props.passengers[i];
      let requirements = {};

      requirements.emailAddressRequired = props.requirements.emailAddressRequired ?? false;
      requirements.mobilePhoneNumberRequired = props.requirements.mobilePhoneNumberRequired ?? false;

      // If traveller requirements are set, add them to the requirements.
      /*
      if (props.requirements.travelerRequirements && props.requirements.travelerRequirements.length > 0) {
        let requirementsForTraveler = props.requirements.travelerRequirements.find(travelerRequirement => travelerRequirement.travelerId === passenger.travelerId);
        if (requirementsForTraveler) {
          requirements.dateOfBirthRequired = requirementsForTraveler.dateOfBirthRequired ?? false;
          requirements.documentRequired = requirementsForTraveler.documentRequired ?? false;
          requirements.genderRequired = requirementsForTraveler.genderRequired ?? false;
          requirements.redressRequiredIfAny = requirementsForTraveler.redressRequiredIfAny ?? false;
          requirements.residenceRequired = requirementsForTraveler.residenceRequired ?? false;
        }
      }
      */

      passengerRequirements.value[passenger.travelerId] = requirements;
    }
  }
});

const emits = defineEmits(['update'])

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
