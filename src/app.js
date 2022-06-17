const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const errors = require('./network/errors');

// se carga el archivo de configuracion de variables de entorno
dotenv.config();

// se crea el servidor, utilizando json como formato de datos y cors para permitir peticiones desde cualquier origen de momento
const app = express();
app.use(bodyParser.json());
app.use(cors());

// se integra el router de la aplicacion
const router = require('./network/routes');
router(app);

// manejo de errores de la aplicacion
app.use(errors);

// se corre el servidor
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}
);

// se exporta el servidor para que sea utilizado en otros archivos
module.exports = app;
