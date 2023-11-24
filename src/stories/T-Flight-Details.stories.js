import TFlightDetails from '../components/T-Flight-Details/T-Flight-Details.vue';
import CURRENT_OFFER from '../../data/CURRENT-OFFER-ARN-OSL-29-11.json'


export default {
    components: {TFlightDetails},
    title: 'Taavani/Design System/T-Flight-Details',
    component: TFlightDetails,
    tags: ['autodocs'],
    argTypes: {
        offer: Object
    }
};

export const FlightDetails = {
    render: (args) => ({
        components: { TFlightDetails },
        setup() {
            return { args }
        },
        template: '<t-flight-details :flight="args.offer.itineraries[0]" :dictionary="args.offer.dictionary"></t-flight-details>'
    }),
    args: {
        offer: CURRENT_OFFER
    }
};