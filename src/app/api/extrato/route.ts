import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get(`http://localhost:3001/extrato`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.post(`http://localhost:3001/extrato/`, extrato)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error create extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.patch(`http://localhost:3001/extrato/${extrato.item.id}`, extrato.item)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error create extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const extrato = await req.json()
    const response = await axios.delete(`http://localhost:3001/extrato/${extrato.id}`)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error create extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
