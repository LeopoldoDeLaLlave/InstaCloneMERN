const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.send('Hello');
});

//Crear nuevos usuarios
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    //Comprobamos que hay aintroducido todos los datos
    if (!name || !email || !password) {
        return res.status(422).json({ "error": "faltan datos" });
    }

    try {

        //Comprobamos si el mail ya está registrado
        const savedUser = await User.findOne({ email: email });

        if (savedUser) {
            return res.status(422).json({ "error": "usuario ya registrado" });
        }
        //Protegemos la contraseña
        hashedPassword = await bcrypt.hash(password, 12);
        //Creamos el nuevo usuario
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        try {
            await user.save();

            res.json({ "message": "saved user" });
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }


});

module.exports = router;