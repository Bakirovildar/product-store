import React from 'react';
import './categorycard.css';
import {ICategoryCard} from "../../../types/interface";

export function CategoryCard({title, img, id}: ICategoryCard) {
    return (
        <div className='categoryCard'>
            <div className='categoryCardTitle'>{title}</div>
            <div>
                <img src={img} alt=""/>
            </div>
        </div>
    )
}
