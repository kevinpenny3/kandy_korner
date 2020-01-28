import React from "react"

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.product}</h3>
        <p className="product__type">{product.productTypeId}</p>
    </section>
)