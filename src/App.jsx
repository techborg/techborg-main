import React from 'react'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  )
}
