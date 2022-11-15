import React from 'react';
import './App.scss';
import {AppButton} from "./Components/AppButton/AppButton";
import {AppRouter} from "../AppRouter";
import {AppHeader} from "./AppHeader";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <AppButton onClick={()=>{}} title={'Кнопка'} />
            <AppRouter />
        </div>
    );
}

export default App;
