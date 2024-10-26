<script setup>
import {onMounted, defineProps, defineEmits} from "vue";
import {easepick} from '@easepick/core';
import {LockPlugin} from '@easepick/lock-plugin';

import './T-Date-Selector.css';

import Calender from "../icons/svg/Calender.vue";

const props = defineProps({
  departureDate: {
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

const emit = defineEmits(["update"])

onMounted(() => {
  const picker = new easepick.create({

    element: document.getElementById('departure-date'),

    format: "DD-MM-YYYY",

    plugins: [
        LockPlugin
    ],

    LockPlugin: {
      minDate: new Date(),
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },

    KbdPlugin: {
      dayIndex: 2,
    },

    // TODO: Add css to the plugin
    css: [
      'https://travelwith.taavani.gl/css/easepick.css',
      'https://cdn.jsdelivr.net/npm/@easepick/kbd-plugin@1.2.0/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@1.2.0/dist/index.css',
    ],

    autoApply: false
  })

  picker.setDate(props.departureDate)
  picker.on('select', (date) => {
    emit('update', document.getElementById('departure-date').value)
  })
})

</script>

<template>
  <div class="relative lg:flex-1">
    <div class="flex justify-end items-center relative">
      <input id='departure-date'
             type="text"
             class="rounded-b-lg shadow-sm bg-white block w-full lg:rounded-lg border-t border-x-0 border-b-0 border-neutral-300 lg:border-white lg:border-0 p-0 pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 sm:text-sm focus:z-10 focus:ring-2 focus:ring-brand-blue focus:border-taa-brand-blue"
             :value="departureDate"
             :disabled="disabled"
             :placeholder="$t('labels.departurePlaceholder')"
      />
      <!-- TODO: Issue icons disappears on focus-->
      <div class="absolute left-2 w-10">
        <calender class="stroke-neutral-400"></calender>
      </div>
    </div>
  </div>
</template>

