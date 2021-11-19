'use strict';

var utils = require('../utils/writer.js');
var Temporada = require('../service/TemporadaService');

module.exports.buscar = function buscar (req, res, next) {
  var state = req.swagger.params['state'].value;
  var city = req.swagger.params['city'].value;
  var page = req.swagger.params['page'].value;
  Temporada.buscar(state,city,page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarDetalhes = function buscarDetalhes (req, res, next) {
  var origin = req.swagger.params['origin'].value;
  Temporada.buscarDetalhes(origin)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
