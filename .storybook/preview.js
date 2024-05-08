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
        stages: {
            bookingOptions: {
                backButtonText: 'Back to search',
                title: 'Booking Options',
                description: 'Select the best option for your trip, and continue to the next step.',
                pricingOption: 'Pricing option',
                flexibilityOption: 'Flexibility',
                serviceOption: 'Service',
                invoiceProjectNumber: 'Project number',
                invoicePlaceholder: 'Enter project number',
                invoiceCostCenter: 'Cost center',
                next: 'Next',
                pricingOptions: {
                    budget: 'Budget',
                    economy: 'Economy',
                    premium: 'Premium',
                    business: 'Business',
                },
                flexibilityOptions: {
                    standard: 'Standard',
                    changeable: 'Changeable',
                    refundable: 'Refundable',
                },

            }
        },
        journeyType: {
            single: 'One way',
            return: 'Round trip',
            multiCity: 'Multi-city',
        },
        buttons: {
            back: 'Back',
            select: 'Select',
            purchase: 'Purchase',
            selectOption: 'Select Option',
            selectSeats: 'Select seats',
            purchaseBaggage: 'Purchase baggage',
            continue: "Continue",
            search: "search",
            selectOffer: "select offer",
            close: "Close",
            confirm: "Confirm",
            taavani: "Lad Taavani tage sig af det"
        },
        passengers: {
            passengerDetails: 'Provide passenger details',
            selectPassenger: 'Select passenger',
            placeholder: 'Passenger {count}',
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
                placeholder: 'your mail',
            },
            phone: {
                label: 'Phone number',
                placeholder: 'Enter a phone number',
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
                },
                phone: {
                    required: 'Phone number is required',
                    minLength: 'Your phone number is too short',
                }
            }
        },
        flightOffers: {
            filters: "Filter by",
            filterCabin: "Choose cabin type",
            filterStopovers: "Choose number of stopovers",
            direct: "Direct",
            oneStop: "1 stop",
            twoStops: "2 stops",
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
            noOffersDescription: "We were unable to find any offers matching your search criteria.",
            refund: "Refundable",
            exchange: "Exchangeable",
            layover: "{hours}h {minutes}m layover",
        },
        flightOfferExtended: {
            departureDate: "Departure date",
            cabin: "Cabin class",
            included: "Included",
            purchase: "Purchase",
            select: "Select Option",
            totalPrice: "Total price",
        },
        additionalServices: {
            seats: {
                title: "Select seats",
                attentionText: "Coming soon",
                description: "Do you want a window or an aisle seat?",
                buttonText: "Select seats",
            },
            baggage: {
                title: "Select baggage",
                attentionText: "Coming soon",
                description: "Do you want to purchase baggage?",
                buttonText: "Purchase baggage",
            },
        },
        confirmOffer: {
            bookingReference: "Booking reference",
            passengers: "Passengers",
            travelDetails: "Travel details",
            price: "Price",
            baseCost: "Base cost",
            taavani: "Taavani",
            taavaniPlus: "Service",
            taxes: "Taxes",
            totalPrice: "Total price",
            taavaniPlusConfirm: "I wish to purchase <a href='https://taavani.gl/en/terms-and-conditions' target='_blank' class='text-brand-blue'>Taavani Plus</a> for this trip.",
            additionalServices: "Additional services",
            additionalServicesDescription: "Add your additional remarks, such as hotel or other services.",
            termsAndConditionsDescription: "I accept the <a href='https://taavani.gl/en/terms-and-conditions' target='_blank' class='text-brand-blue'>Terms and Conditions</a>.",
            cancelOffer: "Cancel offer"
        }
    },
};

setup((app) => {

    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages,
        runtimeOnly: false,
    });

    app.use(i18n);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "Light",
            values: [
                { name: "Light", value: "rgb(244, 247, 250)" },
                { name: "Dark", value: "#0f0f0f" },
            ],
        },
    },
};

export default preview;
