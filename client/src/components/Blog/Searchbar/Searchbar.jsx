import React from "react";

import "./searchbar.scss";

const Searchbar = ({ setSearchTerm }) => {
    return (
        <section className="searchbar">
            <div className="searchbar__input">
                <h3 className="text-white bold">
                    Search for <span className="text-orange ">snippets</span>
                </h3>
                <input
                    type="text"
                    placeholder="Type here to search"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
        </section>
    );
};

export default Searchbar;
