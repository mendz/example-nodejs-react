const mongoose = require('mongoose');

const Sites = mongoose.model('Sites');

exports.setSite = async (req, res) => {
  try {
    const sites = new Sites({
      name: req.body.name,
      url: req.body.url,
      stared: Boolean(req.body.stared)
    });

    await sites.save();
    console.log(`Site saved! - ${req.body.name}`);
    res.send(true);
  } catch (error) {
    console.log(`ERROR: \n${error.stack}`);
  }
};

exports.getAllSites = async (req, res) => {
  try {
    const sites = await Sites
      .find()
      .sort({ created: 'desc' });

    res.send(sites);
  } catch (error) {
    console.log(`ERROR: \n${error.stack}`);
  }
};
