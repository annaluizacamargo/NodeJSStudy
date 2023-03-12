const { validate } = require("email-validator");
const User = require("../models/user");

const bcrtypt = require("bcrypt");

class AuthControler {
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
}

module.exports = new AuthControler();
