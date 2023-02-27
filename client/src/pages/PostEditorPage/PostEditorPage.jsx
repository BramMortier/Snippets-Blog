import React, { useState } from "react";
import { PostWidgets, BuilderTools, SectionDivider, Button } from "../../components";
import axios from "axios";

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

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        console.log(postData);

        try {
            const res = await axios.post("http://localhost:3000/api/posts", postData);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
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
