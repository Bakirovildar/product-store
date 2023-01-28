import React from 'react';
import './cardcomponent.css';
import {ButtonComponent} from "../buttons/ButtonComponent";
import {ButtonStandart} from "../buttons/ButtonStandart";
import {ICardComponent} from "../../../types/interface";

export function CardComponent({img, sale, title, newPrice, oldPrice}: ICardComponent) {
    return (
        <div className='cardComponent'>
            <div className='cardImg'>
                <img src={img} alt=""/>
                <span className='cardImgSale'>{sale}</span>
            </div>
            <div className='cardFooter'>
                <span className='cardTitle'>{title}</span>
                <div className='cardPrice'>
                    <span className='price'>{newPrice}</span>
                    <span className='oldPrice'>{oldPrice}</span>
                </div>
                <ButtonStandart title='В корзину'/>
            </div>
        </div>
    )
}
