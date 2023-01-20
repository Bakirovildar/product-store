import React from 'react';
import './buttonstandart.css';
import {IButton} from "../../../../types/interface";

export function ButtonStandart({title}: IButton) {

    return (
        <button
            className='buttonComponent'
        >
            <span>{title}</span>
        </button>
    );
}
