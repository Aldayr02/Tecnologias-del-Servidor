const {Schema, model } = require("mongoose");

const schema = new Schema({
    name: {type: String},
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
		type: String,
		default: "new",
	},
	role: {
		type: String,
		default: "student",
	}
});

module.exports = model("users", schema);