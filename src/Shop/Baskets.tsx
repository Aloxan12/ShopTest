import React from 'react';
import '../App.css';
import style from './Basket.module.css';

export type ProductType = {
    id: string
    img: string
    title: string
    price: number
    description: string
}

export type BasketType = {
    product: Array<ProductType>
}

export function Basket(props: BasketType) {

    return (
        <div className={style.basketContainer}>
            <div>
                {props.product.map(p=>{
                    return <div key={p.id} className={style.prod}>
                        <img src={p.img}/>
                        <h3>{p.title}</h3>
                        <p>{p.price}<span>byn</span></p>
                        <p>{p.description}</p>
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
               </form>
           </div>
        </div>
    );
}