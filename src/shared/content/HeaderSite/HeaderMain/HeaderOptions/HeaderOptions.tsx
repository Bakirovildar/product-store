import React from 'react'
import './headeroptions.css'
import {ButtonComponent} from "../../../../components/ButtonComponent";
import {SearchComponent} from "../../../../components/SearchComponent";

export function HeaderOptions() {

  return (
      <div className='headerOptions'>
          <ButtonComponent title={'Каталог'}/>
          <SearchComponent />
      </div>
  )
}
