const { Router } = require('express');

const router = Router();


const DisciplinaService = require('../services/DisciplinaService');

//bem-vindo
router.get('/', function (req, res, next) {
    res.status(201).json('Bem-vindo, olá mundo!');
});

//register
router.post('/register', function (req, res, next) {
    DisciplinaService.register(req, res);
});

//list
router.get('/list', function (req, res, next) {
    DisciplinaService.list(req, res);
});


//atualizar - put
router.put('/update/:id', function (req, res, next) {
    DisciplinaService.update(req, res);
});

//delete
router.delete('/delete/:id', function (req, res, next) {
    DisciplinaService.delete(req, res);
});

//retorna só um elemento
router.get('/retrieve/:id', function (req, res, next) {
    DisciplinaService.retrieve(req, res);
});


module.exports = router;