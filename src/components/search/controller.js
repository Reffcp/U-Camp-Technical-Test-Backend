const request = require('request');
const response = require('../../network/response');
/*
*  Metodo para obtener los datos de la API
*  @param {Object} req
*  @param {Object} res
*  @return {Object} response
*/
const search = (req, res) => {
    const query = req.query.query;
    const options = {
        'method': 'GET',
        'url': `${process.env.API_MLIBRE}/search?q=${query}`
    };
    request(options, (error, resp) => {
        if (error) throw new Error(error);
        response.success(res, JSON.parse(resp.body), 200);
    });
}

module.exports = {
    search
};