// UserSchema.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	nombre: String,
	apellido:String,
	perfil:String

});

module.exports = mongoose.model("integrantes", UserSchema);
