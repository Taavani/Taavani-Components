import TPassengers from "../stages/T-Passengers/T-Passengers.vue";

export default {
    title: "Taavani/Stages/T-Passengers",
    component: TPassengers,
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

export const Default = {
    args: {
        requirements: {
            emailAddressRequired: true,
            mobilePhoneNumberRequired: true,
        }
    }
};

export const WithGender = {
    args: {
        requirements: {
            emailAddressRequired: true,
            mobilePhoneNumberRequired: true,
            travelerRequirements: [{
                travelerId: 1,
                genderRequired: true
            }]
        }
    }
};

export const WithDateOfBirth = {
    args: {
        requirements: {
            emailAddressRequired: true,
            mobilePhoneNumberRequired: true,
            travelerRequirements: [{
                travelerId: 1,
                dateOfBirthRequired: true
            }]
        }
    }
};