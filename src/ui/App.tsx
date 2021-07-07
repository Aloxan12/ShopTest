import React from 'react';
import './App.css';
import {NavLink, Route} from "react-router-dom";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Product} from "./Shop/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {actions, ActType, ProductType} from "../bll/state/product-reducer";
import {Basket} from "./Shop/Baskets";

function App() {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addProductToBasket = (id: string) => {
         const isInBasket = productInBasket.find(p=> p.id === id)
         if(isInBasket){
             dispatch(actions.addAndDeleteProductAC(isInBasket.id, 'plus'))
         }else
        dispatch(actions.addProductToBasket(id))
    }
    const addAndDeleteProduct =(id: string, act: ActType)=>{
        dispatch(actions.addAndDeleteProductAC(id, act))
    }
    const totalPrice = (newPrice: number) => {
        dispatch(actions.setTotalPrice(newPrice))
    }
    const checkoutBasket =()=>{
        actions.checkoutBasket(productInBasket)
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
                                                        addAndDeleteProduct={addAndDeleteProduct}
                                                        checkoutBasket={checkoutBasket}
            />}/>
        </div>
    );
}

export default App;
