const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const { usuarios } = require("../models");
const {carrinhos} = require("../models");



const autentificacao = {
    validando:(req,res,next)=>{
    
        if(!req.session.usuario){
          res.redirect('/login');
          
      }next();
    },
    validatorLogin: async (req, res) => {
        const { email, password } = req.body;
    
        const [usuario] = await usuarios.findAll({
          
            where: {
              email,
            }
            
        });
    
        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
          return res.render("login", {
            msg: "Email ou senha errados!",
          });
        }
        
        
        req.session.usuario = {
          id: usuario.id_usuario,
          nome: usuario.nome,
          email: usuario.email,
          CPF: usuario.CPF,
          endereco: usuario.endereco,
          nascimento: usuario.nascimento,
          sexo: usuario.sexo,
        };



        let id = req.session.usuario.id;

        count = await carrinhos.count({
          where: {
            id_usuario: id
          }
        })

        req.session.count = {
          count: count,
        };

        console.log(count)
        
      
            return res.redirect("cliente");
      
    
      
    },
}

module.exports = autentificacao;