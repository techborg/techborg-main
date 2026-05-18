import React from 'react'

export default function ProductCard({ product }) {
  const { name, tagline, description, url, logo, color, tags, rating, users, category } = product

  return (
    <article className="card" style={{ '--accent': color }}>
      <div className="card__header">
        <div className="card__logo" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
          <span>{logo}</span>
        </div>
        <div className="card__meta">
          <span className="card__category">{category}</span>
          <div className="card__rating">
            
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__tagline">{tagline}</p>
        <p className="card__desc">{description}</p>
      </div>

      <div className="card__tags">
        {tags.map(tag => (
          <span key={tag} className="card__tag">{tag}</span>
        ))}
      </div>

      <div className="card__footer">
        
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="card__btn"
          style={{ background: color }}
        >
          Visit →
        </a>
      </div>
    </article>
  )
}
