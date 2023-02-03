import React from "react";
import { PostCardMini, SectionDivider } from "../../../components";
import "./postsOverview.scss";

const PostsOverview = () => {
    return (
        <section className="posts-overview">
            <SectionDivider sectionName="Posts Overview" />
            <ul className="posts-overview__list">
                <PostCardMini />
                <PostCardMini />
                <PostCardMini />
                <PostCardMini />
                <PostCardMini />
                <PostCardMini />
            </ul>
        </section>
    );
};

export default PostsOverview;
