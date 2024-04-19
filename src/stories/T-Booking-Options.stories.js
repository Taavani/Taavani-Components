import TBookingOptions from "../stages/T-Booking-Options/T-Booking-Options.vue";

export default {
    title: "Taavani/Stages/T-Booking-Options",
    component: TBookingOptions,
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