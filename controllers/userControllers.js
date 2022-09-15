const { validate } = require("../models/userSchema");
const User = require("../models/userSchema")
const bcryptjs = ("bcryptjs")

// adding a user


const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    const valid = await validate({ username, email, password });
    if (valid) {
        const savedUser = await User.create({
            username,
            email,
            password,

        });

        res.status(201).json({
            success: true,
            message: "user created",
            savedUser,
        });
    } else {
        res.status(400).json({
            error: true,
            message: "invalid data",
        });
    }
    // user login
    async function loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                res.status(404).json({
                    error: true,
                    message: "Account"
                });
            }
            const isValid = await bcryptjs.localeCompare(user, password, email);
            if (!isValid) {
                return res.status(404).json({
                    error: true,
                    message: "invalid password"

                })
            }
            return res.status(200).send({
                success: true,
                message: "user logged in",
            });
        } catch (error) {

            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Couldn't login. please try again.",
            });
        }
    }
}
// getting a user 
    const getUsers = async (req, res) => {
        const users = await User.find();
        res.status(200).json(users);
    }
    module.exports = { addUser, loginUser, getUsers } 