const { request } = require('./httpClient.js');

const getStatesHistoricalData = async () => {
  return await request({
    method: 'get',
    url: 'https://covidtracking.com/api/v1/states/daily.json',
  });
};

module.exports = {
    getStatesHistoricalData
};