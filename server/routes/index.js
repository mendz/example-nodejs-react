const express = require('express');
const sitesController = require('../controllers/sitesController');
const loginController = require('../controllers/loginController');

const router = express.Router();

try {
  router.post('/api/sites', sitesController.setSite);
  router.get('/api/sites', sitesController.getAllSites);
  router.post('/login', loginController.token);
} catch (error) {
  console.log(`ERROR: \n${error.stack}`);
}

module.exports = router;
