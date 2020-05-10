const express = require('express');
const router = express.Router();
const { getStatistics, getClientBuild } = require('../controllers/statisticsController.js');

router.get('/statistics', getStatistics);
process.env.NODE_ENV === 'production' && router.get('*', getClientBuild);

module.exports = router;
