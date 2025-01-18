import bcrypt from 'bcryptjs';

import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        let { fullname, username, password, confirmPassword, gender } = req.body;
        username = username.toLowerCase();

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            res.status(201).json({
                message: "User registered successfully!",
                user: newUser
            });
        } else {
            res.status(400).json({ message: "Invalid user data!" });
        }
    } catch (error) {
        console.log('Error in Signup Controller\n', error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Username or Password!" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            message: "User logged in successfully!",
            user
        });
    } catch (error) {
        console.log('Error in Login Controller\n', error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: "User logged out successfully!" });
    } catch (error) {
        console.log('Error in Logout Controller\n', error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
}