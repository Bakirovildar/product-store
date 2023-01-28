import React from 'react';
import './homepage.css';
import {BannerHome} from "./BannerHome";
import {CategoryWrapper} from "../../components/CategoryWrapper";
import {CardComponent} from "../../components/CardComponent";
import {products} from '../../../helpers/products'

export function HomePage() {
    return (
        <>
            <BannerHome/>
            <CategoryWrapper
                headerTitle='Акции'
                buttonTitle='Все акции'
                categoriesNode={products.map(
                    ({img, title, sale, newPrice, oldPrice}) =>
                        <CardComponent img={img} newPrice={newPrice} title={title} oldPrice={oldPrice} sale={sale}/>
                    )}
            />
        </>
    );
}
