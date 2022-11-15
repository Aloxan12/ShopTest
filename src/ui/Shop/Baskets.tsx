import React from 'react';
import '../App.scss';
import style from './Basket.module.css';
import {actions, ActType, ProductType} from "../../bll/state/product-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";

import {Button} from "@material-ui/core";

export const Basket = () => {
    const dispatch = useDispatch()
    const product = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const price = useSelector<AppRootStateType, number>(state => state.product.price)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addAndDeleteProduct =(id: string, act: ActType)=>{
        dispatch(actions.addAndDeleteProductAC(id, act))
    }
    const totalPrice = (newPrice: number) => {
        dispatch(actions.setTotalPrice(newPrice))
    }
    const checkoutBasket =()=>{
        actions.checkoutBasket(productInBasket)
    }

    const checkout=()=> console.log(JSON.stringify(product))
    let newPriceValue = product.map(p => p.price).reduce((acc, el) => acc + el, 0)
    totalPrice(newPriceValue)
    return (
        <div className={style.basketContainer}>
            <div>
                {
                    product.map(p => {
                        const addDeleteProd =(act: ActType)=>{
                            addAndDeleteProduct(p.id, act)
                        }
                        return <div className={style.prodCount}>
                            <div key={p.id} className={style.prod}>
                                <img src={p.img}/>
                                <h3>{p.title}</h3>
                                <p>{p.price}<span>byn </span> за {p.count} шт\уп</p>
                                <p>{p.description}</p>
                            </div>
                            <div className={style.countCont}>
                                <Button onClick={()=>{addDeleteProd('minus')}}>-</Button>
                                <span>{p.count}</span>
                                <Button onClick={()=>addDeleteProd('plus')}>+</Button>
                            </div>
                        </div>
                    })}
            </div>
            <div>
                Корзина
                <form className={style.form}>
                    <input type={'text'} placeholder={'Name'}/>
                    <input type={'text'} placeholder={'Surname'}/>
                    <input type={'text'} placeholder={'Address'}/>
                    <input type={'numbers'} placeholder={'Phone'}/>
                    <button>Order</button>
                    <Button onClick={checkout}>Checkout</Button>
                    <p>Total: {price.toString()}</p>
                </form>
            </div>
        </div>
    );
}
