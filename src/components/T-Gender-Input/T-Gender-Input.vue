<script setup>
import {ref, watch} from 'vue'
import {useI18n} from 'vue-i18n'
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

import './T-Gender-Input.css'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps({
  gender: {
    type: String,
    default: null,
  }
})

const emits = defineEmits([
  'update:gender'
])

const options = [
  {value: 'MALE'},
  {value: 'FEMALE'},
  {value: 'UNSPECIFIED'},
]
const selected = ref(options.find((option) => option.value === props.gender) ?? null)

watch(selected, (value) => {
  emits('update:gender', value ? value.value : null)
})

</script>

<template>
  <Listbox as="div" v-model="selected" class="t-gender-input">
    <ListboxLabel class="label">
      {{ t('passengers.gender.label') }}
    </ListboxLabel>
    <div class="holder">
      <ListboxButton class="button">
        <span class="">
          {{ selected ? t('passengers.gender.options.' + selected.value.toLowerCase()) : t('passengers.gender.options.placeholder') }}
        </span>
        <span class="icon">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
        <ListboxOptions
            class="options">
          <ListboxOption as="template" v-for="option in options" :key="option.value" :value="option"
                         v-slot="{ active, selected }">
            <li :class="[active ? 'bg-taa-brand-blue text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate']">{{
                    t('passengers.gender.options.' + option.value.toLowerCase())
                  }}</span>
              </div>
              <span v-if="selected"
                    :class="[active ? 'text-white' : 'text-brand-blue', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
