import React from 'react';
import './HeaderMainNav.css';
import {IHeaderMainNav} from "../../../types/interface";

export function HeaderMainNav({icon, title}: IHeaderMainNav) {
  return (
      <div className='headerMainNav'>
          {icon}
          <span>{title}</span>
      </div>
  );
}
