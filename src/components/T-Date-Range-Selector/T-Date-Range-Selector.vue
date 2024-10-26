<script setup>
import {easepick} from '@easepick/core';
import {LockPlugin} from '@easepick/lock-plugin';

import Calender from "../icons/svg/Calender.vue";
import {onMounted} from "vue";
import {RangePlugin} from "@easepick/range-plugin";

const props = defineProps({
  departureDate: {
    type: String,
    required: false,
    default: ""
  },
  returnDate: {
    type: String,
    required: false,
    default: ""
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(["update-departure-date", "update-return-date"])

onMounted(() => {
  const picker = new easepick.create({

    element: document.getElementById('departure-date'),

    format: "DD-MM-YYYY",

    plugins: [
      LockPlugin,
      RangePlugin
    ],

    LockPlugin: {
      minDate: new Date(),
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },

    RangePlugin: {
      elementEnd: document.getElementById('return-date'),
      repick: true
    },

    // TODO: Add css to the plugin
    css: [
      'https://travelwith.taavani.gl/css/easepick.css',
      'https://cdn.jsdelivr.net/npm/@easepick/kbd-plugin@1.2.0/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@1.2.0/dist/index.css',
    ],

    autoApply: false,

    grid: 1,

    calendars: 1
  })
  picker.setStartDate(props.departureDate)
  picker.setEndDate(props.returnDate)
  picker.on('select',(e) => {
    emit('update-departure-date', document.getElementById('departure-date').value)
    emit('update-return-date', document.getElementById('return-date').value)
  })

})

</script>

<template>
  <div class="relative lg:flex-1">
    <div
        class="rounded-b-lg lg:rounded-lg shadow-sm bg-white border-t border-neutral-300 lg:border-0 flex flex-1 focus-within:z-10 focus-within:ring-2 focus-within:ring-taa-brand-blue focus-within:border-taa-brand-blue">
      <div
          class="flex justify-end items-center relative flex-1 pr-3 py-0">
        <label for="departure-date"
               class="sr-only">
          {{ $t('labels.departureDate') }}
        </label>
        <div class="absolute left-2 w-10">
          <calender class="stroke-neutral-400"></calender>
        </div>
        <input id="departure-date"
               type="text"
               class="rounded-l-lg block w-full border-white border-0 pl-10 py-2.5 pr-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
               :value="departureDate ?? ''"
               :disabled="disabled"
               :placeholder="$t('labels.departurePlaceholder')"
        />
      </div>
      <div
          class="relative flex-1 border-l border-neutral-300 pl-3 py-0">
        <label for="return-date"
               class="sr-only">
          {{ $t('labels.returnDate') }}
        </label>
        <input id="return-date"
               :disabled="!returnDate"
               type="text"
               class="block w-full border-white border-0 p-0 py-2.5 text-gray-900 placeholder-gray-500 rounded-br-lg lg:rounded-r-lg focus:ring-0 sm:text-sm"
               :value="returnDate ?? ''"
               :placeholder="$t('labels.returnPlaceholder')"
        />
      </div>
    </div>
  </div>
</template>

