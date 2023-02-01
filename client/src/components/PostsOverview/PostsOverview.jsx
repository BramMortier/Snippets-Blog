import React from "react";
import { PostCardMini } from "../../components";
import "./postsOverview.scss";

const PostsOverview = () => {
    return (
        <section className="posts-overview">
            <h4 className="bold mb-sm">Posts Overview</h4>
            <div className="posts-overview__divider mb-lg">
                <img src="/images/double-chevron-right-black.svg" alt="double chevron icon" />
                <span className="posts-overview__divider-line"></span>
            </div>
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
