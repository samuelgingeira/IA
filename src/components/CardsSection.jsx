import React from 'react'

const ITEMS = new Array(4).fill(0).map((_,i) => ({
  id: i,
  title: 'Explora la Naturaleza',
  text: 'Descubre cómo cuidar el medio ambiente y conectar con la vida natural.',
  img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60'
}))

export default function CardsSection(){
  return (
    <section className="container section-padding">
      <div className="row g-4">
        {ITEMS.map((item, idx) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-3">
            <div className={`card h-100 shadow-sm ${idx === 0 ? 'border border-3' : ''}`}>
              <img src={item.img} className="card-img-top" alt="planta" />
              <div className="card-body">
                <h5 className="card-title text-success">{item.title}</h5>
                <p className="card-text text-muted">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
