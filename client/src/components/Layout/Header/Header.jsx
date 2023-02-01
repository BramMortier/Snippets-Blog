import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "../../../components";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <picture>
                    <source media="(max-width: 500px)" srcSet="/images/logo-icon.svg" />
                    <img src="/images/logo.svg" alt="logo" />
                </picture>
            </Link>
            <div className="header__action-btns">
                <IconButton src="/images/search.svg" alt="search icon" />
                <IconButton src="/images/github.svg" alt="github icon" />
            </div>
        </header>
    );
};

export default Header;
