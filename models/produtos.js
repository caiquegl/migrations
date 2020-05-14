'use strict';

module.exports = (sequelize, DataTypes) =>{
  
    const produtos = sequelize.define(
        "produtos",{
   id_produtos:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
  nome_produto:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor:{
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  id_usuario:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
  });
  return produtos;

}


