import TButton from '../components/T-Button/T-Button.vue';


export default {
  title: 'Taavani/T-Button',
  component: TButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    style: {
      control: {
        type: 'select',
      },
      options: ['solid-blue', 'liquid-blue' ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Example = {
  args: {
    title: 'Button',
  },
};



