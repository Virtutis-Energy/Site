import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ou URL da sua API Django
  withCredentials: true,
})

export default api
