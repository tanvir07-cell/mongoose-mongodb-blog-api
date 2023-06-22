import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog-api");
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
