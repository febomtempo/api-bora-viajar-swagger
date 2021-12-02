'use strict';

var utils = require('../utils/writer.js');
var Carteira = require('../service/CarteiraService');

module.exports.carteiraRecomendacao = function carteiraRecomendacao (req, res, next) {
  var balance = req.swagger.params['balance'].value;
  Carteira.carteiraRecomendacao(balance)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
