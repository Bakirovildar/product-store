import React from 'react';
import './leftside.css';
import {ButtonStandart} from "../../../../components/buttons/ButtonStandart";

export function LeftSide() {
  return (
      <div className='bannerLeftSide'>
          <div className='leftTitle'>
              <span className='head1'>Распродажа инструментов</span>
              <span className='title1'>«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой</span>
          </div>
          <div className='buttonWrapper'>
              <ButtonStandart title={'Подробнее'}/>
          </div>
      </div>
  );
}
