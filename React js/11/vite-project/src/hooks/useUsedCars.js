// src/hooks/useUsedCars.js
import { useQuery } from '@tanstack/react-query'
import { getUsedCars } from './../car.api'

export const useUsedCars = () => {
  return useQuery({
    queryKey: ['used-cars'],
    queryFn: getUsedCars,
  })
}
