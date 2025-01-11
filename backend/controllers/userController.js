import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password presence
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        // Check user existence
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password!" });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password!" });
        }

        // Generate token
        const token = createToken(user._id);

        res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check user existence
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists!" });
        }

        // Validate input
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format!" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password!" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        // Generate token
        const token = createToken(user._id);

        res.status(201).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required." });
        }

        // Check credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Generate JWT token
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

            return res.json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, message: "Invalid email or password." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};
export { loginUser, registerUser, adminLogin };
