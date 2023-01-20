import React from 'react';
import './backgroundbanner.css';
import {IBackgroundBanner} from "../../../types/interface";

export function BackgroundBanner({img}: IBackgroundBanner) {
    return (
        <>
            <div className='backgroundBanner'>
                <img src={img} alt=""/>
            </div>
        </>
    )
}
