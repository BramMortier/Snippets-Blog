import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar__tabs">
                <li className="sidebar__tab sidebar__tab--active ">
                    <Link to="/admin">Dashboard</Link>
                </li>
                <li className="sidebar__tab">
                    <Link to="/admin/editor">New Post</Link>
                </li>
                <li className="sidebar__tab">
                    <Link to="/admin">Manage Roles</Link>
                </li>
            </ul>
            <Link to="/" className="sidebar__exit">
                Exit
            </Link>
        </aside>
    );
};

export default Sidebar;
