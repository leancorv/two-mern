const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


// UPDATE

router.put("/:id", verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body,
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Puedes actualizar solo tu cuenta");
    }
});

// DELETE
router.delete("/:id", verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("El usuario fue eliminado...");
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Puedes eliminar solo tu cuenta");
    }
});
// GET
router.get("/find/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch(err){
        res.status(500).json(err);
    }
});
// GET ALL
router.get("/:id", verify, async (req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
            res.status(200).json(users);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("No tiene permitido ver todos los usuarios");
    }
});
// GET USER STATS
router.get("/stats", async (req,res)=> {
    const today = new Data();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",];
    try{
        const data = await User.aggregate([
            {
                $proyect:{
                    month: {$month:"$createdAt"},
                },
            },{
                $group: {
                    _id: "$month",
                    total: {$sum:1},
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router