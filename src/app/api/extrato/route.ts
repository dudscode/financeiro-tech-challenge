import { NextResponse, NextRequest } from 'next/server'
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
    const extrato = await req.json();
    console.log('post:',extrato)
    const response = await axios.post(`http://localhost:3001/extrato/`, extrato)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error create extrato data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
