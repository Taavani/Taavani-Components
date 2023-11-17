/**
 * Style
 */
import "../src/css/main.css"

/**
 *
 */
import {createI18n} from 'vue-i18n';
import {setup} from "@storybook/vue3";

const messages = {
    en: {
        passengers: {
            name: {
                title: 'Names',
                firstNameLabel: 'First name',
                lastNameLabel: 'Last name',
            },
            gender: {
                label: 'Specify gender',
                options: {
                    undisclosed: 'Undisclosed',
                    male: 'Male',
                    female: 'Female',
                    unspecified: 'Unspecified',
                }
            },
            email: {
                label: 'Email address',
                placeholder: 'your-email@example.com',
            },
            errors: {
                firstName: {
                    required: 'First name is required',
                    minLength: 'First name must be at least 2 characters',
                },
                lastName: {
                    required: 'Last name is required',
                    minLength: 'Last name must be at least 2 characters',
                },
                email: {
                    required: 'Email address is required',
                    emailValidator: 'Email address is invalid',

                }
            }
        },
        journey: {
            flightOffers: {
                stopover: "stopover",
                seats: "There is only {count} seat left | There are only {count} seats left",
                change: "or change",
                priceFrom: "Price from",
                totalPrice: "Total price",
                sameDay: "Same day",
                notSameDay: "+ 1 day",
                noOffers: "Unable to find any offers",
                selectOutbound: "Select departure flight",
                selectHomebound: "Select return flight",
                noOffersDescription: "We were unable to find any offers matching your search criteria."
            },
        }
    },
};

setup((app) => {

    const i18n = createI18n({
        locale: 'en',
        fallbackLocale: 'en',
        messages
    });

    app.use(i18n);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
