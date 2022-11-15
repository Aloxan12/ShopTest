import React from 'react';
import '../App.scss';
import style from './Product.module.css'
import {actions, ProductType} from "../../bll/state/product-reducer";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";


// export type ProductsType = {
//     products: ProductType[]
//     addProductToBasket: (id: string)=> void
// }

export const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addProductToBasket = (id: string) => {
        const isInBasket = productInBasket.find(p=> p.id === id)
        if(isInBasket){
            dispatch(actions.addAndDeleteProductAC(isInBasket.id, 'plus'))
        }else
            dispatch(actions.addProductToBasket(id))
    }

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