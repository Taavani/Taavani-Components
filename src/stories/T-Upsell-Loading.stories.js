import TUpsellLoading from "../components/T-Upsell-Loading/T-Upsell-Loading.vue";
import TUpsellOfferList from "../components/T-Upsell-Offer-List/T-Upsell-Offer-List.vue";
export default {
    components: { TUpsellLoading },
    title: "Taavani/Design System/T-Upsell-Loading",
    component: TUpsellLoading,
    tags: ["autodocs"],
};

const Default = (args) => ({
    render: (args) => ({
        components: { TUpsellLoading, TUpsellOfferList },
        setup() {
            return { args };
        },
        template:
            '<t-upsell-offer-list><t-upsell-loading></t-upsell-loading></t-upsell-offer-list>',
    }),
})
