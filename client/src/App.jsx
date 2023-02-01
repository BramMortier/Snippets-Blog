import React from "react";
import { Routes, Route } from "react-router-dom";
import { OverviewPage, LandingPage, PostDetailsPage, PostEditorPage } from "./pages";
import { BlogLayout, DashboardLayout } from "./components";

function App() {
    return (
        <Routes>
            <Route path="/" element={<BlogLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="post/:id" element={<PostDetailsPage />} />
            </Route>

            <Route path="admin" element={<DashboardLayout />}>
                <Route index element={<OverviewPage />} />
                <Route path="editor" element={<PostEditorPage />} />
            </Route>
        </Routes>
    );
}

export default App;
