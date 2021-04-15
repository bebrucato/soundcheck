const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  individual: { type: Boolean },
  band: { type: Boolean },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String},
  posts:[
    {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
],
comments: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
],
},
{
  timestamps: true,
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
