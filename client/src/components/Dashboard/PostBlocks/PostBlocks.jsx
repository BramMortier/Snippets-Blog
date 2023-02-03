import React from "react";
import { FormInput } from "../..";

import "./postBlocks.scss";

const PostBlocks = ({ postBlocks }) => {
    console.log(postBlocks);

    return (
        <div className="post-blocks">
            {postBlocks &&
                postBlocks.map((postBlock, index) => (
                    <FormInput key={index} label={postBlock.type} placeholder={`Write your ${postBlock.type.toLowerCase()}...`} />
                ))}
        </div>
    );
};

export default PostBlocks;
