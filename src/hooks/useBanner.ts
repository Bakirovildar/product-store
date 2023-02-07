import {useEffect, useState} from "react";
import {backgrounds} from "../helpers/bannerBg";


interface Banner {
    id?: number
    title?: string
    text?: string
    img?: string
}

export default function useBanner () {
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

    return {
        nowBanner,
        clickLeftHandler,
        clickRightHandler
    }
}
