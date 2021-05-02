import React from 'react';
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";

const App = () => {
return(
    <div>
<Header/>
<About/>
<Shop/>
<Menu/>
<Clients/>
<Prices/>
<Footer/>
</div>
)};

export default App;
