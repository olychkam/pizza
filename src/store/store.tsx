import {combineReducers} from "redux";
import {pizzaReducer} from "../components/PizzaBlock/pizza-reducer";

export const rootReducer = combineReducers({
    pizza: pizzaReducer
})

