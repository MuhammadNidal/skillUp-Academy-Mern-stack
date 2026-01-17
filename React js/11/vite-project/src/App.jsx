// src/pages/UsedCars.jsx
import { useUsedCars } from './hooks/useUsedCars'
import CarCard from './CarCard'

function UsedCars() {
  const { data: cars, isLoading, isError } = useUsedCars()

  if (isLoading) return <p>Loading used cars...</p>
  if (isError) return <p>Failed to load cars</p>

  return (
    <div className="car-grid">
      {cars.map(car => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  )
}

export default UsedCars
