const request = require('request');
const response = require('../../network/response');
/*
*  Metodo para obtener los datos de la API
*  @param {Object} req
*  @param {Object} res
*  @return {Object} response
*/
const search = (req, res) => {
    if (req.query.query && req.query.limit && req.query.offset) {
        const query = req.query.query;
        const limit = req.query.limit;
        const offset = req.query.offset;
        const options = {
            'method': 'GET',
            'url': `${process.env.API_MLIBRE}/search?q=${query}&limit=${limit}&offset=${offset}${(req.query.item_condition) ? `&ITEM_CONDITION=${req.query.item_condition}` : ''}${(req.query.sort) ? `&sort=${req.query.sort}` : ''}`,
        };
        request(options, (error, resp) => {
            if (error) throw new Error(error);
            response.success(res, JSON.parse(resp.body), 200);
        });
    } else {
        response.error(res, 'Error en la peticion, faltan parámetros', 404);
    }
}

module.exports = {
    search
};