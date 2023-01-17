import React from 'react';
import './locationinfo.css';
import {IconLocation} from "../../../../assests/icons/IconLocation";
import {ILocationCity} from "../../../../types/interface";

export function LocationInfo({city}: ILocationCity) {
  return (
      <div className='cityInfo'>
        <IconLocation />
        <span>{city}</span>
      </div>
  );
}
