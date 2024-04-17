import TSelectTrip from "../stages/T-Select-Trip.vue";

export default {
  title: "Taavani/Stages/T-Select-Trip",
  component: TSelectTrip,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
    coat: {
      control: {
        type: "select",
      },
      options: ["solid-blue", "liquid-blue", "liquid-blue-small"],
    },
  },
};
