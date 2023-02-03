import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("/admin");

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <aside className="sidebar">
            <ul className="sidebar__tabs">
                <li className={`sidebar__tab ${activeTab === "/admin" ? "sidebar__tab--active" : ""}`}>
                    <Link to="/admin">Dashboard</Link>
                </li>
                <li className={`sidebar__tab ${activeTab === "/admin/editor" ? "sidebar__tab--active" : ""}`}>
                    <Link to="/admin/editor">New Post</Link>
                </li>
                <li className={`sidebar__tab ${activeTab === "/admin/roles" ? "sidebar__tab--active" : ""}`}>
                    <Link to="/admin/roles">Manage Roles</Link>
                </li>
            </ul>
            <Link to="/" className="sidebar__exit">
                Exit
            </Link>
        </aside>
    );
};

export default Sidebar;
