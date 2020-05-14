'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('carrinho', { 
    id_carrinho:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       },
     nome_produto:{
       type: Sequelize.STRING,
     },
     quantidade_produto:{
       type: Sequelize.INTEGER,
     },
     valor_produto:{
       type: Sequelize.DECIMAL,
     },
     valor_total_produto:{
       type: Sequelize.DECIMAL,
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
   return queryInterface.dropTable('carrinho');

  }
};
