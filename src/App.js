import React, {useState} from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sneakers from "./components/Sneakers";
import Emptycart from "./components/Emptycart";
import Ordercart from "./components/Ordercart";
import Fullcart from "./components/Fullcart";
import Emptylikecart from "./components/Emptylikecart";
import Likecart from "./components/Likecart";
import Orders from "./components/Orders";
import Ordersempty from "./components/Ordersempty";
const App = () => {
    return (
        <div className="wrapper clear">
            <Header />
            <Slider />
            <Sneakers/>
            <Emptycart/>
            <Ordercart/>
            <Fullcart/>
            <Emptylikecart/>
            <Likecart/>
            <Orders/>
            <Ordersempty/>
        </div>);

}

export default App;