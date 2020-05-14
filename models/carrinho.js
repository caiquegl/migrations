module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define(
        "Carrinho", 
        {
            id_carrinho:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                },
              nome_produto:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              quantidade_produto:{
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              valor_produto:{
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              valor_total_produto:{
                type: DataTypes.DECIMAL,
                allowNull: false,
              },
              createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        });
    return Carrinho;
  
    };
