const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const branch = require('./models/branch')
// const populateMockData = require('./data/populateMockData');
// const mockProperties = require('./data/mockProperties')
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


const startServer = async () => {
  const mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB');
  //await populateMockData(mockProperties);

  // routes
  var branchRouter = require('../backend/routes/branch.route');
  app.use('/v1/branches', branchRouter);

  var vehicleRouter = require('../backend/routes/vehicle.route');
  app.use('/v1/vehicles', vehicleRouter);

  var bookingRouter = require('../backend/routes/booking.route');
  app.use('/v1/bookings', bookingRouter);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer().catch((error) => console.error(error));
