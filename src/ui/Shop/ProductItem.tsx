import React from 'react';
import '../App.scss';
import style from './Product.module.css'
import {actions, ProductType} from "../../bll/state/product-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";
import {AppButton, BtnColorType} from "../Components/AppButton/AppButton";

interface ProductItemProps{
    product: ProductType
    addProductToBasket: (id: number)=> void
}

export const ProductItem = React.memo(({product, addProductToBasket}:ProductItemProps) => {
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)
    return (
        <div className={style.prod}>
            <img src={product.img} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.price}<span>byn</span></p>
            <p>Отложено: {productInBasket.find(item => item.id === product.id)?.count || 0}</p>
            <p>{product.description}</p>
            <AppButton title={'Купить\\Добавить'} color={BtnColorType.blue} onClick={()=>{addProductToBasket(product.id)}} />
        </div>
    )
})