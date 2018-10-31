// UserSchema.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consultaSchema = new Schema({
	nombre: String,
	apellido:String,
	perfil:String

});

module.exports = mongoose.model("consultas", consultaSchema);
