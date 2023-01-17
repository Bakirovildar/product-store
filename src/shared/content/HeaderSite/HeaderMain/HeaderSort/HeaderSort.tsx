import React from 'react'
import './headersort.css'

export function HeaderSort() {

    const sortItems = [
        {id: 1, title: 'Акции'},
        {id: 2, title: 'Строительные материалы'},
        {id: 3, title: 'Керамическая плитка'},
        {id: 4, title: 'Краски'},
        {id: 5, title: 'Сантехника'},
        {id: 6, title: 'Напольные покрытия'},
        {id: 7, title: 'Инструменты'},
        {id: 8, title: 'Обои'},
        {id: 9, title: 'Окна'},
    ]

    return (
        <div className='headerSort'>
            {sortItems.map(item => <span key={item.id}>{item.title}</span>)}
        </div>
    )
}
