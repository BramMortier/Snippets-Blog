import React, { useState, useEffect } from "react";
import { PostCardMini, SectionDivider } from "../../../components";
import axios from "axios";
import "./postsOverview.scss";

const PostsOverview = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:3000/api/posts");
            const { data } = res.data;
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <section className="posts-overview">
            <SectionDivider sectionName="Posts Overview" />
            <ul className="posts-overview__list">{posts && posts.map((post) => <PostCardMini key={post._id} post={post} />)}</ul>
        </section>
    );
};

export default PostsOverview;
