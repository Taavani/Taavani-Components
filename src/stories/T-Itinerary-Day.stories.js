import {useI18n} from "vue-i18n";
import data from "../../data/CURRENT-OFFER-FAE-NYC.json";

import TItineraryDay from "../components/T-Itinerary-Day/T-Itinerary-Day.vue"
import TItineraryFlight from "../components/T-Itinerary-Day/T-Itinerary-Flight.vue";
import {mapSegmentsToItinerariesDays} from "../components/T-Itinerary-Day/Map-Utility.js";

export default {
    components: {TItineraryFlight},
    title: "Taavani/Components/T-Itinerary-Day",
    tags: ["autodocs"],
    component: TItineraryDay,
}

export const Default = {
    render: () => ({
        components: {TItineraryDay, TItineraryFlight},
        setup() {
            const i18n = useI18n({ useScope: 'global' });

            return {
                flightDays: mapSegmentsToItinerariesDays(data.itineraries[0].segments, data.dictionary, i18n.locale.value),
            };
        },
        template: '<t-itinerary-day v-for="days in flightDays" :date="days.date" :day="days.day" :description="days.description"><t-itinerary-flight v-for="flight in days.flights" :flight="flight"></t-itinerary-flight></t-itinerary-day>',
    }),
}