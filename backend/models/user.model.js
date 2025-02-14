import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    profilePic: {
        type: String,
        default: ""
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;