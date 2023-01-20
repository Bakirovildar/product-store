import React from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";
import {BackgroundBanner} from "../../../components/BackgroundBanner";

export function BannerHome() {

    return (
        <div className='bannerHome'>
            <BackgroundBanner/>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}
