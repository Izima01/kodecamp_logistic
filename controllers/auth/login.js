const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userModel');
const secret = process.env.secret;
const joi = require('joi');

async function loginController (req, res) {
    const { email, password } = req.body;

    const loginSchema = joi.object({
        email: joi.string().email().required('email is required'),
        password: joi.string().required('password is required').min(6).max(16)
    });

    const { error: validationError } = loginSchema.validate({ email, password });
    
    if (validationError) return res.send(validationError);

    const userDetail  = await userModel.findOne({ email });
    const { email: userEmail, _id: userId, role } = userDetail;
    
    if (!userDetail) return res.status(404).send("User not found");

    const doesPasswordMatch = bcrypt.compareSync(password, userDetail.password);
    if (!doesPasswordMatch) return res.status(400).send("invalid-credentials");

    const token = jwt.sign({ userEmail, userId, role }, secret);

    res.status(200).json({ message: "Sign in successfully", token });
}

module.exports = loginController;