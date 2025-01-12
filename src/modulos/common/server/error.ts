import type { NextApiResponse } from 'next'

export const throwMethodNotAllowed = (res: NextApiResponse, method: string | undefined, allowed: string[]) => {
  res.setHeader('Allow', allowed.join(', '))
  throw new Error(`Method ${method} Not Allowed`)
}
