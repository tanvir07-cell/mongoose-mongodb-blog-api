import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      require: true,
    },
    social: {
      facebook: {
        type: String,
        unique: true,
        // sparse hocche ekti indexing. er means hocche jodi kono author facebook er link na dey tahole amra take author er object e include korbo nah:
        sparse: true,
      },
      twitter: {
        type: String,
        unique: true,
        sparse: true,
      },
      github: {
        type: String,
        unique: true,
        sparse: true,
      },
    },
  },
  { timestamps: true }
);

export const Author = mongoose.model("author", authorSchema);
