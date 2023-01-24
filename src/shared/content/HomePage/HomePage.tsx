import React from 'react';
import './homepage.css';
import {BannerHome} from "./BannerHome";
import {CategoryWrapper} from "../../components/CategoryWrapper";

export function HomePage() {
    return (
        <>
            <BannerHome/>
            <CategoryWrapper
                headerTitle='Акции'
                buttonTitle='Все акции'
            />
        </>
    );
}
