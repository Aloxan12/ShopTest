import React from 'react';
import '../App.scss';
import './Basket.scss';
import {actions, ActType, ProductType} from "../../bll/state/product-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/state/store";

import {AppButton} from "../Components/AppButton/AppButton";
import {AppInput} from "../Components/AppInput/AppInput";

export const Basket = React.memo(() => {
    const dispatch = useDispatch()
    const product = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.product)
    const price = useSelector<AppRootStateType, number>(state => state.product.price)
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)

    const addAndDeleteProduct =(id: number, act: ActType)=>{
        dispatch(actions.addAndDeleteProductAC(id, act))
    }
    const totalPrice = (newPrice: number) => {
        dispatch(actions.setTotalPrice(newPrice))
    }
    const checkoutBasket =()=>{
        actions.checkoutBasket(productInBasket)
    }

    const checkout=()=> console.log(JSON.stringify(product))

    let newPriceValue = productInBasket.map(p => p.price).reduce((acc, el) => acc + el, 0)
    totalPrice(newPriceValue)
    return (
        <div className={'basketContainer'}>
            <div>
                {
                    productInBasket.map(p => {
                        const addDeleteProd =(act: ActType)=>{
                            addAndDeleteProduct(p.id, act)
                        }
                        return (
                            <div key={p.id} className={'prodCount'}>
                                <div className={'prod'}>
                                    <img src={p.img} alt={p.title}/>
                                    <h3>{p.title}</h3>
                                    <p>{p.price}<span>byn </span> за {p.count} шт\уп</p>
                                    <p>{p.description}</p>
                                </div>
                                <div className={'countCont'}>
                                    <AppButton onClick={()=>{addDeleteProd('minus')}}  title={'-'}/>
                                    <span>{p.count}</span>
                                    <AppButton onClick={()=>addDeleteProd('plus')} title={'+'}/>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className={'basket-form'}>
                Корзина
                <div className={'form'}>
                    <AppInput value={''} onChange={()=>{}} placeholder={'Name'} type={'text'} border/>
                    <AppInput value={''} onChange={()=>{}} placeholder={'Surname'} type={'text'} border/>
                    <AppInput value={''} onChange={()=>{}} placeholder={'Address'} type={'text'} border/>
                    <AppInput value={''} onChange={()=>{}} placeholder={'Phone'} type={'numbers'} border/>
                    <AppButton onClick={checkout} title={'Отправить'}/>
                    <p>Total: {price.toString()}</p>
                </div>
            </div>
        </div>
    );
})
