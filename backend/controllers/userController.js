

//Route for user to login
const loginUser = async (req, res) => {

    res.json({msg:"login API is working"})

}

//Route for user to register
const registerUser = async (req, res) => {

    res.json({msg:"Register API is working"})

}

//Route for admin to login
const adminLogin = async (req, res) => {

    res.json({msg:"admin API is working"})

}

export { loginUser, registerUser, adminLogin }