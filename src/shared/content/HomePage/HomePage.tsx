import React from 'react';
import './homepage.css';
import {BannerHome} from "./BannerHome";
import {CategoryWrapper} from "../../components/CategoryWrapper";
import {CardComponent} from "../../components/CardComponent";
import {products} from '../../../helpers/products'
import {topProducts} from '../../../helpers/products'
import {CategoryCard} from "../../components/CategoryCard";
import {categories} from "../../../helpers/categories";
import {brands} from "../../../helpers/brands";
import {CardBrand} from "../../components/CardBrand";

export function HomePage() {
    return (
        <>
            <BannerHome/>
            <CategoryWrapper
                headerTitle='Акции'
                buttonTitle='Все акции'
                categoriesNode={products.map(
                    ({img, title, sale, newPrice, oldPrice, id}) =>
                        <CardComponent img={img} price={newPrice} title={title} oldPrice={oldPrice} sale={sale} key={id}/>
                    )}
            />
            <CategoryWrapper
                headerTitle='Популярные категории'
                buttonTitle='Все категории'
                categoriesNode={categories.map(
                    ({img, title, id}) =>
                        <CategoryCard img={img} title={title} key={id}/>
                )}
            />
            <CategoryWrapper
                headerTitle='Популярные товары'
                categoriesNode={topProducts.map(
                    ({img, title, price, id}) =>
                        <CardComponent img={img} price={price} title={title} isColumnCard={true} key={id}/>
                    )}
            />
            <CategoryWrapper
                headerTitle='Бренды'
                buttonTitle='Все бренды'
                categoriesNode={brands.map(
                    ({img, id}) =>
                        <CardBrand img={img} key={id}/>
                    )}
            />
        </>
    );
}
