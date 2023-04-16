import React, { useState } from "react";
import { usePostContext } from "../../hooks/usePostContext";
import { PostsList, Searchbar } from "../../components";

import "./searchResultsPage.scss";

const SearchResultsPage = () => {
    const { posts } = usePostContext();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");

    const filteredPosts = posts.filter(
        (post) =>
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.body.some((block) => block.content.toLowerCase().includes(searchTerm.toLowerCase()))) &&
            (selectedTopic ? post.topics.some((topic) => topic.name === selectedTopic) : true)
    );

    return (
        <React.Fragment>
            <Searchbar setSearchTerm={setSearchTerm} />
            <PostsList posts={filteredPosts} setSelectedTopic={setSelectedTopic} />
        </React.Fragment>
    );
};

export default SearchResultsPage;
