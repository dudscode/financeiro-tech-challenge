import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('http://localhost:3001/users')
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const user = await req.json()
    const response = await axios.put(`http://localhost:3001/users/${user.id}`, user)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error updating user data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
