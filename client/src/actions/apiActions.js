import { statsLoading, updateStats, hasErrored } from './statisticsActions';

import { getStatistics } from '../network/api';

export const languageStatistics = () => {
  return async (dispatch) => {
    try {
      const statistics = await getStatistics();
      await dispatch(updateStats(statistics));
      dispatch(statsLoading(false));
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
