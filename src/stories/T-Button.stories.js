import TButton from '../components/T-Button/T-Button.vue';


export default {
  title: 'Taavani/T-Button',
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
export const Example = {
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


