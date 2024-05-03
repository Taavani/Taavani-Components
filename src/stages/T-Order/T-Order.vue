<script setup>
import {DialogPanel, TransitionChild} from "@headlessui/vue";
import {XMarkIcon} from "@heroicons/vue/20/solid";

import TFullscreenContainer from "../../components/T-Fullscreen-Container/T-Fullscreen-Container.vue";
import CheckCircle from "@heroicons/vue/20/solid/CheckCircleIcon.js";
import TFlightDetails from "../../components/T-Flight-Details/T-Flight-Details.vue";
import TButton from "../../components/T-Button/T-Button.vue";

defineProps({
  order: {
    type: Object,
    default: () => {
      return {
        type: "flight-order",
        id: "eJzTd9cPDDMzDg8FAAs5AmI%3D",
        queuingOfficeId: "GOHS12101",
        associatedRecords: [
          {
            reference: "QV63WU",
            creationDate: "2024-05-02T18:03:00.000",
            originSystemCode: "GDS",
            flightOfferId: "1"
          }
        ],
        flightOffers: [
          {
            type: "flight-offer",
            id: "1",
            source: "GDS",
            nonHomogeneous: false,
            lastTicketingDate: "2024-05-09",
            itineraries: [
              {
                segments: [
                  {
                    departure: {
                      iataCode: "FAE",
                      at: "2024-05-20T13:15:00"
                    },
                    arrival: {
                      iataCode: "KEF",
                      at: "2024-05-20T14:05:00"
                    },
                    carrierCode: "FI",
                    number: "301",
                    aircraft: {
                      code: "DH4"
                    },
                    duration: "PT1H50M",
                    id: "2",
                    numberOfStops: 0
                  }
                ]
              }
            ],
            price: {
              currency: "DKK",
              total: "2673.00",
              base: "2070.00",
              fees: [
                {
                  amount: "0.00",
                  type: "TICKETING"
                },
                {
                  amount: "0.00",
                  type: "SUPPLIER"
                },
                {
                  amount: "0.00",
                  type: "FORM_OF_PAYMENT"
                }
              ],
              grandTotal: "2673.00",
              billingCurrency: "DKK"
            },
            pricingOptions: {
              fareType: [
                "PUBLISHED"
              ],
              includedCheckedBagsOnly: true,
              refundableFare: true
            },
            validatingAirlineCodes: [
              "FI"
            ],
            travelerPricings: [
              {
                travelerId: "0",
                fareOption: "STANDARD",
                travelerType: "ADULT",
                price: {
                  currency: "DKK",
                  total: "2673.00",
                  base: "2070.00",
                  taxes: [
                    {
                      amount: "65.00",
                      code: "FO"
                    },
                    {
                      amount: "10.00",
                      code: "T1"
                    },
                    {
                      amount: "358.00",
                      code: "YR"
                    },
                    {
                      amount: "170.00",
                      code: "ZO"
                    }
                  ]
                },
                fareDetailsBySegment: [
                  {
                    segmentId: "2",
                    cabin: "ECONOMY",
                    fareBasis: "VU1HFOFL",
                    brandedFare: "FLEX",
                    class: "V",
                    includedCheckedBags: {
                      quantity: 1
                    }
                  }
                ]
              }
            ]
          }
        ],
        travelers: [
          {
            id: "0",
            name: {
              firstName: "Perry",
              lastName: "Kub"
            },
            contact: {
              purpose: "STANDARD",
              phones: [
                {
                  deviceType: "MOBILE",
                  countryCallingCode: "45",
                  number: "50505353"
                }
              ],
              emailAddress: "towne.aryanna@example.com"
            }
          }
        ],
      }
    }
  },
  dictionary: {
    type: Object,
    default: () => {
      return {
        locations: {
          FAE: {
            en: {
              name: "Vágar",
              city: "Vágar"
            }
          },
          KEF: {
            en: {
              name: "Keflavik",
              city: "Keflavik"
            }
          }
        },
        carriers: {
          FI: "Icelandair"
        },
        "aircraft": {
          "DH4": "DE HAVILLAND DASH 8-400"
        },
      }
    }
  },
  description: {
    type: String,
    default: ''
  },
  plus: {
    type: Boolean,
    default: false
  },
  termsAndConditions: {
    type: Boolean,
    default: false
  }
})

defineEmits([
    'toggle-plus',
    'toggle-terms-and-conditions',
    'update:description',
    'cancel'
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
                  class="font-medium flex gap-3 uppercase text-gray-900 border-transparent focus:border-transparent focus:ring-0 focus-visible:outline-none focus:underline"
                  @click="() => $emit('cancel')"
              >
                <x-mark-icon class="w-6 h-6 stroke-2"></x-mark-icon>
                {{ $t('confirmOffer.cancelOffer') }}
              </button>
            </div>

            <div
                class="mb-3 mx-4 relative transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left shadow-xl transition-all">
              <div class="mx-auto px-4 pb-4">
                <!--<booking-steps></booking-steps>-->
              </div>

              <div class="mx-auto px-7 pb-6">
                <h1 class="uppercase font-light">
                  {{ $t('confirmOffer.bookingReference') }}:
                  <span class="text-lg mr-1 font-semibold">
                    {{ order ? order.associatedRecords[0].reference : '' }}
                  </span>
                </h1>
              </div>

              <div class="mx-auto px-7 pb-6">
                <h1 class="mb-2 uppercase font-light">
                  {{ $t('confirmOffer.passengers') }}
                </h1>
                <div class="grid grid-cols-1 gap-y-2 gap-x-3">
                  <div v-for="traveler in order.travelers"
                       class="px-3 py-2 border border-neutral-300 rounded-lg flex flex-col">
                    <div class="flex items-center">
                      <img class="h-8 w-8 rounded-full mr-3"
                           :src="`https://ui-avatars.com/api/?name=${traveler.name.firstName[0]}${traveler.name.lastName[0]}&amp;color=828282&amp;background=D3F8F0`"
                           alt="">
                      <h1 class="grow text-neutral-600">
                        {{ traveler.name.firstName }}
                        {{ traveler.name.lastName }}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mx-auto px-7 pb-6">
                <h1 class="mb-2 uppercase font-light">
                  {{ $t('confirmOffer.travelDetails') }}
                </h1>

                <div class="grid grid-cols-1 gap-y-2">
                  <t-flight-details v-for="flight in order.flightOffers[0].itineraries"
                                    :flight="flight"
                                    :dictionary="dictionary">
                  </t-flight-details>
                </div>
              </div>

              <div class="mx-auto px-7 pb-6">
                <h1 class="mb-2 uppercase font-light ">
                  {{ $t('confirmOffer.price') }}
                </h1>

                <ul class="flex flex-col font-thin border border-neutral-300 rounded-lg px-4 py-3">
                  <li class="flex justify-between">
                    <div>
                      {{ $t('confirmOffer.baseCost') }}
                    </div>
                    <div>
                      {{ order.flightOffers[0].price.base }} {{ order.flightOffers[0].price.currency }}
                    </div>
                  </li>
                  <li class="flex justify-between">
                    <div>
                      {{ $t('confirmOffer.taxes') }}
                    </div>
                    <div>
                      {{
                        (Number(order.flightOffers[0].price.total) - Number(order.flightOffers[0].price.base)).toFixed(2)
                      }} {{ order.flightOffers[0].price.currency }}
                    </div>
                  </li>
                  <li class="flex justify-between">
                    <div>
                      {{ plus ? $t('confirmOffer.taavaniPlus') : $t('confirmOffer.taavani') }}
                    </div>
                    <div>
                      {{ plus ? Number(499).toFixed(2) : Number(299).toFixed(2) }}
                      {{ order.flightOffers[0].price.currency }}
                    </div>
                  </li>
                  <li class="flex justify-between border-t border-solid border-gray-300 pt-2 font-light">
                    <div>
                      {{ $t('confirmOffer.totalPrice') }}
                    </div>
                    <div class="">
                      {{
                        (Number(order.flightOffers[0].price.total) + (plus ? Number(499) : Number(299))).toFixed(2)
                      }} {{ order.flightOffers[0].price.currency }}
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mx-auto px-7 pb-6">
                <h1 class="mb-2 uppercase font-light">
                  {{ $t('confirmOffer.additionalServices') }}
                </h1>
                <form action="#" class="relative">
                  <div
                      class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-brand-dark-blue">
                    <label for="comment" class="sr-only">{{
                        $t('confirmOffer.additionalServices')
                      }}</label>
                    <textarea rows="3"
                              name="comment"
                              id="comment"
                              v-bind:value="description"
                              v-on:input="() => $emit('update:description', $event.target.value)"
                              class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              :placeholder="$t('confirmOffer.additionalServicesDescription')">
                    </textarea>
                  </div>
                </form>
              </div>

              <h1 class="mb-2 mx-7 uppercase font-light">
                {{ $t('confirmOffer.taavaniPlus') }}
              </h1>

              <div class="px-7 mb-10 flex flex-col gap-4 md:flex-row md:gap-4">

                <div class="flex items-center">
                  <button type="button"
                          class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                          role="switch"
                          aria-checked="false"
                          @click="() => $emit('togglePlus')"
                  >
                    <span class="sr-only">{{ $t('confirmOffer.taavaniPlus') }}</span>
                    <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
                    <span aria-hidden="true"
                          :class="{ 'bg-brand-blue': plus, 'bg-gray-200': !plus}"
                          class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out">
                </span>
                    <span aria-hidden="true"
                          :class="{ 'translate-x-5': plus, 'translate-x-0': !plus }"
                          class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out">
                </span>
                  </button>
                  <p class="px-4" v-html="$t('confirmOffer.taavaniPlusConfirm')"></p>
                </div>

                <div class="flex items-center">
                  <button type="button"
                          class="group  relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                          role="switch"
                          aria-checked="false"
                          @click="() => () => $emit('toggleTermsAndConditions')"
                  >
                    <span class="sr-only">{{ $t('confirmOffer.termsAndConditionsDescription') }}</span>
                    <span aria-hidden="true"
                          class="pointer-events-none absolute h-full w-full rounded-md bg-white">
                </span>
                    <span aria-hidden="true"
                          :class="{ 'bg-brand-blue': termsAndConditions, 'bg-gray-200': !termsAndConditions}"
                          class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out">
                </span>
                    <span aria-hidden="true"
                          :class="{ 'translate-x-5': termsAndConditions, 'translate-x-0': !termsAndConditions }"
                          class="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out">
                </span>
                  </button>
                  <p class="px-4" v-html="$t('confirmOffer.termsAndConditionsDescription')">
                  </p>
                </div>

              </div>

              <div class="mx-auto px-7 py-4 flex justify-between ">
                <div class="flex flex-col">
                  <div class="uppercase font-light">
                    {{ $t('flightOfferExtended.totalPrice') }}
                  </div>
                  <div class="flex items-baseline">
                    <div class="font-semibold text-xl mr-1">
                      {{ order ? (Number(order.flightOffers[0].price.total) + (plus ? Number(499) : Number(299))).toFixed(2) : '' }}
                    </div>
                    <div class="text-sm">
                      {{ order ? order.flightOffers[0].price.currency : '' }}
                    </div>
                  </div>
                </div>

                <T-Button :title="$t('buttons.confirm')" :disabled="!termsAndConditions" @click="() => next()"></T-Button>
              </div>
            </div>

          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </t-fullscreen-container>
</template>
