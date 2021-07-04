import React from 'react';
import '../App.css';
import style from './Product.module.css'
import {ProductType} from "../../bll/state/product-reducer";
import {Button} from "@material-ui/core";


export type ProductsType = {
    products: ProductType[]
    addProductToBasket: (prodId: ProductType)=> void
}

export const Product: React.FC<ProductsType> = ({products, addProductToBasket}) => {

    return (
        <div className={style.container}>
            {products.map(p => {
                return <div>
                    <div key={p.id} className={style.prod}>
                        <img src={p.img}/>
                        <h3>{p.title}</h3>
                        <p>{p.price}<span>byn</span>{p.count}</p>
                        <p>{p.description}</p>
                        <Button onClick={()=>{addProductToBasket(p)}}>Купить\Добавить</Button>
                    </div>
                </div>
            })}
        </div>
    );
}