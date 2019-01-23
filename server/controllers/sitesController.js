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
    const msg = `Site saved! - ${req.body.name}`;
    console.log(msg);
    res.send(msg);
  } catch (error) {
    console.log(`ERROR: \n${error.stack}`);
  }
};

exports.getAllSites = async (req, res) => {
  try {
    const sites = await Sites
      .find()
      .sort({ created: 'desc' });

    console.log(`\tGet All sites:: ${sites.length}`);
    res.send(sites);
  } catch (error) {
    console.log(`ERROR: \n${error.stack}`);
  }
};
