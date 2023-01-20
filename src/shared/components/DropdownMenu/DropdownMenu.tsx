import React from 'react';
import './dropdownmenu.css';
import {ButtonComponent} from "../buttons/ButtonComponent";
import {ButtonProfile} from "../buttons/ButtonProfile";
import {IconProfile} from "../../../assests/icons/IconProfile";
import {IconOrder} from "../../../assests/icons/IconOrder";
import {LocationInfo} from "../../content/HeaderSite/HeaderDesktop/HeaderInfo/LocationInfo";
import {arrOrders, items} from "../../../helpers/items";

export function DropdownMenu() {
  return (
      <div className='dropdownMenu'>
          <ButtonComponent title='Каталог' />
          <ButtonProfile title={'Профиль'} icon={<IconProfile/>}/>
          <ButtonProfile title={'Заказы'} icon={<IconOrder/>}/>
          <div className='dropdownCity'>
              <LocationInfo city={'Москва'}/>
          </div>
          <div className='sortMobile'>
              {items.map(item => <span key={item.id}>{item.title}</span>)}
          </div>
          <div className='sortMobile'>
              {arrOrders.map(item => <span key={item.id}>{item.title}</span>)}
          </div>
      </div>
  );
}
