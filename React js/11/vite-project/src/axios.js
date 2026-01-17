import axios from 'axios'

const api = axios.create({
  baseURL: 'https://car-booking-backend-9upt.vercel.app/api',
})

export default api