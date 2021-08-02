import React from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Button} from "./components/Button/Button";
import {Categories} from "./components/Categories/Categories";
import {SortPopup} from "./components/SortPoput/SortPopup";
import {Home} from "./pages/Home";
import { Route } from 'react-router-dom';
import {Cart} from "./pages/Cart";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
              <Route path='/' component={Home} exact/>
              <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
