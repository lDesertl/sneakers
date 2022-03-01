import React from 'react';
// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import styles bundle
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';
import {Navigation, Pagination, Scrollbar} from "swiper";


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Scrollbar],

    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const Slider = () => {


    return (

        <div>

            <div className="swiper">

                <div className="swiper-wrapper">

                    <div className="swiper-slide d-flex align-center justify-center"><img src="img/slider.png" alt=""/></div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>


                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <slider className="d-flex justify-center slider">
                <div className="sliderWrap d-flex justify-center">
                    <div className="arrows">
                        <div className="SliderRightArrow d-flex align-center justify-center">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>

                        <div className="SliderLeftArrow d-flex align-center justify-center">
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                </div>
            </slider>
        </div>
    );
};

export default Slider;