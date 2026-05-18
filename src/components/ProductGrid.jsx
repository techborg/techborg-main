import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return (
    <section className="grid-section" id="products">
      <div className="grid-section__grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
