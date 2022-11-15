import React, {useCallback} from 'react';
import '../App.scss';
import style from './Product.module.css'
import {actions, ProductType} from "../../bll/state/product-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";
import {ProductItem} from "./ProductItem";


export const Product = React.memo(() => {
    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addProductToBasket = useCallback((id: number) => {
        const isInBasket = productInBasket.find(p=> p.id === id)
        if(isInBasket){
            dispatch(actions.addAndDeleteProductAC(isInBasket.id, 'plus'))
        }else
            dispatch(actions.addProductToBasket(id))
    }, [productInBasket])

    return (
        <div className={style.container}>
            {products.map(p => {
                return <ProductItem
                    product={p}
                    key={p.id}
                    addProductToBasket={addProductToBasket} />
            })}
        </div>
    );
})