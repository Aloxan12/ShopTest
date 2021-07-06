import React from 'react';
import '../App.css';
import style from './Basket.module.css';
import {ActType, ProductType} from "../../bll/state/product-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";
import {Button} from "@material-ui/core";

export type BasketType = {
    product: Array<ProductType>
    totalPrice: (newPrice: number) => void
    addAndDeleteProduct:(id: string, act: ActType, count: number)=> void
}

export const Basket: React.FC<BasketType> = ({product, totalPrice, addAndDeleteProduct}) => {
    const price = useSelector<AppRootStateType, number>(state => state.product.price)

    let newPriceValue = product.map(p => p.price).reduce((acc, el) => acc + el, 0)
    totalPrice(newPriceValue)
    return (
        <div className={style.basketContainer}>
            <div>
                {
                    product.map(p => {
                        const addDeleteProd =(act: ActType)=>{
                            addAndDeleteProduct(p.id, act, p.count)
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
                    <p>Total: {price.toString()}</p>
                </form>
            </div>
        </div>
    );
}
