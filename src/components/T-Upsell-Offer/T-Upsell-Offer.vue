<script setup>
import {ref} from "vue";

import checked from '@heroicons/vue/24/outline/CheckIcon.js'
import noChecked from '@heroicons/vue/24/outline/CurrencyEuroIcon.js'
import TButton from "../T-Button/T-Button.vue";

const props = defineProps({
  offer: Object,
  onSelect: Function
})

const travelerPricings = props.offer.travelerPricings

const cabin = travelerPricings[0].fareDetailsBySegment[0].cabin

const amenities = travelerPricings[0].fareDetailsBySegment[0].amenities ?? []

const included = amenities.filter(amenity => amenity.isChargeable === false)
const excluded = amenities.filter(amenity => amenity.isChargeable === true)

const price = props.offer.price.grandTotal
const currency = props.offer.price.currency

const refund = ref({
  active: false,
  amount: 0
});
const exchange = ref({
  active: false,
  amount: 0
});

if (props.offer.fareRules) {
  let exchangeFare = props.offer.fareRules.rules.find((item) => {
    return item.category === 'EXCHANGE'
  })

  if (exchangeFare !== undefined
      && exchangeFare !== null
      && (!exchangeFare.notApplicable || exchangeFare.hasOwnProperty('maxPenaltyAmount'))) {
    exchange.value.active = true
    exchange.value.amount = exchangeFare.maxPenaltyAmount
  }

  let refundFare = props.offer.fareRules.rules.find((item) => {
    return item.category === 'REFUND'
  })

  if (refundFare !== undefined
      && refundFare !== null
      && (!refundFare.notApplicable || refundFare.hasOwnProperty('maxPenaltyAmount'))) {
    refund.value.active = true
    refund.value.amount = refundFare.maxPenaltyAmount
  }
}

</script>

<template>
  <div class="snap-center rounded-2xl py-4 px-4 bg-white mx-auto w-96 shadow border mb-3">
    <div class="w-full h-full inline-flex flex-col">
      <h1>
        <span class="font-bold text-xl text-brand-dark-blue pb-3">{{ price }}</span>
        {{ currency }}
      </h1>

      <p class="text-sm pt-2 pb-3">
        {{ $t('flightOfferExtended.cabin') }}:
        {{ cabin }}
      </p>

      <p v-if="!(included.length > 0) && exchange.active" class="text-sm pt-2 pb-3">
        {{ $t('flightOfferExtended.exchangeable', exchange.amount) }}
      </p>

      <p v-if="!(included.length > 0) && !exchange.active" class="text-sm pt-2 pb-3">
        {{ $t('flightOfferExtended.noExchange') }}
      </p>

      <p v-if="!(included.length > 0) && refund.active" class="text-sm pt-2 pb-3">
        {{ $t('flightOfferExtended.refundable', refund.amount) }}
      </p>

      <p  v-if="!(included.length > 0) && !refund.active" class="text-sm pt-2 pb-3">
        {{ $t('flightOfferExtended.noRefund') }}
      </p>

      <h2 v-if="included.length > 0" class="pb-2 uppercase font-light">
        {{ $t('flightOfferExtended.included') }}
      </h2>
      <ul v-if="included.length > 0" class="pb-3">
        <li v-for="bag in included" class="flex flex-col">
          <div class="flex">
            <checked class="h-5 w-5 text-gray-900" />
            <p class="pl-2 text-xs">
              {{ bag.description }}
            </p>
          </div>
        </li>
      </ul>

      <h2 v-if="excluded.length > 0" class="pb-2 uppercase font-light">
        {{ $t('flightOfferExtended.purchase')}}
      </h2>
      <ul v-if="excluded.length > 0" class="pb-3">
        <li v-for="meal in excluded" class="flex flex-col">
          <div class="flex">
            <no-checked class="h-5 w-5 text-gray-900" />
            <p class="pl-2 text-xs">
              {{ meal.description }}
            </p>
          </div>
        </li>
      </ul>

      <div class="grow"></div>

      <TButton :title="$t('flightOfferExtended.select')"
               @click="props.onSelect(props.offer)"
               class="w-full">
      </TButton>
    </div>
  </div>
</template>

<style scoped>

</style>