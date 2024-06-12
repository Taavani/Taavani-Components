<script setup>
import {onMounted, ref} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {maxValue, minValue, required} from "@vuelidate/validators";

const props = defineProps({
  modelValue: {
    type: String,
  }
})

const emits = defineEmits([
    'update:modelValue'
])

onMounted(function () {
  const pb = Date.parse(props.modelValue)

  if (pb instanceof Date) {
    lb.value.day = pb.getDate()
    lb.value.month = pb.getMonth() + 1
    lb.value.year = pb.getFullYear()
  }
})

/**
 * Local state
 */
const lb = ref({
  day: null,
  month: null,
  year: null
})

const currentDate = new Date();
// Extract the current year, this is used for the Year validation
const currentYear = currentDate.getFullYear();
// Calculate the year 120 years ago
const year120YearsAgo = currentYear - 120;

const v$ = useVuelidate({
  day: {
    required,
    minValue: minValue(1),
    maxValue: maxValue(31)
  },
  month: {
    required,
    minValue: minValue(1),
    maxValue: maxValue(12)
  },
  year: {
    required,
    minValue: minValue(year120YearsAgo),
    maxValue: maxValue(currentYear)
  }
}, lb.value)

function updateDay(event) {
  const {data} = event
  lb.value.day = event.target.value
  console.log(v$.value.day.$dirty)
}
</script>

<template>
  <h2 :class="{ 'px-3 text-sm text-neutral-500': true, 'valid': true }">
    {{ $t('passengers.birthday.label')}}
  </h2>
  <div class="flex items-center mb-3">
    <div class="flex-1 border border-neutral-300 px-3 py-2 rounded-l-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birthday" class="sr-only">{{ $t('passengers.birthday.day') }}</label>
      <input id="birthday"
             type="number"
             min="1"
             max="31"
             :value="lb.day"
             @input="updateDay"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             :placeholder="$t('passengers.birthday.day')"
      >
    </div>
    <div class="flex-1 border border-x-0 border-neutral-300 px-3 py-2 focus-within:z-10 focus-within:border focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birth-month" class="sr-only">{{ $t('passengers.birthday.month') }}</label>
      <input id="birth-month"
             type="number"
             min="1"
             max="12"
             :value="lb.month"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             :placeholder="$t('passengers.birthday.month')"
      >
    </div>
    <div class="flex-1 border border-neutral-300 px-3 py-2 rounded-r-lg focus-within:z-10 focus-within:ring-1 focus-within:ring-brand-blue focus-within:border-brand-blue">
      <label for="birth-year" class="sr-only">{{ $t('passengers.birthday.year') }}</label>
      <input id="birth-year"
             type="number"
             :min="year120YearsAgo"
             :max="currentYear"
             :value="lb.year"
             class="block w-full border-white border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
             :placeholder="$t('passengers.birthday.year')"
      >
    </div>
  </div>
  {{ v$.day.$dirty }}
</template>

