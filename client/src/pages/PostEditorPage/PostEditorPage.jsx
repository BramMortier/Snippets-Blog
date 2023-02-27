import React, { useState } from "react";
import { PostWidgets, BuilderTools, SectionDivider, Button } from "../../components";

import "./postEditorPage.scss";

const PostEditorPage = () => {
    const [postData, setPostData] = useState({
        title: "",
        author: "Bram Mortier",
        body: [
            {
                type: "Title",
                content: "",
            },
            {
                type: "Heading",
                content: "",
            },
            {
                type: "Paragraph",
                content: "",
            },
        ],
        topics: [],
    });

    const handlePostSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
    };

    return (
        <section className="post-editor-page">
            <SectionDivider sectionName="New Post" ctaButton={<Button content="Publish" form="post-form" />} />
            <form id="post-form" onSubmit={handlePostSubmit} className="post-editor-page__main">
                <PostWidgets postData={postData} setPostData={setPostData} />
                <BuilderTools postData={postData} setPostData={setPostData} />
            </form>
        </section>
    );
};

export default PostEditorPage;
