var axios = require('axios');

module.exports.search_city = async (req, res, next) => {
    try {
        var city = req.params.name;
        var result = await axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=' + city);

        console.log(result.data);
        res.json({
            stats: result.data
        });
    } catch(error) {
        console.log(error);
        res.json({
            message: error
        });
    }
}

module.exports.search_cities = async (req, res, next) => {
    try {
        const cities = req.body.cities;
        const arr = [];
        let counter = 0;
        cities.forEach(async (city) => {
            const temp = await axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=' + city.name);
            temp.data.x = city.x;
            temp.data.y = city.y;
            arr.push(temp.data);
            counter++;

            if(counter === cities.length) {
                console.log(arr);
                res.json({
                    stats: arr
                });
            }
        });
    } catch(e) {
        console.log(e);
        res.json({
            message: e
        });
    }
}