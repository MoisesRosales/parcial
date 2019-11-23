const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaisSchema = Schema({
    codigo_postal: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },poblacion_total: {
        type: String,
        required: true,
        unique: false
    },extension_territorial: {
        type: String,
        required: true,
        unique: false
    },capital: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Pais", PaisSchema);