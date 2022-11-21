import axios from 'axios'
// import { destroyCookie, parseCookies } from 'nookies';

// const { [Keys.TOKEN]: token } = parseCookies(ctx);
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `${token}`,
  },
})
