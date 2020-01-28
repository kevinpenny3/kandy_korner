import React from "react"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"


export default () => (
    <>
    <h2>Kandy Korner Locations</h2>
    <LocationProvider>
        <LocationList/>
    </LocationProvider>

    <h2>Kandy Korner Products</h2>
    <ProductProvider>
        <ProductList/>
    </ProductProvider>

    </>
)