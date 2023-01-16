import React from 'react';
import './headersite.css';
import {HeaderInfo} from "./HeaderInfo";
import {HeaderMain} from "./HeaderMain";

export function HeaderSite() {
  return (
      <header className='headerContainer'>
          <HeaderInfo/>
          <HeaderMain/>
      </header>
  );
}
