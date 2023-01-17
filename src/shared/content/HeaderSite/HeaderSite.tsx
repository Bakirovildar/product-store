import React from 'react';
import './headersite.css';
import {HeaderInfo} from "./HeaderInfo";
import {HeaderMain} from "./HeaderMain";
import {HeaderSort} from "./HeaderMain/HeaderSort";

export function HeaderSite() {
    return (
        <header className='headerContainer'>
            <HeaderInfo/>
            <HeaderMain/>
            <HeaderSort/>
        </header>
    );
}
