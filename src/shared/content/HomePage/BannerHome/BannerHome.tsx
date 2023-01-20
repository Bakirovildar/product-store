import React, {useState} from 'react';
import './bannerhome.css';
import {ButtonStandart} from "../../../components/buttons/ButtonStandart";
import {IconArrowLeft} from "../../../../assests/icons/IconArrowLeft";
import {IconArrowRight} from "../../../../assests/icons/IconArrowRight";

export function BannerHome() {
    const [isWhiteColorLeft, setIsWhiteColorLeft] = useState(false)
    const [isWhiteColorRight, setIsWhiteColorRight] = useState(false)

    return (
        <div className='bannerHome'>
            <div className='bannerLeftSide'>
                <div className='leftTitle'>
                    <span className='head1'>Распродажа инструментов</span>
                    <span className='title1'>«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой</span>
                </div>
                <div className='buttonWrapper'>
                    <ButtonStandart title={'Подробнее'}/>
                </div>
            </div>

            <div className='bannerRightSide'>
                <div
                    onMouseEnter={() => setIsWhiteColorLeft(true)}
                    onMouseLeave={() => setIsWhiteColorLeft(false)}
                    className='arrowLeft'>
                    <IconArrowLeft isWhiteColor={isWhiteColorLeft}/>
                </div>
                <div
                    onMouseEnter={() => setIsWhiteColorRight(true)}
                    onMouseLeave={() => setIsWhiteColorRight(false)}
                    className='arrowRight'>
                    <IconArrowRight isWhiteColor={isWhiteColorRight}/>
                </div>
            </div>

        </div>
    );
}
