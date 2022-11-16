import React from 'react';
import './App.scss';
import {AppRouter} from "../AppRouter";
import {AppHeader} from "./AppHeader";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <AppRouter />
        </div>
    );
}

export default App;
