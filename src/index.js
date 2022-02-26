import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.scss';
import 'macro-css';
import {createStore} from "redux";
import provider from "react-redux/lib/components/Provider";
import {Provider} from "react-redux";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const dataSneakers = {
    sneakers:[
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
}





const reduser = (state=dataSneakers, action,id) => {
    switch (action.type) {
        case "ADDORDER":
            return {...state[id], orders:state[id].order + action.payload}
        default:
            return state
    }
}

const store = createStore(reduser)


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Provider>,

  document.getElementById('root')
);


