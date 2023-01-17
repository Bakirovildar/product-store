import React from 'react'
import './headeroptions.css'
import {ButtonComponent} from "../../../../components/ButtonComponent";
import {SearchComponent} from "../../../../components/SearchComponent";
import {HeaderMainNav} from "../../../../components/HeaderMainNav";
import {IconProfile} from "../../../../../assests/icons/IconProfile";
import {IconOrder} from "../../../../../assests/icons/IconOrder";
import {IconBasket} from "../../../../../assests/icons/IconBasket";

export function HeaderOptions() {

  return (
      <div className='headerOptions'>
          <ButtonComponent title={'Каталог'}/>
          <div className='optionSearch'><SearchComponent /></div>
          <HeaderMainNav title={'Профиль'} icon={<IconProfile />} />
          <HeaderMainNav title={'Заказы'} icon={<IconOrder />} />
          <HeaderMainNav title={'Корзина'} icon={<IconBasket />} />
      </div>
  )
}
