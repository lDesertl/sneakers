import React from 'react';

const Emptycart = () => {
    return (
        <div>
            <div className="emptycart">
                <div className="blackout">
                    <div></div>
                </div>
                <div className="cart">
                    <h2 className="H2">Корзина</h2>
                    <div>
                        <div className="cartWrapper d-flex flex-column justify-between align-center text-center">
                            <img src="./img/box.png" width={120} height={120} alt=""/>
                            <h2>Корзина пустая</h2>

                            <h4>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</h4>
                            <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emptycart;