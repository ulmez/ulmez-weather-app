var axios = require('axios');

// Get statistics on one city from APIXU
module.exports.search_city = async (req, res, next) => {
    try {
        var city = req.params.name;
        var result = await axios.get(process.env.BASE_APIXU_URL + '/current?access_key=' + process.env.APIXU_KEY + '&query=' + city);

        console.log(result.data);

        // Return city stats
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

// Get statistics from array of cities from APIXU
module.exports.search_cities = async (req, res, next) => {
    try {
        const cities = req.body.cities;
        const arr = [];
        let counter = 0;
        cities.forEach(async (city) => {
            const temp = await axios.get(process.env.BASE_APIXU_URL + '/current?access_key=' + process.env.APIXU_KEY + '&query=' + city.name);
            temp.data.x = city.x;
            temp.data.y = city.y;
            arr.push(temp.data);
            counter++;

            // Return cities stats after getting all input from cities array
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