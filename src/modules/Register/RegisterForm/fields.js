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
            minLength: {
                value: 1,
                message: "Phone must contain al least 11 symbols"
            }
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