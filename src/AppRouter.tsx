import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {Product} from "./ui/Shop/Product";
import {Basket} from "./ui/Shop/Baskets";

const route = [
    {
        title: 'Main',
        path: '/',
        component: <Redirect to={'/profile'} />
    },
    {
        title: 'Main',
        path: '/',
        component: <Redirect to={'/profile'} />
    },
    {
        title: 'Main',
        path: '/',
        component: <Redirect to={'/profile'} />
    },
]

export const AppRouter = () => {
    return (
        <div>
            <Route path='/' render={() => <Redirect to={'/product'} />}/>
            <Route path='/product' render={() => <Product />}/>
            <Route path='/basket' render={() => <Basket product={productInBasket}
                                                        totalPrice={totalPrice}
                                                        addAndDeleteProduct={addAndDeleteProduct}
                                                        checkoutBasket={checkoutBasket}
            />}/>
        </div>
    );
}