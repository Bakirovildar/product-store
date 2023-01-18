import React from 'react';
import './headersite.css';
import {HeaderInfo} from "./HeaderInfo";
import {HeaderMain} from "./HeaderMain";
import {HeaderSort} from "./HeaderSort";

export function HeaderSite() {
    return (
        <>
            <header className='header-container-desktop'>
                <HeaderInfo/>
                <HeaderMain/>
                <HeaderSort/>
            </header>

            <header className='header-container-mobile'>
                mobile
            </header>
        </>
    );
}
