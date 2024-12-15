import { NextResponse, NextRequest } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'ok' })
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email') || ''
  const password = request.nextUrl.searchParams.get('password') || ''
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    )
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
