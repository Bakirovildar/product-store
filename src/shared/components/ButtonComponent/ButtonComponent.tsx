import React, {useState} from 'react';
import './buttoncomponent.css';
import {IconBurger} from "../../../assests/icons/IconBurger";
import {IButton} from "../../../types/interface";

export function ButtonComponent({title}: IButton) {
  const [isWhiteColor, setIsWhiteColor] = useState(false)

  return (
      <button
          onMouseEnter={() => setIsWhiteColor(true)}
          onMouseLeave={() => setIsWhiteColor(false)}
          className='buttonComponent'
      >
        <IconBurger isWhiteColor={isWhiteColor}/>
        <span>{title}</span>
      </button>
  );
}
