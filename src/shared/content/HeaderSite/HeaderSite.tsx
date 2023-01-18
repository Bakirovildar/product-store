import React from 'react';
import './headersite.css';
import {HeaderInfo} from "./HeaderDesktop/HeaderInfo";
import {HeaderMain} from "./HeaderDesktop/HeaderMain";
import {HeaderSort} from "./HeaderDesktop/HeaderSort";
import {HeaderMobile} from "./HeaderMobile";

export function HeaderSite() {
    return (
        <>
            <header className='header-container-desktop'>
                <HeaderInfo/>
                <HeaderMain/>
                <HeaderSort/>
            </header>

            <header className='header-container-mobile'>
                <HeaderMobile />
            </header>
        </>
    );
}
