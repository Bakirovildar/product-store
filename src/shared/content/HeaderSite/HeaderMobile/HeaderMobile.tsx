import React, {useState} from 'react';
import './headermobile.css';
import {IconBurger} from "../../../../assests/icons/IconBurger";
import {IconLogo} from "../../../../assests/icons/IconLogo";
import {IconBasket} from "../../../../assests/icons/IconBasket";
import {SearchComponent} from "../../../components/SearchComponent";
import {IconClose} from "../../../../assests/icons/IconClose";
import {DropdownMenu} from "../../../components/DropdownMenu";

export function HeaderMobile() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const clickBurger = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='headerMobileWrapper'>
            <div className='headerMobile'>
                {!isOpen
                    ? <IconBurger clickBurger={clickBurger} isWhiteColor={false}/>
                    : <IconClose clickBurger={clickBurger} />
                }
                <div className='headerMobileLogo'><IconLogo/><span>StroykaStore</span></div>
                <IconBasket/>
            </div>
            <SearchComponent/>
            {isOpen && <DropdownMenu/> }
        </div>
    );
}
