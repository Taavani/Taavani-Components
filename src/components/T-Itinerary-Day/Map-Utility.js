import { parse } from 'tinyduration'

export function mapSegmentsToItinerariesDays(itineraries, dictionary, i18n) {
    let t = i18n.t;
    let language = i18n.locale.value;

    let days = [];
    for (let i = 0; i < itineraries.length; i++) {
        let segments = itineraries[i].segments;
        let segmentDays = segments.map((segment) => {
            let currentDayFormat = segment.departure.at;
            let currentDay = new Date(currentDayFormat);
            return {
                date: ("0" + currentDay.getDate()).slice(-2) + '-' +
                    ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                    currentDay.getFullYear(),
                day: currentDay.toLocaleDateString(language, {weekday: 'long'}),
            };
        });
        days = days.concat(segmentDays);
    }

    // Remove duplicates
    days = days.filter((day, index, self) =>
            index === self.findIndex((t) => (
                t.date === day.date
            ))
    );



    return days.map((day) => {
        let flights = [];
        for (let i = 0; i < itineraries.length; i++) {
            let segments = itineraries[i].segments;
            let dayFlights = segments.filter((segment) => {
                let currentDayFormat = segment.departure.at;
                let currentDay = new Date(currentDayFormat);
                return day.date === ("0" + currentDay.getDate()).slice(-2) + '-' +
                    ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                    currentDay.getFullYear();
            }).map((flight) => {
                let duration = parse(flight.duration);
                // Build duration string
                let durationString = '';
                if (duration.days > 0) {
                    durationString += duration.days + ' ' + t('time.days') + ' ';
                }
                if (duration.hours > 0) {
                    durationString += duration.hours + ' ' + t('time.hours') + ' ';
                }
                if (duration.minutes > 0) {
                    durationString += duration.minutes + ' ' + t('time.minutes') + ' ';
                }
                return {
                    departureTime: ("0" + new Date(flight.departure.at).getHours()).slice(-2) + ':' + ("0" + new Date(flight.departure.at).getMinutes()).slice(-2),
                    departureAirport: dictionary.locations[flight.departure.iataCode][language].name,
                    departureCity: dictionary.locations[flight.departure.iataCode][language].city,
                    departureCode: flight.departure.iataCode,
                    arrivalTime: new Date(flight.arrival.at).getHours() + ':' + new Date(flight.arrival.at).getMinutes(),
                    arrivalAirport: dictionary.locations[flight.arrival.iataCode][language].name,
                    arrivalCity: dictionary.locations[flight.arrival.iataCode][language].city,
                    arrivalCode: flight.arrival.iataCode,
                    duration: durationString,
                    airline: dictionary.carriers[flight.carrierCode],
                    flightNumber: flight.carrierCode + '-' + flight.number,
                    aircraft: dictionary.aircraft[flight.aircraft.code],
                };
            });
            flights = flights.concat(dayFlights);
        }
        return {
            date: day.date,
            day: day.day,
            description: flights[0].departureCode + ' \t&rarr; ' + flights[flights.length - 1].arrivalCode,
            flights: flights,
        };
    })
}