import TButton from '../components/T-Button/T-Button.vue';

export default {
  title: 'Taavani/Components/T-Button',
  component: TButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    coat: {
      control: {
        type: 'select',
      },
      options: ['solid-blue', 'liquid-blue', 'liquid-blue-small' ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const SolidBlue = {
  args: {
    title: 'Button',
  },
};

export const SolidBlueDisabled = {
    args: {
        title: 'Button',
        disabled: true,
        coat: 'solid-blue',
    },
};

export const LiquidBlue = {
    args: {
        title: 'Button',
        coat: 'liquid-blue',
    },
}

export const LiquidBlueDisabled = {
    args: {
        title: 'Button',
        disabled: true,
        coat: 'liquid-blue',
    },
}

export const LiquidBlueSmall = {
    args: {
        title: 'Button',
        coat: 'liquid-blue-small',
    },
}

export const LiquidBlueSmallDisabled = {
    args: {
        title: 'Button',
        disabled: true,
        coat: 'liquid-blue-small',
    },
}


