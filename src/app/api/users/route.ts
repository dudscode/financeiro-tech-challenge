import { NextResponse, NextRequest } from 'next/server'
import axios from 'axios'

type ParamsProps = {
  email: string
  password: string
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email') || ''
  const password = request.nextUrl.searchParams.get('password') || ''
  try {
    const response = await axios.get(`http://localhost:3001/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
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
