<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: "global"});

import "./T-Select-Trip.css"

import TJourneyType from "../../components/T-Journey-Type/T-Journey-Type.vue";
import TButton from "../../components/T-Button/T-Button.vue"
import TTravellers from "../../components/T-Travellers/T-Travellers.vue";
import TDateSelector from "../../components/T-Date-Selector/T-Date-Selector.vue";
import TDateRangeSelector from "../../components/T-Date-Range-Selector/T-Date-Range-Selector.vue";
import TAirportSelector from "../../components/T-Airport-Selector/T-Airport-Selector.vue";

// State JourneyType
const current = ref("single")
const options = ref([
  {value: "single", label: t("journeyType.single")},
  {value: "return", label: t("journeyType.return")}
])

// State Travellers
const travelers = ref({
  adults: 1,
  children: 0,
  infants: 0
})

// State DateSelector
const departureDate = ref("")
const returnDate = ref("")

// State AirportSelector
const departureAirport = ref({
  name: "Tehran Imam Khomeini International Airport",
  iata_code: "IKA"
})

const arrivalAirport = ref({
  name: "Istanbul Airport",
  iata_code: "IST"
})

const airports = ref([
  {
    name: "Tehran Imam Khomeini International Airport",
    iata_code: "IKA"
  },
  {
    name: "Istanbul Airport",
    iata_code: "IST"
  }
])

</script>

<template>
  <div class="select-trip-container">
    <div class="select-trip">
      <div class="options">
        <div class="left">
          <t-journey-type :current="current"
                          @change="(value) => current = value"
                          :options="options">
          </t-journey-type>
        </div>
        <div class="right">
          <t-travellers :adults="travelers.adults"
                        :children="travelers.children"
                        :infants="travelers.infants"
                        @update="value => travelers = value"
          >
          </t-travellers>
        </div>
      </div>
      <div>
        <div class="departure-destination">
          <t-airport-selector :departure-airport="departureAirport"
                              :arrival-airport="arrivalAirport"
                              :airports="airports"
                              @update-departure-airport="(airport) => departureAirport = airport"
                              @update-arrival-airport="(airport) => arrivalAirport = airport"
          >
          </t-airport-selector>
          <div :class="{'lg:w-2/6': current === 'single', 'lg:w-3/6': current === 'return' }" class="w-100" >
           <t-date-selector v-if="current === 'single'"
                             :departure-date="departureDate"
                             @update="(newDate) => departureDate = newDate">
            </t-date-selector>
            <t-date-range-selector v-if="current === 'return'"
                                   :departure-date="departureDate"
                                   :return-date="returnDate"
                                   @update-departure-date="(newDate) => departureDate = newDate"
                                   @update-return-date="(newDate) => returnDate = newDate">
            </t-date-range-selector>
          </div>
        </div>
      </div>
      <div class="buttons">
        <T-Button disabled="true" :title='$t("buttons.search")'></T-Button>
      </div>
    </div>
  </div>
</template>
