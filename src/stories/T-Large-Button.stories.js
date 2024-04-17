import TLargeButton from "../components/T-Large-Button/T-Large-Button.vue";

export default {
  title: "Taavani/Components/T-Large-Button",
  component: TLargeButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {},
  },
};

export const disabledLargeButton = {
  args: {
    title: "Button",
    disabled: true,
  },
};
