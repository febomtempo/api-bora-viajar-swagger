'use strict';


/**
 * Encontrar as melhores hospedagens na localização escolhida.
 * Vários tipos de hospedagens baseadas pela localização.
 *
 * state String Estado onde a hospedagem está localizada. (optional)
 * city String Cidade onde a hospedagem está localizada. (optional)
 * page Integer Página da busca (optional)
 * no response value expected for this operation
 **/
exports.buscar = function(state,city,page) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Informações mais detalhadas da hospedagem.
 * Várias informações extras sobre a hospedagem selecionada.
 *
 * origin String ID único de cada hospedagem. (optional)
 * no response value expected for this operation
 **/
exports.buscarDetalhes = function(origin) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

