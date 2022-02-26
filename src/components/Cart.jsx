import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Cart = () => {
    const datasneakers = useSelector(state =>  state.sneakers)
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
                            <Link to={"/"}>
                            <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ordercart">
                <div className="blackout">
                    <div></div>
                </div>
                <div className="cart">
                    <h2 className="H2">Корзина</h2>
                    <div>
                        <div className="cartWrapper d-flex flex-column justify-between align-center text-center">
                            <img src="./img/orderlist.jpg" width={83} height={120} alt=""/>
                            <div className="green"><h2>Заказ Оформлен!</h2></div>

                            <h4>Ваш заказ #18 скоро будет передан курьерской доставке.</h4>
                            <Link to={"/"}>
                            <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fullcart">
                <div className="blackout">

                </div>
                <div className="cart">
                    <h2 className="H2">Корзина</h2>
                    <div>
                        <div className="cartWrapper d-flex flex-column justify-between align-center text-center">
                            <div className="cartcardswrapper d-flex flex-column">
                                {datasneakers.map(({img, id, price, name, description, like, cart}) => {

                                        return (

                                            <div>
                                                {cart ?
                                                    <div className="cartcards d-flex align-center justify-center flex-row">
                                                        <img src={img} width={70} height={70} alt=""/>
                                                        <div className="d-flex flex-column justify-center coastDescription">
                                                            <div className="description">
                                                                <h5> {description + " " + name}</h5>


                                                                <h5 className="coast">
                                                                    {price + " руб."}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="x d-flex align-center justify-center">
                                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3"/>
                                                            </svg>

                                                        </div>
                                                    </div>

                                                    :
                                                    ""

                                                }
                                            </div>

                                        )


                                    }
                                )
                                }
                            </div>
                            <Link to={"/"}>
                            <button className="orderbtn d-flex  align-center justify-center">

                                Оформить заказ&nbsp;&nbsp;&nbsp;&nbsp;
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;