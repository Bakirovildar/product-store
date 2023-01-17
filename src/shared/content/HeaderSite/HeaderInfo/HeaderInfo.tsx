import React from 'react';
import './headerinfo.css';
import {LocationInfo} from "./LocationInfo";
import {NavInfo} from "./NavInfo";

export function HeaderInfo() {
    const arr = [
        {title: 'Бренды', id: 2},
        {title: 'Доставка', id: 3},
        {title: 'Возврат', id: 4},
        {title: 'Документация', id: 5},
        {title: 'Контакты', id: 6},
    ]

  return (
      <div className='infoContainer'>
          <LocationInfo city={'Москва'}/>
          <NavInfo navTitle={arr}/>
      </div>
  );
}
