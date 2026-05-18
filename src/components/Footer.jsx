import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo">✦</span>
          <span className="navbar__name">Techborg</span>
          <p>Curating the best web products for modern teams.</p>
        </div>
        <div className="footer__links">
          <h4>Categories</h4>
          <a href="https://learn.techborg.in">Learn</a>
        </div>
        <div className="footer__links">
          <h4>About</h4>
          <a href="#about">Our Mission</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Techborg. Built with Love.</p>
      </div>
    </footer>
  )
}
