import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { features } from '../data/features'

export default function FeaturePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const feature = features.find((f) => f.id === id)

  if (!feature) {
    return (
      <div className="feature-page feature-page--notfound">
        <p>Feature not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  return (
    <div className="feature-page">
      <div className="feature-page__inner">
        <button className="feature-page__back" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="feature-page__hero">
          <span className="feature-page__icon">{feature.icon}</span>
          <div>
            <p className="feature-page__tagline">{feature.tagline}</p>
            <h1 className="feature-page__title">{feature.title}</h1>
          </div>
        </div>
        <p className="feature-page__desc">{feature.desc}</p>
        <div className="feature-page__details">
          <h2>Key Applications</h2>
          <ul>
            {feature.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="feature-page__others">
          <h2>Explore More</h2>
          <div className="feature-page__others-grid">
            {features.filter((f) => f.id !== id).map((f) => (
              <Link to={`/features/${f.id}`} key={f.id} className="feature-pill">
                <span>{f.icon}</span> {f.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
