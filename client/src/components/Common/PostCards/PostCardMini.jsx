import React from "react";
import { IconButton } from "../../../components";

import "./postCardMini.scss";

const PostCardMini = ({ post }) => {
    return (
        <li className="postcard-mini">
            <div className="postcard-mini__image mb-sm">
                <IconButton src="/images/edit.svg" alt="edit icon" />
                <IconButton src="/images/delete.svg" alt="delete icon" />
            </div>
            <h6 className="bold">{post.title}</h6>
        </li>
    );
};

export default PostCardMini;
