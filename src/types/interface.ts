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

export interface IWhiteColor {
    isWhiteColor: boolean
}

export interface IButton {
    title: string
}
