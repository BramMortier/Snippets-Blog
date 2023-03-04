import React from "react";
import { PostCardMedium } from "../../../components";
import { usePostContext } from "../../../hooks/usePostContext";
import { useTopicContext } from "../../../hooks/useTopicContext";

import "./postsList.scss";

const PostsList = () => {
    const { posts } = usePostContext();
    const { topics } = useTopicContext();

    return (
        <section className="posts-list">
            <ul className="posts-list__posts">{posts && posts.map((post) => <PostCardMedium key={post._id} post={post} />)}</ul>
            <div className="posts-list__topics">
                <div className="posts-list__divider">
                    <img src="/images/double-chevron-down-black.svg" alt="double chevron icon" />
                    <span className="posts-list__divider-line"></span>
                </div>
                <ul>
                    {topics &&
                        topics.slice(0, 10).map((topic) => (
                            <li className="posts-list__topic black text-gray" key={topic._id}>
                                {topic.name}
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

export default PostsList;
