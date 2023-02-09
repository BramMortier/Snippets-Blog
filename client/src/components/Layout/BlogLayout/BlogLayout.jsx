import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../../components";

const BlogLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default BlogLayout;
