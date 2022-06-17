const request = require('request');
const dotenv = require('dotenv');

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
    request(options, (error, response) => {
        if (error) throw new Error(error);
        res.json(JSON.parse(response.body));
    });
}

module.exports = {
    search
};