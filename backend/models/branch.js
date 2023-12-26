var mongoose = require('mongoose');

// todo:  vehicle map here
var branchSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    spoc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);


var Branch = mongoose.model('Property', branchSchema);
module.exports = Branch;
