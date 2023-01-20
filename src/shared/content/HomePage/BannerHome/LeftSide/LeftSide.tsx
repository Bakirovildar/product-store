import React from 'react';
import './leftside.css';
import {ButtonStandart} from "../../../../components/buttons/ButtonStandart";
import {IBackgroundBanner} from "../../../../../types/interface";

export function LeftSide({id, title, text}: IBackgroundBanner) {
  return (
      <div className='bannerLeftSide'>
          <div className='leftTitle'>
              <span className='head1'>{title}</span>
              <span className='title1'>{text}</span>
          </div>
          <div className='buttonWrapper'>
              <ButtonStandart title={'Подробнее'}/>
          </div>
      </div>
  );
}
