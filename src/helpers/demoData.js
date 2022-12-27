const initialDemoData = () => {
    const isInitial = JSON.parse(localStorage.getItem("initial"));

    if (!isInitial) {
        localStorage.setItem("initial", JSON.stringify({ foo: "bar" }));

        const initialIssues = [
            { id: 1, title: "Should I drink coffee now?" },
            { id: 2, title: "Phone battery is almost dead" },
            { id: 3, title: "Parcel vs Vite" },
        ];
        const initialOptions = [
            { id: 1, title: "Yes, drink coffee!", issue_id: "1" },
            { id: 2, title: "No", issue_id: "1" },
            { id: 3, title: "I'd rather have some tea", issue_id: "1" },
            { id: 4, title: "Charge now at the mall", issue_id: "2" },
            { id: 5, title: "Charge at home", issue_id: "2" },
        ];
        const initialReasons = [
            {
                id: 1,
                title: "Energy will arrive",
                option_id: 1,
                reason_type_id: "1",
            },
            {
                id: 2,
                title: "I'll get a good mood",
                option_id: 1,
                reason_type_id: "1",
            },
            {
                id: 3,
                title: "I can't make it in time - coffee shops are closing soon",
                option_id: 1,
                reason_type_id: "3",
            },
            {
                id: 4,
                title: "It's cold outside",
                option_id: 1,
                reason_type_id: "2",
            },
            {
                id: 5,
                title: "Don't have to go anywhere",
                option_id: 2,
                reason_type_id: "1",
            },
            {
                id: 6,
                title: "I want to drink something",
                option_id: 2,
                reason_type_id: "2",
            },
            {
                id: 7,
                title: "There is no need to go anywhere, there is tea at home",
                option_id: 3,
                reason_type_id: "1",
            },
            {
                id: 8,
                title: "Doesn't give you as much energy as coffee",
                option_id: 3,
                reason_type_id: "2",
            },
            {
                id: 9,
                title: "I will be rescued",
                option_id: 4,
                reason_type_id: "1",
            },
            {
                id: 10,
                title: "Not sure if there are usb sockets",
                option_id: 4,
                reason_type_id: "3",
            },
            {
                id: 11,
                title: "In theory, 10% is enough for another 3 hours",
                option_id: 4,
                reason_type_id: "3",
            },
            {
                id: 12,
                title: "Gotta sit and wait",
                option_id: 4,
                reason_type_id: "2",
            },
            {
                id: 13,
                title: "Don't have to waste time now",
                option_id: 5,
                reason_type_id: "1",
            },
            {
                id: 14,
                title: "I can miss an important call if the phone runs out of power",
                option_id: 5,
                reason_type_id: "2",
            },
        ];

        localStorage.setItem("issues", JSON.stringify(initialIssues));
        localStorage.setItem("options", JSON.stringify(initialOptions));
        localStorage.setItem("reasons", JSON.stringify(initialReasons));
    }
};

export default initialDemoData;
