import TUpsellOfferList from "../components/T-Upsell-Offer-List/T-Upsell-Offer-List.vue";
import data from "../../data/UPSELL-OFFERS-CPH-LHR-12-01-2024.json"
import TUpsellOffer from "../components/T-Upsell-Offer/T-Upsell-Offer.vue";
export default {
    components: {TUpsellOffer, TUpsellOfferList},
    title: 'Taavani/Design System/T-Upsell-Offer-List',
    component: TUpsellOfferList,
    tags: ['autodocs'],
    argTypes: {
        offers: Array
    },
};

export const ListWithOffers = {
    render: (args) => ({
        components: { TUpsellOfferList, TUpsellOffer },
        setup() {
            return { args }
        },
        template: '<t-upsell-offer-list><t-upsell-offer v-for="offer in args.offers" :offer="offer" :on-select="props => console.log(props)"></t-upsell-offer></t-upsell-offer-list>'
    }),
    args: {
        offers: data
    }
}