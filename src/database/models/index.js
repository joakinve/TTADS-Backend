'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const db = {};

// Crear conexión
let sequelize;

// Valida si está definida la propiedad use_env_variable (sólo está en el entorno de producción)
if (config.use_env_variable) {
    // Crea la conexión en producción
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    // Crea la conexión en development
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Asociaciones y vinculaciones
fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;