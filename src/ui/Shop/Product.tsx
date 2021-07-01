import React from 'react';
import '../App.css';
import style from './Product.module.css'
import {ProductType} from "../../bll/state/product-reducer";


export type ProductsType = {
    products: ProductType[]
}

export const Product: React.FC<ProductsType> = ({products}) => {

    return (
        <div className={style.container}>
            {products.map(p => {
                return <div>
                    <div key={p.id} className={style.prod}>
                        <img src={p.img}/>
                        <h3>{p.title}</h3>
                        <p>{p.price}<span>byn</span></p>
                        <p>{p.description}</p>
                        <button>Купить\Добавить</button>
                    </div>
                </div>
            })}
        </div>
    );
}