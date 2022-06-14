'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
   
    static associate(models) {
      Itens.belongsToMany(Pedidos);
    }
  }
  Itens.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Itens',
  });
  return Itens;
};