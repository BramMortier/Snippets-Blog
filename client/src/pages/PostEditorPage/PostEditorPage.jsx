import React, { useState } from "react";
import { PostBlocks, BuilderTools, SectionDivider } from "../../components";

import "./postEditorPage.scss";

const PostEditorPage = () => {
    const [postBlocks, setPostBlocks] = useState([
        {
            type: "Heading",
            content: "10 Handy CSS Tricks!",
        },
        {
            type: "Small Heading",
            content: "Rest API structure",
        },
    ]);

    return (
        <section className="post-editor">
            <SectionDivider sectionName="New Post" />
            <div>
                <PostBlocks postBlocks={postBlocks} setPostBlocks={setPostBlocks} />
                <BuilderTools setPostBlocks={setPostBlocks} />
            </div>
        </section>
    );
};

export default PostEditorPage;
