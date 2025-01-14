import { NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { TransactionType } from '@/config/transactions'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'
interface ExtratoItem {
  id: string
  mes: string
  data: string
  tipo: 'Transferência' | 'Depósito'
  valor: number
}

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'ok' })
}

export async function GET(req: NextApiRequest) {
  try {
    const page = req.query.page || 1

    const response = await axios.get(`${API_URL}/extrato?_page=${page}`)

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const extrato: ExtratoItem = await req.json()
    const response = await axios.post(`${API_URL}/extrato`, extrato)

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error creating extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const extrato: { item: ExtratoItem } = await req.json()

    if (extrato.item.tipo === 'Transferência') {
      extrato.item.valor = -Math.abs(extrato.item.valor)
    } else if (extrato.item.tipo === 'Depósito') {
      extrato.item.valor = Math.abs(extrato.item.valor)
    }

    const response = await axios.patch(`${API_URL}/extrato/${extrato.item.id}`, extrato.item)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error updating extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const extrato: { id: string } = await req.json()
    const response = await axios.delete(`${API_URL}/extrato/${extrato.id}`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error deleting extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
