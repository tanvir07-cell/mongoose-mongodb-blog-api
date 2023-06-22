import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
    },
    contentLength: {
      type: Number,
      required: true,
    },

    // kon author post koreche tar reference tio thakbe:
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "author",
    },
    tags: [{ type: String }],
    status: {
      type: String,
      enum: ["published", "drafted"],
      default: "drafted",
    },
    img: {
      type: String,
    },

    // ekta post er multiple similar post thakte pare:
    similarPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  },
  { timestamps: true }
);

// creating a model for the postSchema:

export const Post = mongoose.model("post", postSchema);
