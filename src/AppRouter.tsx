import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {Product} from "./ui/Shop/Product";
import {Basket} from "./ui/Shop/Baskets";

const route = [
    {
        title: 'Main',
        path: '/',
        component: <Redirect to={'/product'}/>
    },
    {
        title: 'Product',
        path: '/product',
        component: <Product/>
    },
    {
        title: 'Basket',
        path: '/basket',
        component: <Basket/>
    },
]

export const AppRouter = () => {
    return (
        <div>
            {route.map((item, index) => {
                return <Route path={item.path} render={() => item.component}/>
            })}
        </div>
    );
}