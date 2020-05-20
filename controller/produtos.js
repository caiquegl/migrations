const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { produtos } = require("../models");


const produtosController = {
    storeProduto: async (req, res) => {
        const {nome_produto, valor, descricao, id_usuario} = req.body;
        const [foto] = req.files;
        let id = req.session.usuario.id;

        console.log(produtos);

        const produtosDb = await produtos.create({
                nome_produto,
                valor,
                descricao, 
                id_usuario: id,
                foto: foto.filename,
                createdAt: Date.now,
                updatedAt: Date.now,
            });

            return res.redirect("paginaAdmin");
    },
    ecomerce: async (req, res) => {
  
        const produtosDb = await produtos.findAll();
      
          return res.render("ecomerce", {usuario: req.session.usuario, produtosDb});
      },
      infoProdutos: async (req, res) => {
        const con = new Sequelize(config);
        const id = req.params.id;
        // const infoProduto = await produtos.findAll(
        //   {
        //     where: {
        //       produtos_id: id
        //     }
        //   });
         
        //   return res.render("infoProdutos", {usuario: req.session.usuario, infoProduto: infoProduto});
      },
}

module.exports = produtosController;