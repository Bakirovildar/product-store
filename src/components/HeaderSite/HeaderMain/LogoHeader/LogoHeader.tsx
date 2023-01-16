import React from 'react';
import './logoheader.css';
import {IconLogo} from "../../../../assests/icons/IconLogo";

export function LogoHeader() {
  return (
      <div className='logoHeader'>
        <IconLogo/>
        <span>StroykaStore</span>
      </div>
  );
}
