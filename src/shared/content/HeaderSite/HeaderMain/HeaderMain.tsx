import React from 'react';
import './headermain.css';
import {LogoHeader} from "./LogoHeader";
import {HeaderOptions} from "./HeaderOptions";

export function HeaderMain() {
  return (
      <div className='headerMain'>
          <LogoHeader />
          <HeaderOptions />
      </div>
  );
}
