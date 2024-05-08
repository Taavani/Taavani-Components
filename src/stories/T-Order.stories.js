import TOrder from "../stages/T-Order/T-Order.vue";

export default {
    component: TOrder,
    title: "Taavani/Stages/T-Order",
    tags: ["autodocs"],
};

export const Default = {
    args: {
        plus: false,
        termsAndConditions: false,
        description:''
    },
    render: (args) => ({
        components: {TOrder},
        setup() {
            return { args };
        },
        template: '<t-order :plus="args.plus" :terms-and-conditions="args.termsAndConditions" @toggle-plus="() => args.plus = !args.plus" :description="args.description" @toggle-terms-and-conditions="() => args.termsAndConditions = !args.termsAndConditions"  @update:description="(value) => args.description = value"></t-order>',
    }),
};