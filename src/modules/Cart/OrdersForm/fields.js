const fields = {
    username: {

        type: "text",
        placeholder: "Name",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    phone: {

        type: "tel",
        placeholder: "Phone number",
        name: "phone",
        rules: {
            required: "Phone must be exist",
        }
    },
    email: {

        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },

};

export default fields;