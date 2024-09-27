export function mapSegmentsToItinerariesDays(segments, dictionary, language) {
    let days = segments.map((segment) => {
        let currentDayFormat = segment.departure.at;
        let currentDay = new Date(currentDayFormat);
        return {
            date: ("0" + currentDay.getDate()).slice(-2) + '-' +
                ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                currentDay.getFullYear(),
            day: currentDay.toLocaleDateString('en-GB', {weekday: 'long'}),
        };
    });

    // Remove duplicates
    days = days.filter((day, index, self) =>
            index === self.findIndex((t) => (
                t.date === day.date
            ))
    );

    return days.map((day) => {
        let flights = segments.filter((segment) => {
            let currentDayFormat = segment.departure.at;
            let currentDay = new Date(currentDayFormat);
            return day.date === ("0" + currentDay.getDate()).slice(-2) + '-' +
                ("0" + (currentDay.getMonth() + 1)).slice(-2) + '-' +
                currentDay.getFullYear();
        }).map((flight) => {
            return {
                departureTime: new Date(flight.departure.at).getHours() + ':' + new Date(flight.departure.at).getMinutes(),
                departureAirport: dictionary.locations[flight.departure.iataCode][language].name,
                departureCity: dictionary.locations[flight.departure.iataCode][language].city,
                departureCode: flight.departure.iataCode,
                arrivalTime: new Date(flight.arrival.at).getHours() + ':' + new Date(flight.arrival.at).getMinutes(),
                arrivalAirport: dictionary.locations[flight.arrival.iataCode][language].name,
                arrivalCity: dictionary.locations[flight.arrival.iataCode][language].city,
                arrivalCode: flight.arrival.iataCode,
                duration: flight.duration,
                airline: dictionary.carriers[flight.carrierCode],
                flightNumber: flight.carrierCode + '-' + flight.number,
                aircraft: dictionary.aircraft[flight.aircraft.code],
            };
        });
        return {
            date: day.date,
            day: day.day,
            description: flights[0].departureCode + ' \t&rarr; ' + flights[flights.length - 1].arrivalCode,
            flights: flights,
        };
    })
}