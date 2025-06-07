require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { json } = require('body-parser');
const app = express();

// Swagger
const setupSwagger = require('./config/swagger'); 
setupSwagger(app); // Llama a la función de configuración de Swagger con tu instancia 'app'

// Requerir router
const router = require('./routes/index.routes');

// Settings (Middlewares globales)
app.use(cors());
app.use(express.json({ extended: true }));
//app.use(express.urlencoded({ extend: false }));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(json());
app.use(express.json()); // ✅ parser de JSON nativo
app.use(express.urlencoded({ extended: true })); // ✅ parser URL-encoded nativo

// Rutas
// Servir archivos estáticos desde el directorio de imágenes
app.use('/img', express.static('src/img'));

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).json({
        status: '404',
        descripcion: 'Página no encontrada.'
    })
})

module.exports = app;