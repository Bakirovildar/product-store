import React, {useState} from 'react';
import './rightside.css';
import {IconArrowLeft} from "../../../../../assests/icons/IconArrowLeft";
import {IconArrowRight} from "../../../../../assests/icons/IconArrowRight";
import {IRightSide} from "../../../../../types/interface";

export function RightSide({clickRightHandler, clickLeftHandler}: IRightSide) {
  const [isWhiteColorLeft, setIsWhiteColorLeft] = useState(false)
  const [isWhiteColorRight, setIsWhiteColorRight] = useState(false)

  return (
      <div className='bannerRightSide'>
        <div
            onMouseEnter={() => setIsWhiteColorLeft(true)}
            onMouseLeave={() => setIsWhiteColorLeft(false)}
            onClick={clickLeftHandler}
            className='arrowLeft'>
          <IconArrowLeft isWhiteColor={isWhiteColorLeft}/>
        </div>
        <div
            onMouseEnter={() => setIsWhiteColorRight(true)}
            onMouseLeave={() => setIsWhiteColorRight(false)}
            onClick={clickRightHandler}
            className='arrowRight'>
          <IconArrowRight isWhiteColor={isWhiteColorRight}/>
        </div>
      </div>
  );
}
