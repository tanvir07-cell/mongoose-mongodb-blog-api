import { connectDB } from "../../../connect.js";
import { createAuthor, getAuthor } from "./author.crud.js";
import { Post } from "./post.js";

// some crud operation on this post:

const createPost = async () => {
  const author = await getAuthor();

  const data = {
    title: "This is the second post",
    content: "This is the content of the second post",
    contentLength: 130,
    author: author._id,
    tags: ["programming", "self-learning"],
  };

  try {
    await connectDB();

    const post = await Post.create(data);
    console.log(post);
  } catch (err) {
    console.log(err);
  }
};

const getPost = async () => {
  try {
    // select("-contentLength -similarPosts") means contentLength and similarPosts will not be shown in the output:
    await connectDB();
    const posts = await Post.findOne({ _id: "6493fe71408c42c62e091efe" })
      .populate("author")
      .select("-contentLength -similarPosts")
      .exec();
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
};

// createPost();
getPost();
