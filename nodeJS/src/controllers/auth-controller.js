const { validate } = require("email-validator");
const User = require("../models/user");
const bcrtypt = require("bcrypt");
const jwt = require("jsonwebtoken")

class AuthController {
    async singUp(req, res) {
        try {
            let { name, email, password, confirmPassword } = req.body;

            const emailIsValid = validate(email);

            if (!emailIsValid) {
                return res
                    .status(422).
                    json({ message: "Invalid email!" });
            }
            if (!name) {
                return res
                    .status(422)
                    .json({ message: 'Name is required!' });
            }

            if (!email) {
                return res
                    .status(422)
                    .json({ message: 'Email is required!' });
            }

            if (!password) {
                return res
                    .status(422)
                    .json({ message: 'Password is required!' });
            }

            if (password != confirmPassword) {
                return res
                    .status(422)
                    .json({ message: 'Password do not match!' });
            }
            const userExists = await User.findOne({ email });

            if (userExists) {
                return res
                    .status(422)
                    .json({ message: 'User alread exists!' });
            }

            const salt = await bcrtypt.genSalt(12);

            password = await bcrtypt.hash(password, salt);

            const user = new User({
                name,
                email,
                password,
            });

            await user.save();
            return res
                .status(200)
                .json({ message: 'User succesfully created!' })

        } catch (err) {
            return res
                .status(500)
                .json({ message: err });
        }
    }

    async singIn(req, res) {
        try {
            const { email, password } = req.body;
            if (!email) {
                return res
                    .status(422)
                    .json({ message: "Email is required!" });
            };

            if (!password) {
                return res
                    .status(422)
                    .json({ message: "Password is required!" });
            };

            const user = await User.findOne({ email: email });

            if (!user) {
                return res
                    .status(404)
                    .json({ message: "User not found!" });
            };

            const validatePassword = await bcrtypt.compare(password, user.password);

            if (!validatePassword) {
                return res
                    .status(422)
                    .json({ message: "Invalid Password!" });
            };

            const secret = process.env.SECRET;
            const token = jwt.sing(
                {
                    id: user._id,
                },
                secret
            );
            res.status(200).json({ message: "User logged in ssuccessfuly!" })

        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

module.exports = new AuthController();
