import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "../../../components";

import "./postCardMedium.scss";

const PostCardMedium = ({ post }) => {
    const getPostExerpt = (postBody) => {
        const firstParagraph = postBody.filter((widget) => widget.type === "Paragraph")[0].content;
        return firstParagraph.length > 150 ? `${firstParagraph.slice(0, 150)}...` : firstParagraph;
    };

    return (
        <Link to={`/post/${post._id}`} className="postcard-medium">
            <div className="postcard-medium__image"></div>
            <div className="postcard-medium__body">
                <h4 className="bold mb-2xs">{post.title}</h4>
                <span className="black text-gray mb-sm">January 6, 2023</span>
                <p className="text-subtle mb-lg">{getPostExerpt(post.body)}</p>
                <ul className="featured-posts__tag-list">
                    {post.topics.map((topic) => (
                        <Tag key={topic._id} content={topic.name} />
                    ))}
                </ul>
            </div>
        </Link>
    );
};

export default PostCardMedium;
