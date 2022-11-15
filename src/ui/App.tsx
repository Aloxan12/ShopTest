import React from 'react';
import './App.scss';
import {AppRouter} from "../AppRouter";
import {AppHeader} from "./AppHeader";

function App() {
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
