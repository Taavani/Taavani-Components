import TFlightOffer from "../components/T-Flight-Offer/T-Flight-Offer.vue";
import data from "../../data/FLIGHT-OFFERS-CPH-LHR-SINGLE-28-10.json";

export default {
  title: "Taavani/Components/T-Flight-Offer",
  component: TFlightOffer,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
    offer: Object,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Example = {
  args: {
    offer: data[0],
  },
};
