var mongoose = require('mongoose');

var vehicleSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    branchId: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ['SUV' , 'SEDAN' , 'BIKE'],
      required: true,
    }, 
    availabilityStatus: {
      type: String,
      enum: ['BOOKED', 'AVAILABLE'], 
      required: true,
    }
  },
  { timestamps: true }
);

vehicleSchema.index(
  { vehicleType: 'text', branchId: 'text'}
);

var Vehicle = mongoose.model('Property', vehicleSchema);
module.exports = Vehicle;
