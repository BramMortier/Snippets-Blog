import { useContext } from "react";
import { TopicContext } from "../context/TopicContext";

export const useTopicContext = () => {
    const context = useContext(TopicContext);

    if (!context) console.error("useTopicContext must be used inside a suitable provider");

    return context;
};
