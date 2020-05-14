'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('produtos', {
   id_produtos:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
  nome_produto:{
    type: Sequelize.STRING,
    allowNull: false,

  },
  foto:{
    type: Sequelize.STRING,
    allowNull: false,

  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false,

  },
  valor:{
    type: Sequelize.DECIMAL,
    allowNull: false,

  },
  id_usuario:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('produtos');

  }
};
