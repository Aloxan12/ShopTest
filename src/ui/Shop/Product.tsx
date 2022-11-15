import React from 'react';
import '../App.scss';
import style from './Product.module.css'
import {actions, ProductType} from "../../bll/state/product-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";
import {AppButton, BtnColorType} from "../Components/AppButton/AppButton";


export const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addProductToBasket = (id: number) => {
        const isInBasket = productInBasket.find(p=> p.id === id)
        if(isInBasket){
            dispatch(actions.addAndDeleteProductAC(isInBasket.id, 'plus'))
        }else
            dispatch(actions.addProductToBasket(id))
    }

    return (
        <div className={style.container}>
            {products.map(p => {
                return <div key={p.id}>
                    <div className={style.prod}>
                        <img src={p.img} alt={p.title}/>
                        <h3>{p.title}</h3>
                        <p>{p.price}<span>byn</span>{p.count}</p>
                        <p>{p.description}</p>
                        <AppButton title={'Купить\\Добавить'} color={BtnColorType.blue} onClick={()=>{addProductToBasket(p.id)}} />
                    </div>
                </div>
            })}
        </div>
    );
}