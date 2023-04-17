import React, { useState } from "react";
import { Button } from "../../../components";

import "./postFilesGallery.scss";

const PostFilesGallery = ({ postFiles }) => {
    const [selectedFile, setSelectedFile] = useState("");

    const handleFileChange = (e) => {
        const src = e.target.getElementsByTagName("img")[0].getAttribute("src");
        setSelectedFile(src);
    };

    return (
        <section className="post-files-gallery">
            <ul className="post-files-gallery__files">
                {postFiles &&
                    postFiles.map((file, index) => (
                        <li
                            key={index}
                            className={`post-files-gallery__file ${
                                selectedFile === `http://localhost:3000/api/uploads/postFiles/${file}` ? "post-files-gallery__file--selected" : ""
                            }`}
                            onClick={handleFileChange}
                        >
                            <img src={`http://localhost:3000/api/uploads/postFiles/${file}`} alt={`postFile: ${file}`} />
                        </li>
                    ))}
            </ul>
            <Button content="Use File" />
        </section>
    );
};

export default PostFilesGallery;
