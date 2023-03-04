import React from "react";
import { Input, Button } from "../../../components";

import "./addTopicForm.scss";

const AddTopicForm = ({ onSubmit, setTopicData }) => {
    return (
        <form onSubmit={onSubmit} id="topic-form" className="add-topic-form">
            <section className="add-topic-form__section">
                <label className="black">Topic tag</label>
                <Input onChange={(e) => setTopicData({ name: e.target.value })} placeholder="Type a topic..." />
            </section>
            <Button type="submit" content="Add" />
        </form>
    );
};

export default AddTopicForm;
