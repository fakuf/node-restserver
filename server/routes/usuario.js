const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const Usuario = require('../models/usuario');

app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', function(req, res) {
    res.send('Get Usuarios');
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        rol: body.rol
    });
    usuario.save((err, usuarioDB) => {
        if (err) {
            console.log("Ocurrio un error");
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })


});

app.put('/usuario/:id', function(req, res) {
    let id = request.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', function(req, res) {
    res.send('Delete Usuarios');
});

module.exports = app;