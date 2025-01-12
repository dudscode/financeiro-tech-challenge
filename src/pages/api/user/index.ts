import { NextApiRequest, NextApiResponse } from 'next'
import { throwMethodNotAllowed } from '@/modulos/common/server/error'
import Api from '@/modulos/common/server/api'

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

  Api.post(`/user`, { ...body })
    .then(data => {
      console.log('data: ', data)
      res.status(201).json({
        result: { ...data.data },
        message: 'Usuário criado com sucesso.'
      })
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    })
}
