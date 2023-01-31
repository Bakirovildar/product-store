import React from 'react';
import './categorywrapper.css';
import {ButtonReview} from "../buttons/ButtonReview";
import {ICategoryWrapper} from "../../../types/interface";

export function CategoryWrapper({headerTitle, buttonTitle, categoriesNode}: ICategoryWrapper) {
    return (
        <div className='categoryWrapper'>
            <div className='categoryHeader'>
                <span className='headerTitle'>{headerTitle}</span>
                {
                    buttonTitle &&
                    <div className='buttonDesktop'>
                        <ButtonReview buttonTitle={buttonTitle}/>
                    </div>
                }
            </div>
            <div className='wrapperContainer'>{categoriesNode}</div>
            {
                buttonTitle &&
                <div className='buttonMobile'>
                    <ButtonReview buttonTitle={buttonTitle}/>
                </div>
            }
        </div>
    )
}
