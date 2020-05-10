const config = require('../config/config');

const evalData = (data) => {
  let statesStats = [];
  const totalStates = 56;
  const currentData = data.slice(0, totalStates);
  const fourDaysPriorData = data.slice(totalStates * 3, totalStates * 4);

  currentData.forEach((dailydata) => {
    statesStats.push({
      state: dailydata.state,
      name: config.ENUMS.STATES[dailydata.state],
      recovered: dailydata.recovered,
      hospitalizedCurrently: dailydata.hospitalizedCurrently,
      deaths: dailydata.death,
    });
  });
  fourDaysPriorData.forEach((dailydata) => {
    const stateIndex = statesStats.findIndex((data) => data.state === dailydata.state);
    stateIndex !== -1 &&
      (statesStats[stateIndex].deathsPast3days = statesStats[stateIndex].deaths - dailydata.death);
  });
  return statesStats;
};

module.exports = {
  evalData,
};
