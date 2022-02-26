import React, {useState} from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sneakers from "./components/Sneakers";
import Cart from "./components/Cart";
import Ordercart from "./components/Ordercart";
import Fullcart from "./components/Fullcart";
import Emptylikecart from "./components/Emptylikecart";
import Like from "./components/Like";
import Orders from "./components/Orders";
import Ordersempty from "./components/Ordersempty";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";

const App = () => {
    const dispatch = useDispatch()


    return (

        <div className="wrapper clear">

            <Header/>
            <Routes>
                <Route path="/" element={<div><Slider/><Sneakers/></div>} exect/>
                <Route path="/cart" element={<div><Slider/><Sneakers/><Cart/></div>} exect/>
                <Route path="/like" element={<div><Like/></div>} exect/>
                <Route path="/orders" element={<div><Orders/></div>} exect/>
            </Routes>



        </div>

    );

}

export default App;