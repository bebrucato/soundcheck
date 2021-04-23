const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
  {
  title: { type: String, required: true },
  image: { type: String},
  body: { type:String},
  author: {
  type: Schema.Types.ObjectId,
  ref: 'User',
},
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;