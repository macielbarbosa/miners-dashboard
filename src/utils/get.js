import { NOCORS_HOST } from './constants'

export const get = async (url, options = { noCors: true }) => {
  const prefix = options.noCors ? NOCORS_HOST + '/' : ''
  const response = await fetch(`${prefix}${url}`)
  return response.json()
}
