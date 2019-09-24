import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './styles/styles.css'
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <main>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
