const Post = require("../models/postModel");

const getAllPosts = async () => {
    const allPosts = await Post.find();
    return allPosts;
};

const getOnePost = async () => {};

const createNewPost = async (newPost) => {
    const post = await Post.create(newPost);
    return post;
};

const deletePost = async () => {};

const updatePost = async () => {};

module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    deletePost,
    updatePost,
};
