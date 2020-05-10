import request from './httpClient';

export const getLanguageStatistics = () => {
  return request({
    method: 'get',
    url: '/api/statistics',
  });
};
