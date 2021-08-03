import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Button} from "./components/Button/Button";
import {Categories} from "./components/Categories/Categories";
import {SortPopup} from "./components/SortPoput/SortPopup";
import {Home} from "./pages/Home";
import {Route} from 'react-router-dom';
import {Cart} from "./pages/Cart";
import axios from "axios";

function App() {
    const [pizzas, setPizzas] = useState<[]>([])
    useEffect(() => {
      /*  fetch('http://localhost:3001/db.json')
            .then((res) => res.json())
            .then((json) => {
                setPizzas(json.pizzas)
            })*/
        axios.get('http://localhost:3001/db.json').then(({data})=>{
            setPizzas(data.pizzas)
        })
    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home items={pizzas}/>} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
