<script setup>
import {computed, defineProps, onMounted, ref, watch} from 'vue'
import regions from './data.js'

import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/vue/20/solid/index.js";
import {useI18n} from 'vue-i18n'

const { t } = useI18n({ useScope: "global" });
const props = defineProps({
  modelValue: {
    type: String | Object | null
  },
  country: String,
  countryName: Boolean,
  whiteList: Array,
  blackList: Array,
  className: String,
  shortCodeDropdown: Boolean,
  autocomplete: Boolean,
  topCountry: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: 'Select Country'
  },
  disablePlaceholder: {
    type: Boolean,
    default: false
  },
  removePlaceholder: {
    type: Boolean,
    default: false
  },
  usei18n: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(["update:modelValue"])

const countries = computed({
  get: function () {
    /*
    if (props.whiteList) {
      countryList = countryList.filter((country) => {
        return props.whiteList.includes(country.countryShortCode)
      })
    }

    if ( props.blackList) {
      countryList = countryList.filter((country) => {
        return !props.blackList.includes(country.countryShortCode)
      })
    }

    if (props.removePlaceholder) {
      let c = props.firstCountry || countryList[0][props.valueType]
      //this.onChange(c)
    }

     */
    let countryList = regions.filter((region) => {
      if (props.countryName) {
        return region.countryName !== props.firstCountry
      } else {
        return region.countryShortCode !== props.firstCountry
      }
    })

    if (props.$i18n &&  props.usei18n) {
      countryList = countryList.map((country) => {
        let localeCountry = Object.assign({ }, country)
        localeCountry.countryName = t(country.countryName)
        return localeCountry
      })
      countryList.sort((country1, country2) => {
        return (country1.countryName > country2.countryName) ? 1 : -1
      })
    }
    return countryList
  },
  set: function () {
  }
})

const selectedCountry = ref(countries.value[12])

onMounted(function () {

})

watch(selectedCountry, async (newSelectedCountry) => {
//  emit('update:modelValue', newSelectedCountry.countryShortCode)
})

</script>

<template>
  <Listbox as="div" v-model="selectedCountry">
    <ListboxLabel class="hidden"></ListboxLabel>

    <div class="relative mb-2">
      <ListboxButton
          class="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6">
        <span class="block truncate">{{ selectedCountry.countryName }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption
              as="template"
              v-for="country in countries"
              :key="country.countryShortCode"
              :value="country"
              v-slot="{ active, selected}"
          >
            <li :class="[active ? 'bg-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ country.countryName }}</span>
              <span v-if="selected" :class="[active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>

          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  <!--<select @change="onChange($event.target.value)"
          :class="className"
          :autocomplete="autocompleteAttr">
    <option value=""
            v-if="!disablePlaceholder && !removePlaceholder">
      {{ placeholder }}
    </option>
    <option value="" v-if="disablePlaceholder && !removePlaceholder" disabled selected>{{ placeholder }}</option>
    <option v-if="topCountry" :value="firstCountry" :selected="country === firstCountry">{{topCountryName()}}</option>
    <option v-for="(region, index) in countries" :value="region[valueType]" :selected="country === region[valueType]" :key="index">{{ shortCodeDropdown ? region.countryShortCode : region.countryName }}</option>
  </select>-->
</template>
