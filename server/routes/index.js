const express = require('express');
const sitesController = require('../controllers/sitesController');

const router = express.Router();

try {
  router.post('/api/sites', sitesController.setSite);
  router.get('/api/sites', sitesController.getAllSites);
} catch (error) {
  console.log(`ERROR: \n${error.stack}`);
}

module.exports = router;
