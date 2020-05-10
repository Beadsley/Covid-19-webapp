const { getStatesHistoricalData } = require('../services/api.js');
const { evalData } = require('../services/statistics.js');

const getStatistics = async (_req, res) => {
  try {
    const data = await getStatesHistoricalData();
    const result = evalData(data);
    res.json(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

module.exports = {
  getStatistics,
};
