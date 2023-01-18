import React from 'react';
import {IIconBurger} from "../../../types/interface";

export function IconClose({clickBurger}: IIconBurger) {
  return (
      <svg
          onClick={clickBurger}
          xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <line x1="16.9476" y1="1.59835" x2="2.09835" y2="16.4476" stroke="#2F323A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="1" y1="-1" x2="22" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.3159 17.8159)" stroke="#2F323A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
  )
}
