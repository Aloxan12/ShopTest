import React, {useState} from 'react';
import './App.scss';
import {AppRouter} from "../AppRouter";
import {AppHeader} from "./AppHeader";
import {AppInput} from "./Components/AppInput/AppInput";

function App() {
    const [value, setValue] = useState('')
    return (
        <div className="App">
            <AppHeader />
            <AppInput value={value} onChange={setValue}/>
            <AppRouter />
        </div>
    );
}

export default App;
