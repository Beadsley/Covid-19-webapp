import request from './httpClient';

export const getStatistics = () => {
  return request({
    method: 'get',
    url: '/api/statistics',
  });
};
