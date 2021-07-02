import React, {useState} from 'react';
import './App.css';
import {Route, NavLink} from "react-router-dom";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Product} from "./Shop/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";
import {Basket} from "./Shop/Baskets";
import {actions} from "../bll/state/basket-reducer";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksStateType = {
    [key: string]: Array<TasksType>
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.basket.productInBasket)

    const addProductToBasket = (product: ProductType)=>{
        dispatch(actions.addProductToBasket(product))
    }
    const totalPrice=(newPrice: number)=>{
            dispatch(actions.setTotalPrice(newPrice))
        }
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className="AppNavLink">
                <NavLink to={'/product'}>Product</NavLink>
                <NavLink to={'/basket'}>Basket({productInBasket.length.toString()})</NavLink>
            </div>
            <Route path='/product' render={() => <Product products={products}
                                                          addProductToBasket={addProductToBasket}
            />}/>
            <Route path='/basket' render={() => <Basket product={productInBasket}
                                                        totalPrice={totalPrice}
            />}/>
        </div>
    );
}

export default App;
