'use strict';

const { Model } = require('sequelize');

/**
 * @swagger
 * components:
 *   schemas:
 *     PedidoProductos:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *         id_pedido:
 *           type: integer
 *         id_producto:
 *           type: integer
 *         cantidad_prod:
 *           type: integer
 *         precio_unitario:
 *           type: number
 *           format: float
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

module.exports = (sequelize, DataTypes) => {
    class PedidoProductos extends Model {
        static associate(models) {
            PedidoProductos.belongsTo(models.Pedido, { foreignKey: 'id_pedido', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
            PedidoProductos.belongsTo(models.Producto, { foreignKey: 'id_producto', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
        }
    }
    PedidoProductos.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad_prod: { // El pedido puede tener un producto con una cantidad pedida mayor a 1
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio_unitario: { // El precio x unidad del producto AL MOMENTO de realizar el pedido, ya que el precio se puede ir modificando con el tiempo
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'PedidoProductos',
    });
    return PedidoProductos;
};