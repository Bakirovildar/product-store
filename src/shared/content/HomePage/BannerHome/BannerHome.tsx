import React from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";
import {BackgroundBanner} from "../../../components/BackgroundBanner";
import useBanner from "../../../../hooks/useBanner";

export function BannerHome() {
    const {nowBanner, clickRightHandler, clickLeftHandler} = useBanner()

    return (
        <div className='bannerHome'>
            {
                nowBanner
                    ? <BackgroundBanner img={nowBanner.img}/>
                    : ''
            }
            {
                nowBanner
                    ? <LeftSide
                        title={nowBanner.title}
                        id={nowBanner.id}
                        text={nowBanner.text}
                    />
                    : ''
            }
            <RightSide clickLeftHandler={clickLeftHandler} clickRightHandler={clickRightHandler}/>
        </div>
    );
}
