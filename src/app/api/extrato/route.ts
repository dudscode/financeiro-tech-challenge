import { NextResponse } from 'next/server'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://json-server-vercel-tawny-one.vercel.app'

export async function GET() {
  try {
    const response = await axios.get(`${API_URL}/extrato`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.post(`${API_URL}/extrato/`, extrato)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error creating extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.patch(`${API_URL}/extrato/${extrato.item.id}`, extrato.item)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error updating extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.delete(`${API_URL}/extrato/${extrato.id}`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error deleting extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
