import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import FeaturesSection from './components/FeaturesSection'
import FeaturePage from './pages/FeaturePage'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <FeaturesSection />
              <ProductGrid products={products} />
            </>
          } />
          <Route path="/features/:id" element={<FeaturePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
