const bcrypt = require('bcryptjs');
const userCtrl = {};
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Crear nuevos usuarios
userCtrl.signUpUser = async (req, res) => {
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
};

//Apertura de sesión de usuarios ya registrados
userCtrl.signInUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ "error": "please add email or password" });
    }

    try {
        const savedUser = await User.findOne({ email: email });
        if (!savedUser) {
            return res.status(422).json({ "error": "Invalid email or password" });
        }

        doMatch = await bcrypt.compare(password, savedUser.password);

        if (doMatch) {
            const token = jwt.sign({id:savedUser._id}, process.env.JSW_SECRET);
            res.json({token});
        } else {
            return res.status(422).json({ "error": "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
    }
};

userCtrl.accesToProtected = async(req,res)=>{
    res.send("Hello user");
};


module.exports = userCtrl;