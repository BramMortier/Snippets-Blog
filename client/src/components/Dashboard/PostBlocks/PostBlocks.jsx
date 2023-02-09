import React from "react";
import { FormInput } from "../..";

import "./postBlocks.scss";

const PostBlocks = ({ postBlocks, setPostBlocks }) => {
    console.log(postBlocks);

    const handleContentUpdate = (index, e) => {
        const updatedPostBlocks = [...postBlocks];
        updatedPostBlocks[index].content = e.target.value;
        setPostBlocks(updatedPostBlocks);
    };

    if (postBlocks.length === 0) {
        return (
            <div className="post-blocks__empty-placeholder">
                <span className="black text-lg">Post content empty</span>
                <p className="text-sm">To start writing a post you must add one or more widgets from the toolbar.</p>
            </div>
        );
    }

    return (
        <form id="post-form" className="post-blocks">
            {postBlocks &&
                postBlocks.map((postBlock, index) => (
                    <FormInput
                        key={index}
                        label={postBlock.type}
                        onChange={(e) => handleContentUpdate(index, e)}
                        placeholder={`Write your ${postBlock.type.toLowerCase()}...`}
                    />
                ))}
        </form>
    );
};

export default PostBlocks;
