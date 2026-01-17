// src/api/car.api.js
import api from './axios'

export const getUsedCars = async () => {
  const res = await api.get('/cars/used')
  return res.data.data   // ✅ only return cars array
}
