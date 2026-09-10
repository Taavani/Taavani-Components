<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from "@headlessui/vue";
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  }
})

const emits = defineEmits([
  'update:modelValue'
])

/**
 * Local state
 */
const currentYear = new Date().getFullYear();

/**
 * Year selector state
 */
const years = Array.from({length: 120}, (_, i) => currentYear - i).map((year) => {
  return {id: year, name: year}
})
const selectedYear = ref(null)

/**
 * Month selector state
 */
const months = Array.from({length: 12}, (_, i) => {
  const id = i + 1
  return {id, name: id.toString().padStart(2, '0')}
})
const selectedMonth = ref(null)

/**
 * Day selector state. The available days depend on the selected year and month
 * (accounts for month length and leap years) so that e.g. Feb 30th can't be picked.
 * Falls back to a plain 1-31 range until both a year and month are chosen.
 */
const daysInMonth = computed(() => {
  if (!selectedYear.value || !selectedMonth.value) {
    return 31
  }
  return new Date(selectedYear.value.id, selectedMonth.value.id, 0).getDate()
})
const days = computed(() => Array.from({length: daysInMonth.value}, (_, i) => {
  const id = i + 1
  return {id, name: id.toString().padStart(2, '0')}
}))
const selectedDay = ref(null)

// If the selected day no longer exists in the newly selected month (e.g. was 31st, month changed to February), clamp it.
watch(daysInMonth, (maxDay) => {
  if (selectedDay.value && selectedDay.value.id > maxDay) {
    selectedDay.value = days.value[maxDay - 1]
  }
})

onMounted(function () {
  const parsed = typeof props.modelValue === 'string' ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(props.modelValue) : null
  if (!parsed) {
    return
  }
  const [year, month, day] = [parsed[1], parsed[2], parsed[3]].map(Number)
  selectedYear.value = years.find((y) => y.id === year) ?? null
  selectedMonth.value = months.find((m) => m.id === month) ?? null
  selectedDay.value = days.value.find((d) => d.id === day) ?? null
})

function updateEmit() {
  if (!selectedYear.value || !selectedMonth.value || !selectedDay.value) {
    return
  }
  const year = selectedYear.value.id
  const month = selectedMonth.value.id.toString().padStart(2, '0')
  const day = selectedDay.value.id.toString().padStart(2, '0')
  emits('update:modelValue', `${year}-${month}-${day}`)
}
watch([selectedYear, selectedMonth, selectedDay], updateEmit)

</script>

<template>
  <h2 :class="{ 'px-3 text-sm text-neutral-500': true, 'valid': true }">
    {{ $t('passengers.birthday.label')}}
  </h2>
  <div class="grid grid-cols-3">
    <Listbox as="div" v-model="selectedDay">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.day')}}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default rounded-l-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedDay ? selectedDay.name : $t('passengers.birthday.day') }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="day in days" :key="day.id" :value="day" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-taa-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ day.name }}</span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <Listbox as="div" v-model="selectedMonth">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.month')}}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedMonth ? selectedMonth.name : $t('passengers.birthday.month') }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="month in months" :key="month.id" :value="month" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-taa-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ month.name }}</span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <Listbox as="div" v-model="selectedYear">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.year') }}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default rounded-r-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedYear ? selectedYear.name : $t('passengers.birthday.year') }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template"
                           v-for="year in years"
                           :key="year.id"
                           :value="year" v-slot="{ active, selected}">
              <li :class="[active ? 'bg-taa-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ year.name }}</span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

