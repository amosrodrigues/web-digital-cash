import axios from 'axios'
import { parseCookies } from 'nookies'
import { Keys } from '../constants'

// function setupAPIClient() {
//   const { [Keys.TOKEN]: token } = parseCookies()

//   return api
// }

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
})

// export const api = setupAPIClient()
