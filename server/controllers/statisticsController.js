const { getStatesHistoricalData } = require('../services/api.js');

const getStatistics = async (req, res) => {
  try {
    const result = await getStatesHistoricalData();

    res.json({
      result,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

module.exports = {
  getStatistics,
};
