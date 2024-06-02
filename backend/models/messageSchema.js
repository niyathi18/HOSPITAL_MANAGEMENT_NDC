import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First Name Must Contain Atleast 3 Characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"Last Name Must Contain Atleast 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide A Valid Email!"]
    },
    phone: {
        type: String, //since we want to define min and max length
        required: true,
        minLength: [10,"Phone Number must contain 10 Digits!"],
        maxLength: [10,"Phone Number must contain 10 Digits!"],
    },
    message: {
        type: String, //since we want to define min and max length
        required: true,
        minLength: [10,"Message Must Contain At Least 10 Characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);

