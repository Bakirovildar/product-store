import React from 'react';
import './App.css';
import {HomePage} from "./shared/content/HomePage";
import {HeaderSite} from "./shared/content/HeaderSite";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./store/store";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HeaderSite/>
                <HomePage/>
            </div>
        </Provider>
    );
}

export default App;
