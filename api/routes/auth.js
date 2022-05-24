const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req,res) =>{
    const newUser = new User ({
        usuario:req.body.usuario,
        nombre:req.body.nombre,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        password2:req.body.password2,
        correo:req.body.correo,
        telefono:req.body.telefono,
        terminos:req.body.terminos,
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.statuts(500).json(err);
    }
});

// LOGIN
router.post("login", async (req,res)=> {
    try{
        const user = await User.findOne({ usuario:req.body.usuario});
        !user && res.status(401).json("Contraseña o usuario incorrecto!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPssword = bytes.toString(CryptoJS.enc.Utf8);
        
        originalPassword !== req.body.password &&
         res.status(401).json("Contraseña o usuario incorrecto!");
        
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, { expiresIn: "5d"});

        const { password, ...info } = user._doc;

        res.status(200).json({info, accessToken});
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;