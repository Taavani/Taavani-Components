<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

import "./T-Select-Trip.css"

import TJourneyType from "../../components/T-Journey-Type/T-Journey-Type.vue";
import TButton from "../../components/T-Button/T-Button.vue"
import TTravellers from "../../components/T-Travellers/T-Travellers.vue";
import TDateSelector from "../../components/T-Date-Selector/T-Date-Selector.vue";
import TDateRangeSelector from "../../components/T-Date-Range-Selector/T-Date-Range-Selector.vue";
import TAirportSelector from "../../components/T-Airport-Selector/T-Airport-Selector.vue";
import TJourneyList from "../../components/T-Journey-List/T-Journey-List.vue";

const {t} = useI18n({useScope: "global"});

defineProps({
    currentJourneyType: {
        type: String,
        default: 'return'
    },
    journeyOptions: {
        type: Array,
        default: () => []
    },
    travelers: {
        type: Object,
        default: () => ({
            adults: 1,
            children: 0,
            infants: 0
        })
    },
    departureDate: {
        type: String,
        default: ""
    },
    returnDate: {
        type: String,
        default: ""
    },
    departureAirport: {
        type: Object,
        default: () => null
    },
    arrivalAirport: {
        type: Object,
        default: () => null
    },
})

defineEmits([
    "update-journey-type",
    "update-travelers",
    "update-departure-airport",
    "update-arrival-airport",
    "update-departure-date",
    "update-return-date"
])

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
    <div class="mx-auto max-w-5xl md:px-8 mt-8">
        <div class="select-trip rounded-xl py-8 px-4 mx-4">
            <div class="flex justify-between items-center">
                <div class="w-5/6 md:w-4/6 flex-1">
                    <t-journey-type :current="currentJourneyType"
                                    @change="(value) => $emit('update-journey-type', value)"
                                    :options="journeyOptions">
                    </t-journey-type>
                </div>
                <div class="w-1/6 md:w-2/6 flex items-baseline gap-1 justify-end">
                    <t-travellers :adults="travelers.adults"
                                  :children="travelers.children"
                                  :infants="travelers.infants"
                                  @update="value => $emit('update-travelers', value)"
                    >
                    </t-travellers>
                </div>
            </div>
            <div>
                <div class="departure-destination">
                    <t-airport-selector v-if="currentJourneyType === 'return' || currentJourneyType === 'single'"
                                        :departure-airport="departureAirport"
                                        :arrival-airport="arrivalAirport"
                                        :airports="airports"
                                        @update-departure-airport="(airport) => $emit('update-departure-airport', airport)"
                                        @update-arrival-airport="(airport) => $emit('update-arrival-airport', airport)"
                    >
                    </t-airport-selector>
                    <div
                        :class="{'lg:w-2/6': currentJourneyType === 'single', 'lg:w-3/6': currentJourneyType === 'return' }"
                        class="w-100">
                        <t-date-selector v-if="currentJourneyType === 'single'"
                                         :departure-date="departureDate"
                                         @update="(newDate) => $emit('update-departure-date', newDate)">
                        </t-date-selector>
                        <t-date-range-selector v-if="currentJourneyType === 'return'"
                                               :departure-date="departureDate"
                                               :return-date="returnDate"
                                               @update-departure-date="(newDate) => $emit('update-departure-date', newDate)"
                                               @update-return-date="(newDate) => $emit('update-return-date', newDate)">
                        </t-date-range-selector>
                    </div>
                </div>

                <t-journey-list v-if="currentJourneyType === 'multi_stop'" ></t-journey-list>

            </div>
            <div class="flex justify-end">
                <T-Button disabled="true" :title='t("buttons.search")'></T-Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.select-trip {
    background: linear-gradient(32.82deg, #93CFC3 4.22%, #006EB8 104.14%) no-repeat;
}
</style>