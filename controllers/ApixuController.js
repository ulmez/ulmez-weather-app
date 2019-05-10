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

module.exports.search_cities = async (req, res, next) => {
    try {
        // console.log(req.body.cities);
        let cities = req.body.cities;
        let arr = [];
        // var paris = await axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=Paris');
        // var stockholm = await axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=Stockholm');
        
        // console.log('********');
        // console.log(paris.data);
        // console.log('********');
        // console.log(stockholm.data);
        // console.log('********');
        let counter = 0;
        cities.forEach(async (city) => {
            // console.log(city);
            let temp = await axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=' + city.name);
            temp.data.x = city.x;
            temp.data.y = city.y;
            arr.push(temp.data);
            counter++;
            // console.log('********');
            // console.log('********');
            // console.log('********');
            // console.log('********');
            // console.log(counter);
            // console.log('********');
            // console.log('********');
            // console.log('********');
            // console.log('********');

            if(counter === cities.length) {
                console.log(arr);
                res.json({
                    stats: arr
                });
            }

            
        });

        // await arr.push(paris.data);
        // await arr.push(stockholm.data);

        // console.log('********');
        // console.log(arr);
        // console.log('********');

        // res.json({
        //     result: arr
        // });
    } catch(e) {
        console.log(e);
        res.json({
            message: e
        });
    }
    

    // res.json({
    //     result: arr
    // });
    
    // axios.all([
    //     axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=Paris'),
    //     axios.get(process.env.BASE_APIXU_URL + '/current.json?key=' + process.env.APIXU_KEY + '&q=Stockholm')
    // ])
    // .then(((kul) => {
    //     res.json({
    //         stats: kul
    //     });
    // }));
}