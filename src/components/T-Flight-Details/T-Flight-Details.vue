<script setup>
import dayjs from 'dayjs'
import {parse} from "tinyduration"
import {ChevronUpIcon} from "@heroicons/vue/20/solid/index.js"
import {ChevronDownIcon} from "@heroicons/vue/20/solid/index.js"

import './T-Flight-Details.css'
import DepartureAirplane from "../icons/svg/Departure-Airplane.vue"
import {ref} from "vue";

defineProps({
  flight: {
    type: Object,
    required: true
  },
  dictionary: {
    type: Object,
    required: true
  }
})

const extended = ref(false)

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

</script>

<template>
  <div class="t-flight-details">
    <div class="header grid grid-cols-6">
      <div class="left">
        <p class="description">
          Departure date
        </p>
        <div class="date">
          {{
            ("0" + dayjs(flight.segments[0].departure.at).date()).slice(-2)
            + '-'
            + ("0" + dayjs(flight.segments[0].departure.at).month()).slice(-2)
            + '-'
            + ("0" + dayjs(flight.segments[0].departure.at).year()).slice(-2)
          }}
        </div>
      </div>
      <div class="right">
        <div class="departure ">
          <div class="description">
            {{ dictionary.locations[flight.segments[0].departure.iataCode][$i18n.locale].city }}
          </div>
          <div class="time">
            {{
              ("0" + dayjs(flight.segments[0].departure.at).hour()).slice(-2)
              + ':'
              + ("0" + dayjs(flight.segments[0].departure.at).minute()).slice(-2)
            }}
          </div>
        </div>
        <div class="journey ">
          <departure-airplane class="icon stroke">
          </departure-airplane>
          <p>{{ travelTime(flight) }}</p>
          <p v-if="flight.segments.length > 1">
            {{ flight.segments.length - 1 }}
            {{ $tc('flightOffers.stopover', (flight.segments.length - 1)) }}
          </p>
        </div>
        <div class="arrival">
          <div class="description">
            {{ dictionary.locations[flight.segments[flight.segments.length - 1].arrival.iataCode][$i18n.locale].city }}
          </div>
          <div class="time">
            {{
              ("0" + dayjs(flight.segments[flight.segments.length - 1].arrival.at).hour()).slice(-2)
              + ':'
              + ("0" + dayjs(flight.segments[flight.segments.length - 1].arrival.at).minute()).slice(-2)
            }}
          </div>
        </div>
        <div class="buttons ">
          <button @click="extended = !extended">
            <chevron-up-icon v-if="extended" class="icon text-neutral-400"></chevron-up-icon>
            <chevron-down-icon v-if="!extended" class="icon text-neutral-400"></chevron-down-icon>
          </button>
        </div>
      </div>
    </div>
    <div v-if="extended" class="body grid grid-cols-6">
      <div class="left"></div>
      <div class="right">
        <div class="journey">
          <div class="flex  items-center h-full py-1.5 w-full">
            <div class="mx-auto rounded-full border-neutral-200 border-4 h-5 w-5"></div>
            <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed" />
            <div class="mx-auto rounded-full border-black border-4 h-5 w-5"></div>
          </div>
          <div class="flex justify-between text-sm font-semibold">
            <p>{{ dictionary.locations[flight.segments[0].departure.iataCode][$i18n.locale].name }}</p>
            <p>{{ dictionary.locations[flight.segments[flight.segments.length - 1].arrival.iataCode][$i18n.locale].name}}</p>
          </div>
          <div class="flex text-sm text-neutral-400">
            <p>{{ dictionary.carriers[flight.segments[0].carrierCode] }}</p>
            <div class="px-1">|</div>
            <p>{{ dictionary.aircraft[flight.segments[0].aircraft.code] }}</p>
          </div>
        </div>
        <div class="padding"></div>
      </div>
    </div>
  </div>
</template>

