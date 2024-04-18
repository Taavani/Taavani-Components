import TSelectTrip from "../stages/T-Select-Trip.vue";

export default {
  title: "Taavani/Stages/T-Select-Trip",
  component: TSelectTrip,
  tags: ["autodocs"],
  argTypes: {
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

export const Default = { };