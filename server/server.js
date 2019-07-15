require('./config/config');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const express = require('express');
const app = express();

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, resp) => {
        if (err)
            throw err;
        console.log("DB respondiendo");
    });

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});