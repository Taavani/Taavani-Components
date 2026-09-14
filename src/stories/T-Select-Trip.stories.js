import TSelectTrip from "../stages/T-Select-Trip/T-Select-Trip.vue";
import {useI18n} from "vue-i18n";
import {ref} from "vue";

export default {
    title: "Taavani/Stages/T-Select-Trip",
    component: TSelectTrip,
    tags: ["autodocs"],
    argTypes: {}
};

export const Default = {
    render: () => ({
        components: {TSelectTrip},
        setup() {
            const { t } = useI18n()

            const currentJourneyType = ref('single')
            const journeyTypes = [
                {value: "single", label: t("journeyType.single")},
                {value: "return", label: t("journeyType.return")},
                {value: "multi_stop", label: t("journeyType.multiStop")},
            ]

            const travellers = ref({
                adults: 1,
                children: 0,
                infants: 0
            })

            const departureDate = ref('')
            const returnDate = ref('')

            const departureAirport = ref({
                code: 'LAX',
                name: 'Los Angeles International Airport'
            })

            const arrivalAirport = ref({
                code: 'JFK',
                name: 'John F. Kennedy International Airport'
            })

            return {
                currentJourneyType,
                journeyTypes,
                travellers,
                departureAirport,
                arrivalAirport,
                departureDate,
                returnDate
            }
        },
        template: '<t-select-trip :current-journey-type="currentJourneyType" :journey-options="journeyTypes" @update-journey-type="(value) => currentJourneyType = value" :departure-airport="departureAirport" @update-departure-airport="(airport) => departureAirport = airport" :arrival-airport="arrivalAirport" @update-arrival-airport="(airport) => arrivalAirport = airport" :travelers="travellers" @update-travelers="(value) => travellers = value" :departure-date="departureDate" @update-departure-date="(date) => departureDate = date" :return-date="returnDate" @update-return-date="(date) => returnDate = date"></t-select-trip>',
    }),
    args: {},
};