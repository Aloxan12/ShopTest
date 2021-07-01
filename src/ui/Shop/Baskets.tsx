import React, {useState} from 'react';
import '../App.css';
import style from './Basket.module.css';
import {Button} from "@material-ui/core";
import {ProductType} from "../../bll/state/product-reducer";

export type BasketType = {
    product: Array<ProductType>
    addCount:(id: string, count: number)=>void
    removeCount:(id: string, count: number)=>void
    removeProd: (prodId: string)=>void
}

export function Basket() {
    return (
        <div className={style.basketContainer}>
            <div>
                Продукты
            </div>
            <div>
                Корзина
                <form className={style.form}>
                    <input type={'text'} placeholder={'Name'}/>
                    <input type={'text'} placeholder={'Surname'}/>
                    <input type={'text'} placeholder={'Address'}/>
                    <input type={'numbers'} placeholder={'Phone'}/>
                    <button>Order</button>
                </form>
            </div>
        </div>
    );
}