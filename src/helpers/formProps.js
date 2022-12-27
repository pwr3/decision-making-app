export const issuesFormProps = {
    title: "Add a meaningful title to identify this issue.",
    textField: {
        placeholder: "Enter title",
    },
    submitBtn: {
        name: "Add",
        variant: "contained",
    },
};

export const optionsFormProps = {
    title: "What options do you have? Please enter option title.",
    textField: {
        placeholder: "Enter option title",
    },
    submitBtn: {
        name: "Add",
        variant: "outlined",
    },
};

export const reasonsFormProps = {
    title: "You probably have reasons for this option. Good or Bad.",
    textField: {
        autoFocus: true,
        placeholder: "Add reason",
    },
    submitBtn: {
        name: "Add",
        variant: "outlined",
    },
    radioGroup: true,
    reasonTypes: [],
    cancelBtn: true,
};
