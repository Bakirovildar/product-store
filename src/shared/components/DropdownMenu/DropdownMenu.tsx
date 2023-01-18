import React from 'react';
import './dropdownmenu.css';
import {ButtonComponent} from "../ButtonComponent";
import {ButtonProfile} from "../ButtonProfile";
import {IconProfile} from "../../../assests/icons/IconProfile";

export function DropdownMenu() {
  return (
      <div className='dropdownMenu'>
          <ButtonComponent title='Каталог' />
          <ButtonProfile title={'Профиль'} icon={<IconProfile/>}/>
      </div>
  );
}
