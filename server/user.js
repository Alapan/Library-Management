const User = require('../models/User');

module.exports = (app) => {

  app.post('/login', (req, res) => {
    console.log('REQ BODY: ', req.body);
  });
}
