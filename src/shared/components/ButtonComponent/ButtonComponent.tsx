import React, {useState} from 'react';
import './buttoncomponent.css';
import {IconBurger} from "../../../assests/icons/IconBurger";

export function ButtonComponent() {
  const [isWhiteColor, setIsWhiteColor] = useState(false)

  return (
      <button
          onMouseEnter={() => setIsWhiteColor(true)}
          onMouseLeave={() => setIsWhiteColor(false)}
          className='buttonComponent'
      >
        <IconBurger isWhiteColor={isWhiteColor}/>
        <span>Каталог</span>
      </button>
  );
}
