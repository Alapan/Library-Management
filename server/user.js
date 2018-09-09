const User = require('../models/User');
const crypto = require('crypto');

function encryptStringToSha256 (string) {
  const hash = crypto.createHash('sha256').update(string).digest('base64');
  return hash;
}

module.exports = (app) => {

  app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const passwordHash = encryptStringToSha256(password);
    try {
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(404).send('User not found!');
      }
      return res.status(200).send(user);
    } catch (err) {
      throw err;
      return res.status(err.code)
    }
  });

  app.post('/addUser', async (req, res) => {
    const {email, password} = req.body;
    try {
      const user = new User({ email, password });
      const userDoc = await user.save({ email, password });
      if (userDoc._id) {
        res.status(200).send(userDoc);
      }
    } catch(err) {
      throw err;
      res.status(500).send('Oops, something went wrong!');
    }
  });
}
