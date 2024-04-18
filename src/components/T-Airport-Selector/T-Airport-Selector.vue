<script setup>
import {ref} from "vue";

import SearchOptions from "./Search-Options.vue";
import DepartureAirplane from "../icons/svg/Departure-Airplane.vue";
import MapPin from "../icons/svg/Map-Pin.vue";

const props = defineProps({
  departureAirport: Object,
  arrivalAirport: Object,
  airports: Array,
  disabled: Boolean,
})

const emits = defineEmits(["search", "update-departure-airport", "update-arrival-airport"])

// Local state
const focus = ref(false)    // Toggle state true/false to show/hide search options
const airportId = ref(null) // Store the id of the airport input field departure/destination
const cursor = ref(0)       // Cursor to navigate through the search options

function input(value) {
  emits('search', value)
  cursor.value = 0
}

function onFocus(event) {
  // If disabled, do nothing
  if (props.disabled) {
    return
  }

  const {target} = event
  airportId.value = target.id
  focus.value = true
}

function onBlur(event) {
  if (event.relatedTarget && event.relatedTarget.nodeName !== 'UL') {
    airportId.value = null
    focus.value = false;
  }

  if (!event.relatedTarget) {
    airportId.value = null
    focus.value = false;
  }
}

function up(event, index) {
  if (focus) {
    document
        .getElementById('departure-option-' + cursor.value)
        .scrollIntoView({behavior: 'smooth', block: 'center'})
    cursor.value = Math.max(cursor.value - 1, 0)
  }
}

function down(event, index) {
  if (focus) {
    document
        .getElementById('departure-option-' + cursor.value)
        .scrollIntoView({behavior: 'smooth', block: 'center'})
    cursor.value = Math.min(cursor.value + 1, props.airports.length - 1)
  }
}

function click(click) {
  let airport = props.airports[cursor.value]

  if (Number.isInteger(click)) {
    airport = props.airports[click]
  }

  if (airportId.value === 'departure-airport') {
    emits('update-departure-airport', airport)
    emits('search', '')
  }

  if (airportId.value === 'destination-airport') {
    emits('update-arrival-airport', airport)
    emits('search', '')
  }
  cursor.value = 0
  focus.value = false
}

function tab(event) {
  if (event.target.id === 'departure-airport' && props.departureAirport === null) {
    event.preventDefault()
  }

  if (event.target.id === 'destination-airport' && props.arrivalAirport === null) {
    event.preventDefault()
  }
}

</script>

<template>
  <div class="relative flex lg:w-4/6 lg:mr-4">
    <div class="isolate inline-flex flex-col w-full ">
      <div class="flex-1 inline-flex">
        <div
            class="flex-1 flex items-center bg-white rounded-tl-lg lg:rounded-l-lg px-3 py-2 shadow-sm focus-within:z-10 focus-within:ring-2 focus-within:ring-brand-blue focus-within:border-brand-blue">
          <div class="pointer-events-none">
            <departure-airplane class="stroke-neutral-400"></departure-airplane>
          </div>
          <div class="ml-2">
            <label for="departure-airport" class="sr-only block"></label>
            <input
                type="text"
                id="departure-airport"
                name="departure-airport"
                :placeholder="$t('labels.departure')"
                :disabled="disabled"
                class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                autocomplete="off"
                :value="departureAirport ? departureAirport.name + ' (' + departureAirport.iata_code + ')' : ''"
                @focus="(event) => onFocus(event)"
                @blur="(event) => onBlur(event)"
                @input="(event) => input(event.target.value)"
                @keydown.up="(event) => up(event)"
                @keydown.down="(event) => down(event)"
                @keydown.enter="(event) => click(event)"
                @keydown.tab="(event) => tab(event)"
            />
          </div>
        </div>
        <div
            class="flex-1 flex items-center bg-white border-l border-neutral-300 rounded-tr-lg lg:rounded-r-lg px-3 py-2 shadow-sm focus-within:z-10 focus-within:ring-2 focus-within:ring-brand-blue focus-within:border-brand-blue">
          <div class="pointer-events-none">
            <arrival-airplane class="stroke-neutral-400"></arrival-airplane>
          </div>
          <div class="ml-2">
            <label for="departure-airport" class="sr-only block"></label>
            <input
                type="text"
                id="destination-airport"
                name="destination-airport"
                :placeholder="$t('labels.destination')"
                :disabled="disabled"
                class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                autocomplete="off"
                :value="arrivalAirport ? arrivalAirport.name + ' (' + arrivalAirport.iata_code + ')' : ''"
                @focus="(event) => onFocus(event)"
                @blur="(event) => onBlur(event)"
                @input="(event) => input(event.target.value)"
                @keydown.up="(event) => up(event)"
                @keydown.down="(event) => down(event)"
                @keydown.enter="(event) => click(event)"
                @keydown.tab="(event) => tab(event)"
            />
          </div>
        </div>
      </div>
    </div>
    <search-options v-if="focus === true">
      <template v-if="airportId === 'departure-airport'" v-slot:title>
        {{ $t('labels.departureHelperText') }}
      </template>

      <template v-if="airportId === 'destination-airport'" v-slot:title>
        {{ $t('labels.destinationHelperText') }}
      </template>


      <ul v-if="0 < airports.length" tabindex="-1" class="overflow-auto max-h-72">
        <li v-for="(airport, index) in airports"
            v-bind:id='"departure-option-" + index'
            @click="() => click(index)"
            :aria-selected="index === cursor"
            :key="airport.objectID"
            :class="{ 'bg-neutral-200/30': index === cursor }"
            class="flex items-center py-2 mr-1 border-b border-neutral-200 last:border-hidden hover:bg-neutral-200/30">
          <div>
            <map-pin class="h-6 w-6 stroke-neutral-400"></map-pin>
          </div>
          <div class="flex flex-col grow px-4">
            <p class="font-semibold">
              {{ airport.name }}
            </p>
            <p class="text-neutral-400">
              {{ airport.city }} {{ airport.country }}
            </p>
          </div>
          <div class="text-neutral-400 px-2">
            {{ airport.iata_code }}
          </div>
        </li>
      </ul>
    </search-options>
  </div>
</template>

