import React, {useState} from "react";

function App() {
    const [state, setstate] = useState(true);
    const dataSneakers = [
        {
            id: 0,
            name: "Nike Blazer Mid Suede",
            description: "Мужские Кроссовки",
            img: "img/sneakers/1.jpg",
            price: "12 999",
            cart: true,
            like: true,
            orders: 3,
        },
        {
            id: 1,
            name: "Nike Air Max 270",
            description: "Мужские Кроссовки",
            img: "img/sneakers/2.jpg",
            price: "12 999",
            cart: true,
            like: false,
            orders: 0,
        },
        {
            id: 2,
            name: "Nike Blazer Mid Suede",
            description: "Мужские Кроссовки",
            img: "img/sneakers/3.jpg",
            price: "8 499",
            cart: false,
            like: true,
            orders: 0,
        },
        {
            id: 3,
            name: "Puma X Aka Boku Future Rider",
            description: "Унисекс Кроссовки",
            img: "img/sneakers/4.jpg",
            price: "8 999",
            cart: false,
            like: false,
            orders: 0,
        },
        {
            id: 4,
            name: "Under Armour Curry 8",
            description: "Мужские Кроссовки",
            img: "img/sneakers/5.jpg",
            price: "15 199",
            cart: false,
            like: false,
            orders: 0,
        },
        {
            id: 5,
            name: "Nike Kyrie 7",
            description: "Мужские Кроссовки",
            img: "img/sneakers/6.jpg",
            price: "11 299",
            cart: false,
            like: false,
            orders: 0,
        },
        {
            id: 6,
            name: "Jordan Air Jordan 11",
            description: "Мужские Кроссовки",
            img: "img/sneakers/7.jpg",
            price: "10 799",
            cart: false,
            like: true,
            orders: 0,
        },
        {
            id: 7,
            name: "Мужские Кроссовки Nike LeBron XVIII",
            description: "",
            img: "img/sneakers/8.jpg",
            price: "16 499",
            cart: false,
            like: true,
            orders: 0,
        },
        {
            id: 8,
            name: "Мужские Кроссовки Nike Lebron XVIII Low",
            description: "",
            img: "img/sneakers/9.jpg",
            price: "13 999",
            cart: false,
            like: false,
            orders: 0,
        },
        {
            id: 9,
            name: "Nike Blazer Mid Suede",
            description: "Мужские Кроссовки",
            img: "img/sneakers/10.jpg",
            price: "8 499",
            cart: false,
            like: false,
            orders: 0,
        },
        {
            id: 10,
            name: "Puma X Aka Boku Future Rider",
            description: "Унисекс Кроссовки",
            img: "img/sneakers/11.jpg",
            price: "8 999",
            cart: false,
            like: true,
            orders: 2,
        },
        {
            id: 11,
            name: "Nike Kyrie Flytrap IV",
            description: "Мужские Кроссовки",
            img: "img/sneakers/12.jpg",
            price: "11 299",
            cart: false,
            like: false,
            orders: 3,
        }
    ]

    return (
        <div className="wrapper clear">
            <header className="align-center p-40">
                <div className="headerLeft">
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>

                    <div className="headerInfo">
                        <h3 className="text-uppercase">
                            React sneakers
                        </h3>
                        <p>
                            магазин лучших кроссовок
                        </p>
                    </div>
                </div>
                <div className="headerRight">
                    <ul>
                        <li className="cu-p">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                                    stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span>
                                1205 руб.
                        </span>
                        </li>
                        <li className="cu-p">
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                                    fill="#9B9B9B"/>
                            </svg>

                        </li>
                        <li className="cu-p">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                                      fill="#9B9B9B"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </header>
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
            <div className="content p-40">
                <h1>
                    Все кроссовки
                </h1>
                <div className="d-flex flex-wrap justify-around">
                    {dataSneakers.map(({img, id, price, name, description, like, cart}) => {

                        return (

                            <div className="card">
                                {like ?

                                    <div className="liked d-flex align-center justify-center cu-p">
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                                                fill="#FF8585"/>
                                        </svg>


                                    </div>

                                    :


                                    <div className="like d-flex align-center justify-center cu-p">
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                                                fill="#9B9B9B"/>
                                        </svg>

                                    </div>

                                }


                                <img width={133} height={112} src={img} alt=""/>
                                <h5 className="mb-20">{description + " " + name}</h5>
                                <div className="d-flex justify-between price">
                                    <div className="d-flex flex-column">
                            <span>

                                Цена:

                            </span>
                                        <b>{price} ₽</b>

                                    </div>
                                    {dataSneakers[id].cart ?

                                        <button className="cu-p cartplus" onClick={() => {
                                            dataSneakers[id].cart = !cart;
                                            console.log(cart);
                                            console.log(dataSneakers[id].cart);
                                        }}>
                                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_60_204)">
                                                    <path
                                                        d="M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z"
                                                        fill="white"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_60_204" x="0.666534" y="0.329834"
                                                            width="10.6698" height="10.5132"
                                                            filterUnits="userSpaceOnUse"
                                                            color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                       result="hardAlpha"/>
                                                        <feOffset dy="2"/>
                                                        <feColorMatrix type="matrix"
                                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                                 result="effect1_dropShadow_60_204"/>
                                                        <feBlend mode="normal" in="SourceGraphic"
                                                                 in2="effect1_dropShadow_60_204" result="shape"/>
                                                    </filter>
                                                </defs>
                                            </svg>


                                        </button>

                                        :
                                        <button className="cu-p" onClick={() => {
                                            console.log(dataSneakers[id].cart);
                                        }}>

                                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                                    fill="#D3D3D3"/>
                                            </svg>
                                        </button>
                                    }

                                </div>
                            </div>

                        )
                    })}
                </div>

            </div>
            {/*<emptycart>*/}
            {/*    <div className="blackout">*/}
            {/*        <div></div>*/}
            {/*    </div>*/}
            {/*    <div className="cart">*/}
            {/*        <h2 className="H2">Корзина</h2>*/}
            {/*        <div>*/}
            {/*            <div className="cartWrapper d-flex flex-column justify-between align-center text-center">*/}
            {/*            <img src="./img/box.png" width={120} height={120} alt=""/>*/}
            {/*            <h2>Корзина пустая</h2>*/}

            {/*            <h4>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</h4>*/}
            {/*            <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*            </svg>*/}
            {/*                &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад*/}
            {/*            </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</emptycart>*/}
            {/*<ordercart>*/}
            {/*    <div className="blackout">*/}
            {/*        <div></div>*/}
            {/*    </div>*/}
            {/*    <div className="cart">*/}
            {/*        <h2 className="H2">Корзина</h2>*/}
            {/*        <div>*/}
            {/*            <div className="cartWrapper d-flex flex-column justify-between align-center text-center">*/}
            {/*                <img src="./img/orderlist.jpg" width={83} height={120} alt=""/>*/}
            {/*                <div className="green"><h2>Заказ Оформлен!</h2></div>*/}

            {/*                <h4>Ваш заказ #18 скоро будет передан курьерской доставке.</h4>*/}
            {/*                <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*                </svg>*/}
            {/*                    &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</ordercart>*/}
            {/*<fullcart>*/}
            {/*    <div className="blackout">*/}

            {/*    </div>*/}
            {/*    <div className="cart">*/}
            {/*        <h2 className="H2">Корзина</h2>*/}
            {/*        <div>*/}
            {/*            <div className="cartWrapper d-flex flex-column justify-between align-center text-center">*/}
            {/*                <div className="cartcardswrapper d-flex flex-column">*/}
            {/*                    {dataSneakers.map(({img, id, price, name, description, like, cart}) => {*/}

            {/*                            return (*/}

            {/*                                <div>*/}
            {/*                                    {cart ?*/}
            {/*                                        <div className="cartcards d-flex align-center justify-center flex-row">*/}
            {/*                                            <img src={img} width={70} height={70} alt=""/>*/}
            {/*                                            <div className="d-flex flex-column justify-center coastDescription">*/}
            {/*                                                <div className="description">*/}
            {/*                                                    <h5> {description + " " + name}</h5>*/}


            {/*                                                    <h5 className="coast">*/}
            {/*                                                        {price + " руб."}*/}
            {/*                                                    </h5>*/}
            {/*                                                </div>*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}

            {/*                                        :*/}
            {/*                                        ""*/}

            {/*                                    }*/}
            {/*                                </div>*/}

            {/*                            )*/}


            {/*                        }*/}
            {/*                    )*/}
            {/*                    }*/}
            {/*                </div>*/}
            {/*                <button className="orderbtn d-flex  align-center justify-center">*/}

            {/*                    Оформить заказ&nbsp;&nbsp;&nbsp;&nbsp;*/}
            {/*                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none"*/}
            {/*                                                               xmlns="http://www.w3.org/2000/svg">*/}
            {/*                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2"*/}
            {/*                          stroke-linecap="round" stroke-linejoin="round"/>*/}
            {/*                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round"*/}
            {/*                          stroke-linejoin="round"/>*/}
            {/*                </svg>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</fullcart>*/}
            <div className="likecartempty">
                <div className="none">
                    <img src="img/smile1.png" width={70} height={70} alt=""/>
                    <h2>Закладок нет :(</h2>
                    <h3>Вы ничего не добавляли в закладки</h3>
                                <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                                </button>
                </div>
            </div>
            <div className="likecart flex-column">
                <div className="d-flex align-center">


                    <div className="backlike d-flex align-center justify-center">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h1>
                        Мои закладки
                    </h1>
                </div>
                <br/>
                <div className="likewrapper d-flex justify-around flex-wrap">
                    {dataSneakers.map(({img, id, price, name, description, like, cart}) => {
                        return (
                            <div className={!like && "d-none"}>

                                {like &&

                                    <div>
                                        <div className="likecard">
                                    <div className="liked d-flex align-center justify-center cu-p">
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                                                fill="#FF8585"/>
                                        </svg>


                                    </div>
                                        <img width={133} height={112} src={img} alt=""/>
                                        <h5 className="mb-20">{description + " " + name}</h5>
                                        <div className="d-flex justify-between align-center price">
                                            <div className="d-flex flex-column">
                            <span>

                                Цена:

                            </span>
                                                <b>{price} ₽</b>

                                            </div>


                                        </div>
                                    </div>
                                    </div>
                                }

                            </div>


                        )
                    })}
                </div>
            </div>
            <div className="order flex-column">
                <div className="d-flex align-center">


                    <div className="backlike d-flex align-center justify-center">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h1>
                        Мои покупки
                    </h1>
                </div>
                <br/>
                <div className="likewrapper d-flex justify-around flex-wrap">
                    {dataSneakers.map(({img, id, price, name, description, like, cart, orders}) => {
                        return (
                            <div className={orders == 0 && "d-none"}>
                                {orders > 0 &&

                                    <div className="card">
                                        {}
                                        {like ?

                                            <div className="liked d-flex align-center justify-center cu-p">
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                                                        fill="#FF8585"/>
                                                </svg>


                                            </div>

                                            :


                                            <div className="like d-flex align-center justify-center cu-p">
                                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                                                        fill="#9B9B9B"/>
                                                </svg>

                                            </div>

                                        }


                                        <img width={133} height={112} src={img} alt=""/>
                                        <h5 className="mb-20">{description + " " + name}</h5>
                                        <div className="d-flex justify-between price">
                                            <div className="d-flex flex-column">
                            <span>

                                Цена:

                            </span>
                                                <b>{price} ₽</b>

                                            </div>

                                            {"X" + orders}


                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="order justify-center">
                <div className="none">
                    <div className="ordernone d-flex flex-column align-center">
                    <img src="img/smile2.png" width={70} height={70} alt=""/>
                    <h2>У вас нет заказов</h2>
                    <h3> Оформите хотя бы один заказ.</h3>
                    <button className="backbtn d-flex  align-center justify-center">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                    </button>
                    </div>
                </div>
            </div>
        </div>);

}

export default App;