// src/components/CarCard.jsx
function CarCard({ car }) {
  const image = car.images?.[0]?.url || '/no-image.png'

  return (
    <div className="car-card">
      <img src={image} alt={car.brand} />

      <h3>
        {car.brand} {car.model}
      </h3>

      <p className="year">Year: {car.year}</p>

      <p className="price">${car.price}</p>

      <p className="meta">
        {car.city} • {car.condition}
      </p>
    </div>
  )
}

export default CarCard
