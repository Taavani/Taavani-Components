<script setup>
import {onMounted, ref, watch} from "vue";
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from "@headlessui/vue";
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

const props = defineProps({
  modelValue: {
    type: String,
  }
})

const emits = defineEmits([
  'update:modelValue'
])

onMounted(function () {
  if (Date.parse(props.modelValue)) {
    const pb = new Date(props.modelValue)
    selectedYear.value = years.value[years.value.findIndex((year) => year.id === pb.getFullYear())]
  }
})

/**
 * Local state
 */
const currentDate = new Date();
// Extract the current year, this is used for the Year validation
const currentYear = currentDate.getFullYear();

/**
 * Year selector state
 */
const yearsArray = Array.from({length: 120}, (_, i) => currentYear - i)
const years = ref(yearsArray.map((year) => {
  return {id: year, name: year}
}))
const selectedYear = ref(years.value[20])

/**
 * Month selector state
 */
const months = ref(Array.from({length: 12}, (_, i) => {
  let index = (i + 1).toString().padStart(2, '0')
  return {id: i + 1, name: index }
}))
const selectedMonth = ref(months.value[0])

/**
 * Day selector state
 */
const days = ref(Array.from({length: 31}, (_, i) => {
  let index = (i + 1).toString().padStart(2, '0')
  return {id: i + 1, name: index}
}))
const selectedDay = ref(days.value[0])


function updateEmit() {
  const pb = new Date(selectedYear.value.id, selectedMonth.value.id, selectedDay.value.id)
  emits('update:modelValue', pb.getFullYear() + '-' + (pb.getMonth()).toString().padStart(2, '0') + '-' + (pb.getDate()).toString().padStart(2, '0'))
}
watch(selectedYear, updateEmit)
watch(selectedMonth, updateEmit)
watch(selectedDay, updateEmit)

</script>

<template>
  <h2 :class="{ 'px-3 text-sm text-neutral-500': true, 'valid': true }">
    {{ $t('passengers.birthday.label')}}
  </h2>
  <div class="grid grid-cols-3">
    <Listbox as="div" v-model="selectedYear">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.year') }}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default rounded-l-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedYear.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="year in years" :key="year.id" :value="year" v-slot="{ active, selected}">
              <li :class="[active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
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
    <Listbox as="div" v-model="selectedMonth">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.month')}}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedMonth.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="month in months" :key="month.id" :value="month" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
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
    <Listbox as="div" v-model="selectedDay">
      <ListboxLabel class="hidden">{{ $t('passengers.birthday.day')}}</ListboxLabel>
      <div class="relative mb-2">
        <ListboxButton class="relative w-full cursor-default rounded-r-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
          <span class="block truncate">{{ selectedDay.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="day in days" :key="day.id" :value="day" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
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
  </div>
</template>

