const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  gender: {
    type: String,
    required: [true],
  },
  age: {
    type: Number,
    required: [true],
  },
  state: {
    type: String,
    required: [true],
  },
  hobbies: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
    unique: [true]
  },
});

// This creates our model from the above schema, using mongoose's model method
const user = mongoose.model("User", userSchema);

// Export the User model
module.exports = user;