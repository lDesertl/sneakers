import React, {useState} from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sneakers from "./components/Sneakers";
import Cart from "./components/Cart";
import Ordercart from "./components/Ordercart";
import Like from "./components/Like";
import Orders from "./components/Orders";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (

        <div className="wrapper clear">

            <Header/>
            <Routes>
                <Route path="/" element={<div><Slider/><Sneakers/></div>} exact/>
                <Route path="/cart" element={<div><Slider/><Sneakers/><Cart/></div>} exact/>
                <Route path="/like" element={<div><Like/></div>} exact/>
                <Route path="/orders" element={<div><Orders/></div>} exact/>
                <Route path={"/order"} element={<div><Slider/><Sneakers/><Ordercart/></div>}exact/>
            </Routes>



        </div>

    );

}

export default App;