import { NextApiRequest, NextApiResponse } from 'next'
import { throwMethodNotAllowed } from '@/modulos/common/server/error'
import Api from '@/modulos/common/server/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    switch (method) {
      case 'GET':
        await GET(req, res)
        break
      default:
        throwMethodNotAllowed(res, method, ['GET'])
    }
  } catch (error: any) {
    res.status(400).json({
      error: {
        message: error.message
      }
    })
  }
}
export function GET(_req: NextApiRequest, res: NextApiResponse<{ result?: any; status?: string; message?: string }>) {
  Promise.all([Api.get(`/account`), Api.get(`/transactions`), Api.get(`/cards`)])
    .then(([account, transactions, cards]) => {
      res.status(200).json({
        result: { account: account.data, transactions: transactions.data, cards: cards.data },
        message: 'Conta encontrada carregado com sucesso.'
      })
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    })
}
