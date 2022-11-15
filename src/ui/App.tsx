import React from 'react';
import './App.css';
import {NavLink, Redirect, Route} from "react-router-dom";
import {Product} from "./Shop/Product";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";
import {Basket} from "./Shop/Baskets";
import {AppButton} from "./Components/AppButton/AppButton";

function App() {
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)


    return (
        <div className="App">
            <div className="AppNavLink">
                <NavLink to={'/product'}>Product</NavLink>
                <NavLink to={'/basket'}>Basket({productInBasket.length.toString()})</NavLink>
            </div>
            <AppButton onClick={()=>{}} title={'Кнопка'} />
            <Route path='/' render={() => <Redirect to={'/product'} />}/>
            <Route path='/product' render={() => <Product />}/>
            <Route path='/basket' render={() => <Basket />}/>
        </div>
    );
}

export default App;
