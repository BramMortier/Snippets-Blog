import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const usePostContext = () => {
    const context = useContext(PostContext);

    if (!context) console.error("usePostContext must be used inside a suitable provider");

    return context;
};
