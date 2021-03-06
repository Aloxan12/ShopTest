import React from 'react';
import '../App.css';
import style from './Product.module.css'
import {ProductType} from "../../bll/state/product-reducer";
import {Button} from "@material-ui/core";


export type ProductsType = {
    products: ProductType[]
    addProductToBasket: (id: string)=> void
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
                        <Button variant={"contained"} color={"primary"} onClick={()=>{addProductToBasket(p.id)}}>Купить\Добавить</Button>
                    </div>
                </div>
            })}
        </div>
    );
}