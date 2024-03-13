import TPassengersList from "../components/T-Passengers-List/T-Passengers-List.vue";
import PASSENGERS from '../../data/PASSENGERS.json';
import REQUIREMENTS from '../../data/REQUIREMENTS.json';
import REQUIREMENTS_WITH_PASSENGER_REQUIREMENTS from '../../data/REQUIREMENTS_WITH_PASSENGER_REQUIREMENTS.json';
import EMPLOYEES from '../../data/EMPLOYEES.json';

export default {
    components: {TPassengersList},
    title: 'Taavani/Design System/T-Passengers-List',
    component: TPassengersList,
    tags: ['autodocs'],
    argTypes: {
        passengers: {
            description: 'Passengers list',
            defaultValue: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: ''
                },
            ],
            control: 'array'
        },
    },
    args: {
        passengers: PASSENGERS,
        employees: EMPLOYEES,
        requirements: REQUIREMENTS,
    },
};

export const PassengersList = {
    render: (args) => ({
        components: { TPassengersList },
        setup() {
            return { args }
        },
        template: '<t-passengers-list :passengers="args.passengers" :employees="args.employees" :requirements="args.requirements"></t-passengers-list>'
    }),
    args: {
    }
}

export const PassengersListWithPassengerRequirements = {
    render: (args) => ({
        components: { TPassengersList },
        setup() {
            return { args }
        },
        template: '<t-passengers-list :passengers="args.passengers" :employees="args.employees" :requirements="args.requirements"></t-passengers-list>'
    }),
    args: {
        passengers: PASSENGERS,
        employees: EMPLOYEES,
        requirements: REQUIREMENTS_WITH_PASSENGER_REQUIREMENTS,
    }
}