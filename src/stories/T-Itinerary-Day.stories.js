import {useI18n} from "vue-i18n";
import data from "../../data/CURRENT-OFFER-ARN-OSL-29-11.json"

import TItineraryDay from "../components/T-Itinerary-Day/T-Itinerary-Day.vue"
import TItineraryFlight from "../components/T-Itinerary-Day/T-Itinerary-Flight.vue";

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

            let currentDayFormat = data.itineraries[0].segments[0].departure.at;
            let currentDay = new Date(currentDayFormat);
            let flight = data.itineraries[0].segments[0];
            let departure = flight.departure.iataCode;
            let arrival = flight.arrival.iataCode;

            let flights = data.itineraries[0].segments.map((flight) => {

                return {
                    departureTime: new Date(flight.departure.at).getHours() + ':' + new Date(flight.departure.at).getMinutes(),
                    departureAirport: data.dictionary.locations[flight.departure.iataCode][i18n.locale.value].airport,
                    departureCity: data.dictionary.locations[flight.departure.iataCode][i18n.locale.value].city,
                    arrivalTime: new Date(flight.arrival.at).getHours() + ':' + new Date(flight.arrival.at).getMinutes(),
                    arrivalAirport: data.dictionary.locations[flight.arrival.iataCode][i18n.locale.value].airport,
                    arrivalCity: data.dictionary.locations[flight.arrival.iataCode][i18n.locale.value].city,
                    duration: flight.duration,
                    airline: data.dictionary.carriers[flight.carrierCode],
                    flightNumber: flight.carrierCode + '-' + flight.number,
                    aircraft: data.dictionary.aircraft[flight.aircraft.code],
                };
            });

            return {
                date:
                    ("0" + currentDay.getDate()).slice(-2) + '-' +
                    ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                    currentDay.getFullYear(),
                day: currentDay.toLocaleDateString('en-GB', { weekday: 'long' }),
                description: departure + ' \t&rarr; ' + arrival,
                flights: flights,
            };
        },
        template: '<t-itinerary-day :date="date" :day="day" :description="description"><t-itinerary-flight v-for="flight in flights" :flight="flight"></t-itinerary-flight></t-itinerary-day>',
    }),
}