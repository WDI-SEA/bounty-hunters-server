// Require mongoose
let mongoose = require('mongoose')

// Mongo Connection String
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Export all the things
module.exports.Bounty = require('./bounty')
