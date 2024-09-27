<script setup>
import dayjs from 'dayjs'
import {parse} from "tinyduration"
import {ref} from "vue";
import {ChevronUpIcon} from "@heroicons/vue/20/solid/index.js"
import {ChevronDownIcon} from "@heroicons/vue/20/solid/index.js"
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: "global"});

import './T-Flight-Details.css'
import DepartureAirplane from "../icons/svg/Departure-Airplane.vue"

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

function calculateLayover(arrivalTime, departureTime) {

  let arrivalDate = new Date(arrivalTime)
  let departureDate = new Date(departureTime)
  let diff = Math.ceil(departureDate - arrivalDate)
  let days = Math.floor(diff / 86400000);
  let hours = Math.floor((diff % 86400000) / 3600000)
  let minutes = Math.round(((diff % 86400000) % 3600000) / 60000)

  return t('flightOffers.layover', {days: days, hours: hours, minutes: minutes})
}

</script>

<template>
  <div class="t-flight-details">
    <div class="header grid grid-cols-6">
      <div class="left hidden md:block">
        <p class="description">
          {{ $t('flightOfferExtended.departureDate') }}
        </p>
        <div class="date">
          {{
            ("0" + new Date(flight.segments[0].departure.at).getDate()).slice(-2)
            + '-'
            + ("0" + (new Date(flight.segments[0].departure.at).getMonth() + 1)).slice(-2)
            + '-'
            + new Date(flight.segments[0].departure.at).getFullYear()
          }}
        </div>
      </div>
      <div class="right">
        <div class="departure ">
          <div class="description">
            <span class="block md:hidden">
              {{ flight.segments[0].departure.iataCode }}
            </span>
            <span class="hidden md:block">
              {{ dictionary.locations[flight.segments[0].departure.iataCode][$i18n.locale].city }}
            </span>
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
          <departure-airplane class="icon stroke ">
          </departure-airplane>
          <p class="hidden md:block">{{ travelTime(flight) }}</p>
          <p v-if="flight.segments.length > 1" class="hidden md:block">
            {{ $t('flightOffers.stopover', (flight.segments.length - 1)) }}
          </p>
        </div>
        <div class="arrival">
          <div class="description">
             <span class="block md:hidden">
              {{ flight.segments[flight.segments.length - 1].arrival.iataCode }}
            </span>
            <span class="hidden md:block">
              {{
                dictionary.locations[flight.segments[flight.segments.length - 1].arrival.iataCode][$i18n.locale].city
              }}
            </span>

          </div>
          <div class="time">
            {{
              ("0" + dayjs(flight.segments[flight.segments.length - 1].arrival.at).hour()).slice(-2)
              + ':'
              + ("0" + dayjs(flight.segments[flight.segments.length - 1].arrival.at).minute()).slice(-2)
            }}
          </div>
        </div>
        <div class="buttons">
          <button @click="extended = !extended">
            <chevron-up-icon v-if="extended" class="icon text-neutral-400"></chevron-up-icon>
            <chevron-down-icon v-if="!extended" class="icon text-neutral-400"></chevron-down-icon>
          </button>
        </div>
      </div>
    </div>
    <div v-if="extended" class="body grid grid-cols-6">
      <div class="left hidden md:block"></div>
      <div class="right">
        <div class="flex flex-col w-full">
          <!-- Flight details single segment -->
          <div v-if="flight.segments.length === 1" class="flex w-full">
            <div class="journey">
              <div class="flex items-center h-full py-1.5 w-full">
                <div class="mx-auto rounded-full border-neutral-200 border-4 h-5 w-5"></div>
                <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed"/>
                <div class="mx-auto rounded-full border-black border-4 h-5 w-5"></div>
              </div>

              <div class="details">
                <p>{{ dictionary.locations[flight.segments[0].departure.iataCode][$i18n.locale].name }}</p>
                <p v-if="flight.segments.length === 1">
                  {{
                    dictionary.locations[flight.segments[flight.segments.length - 1].arrival.iataCode][$i18n.locale].name
                  }}
                </p>
                <div v-if="flight.segments.length > 1" class="flex flex-col">
                  <p>
                    {{ dictionary.locations[flight.segments[0].arrival.iataCode][$i18n.locale].name }}
                  </p>
                  <span class="font-medium text-right">
                  ({{
                      ("0" + dayjs(flight.segments[0].arrival.at).hour()).slice(-2)
                      + ':'
                      + ("0" + dayjs(flight.segments[0].arrival.at).minute()).slice(-2)
                    }})
                  </span>
                </div>
              </div>
            </div>
            <div v-if="flight.segments.length > 1" class="px-4 pt-1">
              {{ calculateLayover(flight.segments[0].arrival.at, flight.segments[1].departure.at) }}
            </div>
            <div v-if="flight.segments.length > 1" class="journey">
              <div class="flex items-center h-full py-1.5 w-full">
                <div class="mx-auto rounded-full border-neutral-200 border-4 h-5 w-5"></div>
                <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed"/>
                <div class="mx-auto rounded-full border-black border-4 h-5 w-5"></div>
              </div>
              <div class="details">
                <div class="flex flex-col">
                  <p>
                    {{ dictionary.locations[flight.segments[1].departure.iataCode][$i18n.locale].name }}
                  </p>
                  <span class="font-medium">
                    ({{
                      ("0" + dayjs(flight.segments[1].departure.at).hour()).slice(-2)
                      + ':'
                      + ("0" + dayjs(flight.segments[1].departure.at).minute()).slice(-2)
                    }})
                  </span>
                </div>
                <p>
                  {{
                    dictionary.locations[flight.segments[flight.segments.length - 1].arrival.iataCode][$i18n.locale].name
                  }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="flight.segments.length > 1">
            <div :key="index" v-for="(segment, index) in flight.segments" class="journey mb-4">
              <div class="flex items-center h-full py-1.5 w-full">
                <div class="mx-auto rounded-full border-neutral-200 border-4 h-5 w-5"></div>
                <hr class="mx-auto h-0 w-full border border-neutral-200 border-dashed"/>
                <div class="mx-auto rounded-full border-black border-4 h-5 w-5"></div>
              </div>

              <div class="details">
                <p>
                  {{ dictionary.locations[segment.departure.iataCode][$i18n.locale].name }}
                  <span class="font-medium">
                    ({{
                      ("0" + dayjs(segment.departure.at).hour()).slice(-2)
                      + ':'
                      + ("0" + dayjs(segment.departure.at).minute()).slice(-2)
                    }})
                    </span>
                </p>

                <p>
                  {{ dictionary.locations[segment.arrival.iataCode][$i18n.locale].name }}
                  <span class="font-medium">
                  ({{
                      ("0" + dayjs(segment.arrival.at).hour()).slice(-2)
                      + ':'
                      + ("0" + dayjs(segment.arrival.at).minute()).slice(-2)
                    }})
                  </span>
                </p>
              </div>

              <div class="flight-info flex flex-row">
                <p>{{ dictionary.carriers[segment.carrierCode] }}</p>
                <div class="px-1 hidden md:block">|</div>
                <p>{{ dictionary.aircraft[segment.aircraft.code] }}</p>
              </div>

              <div v-if="index+1 !== flight.segments.length">
                {{ calculateLayover(segment.arrival.at, flight.segments[index + 1].departure.at) }}
              </div>

            </div>
          </div>
        </div>
        <div class="padding"></div>
      </div>
    </div>
  </div>
</template>

