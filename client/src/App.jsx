import React from "react";
import { Routes, Route } from "react-router-dom";
import { OverviewPage, LandingPage, PostDetailsPage, PostEditorPage } from "./pages";
import { BlogLayout, DashboardLayout } from "./components";
import { PostProvider } from "./context/PostContext";

function App() {
    return (
        <PostProvider>
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
        </PostProvider>
    );
}

export default App;
