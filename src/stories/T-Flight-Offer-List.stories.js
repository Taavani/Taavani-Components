import TFlightOfferList from "../components/T-Flight-Offer-List/T-Flight-Offer-List.vue";
import TFlightOffer from "../components/T-Flight-Offer/T-Flight-Offer.vue";
import Offers from "../../data/FLIGHT-OFFERS-GOH-CPH-17-06.json";

export default {
  components: { TFlightOffer },
  title: "Taavani/Design System/T-Flight-Offer-List",
  component: TFlightOfferList,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
    offers: Array,
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#F4F7FA" },
        { name: "dark", value: "#0f0f0f" },
      ],
    },
  },
};

export const ListWithOffers = {
  render: (args) => ({
    components: { TFlightOfferList, TFlightOffer },
    setup() {
      return { args };
    },
    template:
      '<t-flight-offer-list><t-flight-offer v-for="offer in args.offers" :offer="offer"></t-flight-offer></t-flight-offer-list>',
  }),
  args: {
    offers: Offers,
  },
};
