import { NextResponse } from 'next/server'
import axios from 'axios'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://json-server-vercel-tawny-one.vercel.app' || 'http://localhost:3001'

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/saldo`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const saldo = await req.json()
    const response = await axios.put(`${API_URL}/saldo/1`, saldo)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error updating saldo data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
