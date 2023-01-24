import React, {useState} from 'react';
import './buttonreview.css';
import {ICategoryWrapper} from "../../../../types/interface";
import {IconArrowRight} from "../../../../assests/icons/IconArrowRight";

export function ButtonReview({buttonTitle}: ICategoryWrapper) {
    const [isWhiteColorRight, setIsWhiteColorRight] = useState(false)

  return (
      <button
          onMouseEnter={() => setIsWhiteColorRight(true)}
          onMouseLeave={() => setIsWhiteColorRight(false)}
          className='buttonReview'>
        <span>{buttonTitle}</span>
          <IconArrowRight isWhiteColor={isWhiteColorRight}/>
      </button>
  );
}
