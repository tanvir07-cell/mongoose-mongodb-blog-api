import { connectDB } from "../../../connect.js";
import { Author } from "./author.js";

export const createAuthor = async () => {
  const authorInfo = {
    name: "  Tanvir Rifat  ",
    img: "https://avatars.githubusercontent.com/u/71336291?v=4",
    bio: "I am a self-learning & dropout student who want to seek for the best learning experience",
    social: {
      facebook: "https://www.facebook.1",
      twitter: "https://twitter.com2",
      github: "https://github.com/tanvir07-cell3",
    },
  };

  try {
    await connectDB();
    const author = await Author.create(authorInfo);
    return author;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthor = async () => {
  try {
    await connectDB();
    const author = await Author.findOne({ name: "Tanvir Rifat" }).exec();
    return author;
  } catch (err) {
    console.log(err);
  }
};

getAuthor();
