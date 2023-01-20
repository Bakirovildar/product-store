import React from "react";
import img1 from "../assests/img/bg1.png";

export interface ILocationCity {
    city: string
}

export interface INavInfo {
    navTitle: Array<IInfoItem>
}

export interface IInfoItem {
    title: string
    id: number
}

export interface IIconBurger {
    isWhiteColor?: boolean
    clickBurger?: () => void
}

export interface IButton {
    title: string
}

export interface IButtonProfile {
    title: string
    icon: React.ReactNode
}

export  interface IHeaderMainNav {
    title: string
    icon: React.ReactNode
}

export  interface IBackgroundBanner {
    id?: number
    title?: string
    text?: string
    img?: string
}

export  interface IRightSide {
    clickRightHandler: () => void
    clickLeftHandler: () => void
}
