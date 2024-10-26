import TApprove from "../stages/T-Approve/T-Approve.vue"

export default {
    title: "Taavani/Stages/T-Approve",
    component: TApprove,
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                {name: "light", value: "#F4F7FA"},
                {name: "dark", value: "#0f0f0f"},
            ],
        },
    },
}
const contacts = [
    { name: { firstName: 'John', lastName: 'Doe' }, profilePhoto: '', contact: { emailAddress: 'john.doe@example.com' } },
    { name: { firstName: 'Jane', lastName: 'Smith' }, profilePhoto: '', contact: { emailAddress: 'jane.smith@example.com' } },
    { name: { firstName: 'Alice', lastName: 'Johnson' }, profilePhoto: '', contact: { emailAddress: 'alice.johnson@example.com' } },
    { name: { firstName: 'Bob', lastName: 'Brown' }, profilePhoto: '', contact: { emailAddress: 'bob.brown@example.com' } },
    { name: { firstName: 'Charlie', lastName: 'Davis' }, profilePhoto: '', contact: { emailAddress: 'charlie.davis@example.com' } },
    { name: { firstName: 'David', lastName: 'Wilson' }, profilePhoto: '', contact: { emailAddress: 'david.wilson@example.com' } },
    { name: { firstName: 'Eve', lastName: 'Moore' }, profilePhoto: '', contact: { emailAddress: 'eve.moore@example.com' } },
    { name: { firstName: 'Frank', lastName: 'Taylor' }, profilePhoto: '', contact: { emailAddress: 'frank.taylor@example.com' } },
    { name: { firstName: 'Grace', lastName: 'Anderson' }, profilePhoto: '', contact: { emailAddress: 'grace.anderson@example.com' } },
    { name: { firstName: 'Hank', lastName: 'Thomas' }, profilePhoto: '', contact: { emailAddress: 'hank.thomas@example.com' } },
    { name: { firstName: 'Ivy', lastName: 'Jackson' }, profilePhoto: '', contact: { emailAddress: 'ivy.jackson@example.com' } },
    { name: { firstName: 'Jack', lastName: 'White' }, profilePhoto: '', contact: { emailAddress: 'jack.white@example.com' } },
    { name: { firstName: 'Karen', lastName: 'Harris' }, profilePhoto: '', contact: { emailAddress: 'karen.harris@example.com' } },
    { name: { firstName: 'Leo', lastName: 'Martin' }, profilePhoto: '', contact: { emailAddress: 'leo.martin@example.com' } },
    { name: { firstName: 'Mia', lastName: 'Garcia' }, profilePhoto: '', contact: { emailAddress: 'mia.garcia@example.com' } },
];

export const Default = {
    args: {
        contacts: contacts,
    },
};