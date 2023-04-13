const postServices = require("../services/postServices.js");

const getAllPosts = async (req, res) => {
    const allPosts = await postServices.getAllPosts();
    res.status(200).send({ status: "OK", data: allPosts });
};

const getOnePost = async (req, res) => {
    const { postId } = req.params;

    const post = await postServices.getOnePost(postId);
    res.status(200).send({ status: "OK", data: post });
};

const createNewPost = async (req, res) => {
    const { body } = req;

    const newPost = {
        title: body.title,
        author: body.author,
        body: body.body,
        topics: body.topics,
    };

    const createdPost = await postServices.createNewPost(newPost);
    res.status(201).send({ status: "OK", data: createdPost });
};

const deletePost = async (req, res) => {
    res.send({ message: "DELETE a post" });
};

const updatePost = async (req, res) => {
    res.send({ message: "UPDATE a post" });
};

module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    deletePost,
    updatePost,
};
