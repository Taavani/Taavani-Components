import TPassengers from "../stages/T-Passengers/T-Passengers.vue";

export default {
    title: "Taavani/Stages/T-Passengers",
    component: TPassengers,
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                {name: "light", value: "#F4F7FA"},
                {name: "dark", value: "#0f0f0f"},
            ],
        },
    },
};

export const Default = {};