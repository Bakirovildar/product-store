import React from "react";

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
