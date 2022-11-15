import React from 'react';
import './App.scss';
import {AppButton, BtnColorType} from "./Components/AppButton/AppButton";
import {AppRouter} from "../AppRouter";
import {AppHeader} from "./AppHeader";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/state/store";
import {ProductType} from "../bll/state/product-reducer";

function App() {
    const productInBasket = useSelector<AppRootStateType, Array<ProductType>>(state => state.product.productInBasket)
    console.log('productInBasket', productInBasket)
    return (
        <div className="App">
            <AppHeader />
            {/*<AppButton onClick={()=>{}} title={'Кнопка'} />*/}
            {/*<AppButton onClick={()=>{}} title={'Кнопка'}  color={BtnColorType.blue}/>*/}
            <AppRouter />
        </div>
    );
}

export default App;
