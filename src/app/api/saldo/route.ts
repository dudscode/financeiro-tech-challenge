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