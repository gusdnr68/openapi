const axios = require('axios');
const serviceKey = require('../keys/key');
const { response } = require('express');

const airdata = (callback) => {
    const url = 'http://apis.data.go.kr/1360000/VilageFcstMsgService/getWthrSituation'
    const apiKey = serviceKey.publicPortalKey
    const queryParams = `?ServiceKey=${encodeURIComponent(apiKey)}&pageNo=1&numOfRows=10&dataType=XML&stnId=108`;

    axios.get(url + queryParams)
        .then(response => {
            callback(null, response.data);
        })
        .catch(error => {
            callback(error);
        });
};
airdata({}, (error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Received data:', data);
    }
});

module.exports = airdata;