

const mongoose = require('mongoose');




const BookingSchema = new mongoose.Schema({
  id: { type: String, required: true },
  vehicleId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: Date, required: true },
});



module.exports = {
  BookingSchema,
};