var axios = require('axios');

module.exports.search_city = function(req, res, next) {
    axios.get('http://api.apixu.com/v1/current.json?key=624ef1f601dc49918c395422191704&q=paris')
    .then(function(result) {
        console.log(result.data);

        res.json({
            stats: result.data
        });
    })
    .catch(function(error) {
        console.log(error);

        res.json({
            message: error
        });
    });
}