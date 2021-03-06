const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
{
    comment: {
        type: String,
        required: true,
      },
      post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
},
{
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;