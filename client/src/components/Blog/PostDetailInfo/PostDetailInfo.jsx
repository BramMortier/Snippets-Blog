import React from "react";
import { Tag } from "../../../components";

import "./postDetailInfo.scss";

const PostDetailInfo = ({ postInfo }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <section className="post-detail-info">
            <div className="post-detail-info__body">
                <div className="post-detail-info__image">
                    <ul className="post-detail-info__topics">
                        {postInfo.topics && postInfo.topics.map((topic) => <Tag key={topic._id} content={topic.name} />)}
                    </ul>
                </div>
                <div className="post-detail-info__extra">
                    <div className="post-detail-info__author">
                        <div className="post-detail-info__author-profile"></div>
                        <span className="text-white text-lg black">{postInfo.author}</span>
                    </div>
                    <span className="text-white text-lg black">{formatDate(postInfo.createdAt)}</span>
                </div>
            </div>
        </section>
    );
};

export default PostDetailInfo;
