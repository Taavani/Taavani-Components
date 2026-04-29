<script setup>
import DateSelector from "./Date-Selector.vue";
import CountrySelector from "./Country-Selector.vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      documentType: 'PASSPORT',
      number: null,
      issuanceLocation: null,
      issuanceDate: null,
      expiryDate: null,
      issuanceCountry: null,
      nationality: null,
      holder: true,
    })
  }
})

const emits = defineEmits(['update:modelValue'])

function update(field, value) {
  emits('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<template>
  <div class="mb-3">
    <h2 class="px-3 text-sm text-neutral-500 mb-1">
      {{ $t('passengers.document.title') }}
    </h2>

    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <label for="passportNumber" class="px-3 text-sm font-medium text-neutral-500">
          {{ $t('passengers.document.number') }}
        </label>
        <input id="passportNumber"
               type="text"
               name="passportNumber"
               :placeholder="$t('passengers.document.numberPlaceholder')"
               :value="modelValue.number"
               @input="update('number', $event.target.value)"
               class="w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
        />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col">
          <label class="px-3 text-sm font-medium text-neutral-500">
            {{ $t('passengers.document.issuanceDate') }}
          </label>
          <date-selector :model-value="modelValue.issuanceDate"
                         @update:model-value="update('issuanceDate', $event)">
          </date-selector>
        </div>
        <div class="flex flex-col">
          <label class="px-3 text-sm font-medium text-neutral-500">
            {{ $t('passengers.document.expiryDate') }}
          </label>
          <date-selector :model-value="modelValue.expiryDate"
                         @update:model-value="update('expiryDate', $event)">
          </date-selector>
        </div>
      </div>

      <div class="flex flex-col">
        <label class="px-3 text-sm font-medium text-neutral-500">
          {{ $t('passengers.document.issuanceCountry') }}
        </label>
        <country-selector :model-value="modelValue.issuanceCountry"
                          @update:model-value="update('issuanceCountry', $event)"
                          class-name="border-neutral-300 rounded-md w-full">
        </country-selector>
      </div>

      <div class="flex flex-col">
        <label for="issuanceLocation" class="px-3 text-sm font-medium text-neutral-500">
          {{ $t('passengers.document.issuanceLocation') }}
        </label>
        <input id="issuanceLocation"
               type="text"
               name="issuanceLocation"
               :placeholder="$t('passengers.document.issuanceLocationPlaceholder')"
               :value="modelValue.issuanceLocation"
               @input="update('issuanceLocation', $event.target.value)"
               class="w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
</template>