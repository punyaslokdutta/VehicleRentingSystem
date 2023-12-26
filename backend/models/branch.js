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
    }, 
    vehicles: {
      type: Map,
      of: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

//vehicles map
// {
//   "_id": ObjectId("5e8b06f2e293e04323b29c99"),
//   "vehicles": {
//     "car": 1,
//     "truck": 2,
//   },
// } 


var Branch = mongoose.model('Property', branchSchema);
module.exports = Branch;