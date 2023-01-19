import React from 'react'
import './headersort.css'
import {sortItems} from "../../../../../helpers/sortItems";

export function HeaderSort() {
    return (
        <div className='headerSort'>
            {sortItems.map(item => <span key={item.id}>{item.title}</span>)}
        </div>
    )
}
