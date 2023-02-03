import React from "react";
import { Tag } from "../../../components";
import "./featuredPosts.scss";

const FeaturedPosts = () => {
    return (
        <section className="featured-posts">
            <div className="featured-posts__intro">
                <div className="featured-posts__intro-decoration mb-md">
                    <img src="/images/double-chevron-right.svg" alt="double chevron right icon" />
                    <span className="featured-posts__decoration-line"></span>
                    <img src="/images/jewel.svg" alt="jewel icon" />
                    <span className="featured-posts__decoration-line"></span>
                    <img src="/images/double-chevron-left.svg" alt="double chevron left icon" />
                </div>
                <h2 className="text-orange mb-xl">
                    <span className="text-white">Explore </span>
                    Snippets <br /> Of
                    <span className="text-white"> My Journey</span>
                </h2>
                <p className="text-white text-lg">
                    Welcome to my blog. Here you will find a collection of articles containing snippets about things I learned as a developer. There
                    is a lot of variety, you'll find guides about programming topics, handy tools u can use and my opinion about lots of topics.
                </p>
            </div>
            <ul className="featured-posts__list">
                <li className="featured-posts__main-feature">
                    <span className="text-xl uppercase text-orange black">Featured</span>
                    <h3 className="text-white mb-xs">Express API Structure</h3>
                    <p className="text-white mb-xl">
                        In this article I'll be talking about how to structure an express API. The following tips I'm about to discuss are not a must,
                        but a guideline for a nice and accessible express app.
                    </p>
                    <ul className="featured-posts__tag-list">
                        <Tag content="Express" />
                        <Tag content="NodeJS" />
                        <Tag content="API" />
                    </ul>
                </li>
                <li className="featured-posts__featured">
                    <div className="featured-posts__featured-image mb-lg">
                        <ul className="featured-posts__tag-list">
                            <Tag content="MERN" />
                        </ul>
                    </div>
                    <h4 className="bold mb-md">MERN Blog Application</h4>
                    <p className="text-subtle mb-xs">
                        Welcome to my blog. Here you will find a collection of articles containing snippets about things I learned as a developer.
                    </p>
                    <span className="black">January 6, 2023</span>
                </li>
                <li className="featured-posts__featured">
                    <div className="featured-posts__featured-image mb-lg">
                        <ul className="featured-posts__tag-list">
                            <Tag content="SASS" />
                        </ul>
                    </div>
                    <h4 className="bold mb-md">SASS Folder Structure</h4>
                    <p className="text-subtle mb-xs">
                        There is a lot of variety, you'll find guides about programming topics, handy tools u can use and my opinion about lots of
                        topics.
                    </p>
                    <span className="black">January 6, 2023</span>
                </li>
            </ul>
        </section>
    );
};

export default FeaturedPosts;
