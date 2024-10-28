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
    { id: 1, name: { firstName: 'John', lastName: 'Doe' }, profilePhoto: '', contact: { emailAddress: 'john.doe@example.com' } },
    { id: 2, name: { firstName: 'Jane', lastName: 'Smith' }, profilePhoto: '', contact: { emailAddress: 'jane.smith@example.com' } },
    { id: 3, name: { firstName: 'Alice', lastName: 'Johnson' }, profilePhoto: '', contact: { emailAddress: 'alice.johnson@example.com' } },
    { id: 4, name: { firstName: 'Bob', lastName: 'Brown' }, profilePhoto: '', contact: { emailAddress: 'bob.brown@example.com' } },
    { id: 5, name: { firstName: 'Charlie', lastName: 'Davis' }, profilePhoto: '', contact: { emailAddress: 'charlie.davis@example.com' } },
    { id: 6, name: { firstName: 'David', lastName: 'Wilson' }, profilePhoto: '', contact: { emailAddress: 'david.wilson@example.com' } },
    { id: 7, name: { firstName: 'Eve', lastName: 'Moore' }, profilePhoto: '', contact: { emailAddress: 'eve.moore@example.com' } },
    { id: 8, name: { firstName: 'Frank', lastName: 'Taylor' }, profilePhoto: '', contact: { emailAddress: 'frank.taylor@example.com' } },
    { id: 9, name: { firstName: 'Grace', lastName: 'Anderson' }, profilePhoto: '', contact: { emailAddress: 'grace.anderson@example.com' } },
    { id: 10, name: { firstName: 'Hank', lastName: 'Thomas' }, profilePhoto: '', contact: { emailAddress: 'hank.thomas@example.com' } },
    { id: 11, name: { firstName: 'Ivy', lastName: 'Jackson' }, profilePhoto: '', contact: { emailAddress: 'ivy.jackson@example.com' } },
    { id: 12, name: { firstName: 'Jack', lastName: 'White' }, profilePhoto: '', contact: { emailAddress: 'jack.white@example.com' } },
    { id: 13, name: { firstName: 'Karen', lastName: 'Harris' }, profilePhoto: '', contact: { emailAddress: 'karen.harris@example.com' } },
    { id: 14, name: { firstName: 'Leo', lastName: 'Martin' }, profilePhoto: '', contact: { emailAddress: 'leo.martin@example.com' } },
    { id: 15, name: { firstName: 'Mia', lastName: 'Garcia' }, profilePhoto: '', contact: { emailAddress: 'mia.garcia@example.com' } },
];

export const Default = {
    args: {
        contacts: contacts,
    },
};