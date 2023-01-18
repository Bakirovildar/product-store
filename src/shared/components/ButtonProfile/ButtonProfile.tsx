import React from 'react';
import './buttonprofile.css';
import {IButtonProfile} from "../../../types/interface";

export function ButtonProfile({title, icon}: IButtonProfile) {

    return (
        <button className='buttonProfile'>
            {icon}
            <span>{title}</span>
        </button>
    );
}
