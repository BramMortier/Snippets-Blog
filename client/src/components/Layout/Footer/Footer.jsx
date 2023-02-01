import React from "react";
import { IconButton } from "../../../components";

import "./footer.scss";

const footerLinks = [
    "Express",
    "NodeJS",
    "Javascript",
    "Typescript",
    "HTML",
    "SCSS",
    "CSS",
    "MERN",
    "PHP",
    "MySQL",
    "MongoDB",
    "API",
    "Firebase",
    "Adobe XD",
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__quote">
                    <div className="footer__logo mb-md">
                        <img src="/images/logo-white.svg" alt="footer logo" />
                    </div>
                    <p className="text-subtle">
                        A place to read and relax about insightful things related to frontend development and many other interesting topics.
                    </p>
                </div>
                <div className="footer__links">
                    <h5 className="body-font extra-bold text-white mb-sm">Topics</h5>
                    <ul className="footer__links-list">
                        {footerLinks &&
                            footerLinks.map((link, index) => (
                                <li key={index} className="footer__links-list-item">
                                    <span className="text-subtle">{link}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="footer__socials">
                    <h5 className="body-font extra-bold text-white mb-sm">Socials</h5>
                    <ul className="footer__socials-list">
                        <li>
                            <IconButton src="/images/github.svg" alt="github icon" />
                        </li>
                        <li>
                            <IconButton src="/images/linkedin.svg" alt="github icon" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
