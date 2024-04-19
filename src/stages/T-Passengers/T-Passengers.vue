<script setup>
import {ref} from "vue";
import {DialogPanel, TransitionChild} from "@headlessui/vue";

import TPassengersList from "../../components/T-Passengers-List/T-Passengers-List.vue";
import TFullscreenContainer from "../../components/T-Fullscreen-Container/T-Fullscreen-Container.vue";
import ArrowLeft from "../../components/icons/svg/Arrow-Left.vue";
import TButton from "../../components/T-Button/T-Button.vue";

const passengers = ref([
  {
    id: 1,
    name: "John Doe",
    email: ""
  }
])

const employees = ref([
  {
    id: 1,
    name: "Jane Doe",
    email: ""
  }
])

const requirements = ref([
  {
    "bookingRequirements": {
      "emailAddressRequired": true,
      "mobilePhoneNumberRequired": true
    }
  }
])

</script>

<template>
  <t-fullscreen-container :show="true">
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="relative w-full max-w-4xl mx-auto my-20 transform px-4 transition-all opacity-100 scale-100">
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
                {{ $t('stages.bookingOptions.backButton') }}
              </button>
            </div>

            <div
                class="relative transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left shadow-xl transition-all">
              <div class="mx-auto px-4">

                <div class="w-full flex mt-6">
                  <div class="w-full md:w-4/6 px-2">
                    <h1 class="text-2xl">
                      {{ $t('passengers.title') }}
                    </h1>
                    <p class="text-sm font-semibold">
                      {{ $t('passengers.description') }}
                    </p>
                  </div>
                </div>
                <div class="w-full flex mt-6">
                  <div class="w-full">
                    <t-passengers-list :passengers="passengers"
                                       :employees="employees"
                                       :requirements="requirements">
                    </t-passengers-list>
                    <div class="mx-auto py-4 flex justify-end">
                    <t-Button :title="$t('passengers.buttonText')" >

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
