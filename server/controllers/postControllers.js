const getAllPosts = async (req, res) => {
    res.send({ message: "GET all posts" });
};

const getOnePost = async (req, res) => {
    res.send({ message: "GET one post" });
};

const createNewPost = async (req, res) => {
    res.send({ message: "CREATE a new post" });
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
