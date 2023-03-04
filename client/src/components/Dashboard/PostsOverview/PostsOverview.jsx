import React from "react";
import { PostCardMini, SectionDivider } from "../../../components";
import { usePostContext } from "../../../hooks/usePostContext";

import "./postsOverview.scss";

const PostsOverview = () => {
    const { posts } = usePostContext();

    return (
        <section className="posts-overview">
            <SectionDivider sectionName="Posts Overview" />
            <ul className="posts-overview__list">{posts && posts.map((post) => <PostCardMini key={post._id} post={post} />)}</ul>
        </section>
    );
};

export default PostsOverview;
