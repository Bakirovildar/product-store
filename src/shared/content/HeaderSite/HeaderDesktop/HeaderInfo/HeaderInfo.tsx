import React from 'react';
import './headerinfo.css';
import {LocationInfo} from "./LocationInfo";
import {NavInfo} from "./NavInfo";
import {arrOrders, arrWarning} from "../../../../../helpers/items";

export function HeaderInfo() {
    return (
        <>
            <div className='infoContainer'>
                <LocationInfo city={'Москва'}/>
                <NavInfo navTitle={arrOrders}/>
            </div>
            <div className='podContainer'>
                <LocationInfo city={'Москва'}/>
                <NavInfo navTitle={arrWarning}/>
            </div>
        </>
    );
}
