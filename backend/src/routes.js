// para importar algo especificos utiliza-se chaves
const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

// Métodos HTTP : GET, POST, PUT, DELETE

// Tipos de Parâmetros

// Query Parms: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteraão ou remoção)
// Body: request.body (Dados para criação ou alteração de algum registro)

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

// exportando as rotas
module.exports = routes;