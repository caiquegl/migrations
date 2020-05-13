'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('usuarios', { 
     id_usuario:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      sexo:{
        type: Sequelize.BOOLEAN,
      },
      ofertas:{
        type: Sequelize.BOOLEAN,
      },
      vendedor:{
        type: Sequelize.BOOLEAN,
      },
      createAt: Sequelize.DATE,
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
   return queryInterface.dropTable('usuarios');

  }
};
