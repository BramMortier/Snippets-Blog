import React, { useState } from "react";
import { Button, Input, Textarea } from "../../../components";

import "./topicSuggestions.scss";

const TopicSuggestions = () => {
    const [suggestionData, setSuggestionData] = useState({
        name: "",
        email: "",
        topic: "",
        description: "",
    });

    const handleSuggestionSubmit = async () => {};

    const handleSuggestionUpdate = async (e) => {
        const { name, value } = e.target;
        setSuggestionData({
            ...suggestionData,
            [name]: value,
        });
    };

    return (
        <section className="topic-suggestions">
            <h3 className="bold">
                Topic <span className="text-orange">Suggestions</span>
            </h3>
            <div className="topic-suggestions__divider">
                <img src="/images/double-chevron-right-black.svg" alt="double chevron icon" />
                <span className="topic-suggestions__divider-line"></span>
                <img src="/images/double-chevron-left-black.svg" alt="double chevron icon" />
            </div>
            <form className="topic-suggestions__form" action="">
                <div className="topic-suggestions__form-row">
                    <div className="topic-suggestions__form-group">
                        <label className="mb-xs black">Name</label>
                        <Input name="name" placeholder="Name" onChange={handleSuggestionUpdate} />
                    </div>
                    <div className="topic-suggestions__form-group">
                        <label className="mb-xs black">Email</label>
                        <Input name="email" placeholder="Email" onChange={handleSuggestionUpdate} />
                    </div>
                </div>
                <div className="topic-suggestions__form-row">
                    <div className="topic-suggestions__form-group">
                        <label className="mb-xs black">Topic</label>
                        <Input name="topic" placeholder="Topic" onChange={handleSuggestionUpdate} />
                    </div>
                </div>
                <div className="topic-suggestions__form-row">
                    <div className="topic-suggestions__form-group">
                        <label className="mb-xs black">Description</label>
                        <Textarea name="description" placeholder="Describe the topic..." onChange={handleSuggestionUpdate} />
                    </div>
                </div>
                <Button content="Send suggestion" />
            </form>
        </section>
    );
};

export default TopicSuggestions;
