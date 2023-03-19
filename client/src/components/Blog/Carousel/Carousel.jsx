import React, { useRef } from "react";

import "./carousel.scss";

const Carousel = ({ title, darkmode }) => {
    const carouselItemsRef = useRef(null);
    const itemRef = useRef(null);

    const scrollCarousel = (direction) => {
        const carouselItems = carouselItemsRef.current;

        if (direction === "prev") {
            carouselItems.scrollLeft -= itemRef.current.offsetWidth + 24;
        } else {
            carouselItems.scrollLeft += itemRef.current.offsetWidth + 24;
        }
    };

    const createTitle = (title) => {
        const titleWords = title.split(" ");
        return titleWords.map((word, index) => {
            if (index % 2 === 1) {
                return (
                    <span key={index} className="text-orange">
                        {word}
                    </span>
                );
            } else {
                return (
                    <span key={index} className={`${darkmode ? "text-white" : ""}`}>
                        {word}
                    </span>
                );
            }
        });
    };

    createTitle(title);

    return (
        <section className={`carousel ${darkmode ? "carousel--darkmode" : ""}`}>
            <h3 className="carousel__title bold">{createTitle(title)}</h3>
            <div className="carousel__wrapper">
                <button onClick={() => scrollCarousel("prev")} className="carousel__prev">
                    <img src="/images/arrow-left.svg" alt="arrow icon" />
                </button>
                <div ref={carouselItemsRef} className="carousel__items">
                    <div ref={itemRef} className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>10 React tips every...</h4>
                    </div>
                    <div className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>Async await the easy...</h4>
                    </div>
                    <div className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>React vs Vue</h4>
                    </div>
                    <div className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>Post title</h4>
                    </div>
                    <div className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>Post title</h4>
                    </div>
                    <div className="carousel__item">
                        <span className="carousel__placeholder"></span>
                        <h4 className={`bold ${darkmode ? "text-white" : ""}`}>Post title</h4>
                    </div>
                </div>
                <button onClick={() => scrollCarousel("next")} className="carousel__next">
                    <img src="/images/arrow-right.svg" alt="arrow icon" />
                </button>
            </div>
        </section>
    );
};

export default Carousel;
