import React from 'react';

const Slider = () => {
    return (
        <div>
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