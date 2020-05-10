const config = require('../config/config');

const evalData = (data) => {
  let statesStats = [];
  const totalStates = 50;
  const last3daysData = data.slice(0, totalStates * 3);

  last3daysData.forEach((dailydata, index) => {
    if (index < 50) {
      statesStats.push({
        state: dailydata.state,
        deaths: dailydata.death,
        last3daysDeaths: dailydata.death,
        hospitalizedCurrently: dailydata.hospitalizedCurrently,
        name: config.ENUMS.STATES[dailydata.state],
        recovered: dailydata.recovered,
      });
    } else {
      const index = statesStats.findIndex((data) => data.state === dailydata.state);
      index !== -1 && (statesStats[index].last3daysDeaths = statesStats[index].last3daysdeaths + dailydata.death);
    }
  });
  return statesStats;
};

module.exports = {
  evalData,
};
