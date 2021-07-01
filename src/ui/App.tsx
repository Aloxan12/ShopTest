import React, {useState} from 'react';
import './App.css';
import {Route, NavLink} from "react-router-dom";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Product} from "./Shop/Product";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";
import {Basket} from "./Shop/Baskets";

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

    // const [products, setProducts] = useState<Array<ProductType>>([
    //     {
    //         id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 3,
    //         description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
    //     },
    //     {
    //         id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 8,
    //         description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
    //     },
    //     {
    //         id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 9,
    //         description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
    //     },
    //     {
    //         id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 2,
    //         description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
    //     },
    // ])
    const [productInBasket, setProductInBasket] = useState<Array<ProductType>>([])

    // function buy(idProd: string) {
    //     const product = products.find(p => p.id === idProd)
    //     if (product && productInBasket.find(p=> p.id)) {
    //         setProductInBasket([product, ...productInBasket])
    //     }
    // }
    //
    // function addCount(idProd: string, count: number) {
    //     const product = productInBasket.find(p => p.id === idProd)
    //     if (product) {
    //         product.count = count + 1;
    //         setProductInBasket([...productInBasket])
    //     }
    // }
    //
    // function removeCount(idProd: string, count: number) {
    //     const product = productInBasket.find(p => p.id === idProd)
    //     if (product) {
    //         product.count = count - 1
    //     }
    //     setProductInBasket([...productInBasket])
    // }

    function removeProd(prodId: string) {
        setProductInBasket(productInBasket.filter(p => p.id !== prodId))
    }

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
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
                <NavLink to={'/basket'}>Basket</NavLink>
            </div>
            <Route path='/product' render={() => <Product products={products}/>}/>
            <Route path='/basket' render={() => <Basket />}/>
        </div>
    );
}

export default App;
