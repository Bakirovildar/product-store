import React, {useEffect, useState} from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";
import {BackgroundBanner} from "../../../components/BackgroundBanner";
import {backgrounds} from '../../../../helpers/bannerBg'

export function BannerHome() {
    const [bannerItem, setBannerItem]: any = useState(null)
    const [nowBanner, setNowBanner]: any = useState(null)
    const [bannerNum, setBannerNum]: any = useState(0)

    useEffect(() => {
        setBannerItem(backgrounds)
    }, [])

    useEffect(() => {
        if (!bannerItem) return
        bannerItem.map((item: object, index: number) => {
            const middleNum = Math.ceil(bannerItem.length / 2)
            if (index === middleNum) {
                return setNowBanner(item)
            }
        })
    }, [bannerItem, nowBanner])

    useEffect(() => {
        if(!bannerNum) {
            setBannerNum(1)
            return
        }
        setNowBanner(bannerItem[bannerNum - 1])
    }, [bannerNum, nowBanner])

    const clickLeftHandler = () => {
        if (bannerNum < 1) return
        setBannerNum(bannerNum - 1)
    }

    const clickRightHandler = () => {
        if (bannerNum === bannerItem.length) return
        setBannerNum(bannerNum + 1)
    }

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
