import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import { features } from '../data/features'

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-section__inner">
        <div className="features-section__image">
          <img src={heroImg} alt="Tech Robot" />
        </div>
        <div className="features-section__grid">
          {features.map((f) => (
            <Link to={`/features/${f.id}`} key={f.id} className="feature-card">
              <span className="feature-card__icon">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
