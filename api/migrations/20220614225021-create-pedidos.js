'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id:{
        AllowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pessoas', key: 'id'}
      },
      funcionario_id:{
        AllowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pessoas', key: 'id'}
      },
      mesa_id:{
        AllowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Mesas', key: 'id'}
      },
      dataPedido: {
        type: Sequelize.DATEONLY
      },
      valorTotal: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};