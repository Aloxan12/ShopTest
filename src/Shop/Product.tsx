import React from 'react';
import '../App.css';
import style from './Product.module.css'

export type ProductType = {
    id: string
    img: string
    title: string
    price: number
    description: string
}

export type ProductsType = {
    id: string
    img: string
    title: string
    price: number
    description: string
    buy:(idProd: string)=>void
}

export function Product(props: ProductsType) {

    const buy =()=>{
        props.buy(props.id)
    }

    return (
        <div className={style.container}>

                    return <div key={props.id} className={style.prod}>
                        <img src={props.img}/>
                        <h3>{props.title}</h3>
                        <p>{props.price}<span>byn</span></p>
                        <p>{props.description}</p>
                        <button onClick={buy}>Купить/Добавить</button>
                    </div>
        </div>
    );
}