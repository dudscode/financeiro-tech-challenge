'use client'
import { useEffect } from 'react'

import BaseHome from '@/templates/BaseHome'

type User = {
  id: number
  name: string
}

export default function Home() {
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('/api/users')
        if (!res.ok) {
          throw new Error('Failed to fetch users')
        }
        const data: User[] = await res.json()
        console.log('data: ', data)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    getUsers()
  }, [])

  return (
    <BaseHome>
      <p>OI</p>
    </BaseHome>
  )
}
