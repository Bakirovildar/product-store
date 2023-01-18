import React from 'react';
import './headermain.css';
import {LogoHeader} from "./LogoHeader";
import {HeaderOptions} from "./HeaderOptions";
import {SearchComponent} from "../../../../components/SearchComponent";


export function HeaderMain() {
    return (
        <div className='mainAdaptive'>
            <div className='headerMain'>
                <LogoHeader/>
                <HeaderOptions/>
            </div>
            <div className='searchMob'>
                <SearchComponent/>
            </div>
        </div>
    );
}
