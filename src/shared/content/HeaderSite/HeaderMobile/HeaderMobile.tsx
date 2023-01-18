import React from 'react';
import './headermobile.css';
import {IconBurger} from "../../../../assests/icons/IconBurger";
import {IconLogo} from "../../../../assests/icons/IconLogo";
import {IconBasket} from "../../../../assests/icons/IconBasket";
import {SearchComponent} from "../../../components/SearchComponent";

export function HeaderMobile() {
    return (
        <div className='headerMobileWrapper'>
            <div className='headerMobile'>
                <IconBurger isWhiteColor={false}/>
                <div className='headerMobileLogo'><IconLogo/><span>StroykaStore</span></div>
                <IconBasket/>
            </div>
            <SearchComponent />
        </div>
    );
}
