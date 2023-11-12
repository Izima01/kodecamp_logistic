const bcrypt = require('bcrypt');
const userModel = require('../../models/userModel');
const joi = require('joi');

async function registerController (req, res) {
    const { fullName, email, password, role } = req.body;

    const validationSchema = joi.object({
        fullName: joi.string().required(),
        email: joi.string().email().required(),
        role: joi.string(),
        password: joi.string().min(6).required()
    });
    
    const { error: validationError } = validationSchema.validate(req.body);
    if (validationError) return res.send(validationError);

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await userModel.create({
        fullName, email, password: hashedPassword, role
    });

    res.status(201).send('Created Successfully');
}

module.exports = registerController;