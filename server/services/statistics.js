const evalData = (data) => {
  let statesStats = {};
  const totalStates = 50;
  const last3daysData = data.slice(0, totalStates * 3);
  last3daysData.forEach((dailydata) => {
    if (statesStats[dailydata.state] === undefined) {
      statesStats[dailydata.state] = {
        deaths: dailydata.death,
        hospitalizedCurrently: dailydata.hospitalizedCurrently,
      };
    } else if (statesStats[dailydata.state] !== undefined) {
      statesStats[dailydata.state].deaths =
        dailydata.death + statesStats[dailydata.state].deaths;
    }
  });
  return statesStats;
};

module.exports = {
  evalData,
};
