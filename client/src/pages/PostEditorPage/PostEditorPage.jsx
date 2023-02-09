import React, { useState } from "react";
import { PostBlocks, BuilderTools, SectionDivider, Button } from "../../components";

import "./postEditorPage.scss";

const PostEditorPage = () => {
    const [postBlocks, setPostBlocks] = useState([
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
    ]);

    return (
        <section className="post-editor-page">
            <SectionDivider sectionName="New Post" ctaButton={<Button content="Publish" form="post-form" />} />
            <div className="post-editor-page__main">
                <PostBlocks postBlocks={postBlocks} setPostBlocks={setPostBlocks} />
                <BuilderTools postBlocks={postBlocks} setPostBlocks={setPostBlocks} />
            </div>
        </section>
    );
};

export default PostEditorPage;
