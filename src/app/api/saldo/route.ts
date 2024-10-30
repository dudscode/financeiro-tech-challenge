import { NextResponse} from 'next/server'
import axios from 'axios'

export async function GET() {
    try {
      const response = await axios.get(`http://localhost:3001/saldo`)
      return NextResponse.json(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error)
      return NextResponse.json({ error: (error as Error).message }, { status: 500 })
    }
}

export async function PUT(req: Request) {
  try {
    const saldo = await req.json();
    const response = await axios.put(`http://localhost:3001/saldo/1`, saldo)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error updating saldo data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

