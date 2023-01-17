import React from 'react';
import './navinfo.css';
import {IInfoItem, INavInfo} from "../../../../types/interface";

export function NavInfo({navTitle}: INavInfo) {
  return (
      <div className='navInfo'>
          {navTitle.map(({title, id}: IInfoItem)=> <span key={id}>{title}</span>)}
      </div>
  );
}
