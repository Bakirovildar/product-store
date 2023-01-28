import React, {useEffect, useState} from 'react';
import './bannerhome.css';
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";
import {BackgroundBanner} from "../../../components/BackgroundBanner";
import {backgrounds} from '../../../../helpers/bannerBg'

interface Banner {
    id?: number
    title?: string
    text?: string
    img?: string
}

export function BannerHome() {
    const [bannerItems, setBannerItems]: [Array<Banner>, Function] = useState([])
    const [nowBanner, setNowBanner]: [Banner, Function] = useState({})
    const [bannerNum, setBannerNum]: [number, Function] = useState(0)

    useEffect(() => {
        setBannerItems(backgrounds)
    }, [])

    useEffect(() => {
        if (!bannerNum) {
            setBannerNum(1)
            return
        }
        setNowBanner(bannerItems[bannerNum - 1])
    }, [bannerNum, nowBanner])

    const clickLeftHandler = () => {
        setBannerNum(bannerNum === 1 ? bannerItems.length : bannerNum - 1)
    }

    const clickRightHandler = () => {
        setBannerNum(bannerNum === bannerItems.length ? 1 : bannerNum + 1)
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
