import React from 'react';
import './backgroundbanner.css';
import {backgrounds} from "../../../helpers/bannerBg";

export function BackgroundBanner() {
    return (
        <>
            <div className='backgroundBanner'>
                <img src={backgrounds[0].img} alt=""/>
            </div>
        </>
    )
}
