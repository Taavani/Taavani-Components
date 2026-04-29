<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

import TAirportSelector from "../T-Airport-Selector/T-Airport-Selector.vue";
import TDateSelector from "../T-Date-Selector/T-Date-Selector.vue";
import TButton from "../T-Button/T-Button.vue";

const {t} = useI18n({useScope: "global"});

const props = defineProps({
   stops: {
        type: Array,
        default: () => [
            {
                departureAirport: null,
                arrivalAirport: null,
                departureDate: "",
                returnDate: ""
            }
        ]
    }
})

const localStops = ref(props.stops)

function addStop() {
    localStops.value.push({
        departureAirport: null,
        arrivalAirport: null,
        departureDate: "",
        returnDate: ""
    })
}

function removeStop(index) {
    localStops.value.splice(index, 1)
}

</script>

<template>
    <div v-for="(stop, index) in localStops" :key="index"
         class="departure-destination">
        <t-airport-selector
            :departure-airport="stop.departureAirport"
            :arrival-airport="stop.arrivalAirport"
        >
        </t-airport-selector>
        <div class="w-100 lg:w-2/6 flex">
            <t-date-selector
                :departure-date="stop.departureDate"
            >
            </t-date-selector>
            <div v-if="0 === index && localStops.length !== 1" class="px-5"></div>
            <t-button v-if="0 !== index" title="-" class="ml-2" @click="() => removeStop(index)" coat="liquid-blue-small"></t-button>
        </div>
    </div>
    <div class="layout py-3 lg:py-2 flex">
        <div class="flex w-4/6 pr-4"></div>
        <div class="w-2/6 flex justify-end">
            <div class="w-3/4 pl-1 flex justify-end">
                <t-button coat="liquid-blue-small"
                          :title='t("buttons.addJourney")'
                          @click="addStop">
                </t-button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>