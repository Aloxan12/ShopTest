import React from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";
import {AppButton} from "./Components/AppButton/AppButton";
import {AppRouter} from "../AppRouter";

function App() {
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)


    return (
        <div className="App">
            <div className="AppNavLink">
                <NavLink to={'/product'}>Product</NavLink>
                <NavLink to={'/basket'}>Basket({productInBasket.length.toString()})</NavLink>
            </div>
            <AppButton onClick={()=>{}} title={'Кнопка'} />
            <AppRouter />
        </div>
    );
}

export default App;
