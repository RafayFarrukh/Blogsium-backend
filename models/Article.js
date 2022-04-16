import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    trim: true,
    maxlength: 30,
    minlength: 3,
    trim: true,
  },

  body: {
    type: String,
    required: [true, "Please enter something"],
    trim: true,
    maxlength: 300,
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Please provide Author"],
    maxlength: 30,
    minlength: 3,
    trim: true,
  },
  // date: { type: Date },
  comments: [String],
});

export default mongoose.model("Article", ArticleSchema);
