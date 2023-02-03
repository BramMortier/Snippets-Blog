import React from "react";
import { Link } from "react-router-dom";
import "./adminHeader.scss";

const AdminHeader = () => {
    return (
        <header className="admin-header">
            <Link to="/admin" className="admin-header__logo">
                <img src="/images/logo-icon.svg" alt="logo" />
            </Link>
        </header>
    );
};

export default AdminHeader;
