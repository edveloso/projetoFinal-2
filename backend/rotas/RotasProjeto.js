module.exports = function(app){

    var projetoCtrl = require('../controllers/ControleProjeto');

    app.post('/projeto', projetoCtrl.insert, function(req, res){ });

    app.get('/projeto/:u', projetoCtrl.getOne, function(req, res){ });

    app.get('/projetos/:u', projetoCtrl.getById, function(req, res){ });

    app.post('/projeto/seguir/:u', projetoCtrl.seguirProjeto, function(req, res){ });

    app.get('/getProjetos/:nome', projetoCtrl.buscarPorNome, function(req, res){ });

    app.post('/seguidores', projetoCtrl.buscarSeguidores, function(req, res){ });

    app.get('/totalProjetos/:u', projetoCtrl.getTotalProjetos, function(req, res){

    });

}
