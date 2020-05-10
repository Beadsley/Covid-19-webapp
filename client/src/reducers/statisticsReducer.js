import { combineReducers } from 'redux';

export function statsLoading(state = true, action) {
  switch (action.type) {
    case 'STATS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function updateStats(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_STATS':
      return action.stats;
    default:
      return state;
  }
}
export function hasErrored(state = false, action) {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.errored;
    default:
      return state;
  }
}

export default combineReducers({
  areLoading: statsLoading,
  data: updateStats,
  errored: hasErrored,
});
