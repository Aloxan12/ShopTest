import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";

export const AppHeader = () => {
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)
    return (
        <div className="AppNavLink">
            <NavLink to={'/product'}>Продукты</NavLink>
            <NavLink to={'/basket'}>Корзина ({productInBasket.length.toString()})</NavLink>
        </div>
    );
};