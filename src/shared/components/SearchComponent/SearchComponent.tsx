import React, {useState} from 'react';
import './searchcomponent.css';

export function SearchComponent() {
    const [value, setValue]: any = useState('')

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <input
            type="text"
            className='serachComponent'
            placeholder='Поиск'
            onChange={(event) => changeValue(event)}
            value={value}
        />
    );
}
