import React from 'react';
import './App.css';
import {HomePage} from "./shared/content/HomePage";
import {HeaderSite} from "./shared/content/HeaderSite";

function App() {
    return (
        <div className="App">
            <HeaderSite />
            <HomePage/>
        </div>
    );
}

export default App;
