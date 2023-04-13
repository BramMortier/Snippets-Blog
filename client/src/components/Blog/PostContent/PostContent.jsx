import React from "react";

import "./postContent.scss";

const PostContent = ({ postInfo }) => {
    return (
        <section className="post-content">
            <h4 className="bold">{postInfo.title}</h4>
            {postInfo.body && postInfo.body.map((widget, index) => <p key={index}>{widget.content}</p>)}
        </section>
    );
};

export default PostContent;
