const express = require('express');
const router = express.Router();
const upload = require("../config/upload");




const bodyController = require("../controller/bodyController");
const autenController = require("../controller/atentificacao");
const produtosController = require("../controller/produtos");
const regisController = require("../controller/registrar");
const carrinhoController = require("../controller/carrinho");







router.get('/', bodyController.home);

router.get('/registro', bodyController.cadastro);
router.post('/registro', regisController.store);


router.get('/carrinho', autenController.validando ,bodyController.carrinho);
router.post('/carrinho', autenController.validando ,carrinhoController.remove);


router.get('/cliente', autenController.validando, bodyController.cliente);

router.get('/ecomerce', produtosController.ecomerce);
router.post('/ecomerce',autenController.validando ,carrinhoController.store);

router.get('/finalizar', autenController.validando, bodyController.finalizar);
router.get('/infoProdutos/:id', produtosController.infoProdutos);


router.get('/login', bodyController.login);
router.post('/login', autenController.validatorLogin);


router.get('/mapa', bodyController.mapa);
router.get('/noticia', bodyController.noticia);

router.get('/paginaAdmin', autenController.validando, bodyController.paginaAdmin);
router.post('/paginaAdmin', upload.any() ,produtosController.storeProduto);







module.exports = router;
