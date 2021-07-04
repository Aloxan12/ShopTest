import React from 'react';
import './App.css';
import {NavLink, Route} from "react-router-dom";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Product} from "./Shop/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";
import {Basket} from "./Shop/Baskets";
import {actions} from "../bll/state/basket-reducer";

function App() {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.basket.productInBasket)

    const addProductToBasket = (product: ProductType) => {
        // const isInBasket = [...productInBasket].find(p=> p.id === product.id)
        // if(isInBasket){
        //     dispatch(actions.addProductAC(product.id))
        // }else
        dispatch(actions.addProductToBasket(product))
    }
    const addCountProductInBasket =(id: string)=>{
        dispatch(actions.addProductAC(id))
    }
    const totalPrice = (newPrice: number) => {
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
                                                        addCountProductInBasket={addCountProductInBasket}
            />}/>
        </div>
    );
}

export default App;
