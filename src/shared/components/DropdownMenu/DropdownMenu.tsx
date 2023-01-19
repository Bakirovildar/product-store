import React from 'react';
import './dropdownmenu.css';
import {ButtonComponent} from "../ButtonComponent";
import {ButtonProfile} from "../ButtonProfile";
import {IconProfile} from "../../../assests/icons/IconProfile";
import {IconOrder} from "../../../assests/icons/IconOrder";
import {LocationInfo} from "../../content/HeaderSite/HeaderDesktop/HeaderInfo/LocationInfo";

export function DropdownMenu() {
  return (
      <div className='dropdownMenu'>
          <ButtonComponent title='Каталог' />
          <ButtonProfile title={'Профиль'} icon={<IconProfile/>}/>
          <ButtonProfile title={'Заказы'} icon={<IconOrder/>}/>
          <div className='dropdownCity'>
              <LocationInfo city={'Москва'}/>
          </div>
          
      </div>
  );
}
