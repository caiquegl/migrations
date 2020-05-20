module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define("usuarios", {
       id_usuario:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          },
        password:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        email:{
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        CPF:{
          type: DataTypes.STRING,
          allowNull: false,
        unique: true,

        },
        nome:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        endereco:{
          type: DataTypes.STRING,
        },
        nascimento:{
          type: DataTypes.DATE,
        },
        sexo:{
          type: DataTypes.BOOLEAN,
        },
        ofertas:{
          type: DataTypes.BOOLEAN,
        },
        vendedor:{
          type: DataTypes.BOOLEAN,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        
        });

        usuarios.associate = (models) => {
          usuarios.hasMany(models.produtos, {foreignKey:"id_usuario", as: "produtos"})
        };

        usuarios.associate = (models) => {
          usuarios.hasMany(models.carrinhos, {foreignKey:"id_usuario", as: "carrinho"})
        };
        
        return usuarios;

    };
