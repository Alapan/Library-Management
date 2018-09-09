const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (email) {
        return /@/.test(email);
      },
      message: (email) => `${email} is not valid!`
    }
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
  this.password = crypto.createHash('sha256').update(this.password).digest('base64');
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
