const PRIMARY_ROUTE = '/api';

const routes = (app) => {
    app.use(PRIMARY_ROUTE + '/search', require('../components/search/network'));
}

module.exports = routes;