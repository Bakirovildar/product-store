import React from 'react';
import {IWhiteColor} from "../../../types/interface";

export function IconBurger({isWhiteColor}: IWhiteColor) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M4.5 18L14.5 18" stroke={isWhiteColor ? "#fff" : "#2F323A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.5 12L20.5 12" stroke={isWhiteColor ? "#fff" : "#2F323A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.5 6L10.5 6" stroke={isWhiteColor ? "#fff" : "#2F323A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  )
}
