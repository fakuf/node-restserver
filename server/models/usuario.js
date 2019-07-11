const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let validRols = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        default: 'USER_ROLE',
        enum: validRols

    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        required: false
    }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe de ser unico'
});

module.exports = mongoose.model('Usuario', usuarioSchema);