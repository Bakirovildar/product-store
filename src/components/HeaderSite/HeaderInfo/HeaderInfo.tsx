import React from 'react';
import './headerinfo.css';
import {LocationInfo} from "./LocationInfo";
import {NavInfo} from "./NavInfo";

export function HeaderInfo() {
    const arr = [
        {title: 'adawd', id: 2},
        {title: 'adawdqwdwq', id: 3},
        {title: 'adaswww', id: 4},
    ]

  return (
      <div className='infoContainer'>
          <LocationInfo city={'Москва'}/>
          <NavInfo navTitle={arr}/>
      </div>
  );
}
