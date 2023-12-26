const UserSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    latitude: { type: Number },
    longitude: { type: Number },
  });

  
  module.exports = {
    UserSchema
  };