import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const TopicContext = createContext();

export const setTopics = (topics) => {
    return { type: "SET_TOPICS", data: topics };
};

export const createTopic = (topicData) => {
    return { type: "CREATE_TOPIC", data: topicData };
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return {
                topics: action.data,
            };
        case "CREATE_TOPIC":
            return {
                topics: [action.data, ...state.topics],
            };
        default:
            return state;
    }
};

export const TopicProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, { topics: [] });

    useEffect(() => {
        const fetchTopics = async () => {
            const res = await axios.get("http://localhost:3000/api/topics");
            const { data } = res.data;
            dispatch(setTopics(data));
        };
        fetchTopics();
    }, []);

    return <TopicContext.Provider value={{ ...state, dispatch }}>{children}</TopicContext.Provider>;
};
