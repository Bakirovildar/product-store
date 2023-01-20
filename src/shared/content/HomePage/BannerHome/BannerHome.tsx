import React from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";

export function BannerHome() {

    return (
        <div className='bannerHome'>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}
