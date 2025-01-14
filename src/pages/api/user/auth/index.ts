import { NextApiRequest, NextApiResponse } from 'next'
import { throwMethodNotAllowed } from '@/modulos/common/server/error'
import axios from 'axios'
import { API_URL } from '@/modulos/common/server/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    switch (method) {
      case 'POST':
        await POST(req, res)
        break
      default:
        throwMethodNotAllowed(res, method, ['POST'])
    }
  } catch (error: any) {
    res.status(400).json({
      error: {
        message: error.message
      }
    })
  }
}
export function POST(_req: NextApiRequest, res: NextApiResponse<{ result?: any; status?: string; message?: string }>) {
  const body = _req.body

  Promise.all([
    axios.get(`${API_URL}/user?email=${body.email}&password=${body.password}`),
    axios.get(`${API_URL}/auth`)
  ])
    .then(([user, auth]) => {
      if (user.data.length === 0) {
        throw new Error('Usuário não encontrado.')
      }
      res.status(200).json({
        message: 'Usuário autenticado com sucesso.',
        result: {
          user: user.data[0],
          token: auth.data[0].token
        }
      })
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    })
}
