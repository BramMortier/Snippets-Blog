import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostContent, PostDetailInfo } from "../../components";
import axios from "axios";

import "./postDetailsPage.scss";

const PostDetailsPage = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState({});

    useEffect(() => {
        const fetchPostById = async () => {
            const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
            const { data } = res.data;
            setPostInfo(data);
        };
        fetchPostById();
    }, []);

    console.log(postInfo);

    return (
        <React.Fragment>
            <PostDetailInfo postInfo={postInfo} />
            <PostContent postInfo={postInfo} />
        </React.Fragment>
    );
};

export default PostDetailsPage;
