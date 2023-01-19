import React from 'react'
import './headersort.css'
import {items} from "../../../../../helpers/items";

export function HeaderSort() {
    return (
        <div className='headerSort'>
            {items.map(item => <span key={item.id}>{item.title}</span>)}
        </div>
    )
}
