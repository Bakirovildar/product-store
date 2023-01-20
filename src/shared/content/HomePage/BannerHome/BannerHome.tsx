import React, {useEffect, useState} from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";
import {BackgroundBanner} from "../../../components/BackgroundBanner";
import {backgrounds} from '../../../../helpers/bannerBg'

export function BannerHome() {
    const [bannerItem, setBannerItem]: any = useState(null)
    const [nowBanner, setNowBanner]: any = useState(null)

    useEffect(() => {
        setBannerItem(backgrounds)
    }, [])

    useEffect(() => {
        if (!bannerItem) return

        bannerItem.map((item: object, index: number) => {
            const middle = Math.ceil(bannerItem.length / 2)
            if (index + 1 === middle) {
                return setNowBanner(item)
            }
        })

    }, [bannerItem, nowBanner])

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
            <RightSide/>
        </div>
    );
}
