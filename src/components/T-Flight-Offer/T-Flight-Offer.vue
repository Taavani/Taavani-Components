<script setup>
import {parse} from "tinyduration"
import DepartureAirplane from "../icons/svg/Departure-Airplane.vue";
import "./T-Flight-Offer.css"

const props = defineProps({
  offer: Object
})

const dictionary = props.offer.dictionary

const bookingClass = props.offer.travelerPricings[0].fareDetailsBySegment[0].brandedFare
    ?? props.offer.travelerPricings[0].fareDetailsBySegment[0].cabin

const exchange = props.offer.fareRules ? props.offer.fareRules.rules.find((item) => {
  return item.category === 'EXCHANGE'
}) : {notApplicable: true}

const refund = props.offer.fareRules ? props.offer.fareRules.rules.find((item) => {
  return item.category === 'REFUND'
}) : {notApplicable: true}

/**
 * Helper function to check if two dates are the same.
 * @param firstDate
 * @param secondDate
 * @returns {boolean}
 */
function sameDate(firstDate, secondDate) {
  let f = new Date(firstDate)
  let s = new Date(secondDate)

  return f.getDate() === s.getDate()
      && f.getMonth() === s.getMonth()
      && f.getFullYear() === s.getFullYear()
}

/**
 * Helper function to calculate the travel time.
 *
 * @param segment
 * @returns {string}
 */
function travelTime(segment) {

  if (!segment.duration) {
    return ''
  }

  let time = parse(segment.duration);
  let timeText = '';

  if (time.hours) {
    timeText += time.hours + ' h '
  }

  if (time.minutes) {
    timeText += time.minutes + ' m '
  }

  return timeText
}

function formatMonth(date) {
  let d = new Date(date)
  let month = d.getMonth() + 1
  return ("0" + month).slice(-2)
}
</script>

<template>
  <li class="flight-offer">
    <a type="button"
       class="small"

    >
      <div
          class="md:w-4/6 py-2 md:py-4 px-2 md:px-4 flex rounded-t-xl bg-white md:shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)]">

        <div class="w-full flex justify-between items-center px-2 md:px-4">
          <!-- Departure -->
          <div>
            <p class="text-sm">
             <!-- {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].city }}
              ( {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].name }} ) -->
            </p>
            <p class="text-xl font-bold">
              {{
                ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)
              }}:{{
                ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)
              }}
            </p>
            <p class="text-xs">
              {{
                ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                + '-'
                + ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getMonth()).slice(-2)
                + '-'
                + new Date(offer.itineraries[0].segments[0].departure.at).getFullYear()
              }}
            </p>
          </div>

          <!-- offer information -->
          <div class="text-center ">
            <departure-airplane class="stroke-neutral-400"></departure-airplane>
            <p class="text-xs">{{ travelTime(offer.itineraries[0]) }}</p>
            <p v-if="offer.itineraries[0].segments.length > 1" class="text-xs">
              {{ offer.itineraries[0].segments.length - 1 }}
              <!-- {{ $tc('flightOffers.stopover', (offer.itineraries[0].segments.length - 1)) }} -->
            </p>
          </div>

          <!-- Arrival -->
          <div class="text-right">
            <p class="text-sm">
              {{
                offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.iataCode
              }}
            </p>
            <p class="text-xl font-bold">
              {{
                ("0" + new Date(offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)
              }}:{{
                ("0" + new Date(offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)
              }}
            </p>
            <p class="text-xs">
             <!-- {{
                sameDate(offer.itineraries[0].segments[0].departure.at, offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at)
                    ? $t('flightOffers.sameDay') : $t('flightOffers.notSameDay')
              }}-->
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 h-[20px]">
        <div class="left-lower-corner border-l-2 border-neutral-300"></div>
        <div class="right-lower-corner  border-dashed"></div>
        <div class="right-upper-corner border-l-2  border-neutral-300"></div>
        <div class="left-upper-corner border-dashed"></div>
      </div>

      <div
          class="md:w-2/6 py-2 md:py-4 px-4 items-center rounded-b-xl bg-white shadow-[0_20px_10px_-15px_rgba(0,110,184,0.08)] flex md:flex-col justify-between md:justify-end">
        <div class="w-1/2 text-xs">
          {{ dictionary.carriers[offer.validatingAirlineCodes[0]] }} | {{ bookingClass }}
        </div>
        <div class="w-1/2  text-right ">
          <div class="text-xs">
           <!-- {{ $t('flightOffers.priceFrom') }} -->
          </div>
          <div class="text-brand-dark-blue font-bold">
            {{ offer.price.grandTotal }}
            {{ offer.price.currency }}
          </div>
        </div>
      </div>
    </a>

    <a type="button" class="large group group-focus-visible:ring-0 group-focus-visible:outline-0" style="outline: none" tabindex="0">
      <div class="itinerary group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-2 group-focus:border-r-white group-focus:border-brand-dark-blue">
        <div class="first-row">
          <div class="departure">
            <p class="airport">
             {{ offer.dictionary.locations[offer.itineraries[0].segments[0].departure.iataCode][$i18n.locale].city }}
              ({{ offer.itineraries[0].segments[0].departure.iataCode }})
            </p>
            <p class="time">
              <time >
                {{
                  ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getHours()).slice(-2)
                }}:{{
                  ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getMinutes()).slice(-2)
                }}
              </time>
            </p>
            <p class="date">
              <time >
                {{
                  ("0" + new Date(offer.itineraries[0].segments[0].departure.at).getDate()).slice(-2)
                  + '-'
                  + formatMonth(offer.itineraries[0].segments[0].departure.at)
                  + '-'
                  + new Date(offer.itineraries[0].segments[0].departure.at).getFullYear()
                }}
              </time>
            </p>
          </div>

          <div class="travel-time-holder">
            <departure-airplane class="icon"></departure-airplane>
            <p class="text">
              <time>
                {{ travelTime(offer.itineraries[0]) }}
              </time>
            </p>
            <p v-if="offer.itineraries[0].segments.length > 1"
               class="text">
              {{ offer.itineraries[0].segments.length - 1 }}
              {{ $t('flightOffers.stopover', (offer.itineraries[0].segments.length - 1)) }}
            </p>
          </div>

          <!-- Arrival -->
          <div class="arrival">
            <p class="airport">
              {{ offer.dictionary.locations[offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.iataCode][$i18n.locale].city }}
              ({{ offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.iataCode }})
            </p>
            <p class="time">
              {{
                ("0" + new Date(offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at).getHours()).slice(-2)
              }}:{{
                ("0" + new Date(offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at).getMinutes()).slice(-2)
              }}
            </p>
            <p class="date">
             {{
                sameDate(offer.itineraries[0].segments[0].departure.at, offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at)
                    ? $t('flightOffers.sameDay') : $t('flightOffers.notSameDay')
              }}
            </p>
          </div>
        </div>
        <div class="second-row flex">
          <p>
            {{ dictionary.carriers[offer.validatingAirlineCodes[0]] }}
          </p>
          <p class="text-right font-medium">
            {{ $t('flightOffers.refund').toUpperCase() }}: <span v-if="refund.notApplicable" class="font-extrabold text-red-700">✘</span><span v-if="!refund.notApplicable" class="font-extrabold text-green-700">✓</span>
            | {{ $t('flightOffers.exchange').toUpperCase() }}: <span v-if="exchange.notApplicable" class="font-extrabold text-red-700">✘</span><span v-if="!exchange.notApplicable" class="font-extrabold text-green-700">✓</span>
          </p>
        </div>
      </div>

      <div class="divider">
        <div class="left-upper-corner group-focus:border-t-2 group-focus:border-b-white group-focus:border-l-white group-focus:border-r-white group-focus:border-brand-dark-blue"></div>
        <div class="right-upper-corner"></div>
        <div class="right-lower-corner"></div>
        <div class="left-lower-corner"></div>
      </div>

      <div class="pricing group-focus:border-t-2 group-focus:border-b-2 group-focus:border-l-white group-focus:border-r-2 group-focus:border-brand-dark-blue">
        <div class="holder">
          <p v-if="offer.numberOfBookableSeats < 9"
               class="warning">
           {{ $t('flightOffers.seats', offer.numberOfBookableSeats) }}
          </p>
          <p class="text">
           {{ $t('flightOffers.priceFrom') }}
          </p>
          <div class="price">
            {{ offer.price.grandTotal }}
            {{ offer.price.currency }}
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>
</style>
