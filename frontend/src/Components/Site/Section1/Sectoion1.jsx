import React, { useRef } from "react";
import Slider from "react-slick";
import "./SectionFirst.scss"

function SectionFirst() {
    let sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (

        <>
            <div className="slider-container">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="slider__box">
                        <h2>Get your <span> Education </span> today!</h2>
                    </div>
                    <div className="slider__box">
                        <h2>Get your <span> Education </span> today!</h2>
                    </div>
                    <div className="slider__box">
                        <h2>Get your <span >Education </span> today!</h2>
                    </div>
                </Slider>

            </div>
        </>
    );
}
export default SectionFirst;
