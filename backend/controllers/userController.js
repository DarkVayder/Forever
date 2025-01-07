import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

//Route for user to login
const loginUser = async (req, res) => {

    res.json({msg:"login API is working"})

}

//Route for user to register
const registerUser = async (req, res) => {

    try {

        const {name, email, password} = req.body;

        //Check user to database
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false, message:"User already exists!"})
        }

        //Validating email format and password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Invalid email format!"})
        }
        if (!password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password!"})
        }

        //Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create User
        const newUser = new userModel({name, email, password: hashedPassword})
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//Route for admin to login
const adminLogin = async (req, res) => {

    res.json({msg:"admin API is working"})

}

export { loginUser, registerUser, adminLogin }