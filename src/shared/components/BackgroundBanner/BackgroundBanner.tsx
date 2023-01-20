import React from 'react';
import './backgroundbanner.css';
import img from '../../../assests/img/bg1.png'

export function BackgroundBanner() {
    return (
        <>
            <div className='backgroundBanner'>
                <img src={img} alt=""/>
            </div>
        </>
    )
}
