import React from 'react';
import './cardbrand.css';
import {ICardBrand} from "../../../types/interface";

export function CardBrand({img}: ICardBrand) {
    return (
        <div className='cardBrand'>
            <img src={img} alt=""/>
        </div>
    )
}
