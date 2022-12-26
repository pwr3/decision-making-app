export const issuesFormProps = {
    title: "Please provide your issue title",
    textField: {
        placeholder: "Add new issue...",
    },
    submitBtn: {
        name: "Add",
        variant: "contained",
    },
};

export const optionsFormProps = {
    title: "Please enter option",
    textField: {
        placeholder: "Add new option...",
    },
    submitBtn: {
        name: "Add",
        variant: "outlined",
    },
};

export const reasonsFormProps = {
    title: "Please enter reason",
    textField: {
        autoFocus: true,
        placeholder: "Add new reason...",
    },
    submitBtn: {
        name: "Add",
        variant: "outlined",
    },
    radioGroup: true,
    reasonTypes: [],
    cancelBtn: true,
};
