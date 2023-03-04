import axios from "axios";
import React, { createContext, useReducer, useEffect } from "react";

export const PostContext = createContext();

export const setPosts = (posts) => {
    return { type: "SET_POSTS", data: posts };
};

export const createPost = (postData) => {
    return { type: "CREATE_POST", data: postData };
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
                posts: action.data,
            };
        case "CREATE_POST":
            return {
                posts: [action.data, ...state.posts],
            };
        default:
            return state;
    }
};

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, { posts: [] });

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:3000/api/posts");
            const { data } = res.data;
            dispatch(setPosts(data));
        };
        fetchPosts();
    }, []);

    return <PostContext.Provider value={{ ...state, dispatch }}>{children}</PostContext.Provider>;
};
