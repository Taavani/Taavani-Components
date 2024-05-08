import TDaysSelector from "../components/T-Days-Selector/T-Days-Selector.vue";

export default {
  title: "Taavani/Design System/T-Days-Selector",
  component: TDaysSelector,
  tags: ["autodocs"],
  argTypes: {
    options: Array,
  }
};

export const Example = {
  args: {
    options: [
      { label: "01-02-2024", value: "DKK 5000" },
      { label: "02-02-2024", value: "DKK 1240" },
      { label: "02-03-2024", value: "DKK 120000" },
      { label: "02-04-2024", value: "DKK 123" },
      { label: "02-05-2024", value: "DKK 8000" },
      { label: "02-06-2024", value: "DKK 10" },
      { label: "02-07-2024", value: "DKK 7630" },
    ],
    onChoose: (value) => {
      console.log(value);
    },
  },
};
