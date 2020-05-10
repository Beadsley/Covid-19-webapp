const config = require('../config/config');

const evalData = (data) => {
  let statesStats = [];
  const totalStates = 56;
  const last3daysData = data.slice(0, totalStates * 3);

  last3daysData.forEach((dailydata, index) => {
    if (index < totalStates) {
      statesStats.push({
        state: dailydata.state,
        name: config.ENUMS.STATES[dailydata.state],
        recovered: dailydata.recovered,
        hospitalizedCurrently: dailydata.hospitalizedCurrently,
        deaths: dailydata.death,
        deathsPast3days: dailydata.death,
      });
    } else {
      const stateIndex = statesStats.findIndex((data) => data.state === dailydata.state);
      stateIndex !== -1 && (statesStats[stateIndex].deathsPast3days = statesStats[stateIndex].deathsPast3days + dailydata.death);
    }
  });
  return statesStats;
};

module.exports = {
  evalData,
};
