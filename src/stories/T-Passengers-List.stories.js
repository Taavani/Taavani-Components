import TPassengersList from "../components/T-Passengers-List/T-Passengers-List.vue";
import PASSENGERS from '../../data/passengers.json';
import REQUIREMENTS from '../../data/requirements.json';
import EMPLOYEES from '../../data/employees.json';

export default {
    components: {TPassengersList},
    title: 'Taavani/T-Passengers-List',
    component: TPassengersList,
    tags: ['autodocs'],
    argTypes: {
        onClick: {},
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