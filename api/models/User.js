const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({
    usuario: { type: String, required: true, unique: true},
    nombre: { type: String, required: true},
    password: { type: String, required: true},
    password2: { type: String},
    correo: { type: String, required: true, unique: true},
    telefono: { type: Number, required: true},
    terminos: { type: String},
    profilePic: { type: String, default: ""},
    isAdmin: { type: Boolean, default: false},
}, {
    timestamps: true
});
module.exports = mongoose.model('User', UserSchema);