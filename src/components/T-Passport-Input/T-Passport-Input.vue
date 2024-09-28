<script setup>
import { ref} from 'vue'

import DateSelector from "./Date-Selector.vue";
import CountrySelector from "./Country-Selector.vue";

const passport = ref({
  type: 'PASSPORT', // VISA, PASSPORT, IDENTITY_CARD, KNOWN_TRAVELER, REDRESS
  number: null,
  issuanceLocation: null,
  issuanceDate: null, // DATE
  expiryDate: null, // DATE
  issuanceCountry: null, // ISO 3166-1 alpha-2 , pattern: [a-zA-Z]{2}
  nationality: null, // ISO 3166-1 alpha-2 , pattern: [a-zA-Z]{2}
  holder: true,
  birthPlace: null, // String
  validityCountry: null // ISO 3166-1 alpha-2 , pattern: [a-zA-Z]{2}
})
</script>

<template>
  <div class="flex flex-col">
    <label for="passportNumber" class="pl-3 text-neutral-500">
      Passport No.
    </label>
    <input id="passportNumber"
           type="number"
           name="passportNumber"
           class="border-neutral-300 text-gray-900 rounded-md focus:border-brand-dark-blue"
           placeholder="Passport No."
           required
           v-model="passport.number"
    />
  </div>

  <date-selector v-model="passport.issuanceDate"></date-selector>

  <date-selector v-model="passport.expiryDate"></date-selector>

  <label class="pl-3 text-neutral-500">
    Country of Issuance
  </label>
  <country-selector v-model="passport.issuanceCountry"
                    class-name="border-neutral-300 rounded-md w-full">
  </country-selector>

  <div class="flex flex-col">
    <label for="issuanceLocation" class="pl-3 text-neutral-500">
      Location
    </label>
    <input id="issuanceLocation"
           type="text"
           name="issuanceLocation"
           class="border-neutral-300 rounded-md focus:border-brand-dark-blue text-gray-900"
           placeholder="Location"
           required
           v-model="passport.issuanceLocation"
    />
  </div>

  <!-- Nationality selector -->
  <!-- Country selector -->
  <!-- Holder -->

  <p>Number: {{ passport.number}}</p>
  <p>issuanceLocation: {{ passport.issuanceLocation}}</p>
  <p>issuanceDate: {{ passport.issuanceDate }}</p>
  <p>expiryDate: {{ passport.expiryDate }}</p>
  <p>issuanceCountry: {{ passport.issuanceCountry }}</p>
  <p>nationality: {{ passport.nationality }}</p>
  <p>holder: {{ passport.holder }}</p>
</template>
