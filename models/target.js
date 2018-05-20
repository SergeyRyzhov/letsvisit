var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var targetSchema = new Schema({
  name: String,
  address: String,
  meta: {
    visits: Number,
    visited_at: Date,
    interval: String
  }
});

var Target = mongoose.model('Target', targetSchema);

module.exports = Target;