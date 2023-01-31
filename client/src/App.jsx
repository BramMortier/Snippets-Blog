import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, LandingPage, PostDetails } from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/post" element={<PostDetails />} />
        </Routes>
    );
}

export default App;
