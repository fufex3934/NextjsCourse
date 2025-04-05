import React from 'react'
import type { Metadata } from 'next'

export const metadata:Metadata = {
    title:'My Blog',
    description:"My blog description",
}
export default function BlogLayout({
    children,
    team,
    analytics,
  }: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
  }) {
  return (
    <div>
        <h1>Blog Layout</h1>
        {children}
        {team}
        {analytics}
    </div>
  )
}
