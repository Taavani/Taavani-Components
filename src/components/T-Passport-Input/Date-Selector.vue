<script setup>
import {computed, defineEmits, onMounted} from "vue";
import {easepick} from "@easepick/core";
import {LockPlugin} from "@easepick/lock-plugin";
import CalenderIcon from "@heroicons/vue/20/solid/CalendarIcon";

import '../T-Date-Selector/T-Date-Selector.css'

const props = defineProps({
  modelValue: {
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

const emit = defineEmits(["update:modelValue"])

const id = computed(() => {
  return (Math.random() + 1).toString(36).substring(7)
})

onMounted(() => {

  const picker = new easepick.create({

    element: document.getElementById('departure-date-' + id.value),

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

  picker.setDate(props.modelValue)
  picker.on('select', (date) => {
    emit('update:modelValue', document.getElementById('departure-date-' + id.value).value)
  })
})

</script>

<template>
  <div class="relative lg:flex-1">
    <label for="expiryDate" class="pl-3 text-neutral-500">
      Date of Issue
    </label>
    <div class="flex justify-end items-center relative">
      <div class="absolute left-2 w-6 z-20">
        <calender-icon class="stroke-neutral-400 text-neutral-400"></calender-icon>
      </div>
      <input :id='"departure-date-" + id'
             type="text"
             class="rounded-md shadow-sm bg-white block w-full border-neutral-300 p-0 pl-10 pr-3 py-2.5 text-gray-900 placeholder-gray-500 sm:text-sm focus:z-10 focus:ring-1 focus:ring-brand-blue focus:border-taa-brand-blue"
             :value="modelValue"
             :disabled="disabled"
             :placeholder="$t('labels.departurePlaceholder')"
      />
      <!-- TODO: Issue icons disappears on focus-->

    </div>
  </div>
</template>
