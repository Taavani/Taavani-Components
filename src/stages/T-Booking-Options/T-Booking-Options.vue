<script setup>
import {ref} from "vue";
import {DialogPanel, TransitionChild} from "@headlessui/vue";
import {useI18n} from "vue-i18n";

import "./T-Booking-Options.css"

import TFullscreenContainer from "../../components/T-Fullscreen-Container/T-Fullscreen-Container.vue";
import ArrowLeft from "../../components/icons/svg/Arrow-Left.vue";
import TButton from "../../components/T-Button/T-Button.vue";

// Translation
const { t } = useI18n({useScope: "global"});

// State for pricing options
const pricingOptions = ref([
  {
    id: 1,
    name: t('stages.bookingOptions.pricingOptions.budget')
  },
  {
    id: 2,
    name: t('stages.bookingOptions.pricingOptions.economy')
  },
  {
    id: 3,
    name: t('stages.bookingOptions.pricingOptions.premium')
  },
  {
    id: 4,
    name: t('stages.bookingOptions.pricingOptions.business')
  }
])
const selectedPricingOption = ref(null)

// State for flexibility options
const flexibilityOptions = ref([
  {
    id: 1,
    name: t('stages.bookingOptions.flexibilityOptions.standard')
  },
  {
    id: 2,
    name: t('stages.bookingOptions.flexibilityOptions.changeable')
  }
])
const selectedFlexibilityOption = ref(null)

// State for taavani options
const taavaniOptions = ref([
  {
    id: 1,
    name: "Taavani"
  },
  {
    id: 2,
    name: "Taavani Plus"
  }
])
const selectedTaavaniOption = ref(null)

const projectNumber = ref(null)

// State for invoicing options
const invoicingOptions = ref([
  {
    id: 1,
    name: "KAIR Holding"
  },
  {
    id: 2,
    name: "KAIR International"
  },
  {
    id: 3,
    name: "KAIR Domestic"
  }
])
const selectedInvoicingOption = ref(null)

function isFormValid() {
  return selectedPricingOption.value !== null
      && selectedFlexibilityOption.value !== null
      && selectedTaavaniOption.value !== null
      && selectedInvoicingOption.value !== null
}

</script>

<template>
  <t-fullscreen-container :show="true">
    <div class="t-booking-options">
      <div class="container">
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <DialogPanel>
            <div class="pb-3 px-4">

              <button
                  type="button"
                  class="font-medium flex gap-3 uppercase text-gray-900 border-transparent focus:border-transparent focus:ring-0 focus-visible:outline-none focus:underline"
                  @click="() => {}"
              >
                <arrow-left class="w-6 h-6 stroke-2"></arrow-left>
                {{ t('stages.bookingOptions.backButtonText') }}
              </button>
            </div>

            <div class="relative transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left shadow-xl transition-all">
              <div class="mx-auto px-4">

                <div class="w-full flex mt-6 mb-4">
                  <div class="w-full px-2">
                    <h1 class="text-2xl">
                      {{ t('stages.bookingOptions.title') }}
                    </h1>
                    <p class="text-sm font-semibold">
                      {{ t('stages.bookingOptions.description') }}
                    </p>
                  </div>
                </div>

                <div class="w-full  px-2">

                  <h3 class="text-lg">
                    {{ t('stages.bookingOptions.pricingOption') }}
                  </h3>
                  <fieldset class="mt-2 mb-4">
                    <legend class="sr-only">
                      {{ t('stages.bookingOptions.pricingOption') }}
                    </legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      <div v-for="(option, index) in pricingOptions" class="flex items-center">
                        <input :id="'pricing-option-' + index"
                               name="pricingOption"
                               :checked="selectedPricingOption === option"
                               type="radio"
                               class="h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue"
                               @change="() => selectedPricingOption = option"
                        />
                        <label :for="'pricing-option-' + index"
                               :class="{ 'text-brand-blue' : selectedPricingOption === option, 'text-gray-900' : selectedPricingOption !== option}"
                               class="ml-3 block text-sm font-medium leading-6">
                          {{ option.name }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <h3 class="text-lg">
                    {{ t('stages.bookingOptions.flexibilityOption') }}
                  </h3>
                  <fieldset class="mt-2 mb-4">
                    <legend class="sr-only">
                      {{ t('stages.bookingOptions.flexibilityOption') }}
                    </legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      <div v-for="(option, index) in flexibilityOptions" class="flex items-center">
                        <input :id="'flexibility-option-' + index"
                               name="flexibilityOption"
                               :checked="selectedFlexibilityOption === option"
                               type="radio"
                               class="h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue"
                               @change="() => selectedFlexibilityOption = option"
                        />
                        <label :for="'flexibility-option-' + index"
                               :class="{ 'text-brand-blue' : selectedFlexibilityOption === option, 'text-gray-900' : selectedFlexibilityOption !== option}"
                               class="ml-3 block text-sm font-medium leading-6">
                          {{ option.name }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <h2 class="text-xl">
                    {{ t('stages.bookingOptions.serviceOption') }}
                  </h2>
                  <fieldset class="mt-2 mb-4">
                    <legend class="sr-only">
                      {{ t('stages.bookingOptions.serviceOption') }}
                    </legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      <div v-for="(option, index) in taavaniOptions" class="flex items-center">
                        <input :id="'taavani-option-' + index"
                               name="taavaniOption"
                               :checked="selectedTaavaniOption === option"
                               type="radio"
                               class="h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue"
                               @change="() => selectedTaavaniOption = option"
                        />
                        <label :for="'taavani-option-' + index"
                               :class="{ 'text-brand-blue' : selectedTaavaniOption === option, 'text-gray-900' : selectedTaavaniOption !== option}"
                               class="ml-3 block text-sm font-medium leading-6">
                          {{ option.name }}
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <h3 class="text-lg">
                    {{ t('stages.bookingOptions.invoiceCostCenter') }}
                  </h3>
                  <fieldset class="mt-2 mb-4">
                    <legend class="sr-only">
                      {{ t('stages.bookingOptions.invoiceCostCenter') }}
                    </legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                      <div v-for="(option, index) in invoicingOptions" class="flex items-center">
                        <input :id="'invoicing-option-' + index"
                               name="invoicingOption"
                               :checked="selectedInvoicingOption === option"
                               type="radio"
                               class="h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue"
                               @change="() => selectedInvoicingOption = option"
                        />
                        <label :for="'invoicing-option-' + index"
                               :class="{ 'text-brand-blue' : selectedInvoicingOption === option, 'text-gray-900' : selectedInvoicingOption !== option}"
                               class="ml-3 block text-sm font-medium leading-6 ">
                          {{ option.name }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="mb-4">
                  <label for="projectNumber" class="text-lg block text-gray-900">
                    {{ t('stages.bookingOptions.invoiceProjectNumber') }}
                  </label>
                  <div class="relative mt-2 rounded-md shadow-sm">

                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                      </svg>
                    </div>
                    <input type="text"
                           name="projectNumber"
                           id="projectNumber"
                           v-model="projectNumber"
                           class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                           :placeholder="t('stages.bookingOptions.invoicePlaceholder')">
                  </div>
                </div>

                <div class="w-full flex mt-6">
                  <div class="w-full">

                    <div class="mx-auto py-4 flex justify-end">
                      <t-Button :title="$t('stages.bookingOptions.next')" :disabled="!isFormValid()" >

                      </t-Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </t-fullscreen-container>
</template>
