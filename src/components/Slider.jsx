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




const Slider = () => {

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

    return (

        <div>


            <slider className="d-flex justify-center slider">
                <div className="swiper">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide d-flex align-center justify-center"><img src="img/slider.png" alt=""/></div>
                        <div className="swiper-slide d-flex align-center justify-center"><img src="img/froggy.png" alt=""/></div>
                        <div className="swiper-slide d-flex align-center justify-center"><img src="img/sneakers/1.jpg" alt=""/></div>
                    </div>
                    <div className="swiper-button-prev "></div>
                    <div className="swiper-button-next"></div>
                </div>
            </slider>
        </div>
    );
};

export default Slider;