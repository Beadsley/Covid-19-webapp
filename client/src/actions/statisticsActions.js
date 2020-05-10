export const statsLoading = (boolean) => {
  return {
    type: 'STATS_LOADING',
    isLoading: boolean,
  };
};

export const updateStats = (stats) => {
  return {
    type: 'UPDATE_STATS',
    stats,
  };
};

export const hasErrored = (boolean) => {
  return {
    type: 'HAS_ERRORED',
    errored: boolean,
  };
};
