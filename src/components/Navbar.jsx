import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span className="navbar__logo">✦</span>
          <span className="navbar__name">Techborg</span>
        </div>
        <div className="navbar__links">
          <a href="#products">Products</a>
        </div>
      </div>
    </nav>
  )
}
