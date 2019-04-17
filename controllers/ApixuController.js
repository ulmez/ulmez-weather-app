var axios = require('axios');

module.exports.search_city = function(req, res, next) {
    var city = req.params.name;

    axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=' + city)
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