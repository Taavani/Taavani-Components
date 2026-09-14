import TBookingOptions from "../stages/T-Booking-Options/T-Booking-Options.vue";

export default {
    title: "Taavani/Stages/T-Booking-Options",
    component: TBookingOptions,
    tags: ["autodocs"],
    argTypes: {},

    parameters: {
        backgrounds: {
            options: {
                light: {name: "light", value: "#F4F7FA"},
                dark: {name: "dark", value: "#0f0f0f"}
            }
        },
    },

    globals: {
        backgrounds: {
            value: "light"
        }
    }
};

export const Default = {};