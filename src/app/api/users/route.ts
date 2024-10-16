import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://json-server-vercel-tawny-one.vercel.app/users')
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
