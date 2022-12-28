export const issuesFormProps = {
    title: "Add a meaningful title to identify your issue.",
    textField: {
        placeholder: "Enter title",
    },
    submitBtn: {
        name: "Add",
        variant: "contained",
    },
};

export const optionsFormProps = {
    title: "What are your potential solutions? Please input the title of each option.",
    textField: {
        placeholder: "Enter option title",
    },
    submitBtn: {
        name: "Add",
        variant: "outlined",
    },
};

export const reasonsFormProps = {
    title: "You probably have some reasons for this option. Good or Bad.",
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
